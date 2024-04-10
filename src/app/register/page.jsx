/** @format */
'use client';
import Header from '@/component/header/Header';
import React, {useRef, useState} from 'react';
import styles from './register.module.scss';
import {Form, Input, Button, Checkbox, Select, Modal} from 'antd';
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';
const formItemLayout = {
   labelCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 6,
      },
   },
   wrapperCol: {
      xs: {
         span: 24,
      },
      sm: {
         span: 14,
      },
   },
};
const onFinish = (values) => {
   console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
   console.log('Failed:', errorInfo);
};
export default function RegisterPage() {
   const paypalButtonRef = useRef();
   const [submit, setSubmit] = useState(true);
   const [openModal, setOpenModal] = useState(false);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const handleRegister = () => {
      setOpenModal(true);
   };
   const handleOk = () => {
      setConfirmLoading(true);
      setTimeout(() => {
         setOpenModal(false);
         setConfirmLoading(false);
      }, 2000);
   };
   const handleCancel = () => {
      setOpenModal(false);
   };
   return (
      <>
         <div className={styles.registerWrap}>
            <Header />
            <div className={styles.container}>
               <div className={styles.form_container}>
                  <h2>Đăng ký thi TOEIC</h2>
                  <p className={styles.note}>Chú ý: Những mục đánh dấu * là bắt buộc thí sinh phải nhập</p>
                  <div className={styles.form_register}>
                     <Form
                        {...formItemLayout}
                        style={{
                           maxWidth: 700,
                           margin: '20px 0',
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete='off'
                     >
                        <h4>THÔNG TIN CÁ NHÂN</h4>
                        <Form.Item
                           label='Họ và tên thí sinh'
                           name='fullName'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please input!',
                              },
                           ]}
                        >
                           <Input />
                        </Form.Item>
                        <Form.Item label='Email' name='fullName'>
                           <Input disabled={true} />
                        </Form.Item>
                        <Form.Item
                           label='Số CCCD'
                           name='cccd'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please input!',
                              },
                           ]}
                        >
                           <Input />
                        </Form.Item>
                        <Form.Item
                           label='Số điện thoại'
                           name='phone'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please input!',
                              },
                           ]}
                        >
                           <Input />
                        </Form.Item>
                        <Form.Item
                           label='Địa chỉ'
                           name='address'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please input!',
                              },
                           ]}
                        >
                           <Input />
                        </Form.Item>
                        <h4>THÔNG TIN DỰ THI</h4>
                        <Form.Item
                           label='Khu vực thi'
                           name='testAddress'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please select!',
                              },
                           ]}
                        >
                           <Select>
                              <Select.Option value='hanoi'>Hà Nội</Select.Option>
                              <Select.Option value='hcm'>TP Hồ Chí Minh</Select.Option>
                              <Select.Option value='dn'>Đà Nẵng</Select.Option>
                           </Select>
                        </Form.Item>
                        <Form.Item
                           label='Thời gian nộp hồ sơ'
                           name='testDate'
                           rules={[
                              {
                                 required: true,
                                 message: 'Please select!',
                              },
                           ]}
                        >
                           <Select>
                              <Select.Option value='20424'>20/4/2024</Select.Option>
                              <Select.Option value='21424'>21/4/2024</Select.Option>
                              <Select.Option value='22424'>22/4/2024</Select.Option>
                           </Select>
                        </Form.Item>
                        <Checkbox
                           style={{width: '100%'}}
                           onChange={(e) => {
                              setSubmit(!e.target.checked);
                           }}
                        >
                           Tôi đồng ý đăng ký trên website IIG Vietnam để phục vụ cho mục đích tuyển dụng
                        </Checkbox>
                        <Button
                           type='primary'
                           htmlType='submit'
                           className={styles.btn_submit}
                           disabled={submit}
                           onClick={handleRegister}
                        >
                           Đăng ký
                        </Button>
                     </Form>
                  </div>
               </div>
            </div>
         </div>
         <Modal
            title='Đăng ký dự thi'
            open={openModal}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
         >
            <div className={styles.modal}>
               <div className={styles.modal_payment}>
                  <div className={styles.col_left}>
                     <span className={styles.col_left_item}>Địa điểm dự thi:</span>
                     <span className={styles.col_left_item}>Tình trạng:</span>
                     <span className={styles.col_left_item}>Thanh toán:</span>
                     <span className={styles.col_left_item}>Cập nhật:</span>
                  </div>
                  <div className={styles.col_right}>
                     <span className={styles.col_right_item}>TP Hồ Chí Minh</span>
                     <span className={styles.col_right_item}>Chưa xác nhận</span>
                     <span
                        className={styles.col_right_item}
                        style={{fontSize: '24px', color: 'red', fontWeight: 700, position: 'relative', top: -8}}
                     >
                        999.000 VND
                     </span>
                     <span className={styles.col_right_item} style={{position: 'relative', top: -16}}>
                        10/04/2024
                     </span>
                  </div>
               </div>
               <PayPalScriptProvider options={{clientId: 'test'}}>
                  <PayPalButtons style={{layout: 'horizontal'}} />
               </PayPalScriptProvider>
            </div>
         </Modal>
      </>
   );
}
