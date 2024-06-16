import { SKeyStyle } from './styled';

export default function KeyStyle ({keyBoardkey}) {
    return (
        <SKeyStyle>
            <div>{String.fromCharCode(keyBoardkey)}</div>
        </SKeyStyle>
    )
}