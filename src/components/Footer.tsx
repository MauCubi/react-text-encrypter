import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className='flex w-full h-[100px] bg-slate-900 absolute max-sm:fixed bottom-0 p-8 justify-center align-middle flex-shrink-0'>
        <div className="flex flex-col justify-center align-middle gap-2">            
            <p  className='text-white text-xl'> &copy; Mauro Rogelio Cubilla - 2024</p>
            <div className='flex justify-center'>
                <ul className='flex flex-row gap-3'>
                    <li>
                        <a href="https://www.linkedin.com/in/mauro-rogelio-cubilla-526a67240/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className='text-white text-[25px]'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MauCubi?tab=repositories" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className='text-white text-[25px]'/>
                        </a>
                    </li>
                        
                </ul>
            </div>
        </div>    
    </div>
  )
}

export default Footer