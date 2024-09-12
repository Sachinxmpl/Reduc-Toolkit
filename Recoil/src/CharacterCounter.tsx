import { useRecoilState } from "recoil";
import { textState } from "./atom/test1";

export function CharacterCounter() {
        const [text, setText] = useRecoilState(textState);
        return (
                <div>
                        <input
                                type="text"
                                value={text}
                                onChange={(e) => {
                                        setText(e.target.value);
                                }}
                        />
                        {
                                text
                        }
                </div>
        );
}
