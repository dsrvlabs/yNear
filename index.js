const { exec, spawn } = require('child_process')
const path = require('path')
const express = require('express')
const app = express()
const port = 4200

app.get('/near2eth/:nearAccountId/:nearTransferTx/:amount/:ethAddress', (req, res) => {
  let args = req.params['nearAccountId'] + ' ' + req.params['nearTransferTx'] + ' ' + req.params['amount'] + ' ' + req.params['ethAddress']
  exec('node commands/peek_near2eth.js ' + args, (err, stdout, stderr) => {
    let handle = spawn('node',
      ['commands/near2eth.js', req.params['nearAccountId'], req.params['nearTransferTx'], req.params['amount'], req.params['ethAddress']],
      {
        detached: true,
        stdio: 'ignore'
      })
    handle.unref()
    res.send(stdout)
  })
})

app.use('/', express.static(path.join(__dirname, 'public')))

// https://heu.io/posts/push-state-with-nodejs-and-express
// https://gist.github.com/therebelrobot/747953c392d8a6ed5aaf
app.get('*', function(request, response){
  response.sendFile(path.join(__dirname, '/public_html/index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
