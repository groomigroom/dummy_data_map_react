import dummy from "../db/data.json";

export default function Day() {
    return (
        <div>
            <table>
                <tbody>
                    {dummy.words.map(word => (
                        <tr>
                            <td>
                                {word.eng}
                            </td>
                            <td>
                                {word.kor}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );

}