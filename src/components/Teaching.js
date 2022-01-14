import {React, useState, useEffect} from 'react';

const Composition = ({showCompostion}) => {
return(
<div className='composition'>
<p>Podcasts, commercials, social media posts, artwork, YouTube videos, and literature become testing grounds for rhetorical analysis in my composition courses. I prioritize modern, multimedia objects that represent issues of public importance for analysis because I require similarly relevant, multimodal products from my class. I want students to leave the course able to interrogate primary sources, develop defensible claims based on their analysis, deploy secondary sources proactively, and convey their findings in a format and style suited to a specific audience. </p>

<p>In first-year composition, the class practices topic selection by generating discipline-specific research questions from an episode of the podcast <em>This American Life</em> on social media censorship. Then students investigate unresolved public issues that interest them personally before they present speeches on their preexisting knowledge and persisting questions about research topics. I deploy politically or culturally relevant images or videos to practice conducting rhetorical analysis and answering research questions. Through small-group discussion and impromptu secondary research, students determine the function, impact, and context of Kehinde Wiley’s portrait of Barack Obama, the NRA’s “Violence of Lies” ad, and the response from Los Angeles activists to the NRA. I want students to be critical researchers, capable of determining a source’s reliability and relevance; the class learns to recognize quality secondary sources by evaluating articles from <em>The Atlantic, Huffington Post, </em>and <em>Political Science Quarterly </em>for credibility and bias. An episode of the podcast <em>Code Switch </em>on blackface in the twenty-first century presents a model of source synthesis; students deconstruct a transcript of the podcast, identifying the number and type of sources provided to portray another’s argument or defend their own claims. The class deliberates on the stakeholders of Sharon Olds’s poem “The End,” Ernest Hemingway’s short story “Hills Like White Elephants,” and Roxanne Gay’s article “The Alienable Rights of Women” to develop realistic representations of the audiences they hope to reach. I assign peer review, multiple drafts, and a final presentation to reinforce students’ audience analysis skills in common modes of academic communication. </p>

<p>I have employed these teaching strategies in basic writing and first-year composition courses that practiced process or Writing Across the Curriculum pedagogies. My methods have proven effective in classes of traditional students, non-native speakers of English, and students admitted on probationary basis. For example, in Basic Writing, I introduced the concept of a literacy history, a personal narrative that asked students to construct their identity as readers or writers, with excerpts from Frederick Douglass’s autobiography. Both the literacy history and the final project of the semester—an argumentative letter to a professional—required students to personally invest in their writing. One student wrote to a local judge about the implications of a light sentence in a recent child molestation case; another addressed to the Missouri State University administration compared the time, cost, and confusion first-time college students encounter to features of a poorly made videogame. Incorporating culturally relevant readings and nontraditional primary sources expanded the range of research topics my students pursued and deepened their investment in learning the strategies of academic argumentative writing. </p>

<p>Teaching observations note the intelligent, open-minded culture I encourage in class, the relevant course material I assign, the cohesion between sessions and activities I create, and the wide definition of ‘text’ I instill in my students. On average, students evaluate my overall teaching effectiveness and promptness in returning assignments as far above average, as well as my ability to encourage critical and independent thinking, respond to a wide range of questions, and grade fairly.</p>
</div>

)}




const Teaching = () => {

    function clickingComposition(){
        setShowCompostion(true);
        setShowMedieval(false)
    }

    function clickingMedieval(){
        setShowCompostion(false);
        setShowMedieval(true)
    }
    
    const [showCompostion, setShowCompostion] = useState(false);
    const [showMedieval, setShowMedieval] = useState(false);


    return (
        <>
        <h1>Teaching Statements</h1>
        
        <button onClick= {clickingComposition} >Composition </button>
        


        <button onClick={clickingMedieval}>Medieval</button>

        <div className='composition'>
            { showCompostion ? <> <p>Podcasts, commercials, social media posts, artwork, YouTube videos, and literature become testing grounds for rhetorical analysis in my composition courses. I prioritize modern, multimedia objects that represent issues of public importance for analysis because I require similarly relevant, multimodal products from my class. I want students to leave the course able to interrogate primary sources, develop defensible claims based on their analysis, deploy secondary sources proactively, and convey their findings in a format and style suited to a specific audience. </p>

<p>In first-year composition, the class practices topic selection by generating discipline-specific research questions from an episode of the podcast <em>This American Life</em> on social media censorship. Then students investigate unresolved public issues that interest them personally before they present speeches on their preexisting knowledge and persisting questions about research topics. I deploy politically or culturally relevant images or videos to practice conducting rhetorical analysis and answering research questions. Through small-group discussion and impromptu secondary research, students determine the function, impact, and context of Kehinde Wiley’s portrait of Barack Obama, the NRA’s “Violence of Lies” ad, and the response from Los Angeles activists to the NRA. I want students to be critical researchers, capable of determining a source’s reliability and relevance; the class learns to recognize quality secondary sources by evaluating articles from <em>The Atlantic, Huffington Post, </em>and <em>Political Science Quarterly </em>for credibility and bias. An episode of the podcast <em>Code Switch </em>on blackface in the twenty-first century presents a model of source synthesis; students deconstruct a transcript of the podcast, identifying the number and type of sources provided to portray another’s argument or defend their own claims. The class deliberates on the stakeholders of Sharon Olds’s poem “The End,” Ernest Hemingway’s short story “Hills Like White Elephants,” and Roxanne Gay’s article “The Alienable Rights of Women” to develop realistic representations of the audiences they hope to reach. I assign peer review, multiple drafts, and a final presentation to reinforce students’ audience analysis skills in common modes of academic communication. </p>

<p>I have employed these teaching strategies in basic writing and first-year composition courses that practiced process or Writing Across the Curriculum pedagogies. My methods have proven effective in classes of traditional students, non-native speakers of English, and students admitted on probationary basis. For example, in Basic Writing, I introduced the concept of a literacy history, a personal narrative that asked students to construct their identity as readers or writers, with excerpts from Frederick Douglass’s autobiography. Both the literacy history and the final project of the semester—an argumentative letter to a professional—required students to personally invest in their writing. One student wrote to a local judge about the implications of a light sentence in a recent child molestation case; another addressed to the Missouri State University administration compared the time, cost, and confusion first-time college students encounter to features of a poorly made videogame. Incorporating culturally relevant readings and nontraditional primary sources expanded the range of research topics my students pursued and deepened their investment in learning the strategies of academic argumentative writing. </p>

<p>Teaching observations note the intelligent, open-minded culture I encourage in class, the relevant course material I assign, the cohesion between sessions and activities I create, and the wide definition of ‘text’ I instill in my students. On average, students evaluate my overall teaching effectiveness and promptness in returning assignments as far above average, as well as my ability to encourage critical and independent thinking, respond to a wide range of questions, and grade fairly.</p>
</>: null }
</div>

        

       

        <div className='medieval'>
            {showMedieval ? <>
                <p>I prioritize primary research, rhetorical analysis, sociohistorical context, and recognition of form in my teaching. I want students to leave my class able to interrogate primary sources, develop defensible claims based on their analysis, deploy secondary sources proactively, and voice their findings in a style suited to an academic audience. In undergraduate composition courses, modern, multimedia objects that represent issues of public importance are selected for analysis because I require similarly relevant, multimodal products from my students’ work. In literature courses, students identify how a text responds to major historical events, cultural expectations, and traditional literary structures. The class closely examines verse or prose for diction and tone by comparing contemporaneous texts or adaptations of the same text to one another. Digital archives, interactive maps, and online editions supplement the primary source material to make the Middle Ages immediately accessible to undergraduate audiences. </p>

<p>In a British Literature survey, Chaucer seminar, or a course featuring the <em>Canterbury Tales, </em>the class would practice close reading by defining the characteristics of Chaucer the narrator as presented in the General Prologue. Students would contrast the narrator’s complimentary assessments of the pilgrims with their physical descriptions, revealing the unreliability of the speaker. Because the General Prologue presents an unfamiliar class structure and gender norms, I would ask the class to generate research questions about the pilgrims’ occupations, appearance, and even their pets or steeds. Students would investigate these questions using impromptu tertiary research before learning to mine tertiary sources for reliable secondary sources. The General Prologue would be supplemented with the Huntington Library’s digitized Ellesmere manuscript, which features painted portraits of the pilgrims, and Layers of London’s map of medieval London, which visualizes major landmarks on the pilgrimage. Group presentations would produce sociohistorical context for the General Prologue while providing the opportunity for the class to evaluate secondary sources for credibility. I would deploy the Miller’s Tale as an example of the fabliau form, in which an older husband is cuckolded by his young wife. Each student would select an academic secondary source on the tale before deconstructing its claims, evidence, and assumptions for the class. These secondary sources would model humanistic discourse, demonstrating how to synthesize sources to fairly portray another’s argument or defend one’s own claims. I would juxtapose the Miller’s Tale with the Merchant’s Tale, in which the conventions of the fabliau are upended, and the wife dismisses her husband’s suspicion of an affair. The class would discuss the function, impact, and context of the Merchant’s Tale before students turned their own interpretations into researched arguments. I would assign peer review, multiple drafts, and individual conferences to reinforce students’ audience analysis skills in common modes of academic communication. </p>

            </>: null}
        </div>
        </>
        
    )
}

export default Teaching;