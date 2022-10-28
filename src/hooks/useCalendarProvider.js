import { saveMeetingAction, loadMeetingsAction } from '../actions/calendar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const useProvider = (apiUrl) => {
  const dispatch = useDispatch()

  const loadMeetingsFromApi = () => {
    _fetch()
      .then((resp) => {
        dispatch(loadMeetingsAction(resp))
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const sendMeetingToApi = (meetingData) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(meetingData),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    _fetch(options)
      .then((meetingData) => {
        dispatch(saveMeetingAction(meetingData))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const _fetch = (options = {}, additionalPath = '') => {
    const url = `${apiUrl}${additionalPath}`
    return fetch(url, options).then((resp) => {
      if (resp.ok) return resp.json()
      throw new Error('Network error!')
    })
  }

  useEffect(() => {
    loadMeetingsFromApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [loadMeetingsFromApi, sendMeetingToApi]
}

export default useProvider
