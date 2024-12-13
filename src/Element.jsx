import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useRef } from 'react'

function Element() {
  const params = useParams().elementNumber
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const boxRef = useRef(null)
  const messageRef = useRef(null)
  const inputRef = useRef(null)
  const symbolRef = useRef(null)
  const elementNameEnRef = useRef(null)
  const elementNameArRef = useRef(null)
  const Elements = ['ph', 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
  const ElementNamesEn = ['ph', 'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Nihonium', 'Flerovium', 'Moscovium', 'Livermorium', 'Tennessine', 'Oganesson']
  const ElementNamesAr = ['ph', 'هيدروجين', 'هيليوم', 'ليثيوم', 'بيريليوم', 'بورون', 'كربون', 'نيتروجين', 'أكسجين', 'فلور', 'نيون', 'صوديوم', 'مغنيسيوم', 'ألومنيوم', 'سيليكون', 'فوسفور', 'كبريت', 'كلور', 'أرجون', 'بوتاسيوم', 'كالسيوم', 'سكانديوم', 'تيتانيوم', 'فاناديوم', 'كروم', 'منغنيز', 'حديد', 'كوبالت', 'نيكل', 'نحاس', 'زنك', 'غاليوم', 'جرمانيوم', 'زرنيخ', 'سيلينيوم', 'بروم', 'كريبتون', 'روبيديوم', 'سترونشيوم', 'إتريوم', 'زركونيوم', 'نيوبيوم', 'موليبدينوم', 'تكنيتيوم', 'روثينيوم', 'روديوم', 'بالاديوم', 'فضة', 'كادميوم', 'إنديوم', 'قصدير', 'أنتيمون', 'تيلوريوم', 'يود', 'زينون', 'سيزيوم', 'باريوم', 'لانثانوم', 'سيريوم', 'برازوديميوم', 'نيوديميوم', 'بروميثيوم', 'ساماريوم', 'يوروبيوم', 'غادولينيوم', 'تيربيوم', 'ديسبروسيوم', 'هولميوم', 'إربيوم', 'ثوليوم', 'إتيربيوم', 'لوتيتيوم', 'هافنيوم', 'تانتالوم', 'تنغستن', 'رينيوم', 'أوزميوم', 'إريديوم', 'بلاتين', 'ذهب', 'زئبق', 'ثاليوم', 'رصاص', 'بزموت', 'بولونيوم', 'أستاتين', 'رادون', 'فرانسيوم', 'راديوم', 'أكتينيوم', 'ثوريوم', 'بروتكتينيوم', 'يورانيوم', 'نبتونيوم', 'بلوتونيوم', 'أمريسيوم', 'كوريوم', 'بيركيليوم', 'كاليفورنيوم', 'أينشتينيوم', 'فيرميوم', 'مندليفيوم', 'نوبليوم', 'لورنسيوم', 'رذرفورديوم', 'دبنيوم', 'سيبورغيوم', 'بوريوم', 'هاسيوم', 'مايتنيريوم', 'دارمشتاتيوم', 'رونتجينيوم', 'كوبرنيسيوم', 'نيهونيوم', 'فليروفيوم', 'موسكوفيوم', 'ليفيرموريوم', 'تينيسين', 'أوجانيسون']
  

  function handleCorrection(){
      if(inputRef.current.value == Elements[params] && Elements[params] != 'Og' && Elements[params] != 'H'){
        prevRef.current.style.display = "block"
        nextRef.current.style.display = "block"
        boxRef.current.style.backgroundColor = "rgb(33, 211, 33)"
        messageRef.current.innerText = "Right Asnwer!"
        symbolRef.current.innerText = Elements[params]
        elementNameEnRef.current.innerText = ElementNamesEn[params]
        elementNameArRef.current.innerText = ElementNamesAr[params]
      }
      else if(Elements[params] == 'Og'){
        prevRef.current.style.display = "block"
        nextRef.current.style.display = "none"
        boxRef.current.style.backgroundColor = "rgb(33, 211, 33)"
        messageRef.current.innerText = "Right Asnwer!"
        symbolRef.current.innerText = Elements[params]
        elementNameEnRef.current.innerText = ElementNamesEn[params]
        elementNameArRef.current.innerText = ElementNamesAr[params]
      }
      else if(Elements[params] == 'H'){
        prevRef.current.style.display = "none"
        nextRef.current.style.display = "block"
        boxRef.current.style.backgroundColor = "rgb(33, 211, 33)"
        messageRef.current.innerText = "Right Asnwer!"
        symbolRef.current.innerText = Elements[params]
        elementNameEnRef.current.innerText = ElementNamesEn[params]
        elementNameArRef.current.innerText = ElementNamesAr[params]
      }
      else{
        boxRef.current.style.backgroundColor = "hsl(4, 91%, 48%)"
        messageRef.current.innerText = "Wrong Asnwer!"
    }
  }

  function handleNext(){
    prevRef.current.style.display = "none"
    nextRef.current.style.display = "none"
    boxRef.current.style.backgroundColor = "hsl(208, 37%, 74%)"
    messageRef.current.innerText = ""
    inputRef.current.value = ""
    symbolRef.current.innerText = '?'
    elementNameEnRef.current.innerText = ''
    elementNameArRef.current.innerText = ''
    //make it check if it's in a previous state or the current state
  }

  function handlePrevious(){
    symbolRef.current.innerText = Elements[params - 1]
    elementNameEnRef.current.innerText = ElementNamesEn[params - 1]
    elementNameArRef.current.innerText = ElementNamesAr[params - 1]
  }

  return (
    <div className='elementWrapper'>
      <div className="elementBox" ref={boxRef}>
        <h3 className="atomicNumber">Atomic Number: {params}</h3>
        <p ref={messageRef}></p>
        <span className="elementSymbol" ref={symbolRef}>?</span>
        <p className="elementNameEn" ref={elementNameEnRef}></p>
        <p className="elementNameAr" ref={elementNameArRef}></p>
        <input type="text" placeholder='Enter Element Symbol' className='symbolInput' ref={inputRef} autoFocus/>
        <div className="buttonWrapper">
          <div className='prevNextWrapper'>
            <button className="prev" ref={prevRef} onClick={handlePrevious}><Link to={`/Element/${params - 1}`} className='prevLink'>Previous</Link></button>
            <button className='next' ref={nextRef} onClick={handleNext}><Link to={`/Element/${params - -1}`} className='nextLink'>Next</Link></button>
          </div>
          <button className="check" onClick={handleCorrection}>check</button>
          <button className="backToStart"><Link to='/' className='backLink'>Back to Start</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Element