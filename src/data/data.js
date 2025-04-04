export const navigation= {
    "logo": "/images/logo.png",
    "items": [
      {
        "id": "startseite",
        "text": "Startseite",
        "link": "startseite"
      },
      {
        "id": "bodiman",
        "text": "Über Bodiman",
        "link": "bodiman"
      },
      {
        "id": "about",
        "text": "das Projekt",
        "link": "about"
      },

      {
        "id": "reise",
        "text": "Reise nach Kamerun",
        "link": "reise"
      },
    
      {
        "id": "kontakt",
        "text": "Kontakt",
        "link": "kontakt"
      }
   
    ],
    "cta": {
      "donateText": "Spenden",
      "text": "Jetzt Spenden",
      "donateLink": "spenden",   
      "link": "https://gofund.me/4f3045a1"
    }
  }


  export const projectData = {
    title: "Rettet Bodiman – Gemeinsam für den Erhalt eines bedrohten Dorfes!",
    description: `
      Das Dorf Bodiman in Kamerun steht kurz vor dem Verschwinden. Eine chinesische Multinationale will das Land übernehmen, 
      während wertvolle Wälder unkontrolliert abgeholzt werden. Ohne mindestens fünf bewohnte Häuser verliert Bodiman seinen 
      offiziellen Dorfstatus und könnte verkauft werden. Unsere Mission: 5 nachhaltige Häuser bauen, um die Zukunft des Dorfes 
      zu sichern!`,
    goalsSection: {
      title: "Unser Ziel: Mit 25.000€ 5 Häuser für Bodiman bauen!",
      goalsTitle:"Was wir erreichen wollen:",
      description: `
      Damit Bodiman seinen Status als Dorf behält, müssen mindestens fünf Häuser aus gebrannten Lehmziegeln gebaut werden.
      Diese Häuser bieten nicht nur Wohnraum, sondern schützen auch das Land vor Verkauf und Umweltzerstörung.`,
      goals: [
        "Den offiziellen Status von Bodiman als Dorf erhalten",
        "Die Umweltzerstörung durch illegale Abholzung stoppen",
        "Den Einheimischen ermöglichen, in ihrer Heimat zu bleiben",
        "Nachhaltige Entwicklung durch Ökotourismus fördern"
      ],
      image: {
        url: "/images/house.png",
        alt: "Nachhaltige Ziegelhäuser"
      }
    },
    images: [
      {
        url: "/images/nature.png",
        alt: "Das Dorf Bodiman in Kamerun"
      },
      {
        url: "/images/travel.png",
        alt: "Abholzung in Kamerun"
      }
    ],
    projectLeader: {
      name: "Bernard Ngassa",
      location: "Deutschland & Kamerun",
      bio: "Bernard Ngassa ist Gründer der Initiative Rettet Bodiman. Jedes Jahr reist er nach Kamerun, um nachhaltige Projekte zu unterstützen.",
      image: {
        url: "/images/bernard-ngassa.jpg",
        alt: "Bernard Ngassa – Gründer des Projekts"
      }
    },
    travelSection: {
      title: " Reise nach Kamerun – Erlebe das Projekt hautnah!",
      description: `
        Du möchtest nicht nur spenden, sondern mit eigenen Augen sehen, wofür du kämpfst? Dann begleite uns nach Kamerun! 
        Besuche Bodiman, erlebe die Kultur und hilf aktiv beim Bau der Häuser mit.`,
       itinaryTitle:"Reiseverlauf",
      itinerary: [
        "Tag 1-2: Ankunft & Einführung ins Projekt",
        "Tag 3-5: Besuch von Bodiman, Gespräche mit Einheimischen",
        "Tag 6-7: Kulturelle Ausflüge & Ökotourismus",
        "Tag 8: Abschluss & Rückreise"
      ],
      cta: {
        text: "Mehr erfahren",
        link: "/reise"
      },
      image: {
        url: "/images/cameroon-travel.jpg",
        alt: "Reisegruppe in Kamerun"
      }
    },
    donationSection: {
      title: "💶 Deine Hilfe zählt! Jetzt spenden und Bodiman retten!",
      description: `
        Um unser Ziel zu erreichen, brauchen wir 25.000 € für den Bau der Häuser. Jeder Beitrag zählt und bringt uns 
        einen Schritt näher zur Rettung von Bodiman.`,
      methods: [
        "Banküberweisung",
        "PayPal / GoFundMe / Leetchi",
        "Sachspenden (Baumaterial, Schulmaterial etc.)"
      ],
      transparency: {
        reports: [
          {
            title: "Finanzbericht Q1 2024",
            url: "/reports/q1-2024.pdf"
          },
          {
            title: "Fortschrittsbericht Mai 2024",
            url: "/reports/may-2024.pdf"
          }
        ],
        description: "Wir veröffentlichen regelmäßig Berichte über die Verwendung der Spendengelder, um maximale Transparenz zu gewährleisten."
      },
      cta: {
        text: "Jetzt spenden",
        link: "https://gofund.me/4f3045a1"
      },
      image: {
        url: "/images/donation.jpg",
        alt: "Spenden für Bodiman"
      }
    },
    partners: [
      {
        name: "Afrika Umwelt e.V.",
        logo: "/images/afrika-umwelt-logo.png",
        website: "https://afrika-umwelt.de"
      },
      {
        name: "Green Future Kamerun",
        logo: "/images/green-future-logo.png",
        website: "https://greenfuture.cm"
      }
    ],
    socialMedia: {
      facebook: "https://facebook.com/rettetbodiman",
      instagram: "https://instagram.com/rettetbodiman",
      twitter: "https://twitter.com/rettetbodiman"
    },
    contact: {
      title: "📩 Kontaktieren Sie mich",
      email: "Email:",
      emailLink: "mailto:berlioz2001@yahoo.fr",
      phone: "+49 123 456 789",
      address:"Adresse:",
      addressLink: "Humboldtstarße 32, 26121 Oldenburg",
      faqTitle: "💡 Fragen und antworten",
      faq: [
        {
          id: 0,
          question: "Wie sicher ist die Reise?",
          answer: `
            Die Sicherheit der Teilnehmer hat höchste Priorität. Wir arbeiten mit lokalen Partnern und erfahrenen Reiseleitern zusammen. 
            Zudem achten wir darauf, nur sichere Routen und Unterkünfte zu nutzen. Kamerun hat in einigen Regionen Sicherheitsprobleme, 
            aber unsere Reisen sind sorgfältig geplant, um Risiken zu minimieren.`
        },
        {
          id: 1,
          question: "Benötigt man ein Visum?",
          answer: `
            Ja, für die Einreise nach Kamerun ist ein Visum erforderlich. Dieses kann bei der kamerunischen Botschaft in deinem Land beantragt werden. 
            Wir helfen dir gerne mit den notwendigen Unterlagen und Anträgen.`
        },
        {
          question: "Welche Impfungen sind erforderlich?",
          answer: `
            Eine Gelbfieberimpfung ist Pflicht für die Einreise nach Kamerun. Darüber hinaus empfehlen wir Impfungen gegen Hepatitis A & B, Typhus und Tetanus. 
            Besprich deine Reisepläne am besten mit einem Tropenmediziner.`
        },
        {
          id: 3,
          question: "Kann ich helfen, ohne zu reisen?",
          answer: `
            Absolut! Es gibt viele Möglichkeiten zu helfen: 
            - Durch eine **Spende**, um den Bau der Häuser zu finanzieren.  
            - Indem du unser Projekt auf **Social Media** teilst.  
            - Oder als **Freiwilliger**, um Online-Kampagnen zu unterstützen.`
        }
      ],
      image: {
        url: "/images/contact-us.jpg",
        alt: "Kontaktaufnahme"
      }
    }
  };

  export const villageInfo = {
    name: "Bodiman",
    region: "Fanda, Nord-Makombe,  Kamerun. ",
    location: "Standort:",
    image: "/images/nature.png",
    description: "Bodiman ist ein kleines Dorf in der Region Nord-Makombe, und ist ein Territorium von dem Dorf Fanda. Einst eine typische ländliche Gemeinschaft, ist das Dorf heute unbewohnt und wird aufgrund seiner natürlichen Ressourcen genutzt.",
    history: {
      title: "Die Geschichte von Bodiman",
      origins: "Bodiman wurde wahrscheinlich von lokalen ethnischen Gruppen wie den Fulbe oder Tikar gegründet, die sich in der Region niederließen, um die fruchtbaren Böden und natürlichen Ressourcen zu nutzen.",
      colonialPeriod: "Während der Kolonialzeit (zuerst unter deutscher, dann unter französischer Herrschaft) wurde das Dorf in größere Verwaltungsstrukturen integriert. Die Kolonialherren führten neue landwirtschaftliche Praktiken wie den Baumwollanbau ein, was das traditionelle Leben der Dorfbewohner veränderte.",
      postIndependence: "Nach der Unabhängigkeit Kameruns im Jahr 1960 musste sich Bodiman an die neuen politischen und wirtschaftlichen Realitäten anpassen. Die Entwicklung der ländlichen Infrastruktur verlief langsam, und das Dorf blieb weitgehend von der Subsistenzlandwirtschaft abhängig."
    },
    culture: {
      title: "Kultur und Traditionen",
      ceremonies: "Hochzeiten, Beerdigungen und landwirtschaftliche Feste wurden mit traditionellen Tänzen, Gesängen und Ritualen gefeiert.",
      agriculture: "Die lokale Wirtschaft basierte auf dem Anbau von Grundnahrungsmitteln wie Mais, Hirse und Sorghum sowie auf der Viehzucht.",
      oralTradition: "Die ältere Generation spielte eine zentrale Rolle bei der Weitergabe von Geschichte und Werten an die Jugend."
    },
    currentSituation: {
      title: "Aktuelle Situation",
      inhabitants: "Heute hat Bodiman keine Einwohner mehr. Das Dorf wurde aufgrund verschiedener Faktoren, darunter Landflucht und wirtschaftlicher Druck, aufgegeben.",
      exploitation: "Das Dorf wird nun von Holzindustrien genutzt, die seine natürlichen Ressourcen, insbesondere seine Wälder und wertvollen Hölzer, ausbeuten."
    },
    challenges:{
      title: "Herausforderungen",
      challengesArray: [
        "Fehlende Infrastruktur (Straßen, Schulen, Gesundheitszentren).",
        "Landflucht, da junge Menschen in Städte abwandern, um bessere Möglichkeiten zu finden.",
        "Die Auswirkungen des Klimawandels auf die Landwirtschaft.",
        "Intensive Ausbeutung der natürlichen Ressourcen durch externe Industrien."
      ]
    },

    significations: {
      title: "Signifikante Erkenntnisse",
      significance: "Bodiman ist ein Symbol für die kulturelle Vielfalt und die Widerstandsfähigkeit ländlicher Gemeinden in Kamerun. Seine Geschichte und seine Aufgabe unterstreichen die Herausforderungen, mit denen viele ländliche Dörfer in Afrika konfrontiert sind. Die Dokumentation seiner Geschichte hilft, sein Erbe zu bewahren und das Bewusstsein für die Probleme der Ressourcenausbeutung zu schärfen."
    },
    
  };

  export const footerSimple = {
    copyright: `© ${new Date().getFullYear()} Rettet Bodiman. Alle Rechte vorbehalten.`,
    impressum: { name: "Impressum", link: "#",
      data : {
       
        description: "Rettet Bodiman",
        descriptionTitle: "Verantwortlicher Person:",
        responsible: {
          name: "Bernard Ngassa",
          address: "Humboldtstraße 32, 26121 Oldenburg",
          email: "berlioz2001@yahoo.fr",
          phone: ""
        },
        cookies: "",
        liability: {
          content: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir jedoch keine Gewähr.",
          links: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb übernehmen wir für diese fremden Inhalte auch keine Gewähr."
        },
    
        rights: {
          title: "Urheberrecht",
           description: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
        contact: "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies stets auf freiwilliger Basis. Weitere Informationen findest du in unserer Datenschutzerklärung."
        }
      }
     },
     privacyPolicy: { name: "Datenschutz", link: "#",
      data : {
      
       description: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.",
       descriptionTitle: "Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Anfrage oder Spende freiwillig mitteilen. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
        responsible: {
          name: "Name,",
          address: "Straße,",
          email: "Email,",
          phone: "Telefone",

          
        },
        cookies: "Unsere Website verwendet Cookies, um die Nutzung für Sie zu verbessern. Sie können die Speicherung der Cookies in Ihrem Browser deaktivieren.",
        liability: {
          content: "Wir nutzen Google Analytics zur anonymisierten Auswertung der Website-Nutzung. Ihre IP-Adresse wird gekürzt, sodass kein Rückschluss auf Ihre Person möglich ist.",
          links: "Diese Website enthält Links zu externen Webseiten Dritter. Wir haben keinen Einfluss auf deren Datenschutzpraktiken."
        },
        rights: {
          title: "Ihre Rechte",
          description: "Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie auf Berichtigung, Sperrung oder Löschung dieser Daten.",
          contact: "Falls Sie Fragen zum Datenschutz haben, können Sie uns jederzeit unter berlioz2001@yahoo.fr kontaktieren."
        }
      }
     }
  };

  export const spendenData = {
    title: "Unterstütze Rettet Bodiman!",
    description: "Unsere Spendenaktion läuft aktuell über GoFundMe. Mit deiner Hilfe können wir 5 Häuser in Bodiman bauen und das Dorf vor dem Verkauf an multinationale Unternehmen schützen.",
    gofundme: {
      link: "https://www.gofundme.com/f/rettet-bodiman",
      text: "Jetzt auf GoFundMe spenden"
    },
    goal: "Unser Ziel: 25.000€ für den Bau von 5 Häusern aus gebrannten Lehmziegeln!",
    impact: "Jede Spende hilft dabei, den Bewohnern von Bodiman eine Zukunft zu sichern und ihr Dorf vor der Zerstörung zu bewahren."
  };
  

  