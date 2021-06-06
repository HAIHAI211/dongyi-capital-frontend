const middleware = ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) => {
    if (process.client) {
        console.log('middleware')
        document.body.classList.add('haha')
    }
}

export default middleware
