import React from 'react'

export default function About(props) {
    const { mode } = props;
    return (
        <>
            <div className={`bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} border border-top`}>
                <div className='p-5 text-center'>
                    <h4 className='my-4'>About Us</h4>
                    <p className='text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex, incidunt quos
                        facere eligendi hic vero exercitationem vitae consequuntur? Hic recusandae aliquid
                        a numquam amet blanditiis fuga nihil dolore commodi, quisquam quidem eius, explicabo
                        eaque error delectus officia quos! Numquam blanditiis sit laborum? Excepturi distinctio
                        accusantium dolore quisquam, quos velit.
                    </p>
                </div>
            </div>
        </>
    )
}
