import { useNavigate } from 'react-router-dom';

import './directory-item.scss'

const DirectoryItem = ({category}) => {

    const {title, imageUrl, route} = category;
    const navigate = useNavigate();
    const onNavigator = () => navigate(route);

    return (

            <div className="directory-item-container" onClick={onNavigator}>
                <div className='background-image' style={{
                    backgroundImage: `url(${imageUrl})`
                }} />
               

                    <div className='body-item'>
                        <h2>{title}</h2>
                        <p>SHOP NOW</p>

                    </div>
               
            </div>
        )
    
}

export default DirectoryItem;