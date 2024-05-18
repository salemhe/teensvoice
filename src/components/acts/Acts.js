import React from 'react'
import "./acts.css"
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
   <MuiAccordion disableGutters elevation={0} square {...props} />
 ))(({ theme }) => ({
   border: `1px solid ${theme.palette.divider}`,
   '&:not(:last-child)': {
     borderBottom: 0,
   },
   '&::before': {
     display: 'none',
   },
 }));
 
 const AccordionSummary = styled((props) => (
   <MuiAccordionSummary
     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
     {...props}
   />
 ))(({ theme }) => ({
   backgroundColor:
     theme.palette.mode === 'dark'
       ? 'rgba(255, 255, 255, .05)'
       : 'rgba(0, 0, 0, .03)',
   flexDirection: 'row-reverse',
   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
     transform: 'rotate(90deg)',
   },
   '& .MuiAccordionSummary-content': {
     marginLeft: theme.spacing(1),
   },
 }));
 
 const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
   padding: theme.spacing(2),
   borderTop: '1px solid rgba(0, 0, 0, .125)',
 }));

function Acts() {
   const [expanded, setExpanded] = React.useState('panel1');

   const handleChange = (panel) => (event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
   };

   const handleDownload = (fileName) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/files/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1 className='various'>The Various Acts !</h1> <br />
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="inside">
            <h3>POETRY</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="inside">
            <p className='description'>
               Contestants are expected to create their own spoken words poetry
               from the book “The Power of Your Mind ” or "Recreating your World"
            </p>
            <h4>Rules Of Poetry</h4>
            <h5>A. General Rule</h5>
            <p>
               1. The spoken word poetry piece must be an original composition in
               English.{" "}
            </p>
            <p>
               2. The piece must be related to the books given and must not contain
               any malicious and offensive content.
            </p>
            <p>3. The spoken poetry must be delivered from memory.</p>

            <h5> 
               B. The contestants may keep in view the following points while
               delivering their original piece:
            </h5>

            <h5>a. Content</h5>
            <p>(I) Introduction of the subject.</p>
            <p>
               (II) Exposition of the main theme (Conciseness & clarity of message,
               originality/points of interest, Incorporation of References to the
               resource material , etc).
            </p>

            <h5>Speaking presentation</h5>
            <p>
               (I) Sounds, instruments, or musical background are allowed to
               complement the delivery. No deduction shall be made if the
               contestant opts not to have a musical background.
            </p>
            <p>
               (II) The contestant’s physical appearance, voice and articulation,
               dramatic appropriateness, and evidence of understanding will be
               judged.
            </p>
            <p>
               (III) The Audience’s attention and interest must be captured and
               sustained thoroughout the delivery.
            </p>
            <h5>
              These are the books to download for your presentation
            </h5>
            <div>
              <ul>
                <li className='book'>
                  <span>
                    1. Recreating your World
                  </span>
                  <button onClick={() => handleDownload('Recreating-Your-world.pdf')}>Download PDF</button>
                </li>
                <li className='book'>
                  <span>
                    2. The power of your mind 
                  </span>
                  <button onClick={() => handleDownload('mindpower.pdf')}>Download PDF</button>
                </li>
              </ul>
            </div>
         </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className="inside">
            <h3>DANCE</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="inside">
               <p className='description'>
                  Contestants are to express their voice, through dance using the
                  songs provided . They are to create a mix of songs, which will be
                  submitted and used for their performance during the program.
               </p>

               <h4>Rules of Dance</h4>

               <h5>A. General Rules</h5>
               <p>
                  1. Contestants are to express their voice, through dance using the songs provided . 
                  They are to create a mix of songs, which will be submitted and used for their performance during the program.
               </p>
               <p>2. No vulgar expressions can be used in the mix.</p>
               <p>3. No vulgar dance moves are permitted ( e.g twerking).</p>
               <p>4. Coaching from the wings is not permitted.</p>
               <p>
                  5. The mix and recorded video of the dance routine must be submitted
                  before the day of the auditions ( on or before Saturday, 18th May
                  2024)
               </p>
               <p>
                  6. All costumes and routines must be suitable for family viewing and
                  listening
               </p>
               <p>7. No dangerous props are permitted (e.g fire, stones)</p>
               <h5>
                  <i>
                  B. The contestants may keep in view the following points while
                  delivering their original piece:
                  </i>
               </h5>
               <p>1. Costume and physical appearance will be judged</p>
               <p>
                  2. The ability of the dance presentation to communicate the
                  message of the songs.
               </p>

               <h5>These are the songs to download for your presentation</h5>
              
              <div>
                <ul>
                  <li className='book'>
                    <span>
                      1. Far Away by Loius Pascal
                    </span>
                    <button onClick={() => handleDownload('far_away.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      2. Oyoyo by Ur flames
                    </span>
                    <button onClick={() => handleDownload('Oyoyo-Ur-Flames.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      3. Voice of the Lord by TB 1
                    </span>
                    <button onClick={() => handleDownload('voice.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      4. Idan Baba by Testimony Jaga
                    </span>
                    <button onClick={() => handleDownload('Idan Baba by Testimony Jaga.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      5. Turn up by Xano
                    </span>
                    <button onClick={() => handleDownload('Xano-Turn-Up.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      6. Chant of Priase by Xano
                    </span>
                    <button onClick={() => handleDownload('Xano-Chant-Of-Praise.mp3')}>Download music</button>
                  </li>
                  <li className='book'>
                    <span>
                      7. Victory Chant by Samsung
                    </span>
                    <button onClick={() => handleDownload('Samsong-Victory-Chant.mp3')}>Download music</button>
                  </li>
                </ul>
              </div>
             
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className="inside">
            <h3>ART 🎨 PAINTING 🖌</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="inside">
          
               <p className='description'>
                  Teenagers will be challenged to create an artwork that expresses
                  their imaginative prowess. It would be centered around predetermined
                  concept, using the theme of “Recreating Your World”
               </p>
               <h4>RULES OF ART/PAINTING</h4>
               <p>
                  1. The art/painting competition will be held on the day of the
                  program. Contestants will be required to create their artwork at the
                  venue within.
               </p>
               <p>
                  2. Paintings/Drawings must be created in physical media (no digital
                  "paintings"). Media allowed includes: Pen, pencil, markers, paints,
                  pastel, acrylic, oils, charcoal, watercolors, canvas, and paper.
               </p>
               <p>3. Artwork must be related to the theme “Recreating Your World”</p>
               <h5>
                  <i>
                  B. The contestants may keep in view the following points while
                  creating their piece:
                  </i>
               </h5>
               <p>1. Interpretation and the claritye of the theme to the viewer.</p>
               <p>2. Creativity and originality of the depicted theme.</p>
               <p>
                  3. Quality of artistic composition and overall design based on the
                  theme.
               </p>
               <p>4. Overall impression of the art.</p>
               <p>
                  5. Articulate explanation of the artwork. This is optional, no marks
                  will be deducted for contestants that opt to not
                  explain their piece.
               </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className="inside">
            <h3>SINGING</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="inside">
               <p className='description'>
               Teenagers are expected to showcase their musical talent with the
               resources that will be provided to them.
               </p>
               <h4>Rules of Singing</h4>
               <h5>A. General Rules</h5>
               <p>1. Choice of song must be based on the songs provided.</p>
               <p>
               2. Contestants are free to be creative with the style of delivery
               but the lyrics of the song provided MUST be maintained.
               </p>
               <p>
               3. The lyrics of the songs should be properly communicated during
               delivery.
               </p>
               <p>4. All musical presentations must be delivered in English.</p>
               <p>
               5. All musical presentations MUST be delivered in a timeframe of 2
               minutes.
               </p>
               <h5>
               <i>B. The contestants may keep in view the following points:</i>
               </h5>
               <p>
               1. Contestants (group/individual) are expected to properly manage
               the stage and register their presence
               </p>
               <p>
               2. Diction, key, rhythmic interpretation, intonation, and vocal
               quality will be judged
               </p>
               <p>
               3. Coming along with an instrumentalist is optional either for group
               or individual presentation but however recommended.
               </p>{" "}
               <h5>C. Rappers:</h5>
               <p>
               1.Options of beats or instrumentals would be provided for contestant
               to Rap with.
               </p>
               <p>
               2.A short recording of your music and lyrics should be sent on or
               before Saturday May 18th 2024.
               </p>
               <p>
               3.Contestants are free to be creative with their style of delivery.
               </p>
               <p>
               4.All Lyrics must be properly communicated and delivered in English.
               </p>
               <p>
               5.All Rap presentation must be delivered in a timeframe of 2minutes.
               </p>
               <p>
               6. All contestant should send in a 2 minutes video recording of
               presentation on or before May 18th 2024 for the
               First Stage Audition.
               </p>

               
               <h5>These are the songs to download for your presentation</h5>
              
                <div>
                  <ul>
                    <li className='book'>
                      <span>
                        1. Choji Nos Ft TKE3
                      </span>
                      <button onClick={() => handleDownload('choji.mp3')}>Download Music</button>
                    </li>
                    <li className='book'>
                      <span>
                        2. Bullet proof by Lewis
                      </span>
                      <button onClick={() => handleDownload('LEWIS-BULLETPROOF.mp3')}>Download Music</button>
                    </li>
                    <li className='book'>
                      <span>
                        3. Katalambano by TB 1
                      </span>
                      <button onClick={() => handleDownload('Katalambano-TB1.mp3')}>Download Music</button>
                    </li>
                    <li className='book'>
                      <span>
                        4. God's Number One by Rozey
                      </span>
                      <button onClick={() => handleDownload('Gods-Number-One.mp3')}>Download Music</button>
                    </li>
                    <li className='book'>
                      <span>
                        5. Sweet Holy Spirit by Jahdiel
                      </span>
                      <button onClick={() => handleDownload('Jahdiel-Sweet-Holy-Spirit.mp3')}>Download Music</button>
                    </li>
                  </ul>
                </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="main-inside"> 

        
      </div>
    </div>
  )
}

export default Acts