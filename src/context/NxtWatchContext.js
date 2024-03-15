import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  updateTab: () => {},
  addVideos: () => {},
})

export default NxtWatchContext
