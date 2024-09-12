import { useRecoilState, useRecoilValue } from "recoil";
import { textState ,  countState } from "./atom/test1";
import { jointwo, charactercounter } from "./selector/test";

export function CharacterCounter() {
        const [text, setText] = useRecoilState(textState);
        const count  = useRecoilValue(countState)
        const charactercount = useRecoilValue(charactercounter)
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

                        <p>{count}</p>
                        <p> CHaracter count : {charactercount}</p>
                </div>
        );
}
