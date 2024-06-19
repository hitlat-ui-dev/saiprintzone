import React from 'react'
import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div id="loading-overlay" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">

<Spinner aria-label="Default status example" />
    <span class="text-white text-3xl font-bold ml-5">Loading...</span>

</div>
  )
}

export default Loading