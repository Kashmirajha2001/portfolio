import './education.css';

const Education = () => {
  return (
    <section className='education'>
        <h1>Education</h1>
        <div className="contents">
            <div className="content_box">
                <h3>2020-2024</h3>
                <h2>Bachelor of Technology(B.Tech)</h2>
                <p>Computer Science & Engineering</p>
                <p><span>CGPA: </span>9.48</p>
                <p>Meghnad Saha Institute of Technology</p>
            </div>
            <div className="content_box">
                <h3>2018-2020</h3>
                <h2>Higher Secondary Education</h2>
                <p><span>Percentage: </span>88%</p>
                <p>West Bengal Council of Higher Secondary Education, Sarsuna High School, Kolkata</p>
            </div>
            <div className="content_box">
                <h3>May 2018</h3>
                <h2>Secondary Education</h2>
                <p><span>Percentage: </span>88.14%</p>
                <p>West Bengal Board of Secondary Education, Barisha Girls' High School, Kolkata</p>
            </div>
        </div>
    </section>
  )
}

export default Education