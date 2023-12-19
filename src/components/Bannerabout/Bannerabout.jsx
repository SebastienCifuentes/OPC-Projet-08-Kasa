import bannerabout from '../../assets/bannerabout.png'

export default function Bannerabout() {
    return (
        <div className="banner-container">
            <div className="banner-img">
                <img src={bannerabout} alt="bannerabout" />
            </div>
            <div className="banner-text-container">
                <div className="banner-text">Chez vous, partout et ailleurs</div>
            </div>
        </div>
    )
}