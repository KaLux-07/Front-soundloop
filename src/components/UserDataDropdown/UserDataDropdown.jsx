import { Button, Dropdown, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import CloseSessionButton from '../CloseSessionButton/CloseSessionButton';
import Cookies from "js-cookie";
import { useAuth } from "../../auth/AuthProvider";
import { SButton } from './styled';

export default function UserDataDropdown({ userName }) {
    const { handleAuthentication, setData } = useAuth();

    const closeSession = () => {
        handleAuthentication()
        setData(false)
        Cookies.remove("token")
    }

    if (!userName) {
        return <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    }

    const items = [
        {
            key: '1',
            label: (<CloseSessionButton closeSession={closeSession}/>)
        }
    ]

    return (
        <Dropdown
            menu={{
                items,
            }}
            placement="bottomRight"
        >
            <SButton>
                {`@${userName}`}
            </SButton>
        </Dropdown>
    )
}