import React from 'react';
import "./List.module.scss";
import ListGroup from 'react-bootstrap/ListGroup';

interface IProps {
    list: Array<string | React.ReactNode>,
    Numerate:boolean,
    className:string,
}

const ListUI : React.FC<IProps> = ({list,Numerate,className}) => {
    return (
        <ListGroup className={className}>
            {
                list.map((obj: string | React.ReactNode,index:number) => {
                    if(Numerate)
                        return <ListGroup.Item key={index+obj}>{index}: {obj}</ListGroup.Item>
                    else
                        return <ListGroup.Item key={index+obj}>{obj}</ListGroup.Item>
                })
            }
        </ListGroup>
    );
};

export default ListUI;