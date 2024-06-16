import { useEffect, useState } from "react";

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { notification } from 'antd';

import SoundLoopsCard from "../SoundLoopCard/SoundLoopCard";
import DeleteSoundLoopModal from "./Modals/DeleteSoundLoopModal/DeleteSoundLoopModal";
import CreateSoundLoopModal from "./Modals/CreateSoundLoopModal/CreateSoundLoopModal";
import { SCreateSoundLoopButton, SSoundLoopsList, SCreateSoundLoopCard } from "./styled";
import { checkTemplateNameLength, deleteSoundFromTemplate, deleteTemplate, getUserDataFromToken, updateSoundLoopName } from "../../../utilities/functions";
import EditSoundLoopModal from "./Modals/EditSoundLoopModal/EditSoundLoopModal";


export default function CreateSoundLoopCard() {
    const [ modal, setModal ] = useState(false);
    const [ editModal, setEditModal ] = useState(false);

    const [ data, setData ] = useState(false);
    const [ deleteId, setDeleteId ] = useState(null);
    const [ editId, setEditId ] = useState(null);
    const [ templateId, setTemplateId ] = useState(null);

    const [ templateName, setTemplateName ] = useState(false);
    const [ isTemplateNameEmpty, setIsTemplateNameEmpty ] = useState(false);
    const [ isTemplateNameLengthOk, setIsTemplateNameLengthOk ] = useState(true);

    const [ soundLoopData, setSoundLoopData ] = useState(false)
    const [ soundLoops, setSoundLoops ] = useState(false)

    const [ deleteSoundLoopData, setDeleteSoundLoopData ] = useState([]);
    const [ deleteModalVisible, setDeleteModalVisible ] = useState(false);
    const [ editTemplateData, setEditTemplateData ] = useState(null);

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        const fetchData = async () => {
            const userData = await getUserDataFromToken()
            setData(userData)
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchSoundLoops() {
            const response = await fetch(`http://127.0.0.1:8000/user/${data.id}/soundloops`)
            const soundLoops = await response.json()

            if (response.status !== 404) {
                setSoundLoops(soundLoops)
                return
            }

            setSoundLoops(false)
        }

        fetchSoundLoops()
    }, [soundLoopData, deleteSoundLoopData, data, editTemplateData ])

    useEffect(() => {
        if (modal) document.getElementById('inpName').value = ""
        setTemplateName(false)
    }, [modal])

    useEffect(() => {
        const showToast = localStorage.getItem('showToast');
        if (showToast === 'true') {
            api.success({
                message: 'Success',
                description: 'Sounds have been saved successfully!',
                showProgress: true,
                pauseOnHover: false,
                placement: 'bottomRight',
                duration: 2
            });
            localStorage.removeItem('showToast')
        }
    }, [api]);

    function showModal() {
        setModal(!modal);
    }

    function handleNameChange(e) {
        const { value } = e.target
        setTemplateName(value)
    }

    async function handleSoundLoopCreation() {
        if (!templateName) {
            setIsTemplateNameEmpty(true)
            return
        }

        const checkTemplateNameOk = checkTemplateNameLength(templateName);

        console.log(checkTemplateNameOk);
        if (!checkTemplateNameOk) {
            setIsTemplateNameLengthOk(checkTemplateNameOk);
            return
        }

        setIsTemplateNameLengthOk(checkTemplateNameOk);
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "loop_name": templateName,
                "user_id": data.id
            }),
        }

        const response = await fetch("http://127.0.0.1:8000/user/soundloop", requestOptions)
        const soundLoopOk = await response.json()

        setSoundLoopData(soundLoopOk)

        setModal(false)
        setIsTemplateNameEmpty(false)
    }

    async function handleDelete() {
        await deleteSoundFromTemplate(data.id, deleteId);
        const deleteData = await deleteTemplate(deleteId);
        setDeleteSoundLoopData(deleteData);
        setDeleteModalVisible(false);
    }

    function showDeleteModal(id) {
        setDeleteId(id);
        setDeleteModalVisible(true);
    }

    async function handleSoundLoopNameEdit() {
        if (!templateName) {
            setIsTemplateNameEmpty(true)
            setIsTemplateNameLengthOk(true)
            return
        }

        const checkTemplateNameOk = checkTemplateNameLength(templateName);
        setIsTemplateNameEmpty(false)
        if (!checkTemplateNameOk) {
            setIsTemplateNameLengthOk(checkTemplateNameOk);
            return
        }
        
        setIsTemplateNameLengthOk(checkTemplateNameOk);
        console.log(isTemplateNameLengthOk);
        const editData = await updateSoundLoopName(data.id, templateId, templateName);        

        setEditTemplateData(editData);
        setEditModal(false)
        setIsTemplateNameEmpty(false)
        setTemplateName(false)
    }

    function showEditModal(id) {
        setEditId(id);
        setEditModal(true);
    }

    return (
        <>
            {contextHolder}
            <SSoundLoopsList>
                {
                    soundLoops && soundLoops.map(({ id, name: soundLoopName }) => (
                        <SoundLoopsCard
                            key={id}
                            userId={data.id}
                            soundLoopId={id}
                            name={soundLoopName}
                            setTemplateName={setTemplateName}
                            deleteSoundLoop={() => showDeleteModal(id)}
                            editTemplateButton={() => showEditModal(id)}
                            setTemplateId={setTemplateId}
                        />
                    ))
                }

                <SCreateSoundLoopCard>
                    <SCreateSoundLoopButton onClick={showModal}>
                        <div>Create</div>
                        <ControlPointIcon sx={{ fontSize: 50 }} />
                    </SCreateSoundLoopButton>
                </SCreateSoundLoopCard>
            </SSoundLoopsList>

            <CreateSoundLoopModal
                modal={modal}
                setModal={setModal}
                setIsTemplateNameEmpty={setIsTemplateNameEmpty}
                setIsTemplateNameLengthOk={setIsTemplateNameLengthOk}
                setTemplateName={setTemplateName}
                handleSoundLoopCreation={handleSoundLoopCreation}
                handleNameChange={handleNameChange}
                isTemplateNameEmpty={isTemplateNameEmpty}
                isTemplateNameLengthOk={isTemplateNameLengthOk}
            />

            <DeleteSoundLoopModal
                modal={deleteModalVisible}
                setModal={setDeleteModalVisible}
                handleDelete={handleDelete}
            />
            <EditSoundLoopModal
                modal={editModal}
                setModal={setEditModal}
                setIsTemplateNameEmpty={setIsTemplateNameEmpty}
                setIsTemplateNameLengthOk={setIsTemplateNameLengthOk}
                setTemplateName={setTemplateName}
                handleSoundLoopNameEdit={handleSoundLoopNameEdit}
                handleNameChange={handleNameChange}
                isTemplateNameEmpty={isTemplateNameEmpty}
                isTemplateNameLengthOk={isTemplateNameLengthOk}
                previousName={templateName}
            />
        </>
    )
}