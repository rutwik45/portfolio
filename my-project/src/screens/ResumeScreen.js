import resume from '../files/fullstack.pdf'
const ResumeScreen=()=>{
    return (
        <div>
            <embed src={resume} type='application/pdf' width='100%' height='600px' />
        </div>
    )
}
export default ResumeScreen