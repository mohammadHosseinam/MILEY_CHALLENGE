import { useContext, useEffect, useState } from "react"
import { Words } from "./context/index.jsx"
import robotFuction from "./utilities/robotFuction"
import { Route, Routes } from 'react-router-dom';
import { routes } from "./routes/index.jsx"

function App() {
  const { setWords, words } = useContext(Words)
  let secreteWord = ""
  useEffect(() => {
    const validWords = "ABOUT,ABOVE,ACTOR,ACUTE,ADEPT,ADMIT,ADOPT,ADORE,ADULT,AFTER,AGILE,AGREE,AISLE,ALBUM,ALERT,ALIEN,ALIKE,ALIVE,ALLOW,ALONG,ALOUD,ALTER,AMBER,AMEND,AMPLE,AMPLY,AMUSE,ANGEL,ANGLE,ANKLE,APPLE,APPLY,APRON,ARROW,ASSET,AVERT,AVOID,BACON,BAKER,BASIC,BASIL,BASIN,BATHE,BEACH,BEARD,BEAST,BEATS,BEGIN,BEGUN,BEING,BELOW,BIRCH,BIRTH,BLACK,BLANK,BLINK,BLOWN,BLUSH,BOARD,BOAST,BONUS,BOOST,BOUND,BOWEL,BRAID,BRAIN,BRAKE,BRAND,BRAVE,BREAD,BREAK,BRIDE,BRIEF,BRING,BRISK,BROKE,BROOM,BROWN,BULKY,BUNCH,BUYER,CABIN,CABLE,CAMEL,CANDY,CATER,CHAIN,CHAIR,CHALK,CHARM,CHART,CHASM,CHEAP,CHIEF,CHINA,CHIPS,CHOKE,CHOPS,CIGAR,CLAIM,CLAMP,CLASP,CLASS,CLEAN,CLEAR,CLIMB,CLOAK,CLONE,CLOSE,CLOTH,CLOUD,CLOVE,CLOWN,COAST,CORAL,COUNT,CRAFT,CRANE,CRANK,CRAWL,CRISP,CROSS,CROWD,CROWN,CRUSH,CRUST,CURVE,DAILY,DAIRY,DANCE,DATUM,DECAY,DECOR,DELAY,DEVIL,DIARY,DINER,DIRTY,DISCO,DIVER,DOUBT,DOUGH,DRAFT,DRAIN,DRAWN,DREAM,DRESS,DRINK,DRIVE,EARLY,EARTH,EIGHT,ELBOW,EMAIL,EMPTY,ENJOY,EQUAL,EQUIP,ETHIC,EXACT,EXIST,EXTRA,FACET,FAIRY,FAITH,FALSE,FANCY,FAULT,FAVOR,FEAST,FETCH,FIBER,FIELD,FINAL,FIRST,FLAIR,FLAKE,FLASK,FLICK,FLOAT,FLOCK,FLOWN,FLUSH,FLUTE,FOCAL,FOCUS,FORCE,FORUM,FOUND,FRAME,FRANK,FRAUD,FRESH,FRONT,FROST,FROZE,FRUIT,FUNGI,FUNNY,GHOST,GIVEN,GLASS,GLAZE,GLOBE,GLORY,GLOVE,GRACE,GRADE,GRAIN,GRAND,GRAPE,GRAPH,GRASP,GRASS,GRAVY,GREAT,GREET,GRILL,GROUP,GROWN,GUARD,GUESS,GUEST,GUIDE,HABIT,HAIRY,HAPPY,HARDY,HASTE,HAUNT,HEART,HEAVY,HEFTY,HONEY,HORSE,HOTEL,HOUSE,HUMAN,HUMID,HUMOR,HUSKY,IDEAL,IMAGE,IMPLY,INCUR,INDEX,INFER,INFRA,INLET,INNER,INPUT,INSET,IVORY,JEANS,JOINT,JUICE,LABOR,LADEN,LAPSE,LARGE,LATEX,LAUGH,LAYER,LEAFY,LEANS,LEARN,LEMON,LIGHT,LINER,LIVER,LIVES,LODGE,LOFTY,LOGIC,LOVER,LOWER,LUCID,LUCKY,LUNCH,LYMPH,MACRO,MAGIC,MAIZE,MAJOR,MAKER,MANGO,MAPLE,MARCH,MATCH,MEDAL,MEDIA,MERCY,MERIT,METAL,MICRO,MIDST,MIGHT,MINOR,MINUS,MIXER,MODEL,MOIST,MONEY,MONTH,MORAL,MOUNT,MOUSE,MOUTH,MOVER,MOVIE,MULTI,MUSIC,NAIVE,NEWLY,NEXUS,NICHE,NIGHT,NINJA,NOBLE,NODAL,NOISE,NOISY,NORTH,NOTCH,NOTED,NOVEL,NURSE,OCEAN,OFTEN,OLIVE,ONSET,OPERA,OPTIC,ORBIT,ORGAN,OTHER,OUGHT,OUNCE,OUTER,OVERT,OWING,OWNED,OWNER,OXIDE,PACED,PAINT,PANIC,PANTS,PARTY,PASTE,PATCH,PATIO,PAUSE,PAVED,PAYER,PEACH,PEARL,PEDAL,PHASE,PHONE,PIANO,PILOT,PINCH,PIVOT,PIZZA,PLACE,PLAIN,PLANE,PLANK,PLANT,PLATE,PLEAD,PLUCK,POINT,POKER,POLAR,PORCH,POUCH,POUND,POWER,PRESS,PRICE,PRIDE,PRIME,PRINT,PRIZE,PRONE,PROUD,PROVE,PUNCH,PUPPY,PURGE,PURSE,QUAIL,QUEEN,QUERY,QUEST,QUICK,QUIET,QUILT,QUITE,QUOTA,QUOTE,RADIO,RAINY,RAISE,RANCH,RANGE,RAPID,RATIO,REACH,REACT,READY,REALM,REGAL,REIGN,RELAX,RELAY,RELIC,REMIT,REPAY,REPLY,RESIN,RIDGE,RIGHT,RINSE,RISKY,RIVAL,ROAST,ROCKY,ROMAN,ROUGH,ROUND,ROYAL,RUSTY,SADLY,SAINT,SALON,SALTY,SANDY,SATIN,SAUCE,SCALE,SCARE,SCARF,SCARY,SCENT,SCORE,SCOUT,SCREW,SERUM,SETUP,SHADE,SHADY,SHAKE,SHAKY,SHAME,SHAPE,SHARE,SHARK,SHARP,SHAVE,SHEAR,SHELF,SHELL,SHIFT,SHINE,SHIRT,SHOCK,SHORE,SHORT,SHOUT,SHOVE,SHOWN,SHRUB,SHRUG,SIGHT,SIGMA,SILKY,SINCE,SIXTY,SKATE,SKILL,SKIRT,SLACK,SLATE,SLEEP,SLEPT,SLICE,SLICK,SLIDE,SLING,SLUMP,SMALL,SMART,SMILE,SMOKE,SMOKY,SNACK,SNAIL,SNAKE,SNEAK,SOBER,SOLAR,SOLVE,SOUND,SOUTH,SPACE,SPADE,SPARE,SPARK,SPEAK,SPEAR,SPELL,SPICE,SPICY,SPIKE,SPILL,SPINE,SPLIT,SPOIL,SPOKE,SPORT,SPRAY,SQUAD,SQUAT,SQUID,STACK,STAFF,STAGE,STAIN,STAIR,STAKE,STALE,STAMP,STAND,STARE,STEAD,STEAK,STEAL,STEAM,STEEL,STERN,STICK,STILL,STING,STOCK,STONE,STORE,STORM,STORY,STOVE,STRAP,STRAW,STRAY,STUCK,STUDY,STUFF,STUMP,STYLE,SUGAR,SUITE,SUNNY,SUPER,SWAMP,SWEAT,SWEPT,SWIFT,SWINE,SWING,SWIRL,SYRUP,TABLE,TAKEN,TEACH,TEMPO,THANK,THEIR,THICK,THING,THINK,THIRD,THORN,THOSE,THREE,THROW,THUMB,THYME,TIDAL,TIGER,TIMER,TODAY,TOKEN,TONIC,TOUCH,TOUGH,TOWEL,TOWER,TOXIC,TOXIN,TRACE,TRACK,TRADE,TRAIL,TRAIN,TRASH,TREAD,TREND,TRIAD,TRIAL,TRIBE,TRICK,TWICE,TWINS,ULCER,ULTRA,UNCLE,UNDER,UNIFY,UNITE,UNITY,UPSET,URBAN,USAGE,VAGUE,VALID,VALUE,VIDEO,VIRAL,VITAL,VOCAL,VODKA,VOICE,VOWEL,WAFER,WAGED,WAGER,WAGON,WAIST,WAIVE,WASTE,WATCH,WATER,WEARY,WEIGH,WEIRD,WHALE,WHARF,WHEAT,WHILE,WHITE,WHOLE,WHOSE,WIDEN,WIDTH,WINDY,WOMAN,WOMEN,WORLD,WORSE,WORST,WORTH,WOULD,WOUND,WOVEN,WRECK,WRITE,WRONG,YEAST,YIELD,YOUNG,YOUTH"
    const listOfWords = validWords.split(",")
    secreteWord = listOfWords[Math.floor(Math.random() * (listOfWords.length - 0 + 1) + 0)]
    setWords({
      suggestedWords: [],
      currentWord: "",
      secretWord: secreteWord,
      grayLetters: [],
      yellowLetters: [],
      greenLetters: [],
      locatedOfLetters: {},
      robotVocabulary: listOfWords,
      isRobotTurn: false,
      level: 3,
      gameStatuse : "",
      winner: "",
    })
  }, [])
  // useEffect(() => {
  //   robotFuction(words, setWords)
  //   // if (words.isRobotTurn) {
  //   //   //level easy
  //   //   //const robotDesiton =words.robotVocabulary[Math.floor(Math.random() * (words.robotVocabulary.length - 0 + 1) + 0)]
  //   //   //words.suggestedWords.push(robotDesiton)
  //   //   //words.isRobotTurn = false
  //   //   //setWords({...words})

  //   //   //level regualr
  //   //   /** const grayLetters = new Set(words.grayLetters)
  //   //   grayLetters.delete(undefined)
  //   //   let wordsToChoose = words.robotVocabulary
  //   //   const newList = wordsToChoose.filter(element => {
  //   //     let isThere = false
  //   //     Array.from(grayLetters).forEach((item) => {
  //   //       if (element.includes(item)) {
  //   //         isThere = true
  //   //       }
  //   //     })
  //   //     return isThere === false
  //   //   }
  //   //   )
  //   //   const robotDesiton = newList[Math.floor(Math.random() * (newList.length - 0 + 1) + 0)]
  //   //   words.suggestedWords.push(robotDesiton)
  //   //   words.isRobotTurn = false
  //   //   words.robotVocabulary = newList
  //   //   setWords({ ...words })**/

  //   //   //level hard
  //   //   const grayLetters = new Set(words.grayLetters)
  //   //   grayLetters.delete(undefined)
  //   //   let wordsToChoose = words.robotVocabulary
  //   //   const newList = wordsToChoose.filter(element => {
  //   //     let isThere = false
  //   //     Array.from(grayLetters).forEach((item) => {
  //   //       if (element.includes(item)) {
  //   //         isThere = true
  //   //       }
  //   //     })
  //   //     return isThere === false
  //   //   }
  //   //   )
  //   //   console.log({newList:newList.length , array : newList})
  //   //   const yellowLeters = new Set(words.yellowLetters)
  //   //   yellowLeters.delete(undefined)
  //   //   const newList1 = newList.filter(element => {
  //   //     let isThere = false
  //   //     Array.from(yellowLeters).forEach((item) => {
  //   //       if (element.includes(item)) {
  //   //         isThere = true
  //   //       }
  //   //     })
  //   //     return isThere === true
  //   //   }
  //   //   )
  //   //   console.log({newList1:newList1.length , array : newList1})
  //   //   if (words.greenLetters == []) {
  //   //     const newList2 = newList1.filter((element)=>{
  //   //       let isOkey = false
  //   //       const lettersOfElement = element.split("")
  //   //       Object.keys(words.locatedOfLetters).forEach((item)=>{
  //   //          if (lettersOfElement[item] === words.locatedOfLetters[item]) {
  //   //           isOkey = true
  //   //          }
  //   //       })
  //   //       return isOkey === true
  //   //     })
  //   //     console.log({newList2 : newList2.length , array : newList2})
  //   //     const randNum = Math.floor(Math.random() * (newList2.length + 1))
  //   //     let robotDesiton = ""
  //   //     if (newList1.length == 1){
  //   //       robotDesiton = newList2[0]
  //   //     } else {
  //   //       robotDesiton = newList2[randNum]
  //   //     }
  //   //     words.suggestedWords.push(robotDesiton)
  //   //     words.isRobotTurn = false
  //   //     words.robotVocabulary = newList2
  //   //     setWords({ ...words })
  //   //   } else {
  //   //     const randNum = Math.floor(Math.random() * (newList1.length+ 1))
  //   //     let robotDesiton = ""
  //   //     if (newList1.length == 1){
  //   //       robotDesiton = newList1[0]
  //   //     } else {
  //   //       robotDesiton = newList1[randNum]
  //   //     }
  //   //     words.suggestedWords.push(robotDesiton)
  //   //     words.isRobotTurn = false
  //   //     words.robotVocabulary = newList1
  //   //     setWords({ ...words })
  //   //   }

  //   // }
  // }, [words])
  // const suggestedWords = words.suggestedWords
  // //setInterval(()=>{},20000)

  return (
    <Routes>
      {Object.keys(routes).map((route) => {
        return (
          <Route
            element={routes[route].element}
            path={routes[route].path}
          />
        );
      })}
    </Routes>
    // <div className="mx-10 flex flex-col items-center h-screen mt-2">
    //   <div className='bg-gray-100 w-96 grow flex flex-col items-center'>
    //     {suggestedWords && suggestedWords.map((element) => <Inputs className="mb-0" word={element} isAccepted={true} />)}
    //   </div>
    //   {suggestedWords && <Inputs className="" word={words.currentWord} isAccepted={false} />}
    //   <Keyboard />
    // </div>
  )
}

export default App
