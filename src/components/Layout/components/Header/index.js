import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>

                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    />

                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* loading */}

                    <button className={cx('search-btn')}>
                        {/* Search icon */}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
