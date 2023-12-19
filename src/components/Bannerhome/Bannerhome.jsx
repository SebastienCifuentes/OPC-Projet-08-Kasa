import bannerhome from '../../assets/bannerhome.png'

export default function Bannerhome() {
    return (
        <div className="banner-container">
            <div className="banner-img">
                <img src={bannerhome} alt="bannerhome" />
            </div>
            <div className="banner-text-container">
                <div className="banner-text">Chez vous, partout et ailleurs</div>
            </div>
        </div>
    )
}