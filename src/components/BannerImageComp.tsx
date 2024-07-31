import React from 'react';
import { Banner } from '../../types/banner';

interface BannerProps extends Banner {
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ id, title, description, cta, image, background, onEdit }) => {
  return (
    <div className={`relative ${background} p-4 rounded-lg`} style={{ width: '300px', height: '300px' }}>
      <img src={image} alt={title} className="w-full h-3/4 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white">{description}</p>
        <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded">{cta}</button>
        <button
          className="absolute top-2 right-2"
          aria-label={`Edit ${title}`}
          onClick={() => onEdit(id)}
        >
         <svg width="30px" height="30px" viewBox="0 0 24 24" id="_24x24_On_Light_Edit" data-name="24x24/On Light/Edit" xmlns="http://www.w3.org/2000/svg">
  <rect id="view-box" width="24" height="24" fill="none"/>
  <path id="Shape" d="M.75,17.5A.751.751,0,0,1,0,16.75V12.569a.755.755,0,0,1,.22-.53L11.461.8a2.72,2.72,0,0,1,3.848,0L16.7,2.191a2.72,2.72,0,0,1,0,3.848L5.462,17.28a.747.747,0,0,1-.531.22ZM1.5,12.879V16h3.12l7.91-7.91L9.41,4.97ZM13.591,7.03l2.051-2.051a1.223,1.223,0,0,0,0-1.727L14.249,1.858a1.222,1.222,0,0,0-1.727,0L10.47,3.91Z" transform="translate(3.25 3.25)" fill="#141124"/>
</svg>
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
