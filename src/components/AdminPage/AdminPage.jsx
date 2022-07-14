import React, { useContext, useState } from "react";
import { Button, Modal, Input, InputNumber, Radio, Select, Form } from "antd";
import { categories } from "../../helpers/categorie";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./AdminPage.css";
import { brands } from "../../helpers/ford";
import { partContext } from "../../partsContext";

const AdminPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { addParts } = useContext(partContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const data = brands;
  const changeCountry = ({ target: { value } }) => {
    setCountry(value);
    setCity("");
  };
  const changeCity = ({ target: { value } }) => setCity(value);

  const onFinish = (values) => {
    console.log("Success:", values);
    values.brand = country;
    values.model = city;
    addParts(values).then(() => handleCancel());
    setCity("");
    setCountry("");
  };

  return (
    <div className="container">
      <div className="admin_inner">
        <div className="admin_inner_block1">
          <button onClick={showModal} className="admin_inner_btn">
            Добавить Товар
          </button>
          <Modal
            title="Добавить Товар"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Form
              labelCol={{
                span: 5,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              onFinish={onFinish}
              autoComplete="off"
            >
              <div className="form__selecting">
                <span className="span-select">*</span>
                <h4 className="form__select-text">Марка:</h4>
                <div className="form-brand" name="brand">
                  <select onChange={changeCountry} value={country}>
                    {!country && <option />}
                    {data.map((c, i) => (
                      <option value={c.value} key={i}>
                        {c.country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form__selecting">
                <span className="span-select">*</span>
                <h4 className="form__select-text form__select-model">
                  Модель:
                </h4>
                <div className="form-brand" name="model">
                  <select onChange={changeCity} value={city}>
                    {!city && <option />}
                    {data.find((c) => c.value === country) &&
                      data
                        .find((c) => c.value === country)
                        .cities.map((c, i) => (
                          <option value={c.value} key={i}>
                            {c.city}
                          </option>
                        ))}
                  </select>
                </div>
              </div>

              <Form.Item
                label="Категория"
                name="category"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле!",
                  },
                ]}
              >
                <Select>
                  {categories.map((category) => (
                    <Select.Option key={category.id} value={category.title}>
                      {category.title}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label="Название"
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Цена"
                name="desc"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле !",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Описание"
                name="price"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="VIN-код"
                name="vincode"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Артикул"
                name="articul"
                rules={[
                  {
                    required: true,
                    message: "Заполните поле!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 9,
                  span: 16,
                }}
              >
                <button
                  className="btn-form-select"
                  type="primary"
                  htmlType="submit "
                >
                  Добавить Товар
                </button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <div className="admin_inner_block2">
          {categories.map((category) => (
            <div className="categories_card-item">
              <img
                onClick={() => navigate(`${category.link}`)}
                className="categories_card-img"
                src={category.img}
                alt=""
              />
              <h3 className="category-item">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
