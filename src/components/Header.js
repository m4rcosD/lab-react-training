function Header ({ lastName, firstName, gender, heigth, birth, picture}) {
    return (
        <>
        <img src={picture} alt=""/>
        <p>Fist Name: {firstName} </p>
        <p>Last Name: {lastName} </p>
        <p>Gender: {gender} </p>
        <p>Heigth: {heigth} </p>
        <p>Birth: {birth.toString()} </p>
        </>
    )
}

export default Header