import NxtWatchContext from '../../context/NxtWatchContext'
import {
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const FailureView = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {onRetry} = props
      const onClickRetry = () => {
        onRetry()
      }
      const color = isDarkTheme ? '#f8fafc' : '#212121'
      const failureImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

      return (
        <FailureViewContainer>
          <FailureImage src={failureImgUrl} alt="failure view" />
          <FailureHeading color={color}>
            OOPS! Something Went Wrong
          </FailureHeading>
          <FailureDesc color={color}>
            We are having some trouble to complete your request. Please try
            again.
          </FailureDesc>
          <RetryButton type="button" onClick={onClickRetry}>
            Retry
          </RetryButton>
        </FailureViewContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default FailureView
