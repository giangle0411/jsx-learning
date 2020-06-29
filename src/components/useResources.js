import { useState, useEffect } from 'react'
import axios from 'axios'

const useResources = (resource) => {
  const [resources, setResources] = useState([])

  useEffect(() => {
    // fetchResource(resource)
    ;(async (resource) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      )

      setResources(response.data)
    })(resource)
  }, [resource])

  return resources
  //   const fetchResource = async () => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${resource}`
  //   )

  //   setResources(response.data)
  //  }
}

export default useResources
