import './App.css'
import Helpful from './components/Helpful'

const App = () => {

  return (
    <div className="App">
      <h1> Cybersecurity Resources</h1>
      <div class = 'row'>
      <Helpful title="w3Schools" description="A good resource for coding" url="http://w3schools.com" />
      <Helpful title="CISA" description="A good resource for CISA" url="https://www.cisa.gov/" />
      <Helpful title="Hacker News" description="A Good resource for news" url="https://thehackernews.com" />
      <Helpful title="Cyber Blog" description="A Good cyber blog for learning" url="https://grahamcluley.com/" />
      </div>
      <div class = 'row'>
      <Helpful title="Schneier" description="Another Cyber Blog for learning" url="https://www.schneier.com/" />
      <Helpful title="Krebs" description="More Cyber blog for learning" url="https://krebsonsecurity.com/" />
      <Helpful title="CSO" description="A Cyber Magazine for reading" url="https://www.csoonline.com/in/" />
      <Helpful title="Dark Reading" description="Yet another Cyber Magazine" url="https://www.darkreading.com/" />
      </div>
      <div class = 'row'>
      <Helpful title="ThreatPost" description="More cyber magazines for all" url="https://threatpost.com/" />
      <Helpful title="WeLiveSecurity" description="IT Security site for you and me" url="https://www.welivesecurity.com/" />
      <Helpful title="NakedSecurity" description="Security news for one and all" url="https://nakedsecurity.sophos.com/" />
      <Helpful title="Infosecurity" description="More Cyber Magazines for everyone" url="https://www.infosecurity-magazine.com/" />
      </div>
    </div>
  )
}

export default App