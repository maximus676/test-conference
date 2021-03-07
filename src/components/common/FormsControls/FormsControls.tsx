import React from "react";
import s from "./FormsControls.module.css";
import {Field, WrappedFieldProps} from "redux-form";
import {FieldValidatorsType} from "../../../utils/validators/validators";
import {WrappedFieldMetaProps} from "redux-form/lib/Field";

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error},children}) => {

    const hasError = touched && error;
    return(
        <div className={s.formControl +" "+ (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span> }
        </div>
    )
}


export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input}  {...restProps} /></FormControl>
}

export const  createField = (placeholder:string | undefined,
                             name:string,
                             validators: Array<FieldValidatorsType>,
                             component: React.FC<WrappedFieldProps>,
                             props = {}, text = "" ) => (
    <div>
        <Field placeholder = {placeholder} name={name}
               validate={validators}
               component={component}
            {...props}
            />{text}
    </div>
)
