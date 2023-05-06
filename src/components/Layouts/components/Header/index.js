import styles from './Header.module.scss' 
import classNames from 'classnames/bind' //import classnames vào để dùng css gọn hơn

/*
Vào Terminal chạy câu lệnh để cài thư viện classnames: npm i classnames
*/

const cx = classNames.bind(styles)

function Header() {
    
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}></div>
    </header> ;
}

export default Header;