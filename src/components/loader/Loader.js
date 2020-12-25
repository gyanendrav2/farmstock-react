import React from 'react';
import classNames from 'classnames';
import { images } from '../../assets/images';
import { loaderSelector } from '../../redux/selectors/uiSelector';
import { useSelector } from 'react-redux';
import "./style.css"


const Loader = ({ initial = false }) => {
    const loader = useSelector(loaderSelector);
    if (initial || loader) {
        return (
            <div className={classNames("loaderWrapper", "loaderWrapperBg")}>
                <img src={images.loader} alt="" />
            </div>
        );
    } else {
        return <></>;
    }
};

export default Loader;
