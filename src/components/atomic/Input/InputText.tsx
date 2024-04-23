import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";

interface Props {
  title: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isInvalid?: boolean;
  viewEyeIcon?: boolean;
  togglePasswordVisibility?: () => void;
  eyeIcon?: string;
  errorText?: string;
}

const InputText: React.FC<Props> = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  isInvalid,
  viewEyeIcon,
  togglePasswordVisibility,
  eyeIcon,
  errorText,
}) => {
  return (
    <>
      <Form.Group as={Col} md="4">
        <Form.Label>{title}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            isInvalid={isInvalid}
          />

          {viewEyeIcon && (
            <Button onClick={togglePasswordVisibility}>
              <Image
                src={eyeIcon ?? `assets/icons/Eye-visible.svg`}
                width={24}
                height={24}
                alt=""
              />
            </Button>
          )}

          <Form.Control.Feedback type="invalid">
            {errorText}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};
export default InputText;
