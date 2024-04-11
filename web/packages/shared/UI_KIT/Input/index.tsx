import React from 'react';
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import Text from "./Text";
import Password from "./Password";
import Email from "./Email";
import Phone from "./Phone";
import File from "./File";
import Time from "./Time";
import Date from "./Date";

interface IProps {
    callback: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    label: string,
    placeholder: string,
    type: "checkbox" | "textarea" | "text" | "password" | "email" | "phone" | "file" | "time" | "date",
    rows: number,
    value: any,
}

const InputUI : React.FC<IProps> = React.memo ( ({callback,label,placeholder,type,value,rows}) => {
        switch (type){
            case "checkbox":
                return (<Checkbox callback={callback} label={label}  value={value}/>);
            case "textarea":
                return (<Textarea callback={callback} label={label} value={value} placeholder={placeholder} rows={rows}/>);
            case "text":
                return (<Text callback={callback} label={label} value={value} placeholder={placeholder} />);
            case "password":
                return (<Password callback={callback} label={label} value={value} placeholder={placeholder}/>);
            case "email":
                return (<Email callback={callback} label={label} value={value} placeholder={placeholder} />);
            case "phone":
                return (<Phone callback={callback} label={label} value={value} placeholder={placeholder} />);
            case "file":
                return (<File  callback={callback} label={label} value={value}/>)
            case "time":
                return (<Time callback={callback} label={label} value={value} placeholder={placeholder}/>);
            case "date":
                return (<Date callback={callback} label={label} value={value} placeholder={placeholder}/>);
        }
});

export default InputUI;