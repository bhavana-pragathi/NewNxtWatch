import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Video from './components/Video'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {savedVideos: [], isDark: false, activeTab: 'Home'}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = videoId => {
    const {savedVideos} = this.state
    const videoIndex = savedVideos.findIndex(
      eachVideo => eachVideo.id === videoId.id,
    )
    if (videoIndex === -1) {
      this.setState({savedVideos: [...savedVideos, videoId]})
    } else {
      savedVideos.splice(videoIndex, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedVideos = savedVideos.filter(eachVideo => eachVideo.id !== id)
    this.setState({savedVideos: updatedVideos})
  }

  render() {
    const {savedVideos, isDark, activeTab} = this.state
    return (
      <ThemeContext.Provider
        value={{
          savedVideos,
          isDark,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={Video} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
