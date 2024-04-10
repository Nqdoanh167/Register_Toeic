/** @format */
import React from 'react';
import styles from './header.module.scss';
import {SearchOutlined, PhoneOutlined} from '@ant-design/icons';
export default function Header() {
   return (
      <div className={styles.wrap}>
         <div className={styles.headerConatiner}>
            <div className={styles.container}>
               <div className={styles.header_col_left}>
                  <PhoneOutlined />
                  <span>{` 1900 636 929`}</span>
               </div>
               <div className={styles.header_col_mid}>
                  <div className={styles.input_group}>
                     <input type='text' placeholder='Tìm kiếm' />
                     <button type='submit'>
                        <SearchOutlined style={{color: '#fff', fontWeight: 'bold', fontSize: '14px'}} />
                     </button>
                  </div>
               </div>
               <div className={styles.header_col_right}>
                  <span>nqdcntt2002@gmail.com</span>
               </div>
            </div>
         </div>
         <div className={styles.navbar}>
            <div className={styles.logo}>
               <img src={'https://online.iigvietnam.com/media/d3vdcety/logo.png'} alt='logo' width={73} height={48} />
            </div>
            <div className={styles.nav_list}>
               <div className={`${styles.nav_item} ${styles.active}`}>Đăng ký thi</div>
               <div className={styles.nav_item}>Địa điểm thi</div>
               <div className={styles.nav_item}>Lịch thi</div>
               <div className={styles.nav_item}>Quy định & hướng dẫn</div>
               <div className={styles.nav_item}>Dịch vụ sau thi</div>
               <div className={styles.nav_item}>Ôn luyện</div>
               <div className={styles.nav_item}>Hỗ trợ khách hàng</div>
            </div>
         </div>
      </div>
   );
}
