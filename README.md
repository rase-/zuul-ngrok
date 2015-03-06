zuul-ngrok
==========

Uses `ngrok` as a tunneling service to run [Zuul](http://github.com/defunctzombie/zuul) exposed to the world, also used when running tests in Saucelabs.

Any `ngrok` node module options can be specified in `.zuul.yml` in the `tunnel` section. For details see the [module pages](https://www.npmjs.com/package/ngrok).

Here is an example:

```
tunnel:
  type: ngrok
  authtoken: JnawIksKFkXQzrxSjIjQ
  subdomain: doge
```

and another one:

```
tunnel:
  type: ngrok
  authtoken: JnawIksKFkXQzrxSjIjQ
  proto: tcp
```

In fact tcp-mode is a special case. If `proto` is specified, the `tcp://` prefix is replaced with `http://` for the Zuul tests to run.

Sometimes `ngrok` recycles subdomains which can lead to some restarts when running tests on multiple browsers. To be more sure that this doesn't happen you can specify a special `subdomain` tunnel option to force a long generated subdomain:

```
tunnel:
  type: ngrok
  authtoken: JnawIksKFkXQzrxSjIjQ
  subdomain: @unique
```

To specify this option (or any subdomain of your choosing) you need to specify the `authtoken` option as well.
