import "./header.scss";
import VideoButton from "./components/Video-Button/Video-Button";
import IconHeader from "./components/icons/Icons-header";
import Header_left from "./components/Header_left/Header_left";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="header__top">
              <div className="haeder__top__rigth">
                <VideoButton></VideoButton>
                <IconHeader />
              </div>
              <Header_left/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
