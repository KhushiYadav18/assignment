import SAM from "./SAM.jpg"
import SA from "./ASMP.jpg"
import S from "./Phonathon.jpg"
export default function Home() {
    return(
        <>
        <h1 className="ho">Student Alumni Relations Cell</h1>
        <p className="p">The Student Alumni Relations Cell (SARC) is managed by the students of IIT Bombay. SARC is one of the key components of the office of Dean ACR and has launched numerous initiatives which allow for a seamless interaction and networking between students and alumni.</p>
        <h1 className="ho">VISION</h1>
        <p className="p">We share the vision of Dr. Sukhatme, Director of IIT Bombay, as expressed at the Chicago summit meeting in September 1999 – “I dream of an IIT which never forgets that it has a tryst with excellence”. The core aim of both IITBHF and IITBAA is to bring together the diligent minds of IITB’s alumni and make IITB one of the leading research and teaching institutes in the world.
        
The Institute utilizes wisely the generous donations, bequests, gifts, and grants received from the alumni, chapters, benefactors, corporations, and trusts for education and research purposes.</p>
<img src={SAM}  alt="" className="imag"/>
<img src={SA}  alt="" className="imag"/>
<img src={S}  alt="" className="imag"/>

        </>
    )
}