import { GlobalStyle, InfoBoxStyle } from "../../styles/componentStyles/Admin/AdminStyles";

const InfoBox = ({ bgColor, circleColor, desc, count, icon, className }) => {
   return (
      <>
         <GlobalStyle />
         <InfoBoxStyle style={{ backgroundColor: `${bgColor}` }} className={className}>
            <div className="content">
               <div
                  className="circle"
                  style={{ backgroundColor: `${circleColor}` }}
               >
                  <i>{icon}</i>
               </div>
               <div className="info">
                  <p className="count">{count}</p>
                  <p className="desc">{desc}</p>
               </div>
            </div>
         </InfoBoxStyle>
      </>
   );
};

export default InfoBox;
