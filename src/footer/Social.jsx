
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Social = () => {
  return (
    <div className='footer_socials'>
        <a href="https://www.linkedin.com/in/kashmira-jha-52405022b" target='_blank'><LinkedInIcon style={{width:"2em", height:"2em"}}/></a>
        <a href="https://github.com/Kashmirajha2001"><GitHubIcon style={{width:"2em", height:"2em"}}/></a>
        <a href="https://instagram.com/artsbykash?igshid=MzNlNGNkZWQ4Mg=="><InstagramIcon style={{width:"2em", height:"2em"}}/></a>
    </div>
  )
}

export default Social