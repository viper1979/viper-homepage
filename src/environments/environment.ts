// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  charts: {
    visitorChart: {
      label: 'Anzahl Besucher pro Land',
      backgroundColors: [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)'
      ]
    }
  },
  donation: {
    addresses: [
      {
        currency: 'ETH',
        renderQR: true,
        showSymbol: false,
        address: 'patricknoll.eth'
      },
      {
        currency: 'BTC',
        renderQR: true,
        showSymbol: false,
        address: '1ViperZUz1UKwNqdVFdkJ175U5dAaEvpR'
      },
      {
        currency: 'LTC',
        renderQR: true,
        showSymbol: false,
        address: 'LdXjW27CSHueDTQf1GDGm7toMerPr8a47Y'
      },
    ]
  }
};
