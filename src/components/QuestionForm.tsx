export default function QuestionForm(prop: {question: string, children?: React.ReactNode}) {
    return (
        <div className="w-full min-w-full">
            <p style={{textIndent: '0'}} className="font-bold">{prop.question}</p>
            <div className="flex flex-col">
                {prop.children}
            </div>
        </div>
    );
}
