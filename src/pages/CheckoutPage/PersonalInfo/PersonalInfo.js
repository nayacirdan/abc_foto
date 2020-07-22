import React from 'react';
import FormInput from '../../../components/FormInput/FormInput';

const PersonalInfo = ({errors, touched}) => {
  return (
    <div>
      <div className="block-title">
        <h4 className="big-text">Контактные данные</h4>
        <h6 className="small-text">* Поля, обязательные для заполнения</h6>
      </div>
      <FormInput label="Имя получателя *" type="text" name="name" placeholder="Иван Петрович"/>
      {errors.email && touched.email ? <div className="error-text">{errors.name}</div> : null}
      <FormInput label="Телефон *" type="text" name="phone" placeholder="050 555 55 55"/>
      {errors.phone && touched.phone ? <div className="error-text">{errors.phone}</div> : null}
      <FormInput label="E-mail *" type="email" name="email" placeholder="Ivanov444@gmail.com"/>
      {errors.email && touched.email ? <div className="error-text">{errors.email}</div> : null}
    </div>
  );
};

export default PersonalInfo;
