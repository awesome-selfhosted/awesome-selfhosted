# Awesome-Selfhosted

[![Awesome](_static/awesome.png)](https://github.com/sindresorhus/awesome) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-dead-links.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/check-unmaintained-projects.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted-data/issues/1) [![](https://img.shields.io/liberapay/goal/awesome-selfhosted?logo=liberapay)](https://liberapay.com/awesome-selfhosted/)

Self-hosting is the practice of hosting and managing applications on your own server(s) instead of consuming from [SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html) providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted on your own server(s). Non-Free software is listed on the [Non-Free](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/non-free.md) page.

**[HTML version](https://awesome-selfhosted.net/) (recommended)**, [Markdown version](https://github.com/awesome-selfhosted/awesome-selfhosted) (legacy).

See [Contributing](#contributing).

--------------------

## Table of contents

- [Software](#software)
  - [Analytics](#analytics)
  - [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)
  - [Automation](#automation)
  - [Backup](#backup)
  - [Blogging Platforms](#blogging-platforms)
  - [Booking and Scheduling](#booking-and-scheduling)
  - [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)
  - [Calendar & Contacts](#calendar--contacts)
  - [Communication - Custom Communication Systems](#communication---custom-communication-systems)
  - [Communication - Email - Complete Solutions](#communication---email---complete-solutions)
  - [Communication - Email - Mail Delivery Agents](#communication---email---mail-delivery-agents)
  - [Communication - Email - Mail Transfer Agents](#communication---email---mail-transfer-agents)
  - [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters)
  - [Communication - Email - Webmail Clients](#communication---email---webmail-clients)
  - [Communication - IRC](#communication---irc)
  - [Communication - SIP](#communication---sip)
  - [Communication - Social Networks and Forums](#communication---social-networks-and-forums)
  - [Communication - Video Conferencing](#communication---video-conferencing)
  - [Communication - XMPP - Servers](#communication---xmpp---servers)
  - [Communication - XMPP - Web Clients](#communication---xmpp---web-clients)
  - [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)
  - [Conference Management](#conference-management)
  - [Content Management Systems (CMS)](#content-management-systems-cms)
  - [Customer Relationship Management (CRM)](#customer-relationship-management-crm)
  - [Database Management](#database-management)
  - [DNS](#dns)
  - [Document Management](#document-management)
  - [Document Management - E-books](#document-management---e-books)
  - [Document Management - Institutional Repository and Digital Library Software](#document-management---institutional-repository-and-digital-library-software)
  - [Document Management - Integrated Library Systems (ILS)](#document-management---integrated-library-systems-ils)
  - [E-commerce](#e-commerce)
  - [Federated Identity & Authentication](#federated-identity--authentication)
  - [Feed Readers](#feed-readers)
  - [File Transfer & Synchronization](#file-transfer--synchronization)
  - [File Transfer - Distributed Filesystems](#file-transfer---distributed-filesystems)
  - [File Transfer - Object Storage & File Servers](#file-transfer---object-storage--file-servers)
  - [File Transfer - Peer-to-peer Filesharing](#file-transfer---peer-to-peer-filesharing)
  - [File Transfer - Single-click & Drag-n-drop Upload](#file-transfer---single-click--drag-n-drop-upload)
  - [File Transfer - Web-based File Managers](#file-transfer---web-based-file-managers)
  - [Games](#games)
  - [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)
  - [Genealogy](#genealogy)
  - [Generative Artificial Intelligence (GenAI)](#generative-artificial-intelligence-genai)
  - [Groupware](#groupware)
  - [Health and Fitness](#health-and-fitness)
  - [Human Resources Management (HRM)](#human-resources-management-hrm)
  - [Identity Management](#identity-management)
  - [Internet of Things (IoT)](#internet-of-things-iot)
  - [Inventory Management](#inventory-management)
  - [Knowledge Management Tools](#knowledge-management-tools)
  - [Learning and Courses](#learning-and-courses)
  - [Manufacturing](#manufacturing)
  - [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)
  - [Media Management](#media-management)
  - [Media Streaming](#media-streaming)
  - [Media Streaming - Audio Streaming](#media-streaming---audio-streaming)
  - [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming)
  - [Media Streaming - Video Streaming](#media-streaming---video-streaming)
  - [Miscellaneous](#miscellaneous)
  - [Money, Budgeting & Management](#money-budgeting--management)
  - [Monitoring](#monitoring)
  - [Note-taking & Editors](#note-taking--editors)
  - [Office Suites](#office-suites)
  - [Password Managers](#password-managers)
  - [Pastebins](#pastebins)
  - [Personal Dashboards](#personal-dashboards)
  - [Photo Galleries](#photo-galleries)
  - [Polls and Events](#polls-and-events)
  - [Proxy](#proxy)
  - [Recipe Management](#recipe-management)
  - [Remote Access](#remote-access)
  - [Resource Planning](#resource-planning)
  - [Search Engines](#search-engines)
  - [Self-hosting Solutions](#self-hosting-solutions)
  - [Software Development](#software-development)
  - [Software Development - API Management](#software-development---api-management)
  - [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)
  - [Software Development - FaaS & Serverless](#software-development---faas--serverless)
  - [Software Development - Feature Toggle](#software-development---feature-toggle)
  - [Software Development - IDE & Tools](#software-development---ide--tools)
  - [Software Development - Localization](#software-development---localization)
  - [Software Development - Low Code](#software-development---low-code)
  - [Software Development - Project Management](#software-development---project-management)
  - [Software Development - Testing](#software-development---testing)
  - [Static Site Generators](#static-site-generators)
  - [Status / Uptime pages](#status--uptime-pages)
  - [Task Management & To-do Lists](#task-management--to-do-lists)
  - [Ticketing](#ticketing)
  - [Time Tracking](#time-tracking)
  - [URL Shorteners](#url-shorteners)
  - [Video Surveillance](#video-surveillance)
  - [VPN](#vpn)
  - [Web Servers](#web-servers)
  - [Wikis](#wikis)
- [List of Licenses](#list-of-licenses)
- [Anti-features](#anti-features)
- [External Links](#external-links)
- [Contributing](#contributing)
- [License](#license)

--------------------

## Software

### Analytics

**[`^        back to top        ^`](#awesome-selfhosted)**

[Analytics](https://en.wikipedia.org/wiki/Analytics) is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data.

_Related: [Database Management](#database-management), [Personal Dashboards](#personal-dashboards)_

- [Aptabase](https://aptabase.com/) - Privacy first and simple analytics for mobile and desktop apps. ([Source Code](https://github.com/aptabase/aptabase)) `AGPL-3.0` `Docker`
- [AWStats](http://www.awstats.org/) - Generate statistics from web, streaming, ftp or mail server logfiles. ([Demo](https://www.awstats.org/#DEMO), [Source Code](https://github.com/eldy/awstats)) `GPL-3.0` `Perl`
- [Countly Community Edition](https://count.ly) - Real time mobile and web analytics, crash reporting and push notifications platform. ([Source Code](https://github.com/Countly/countly-server)) `AGPL-3.0` `Nodejs/Docker`
- [Daily Stars Explorer](https://emanuelef.github.io/daily-stars-explorer) `⚠` - Track GitHub repo trends with daily star insights to see growth and community interest over time. ([Demo](https://emanuelef.github.io/daily-stars-explorer), [Source Code](https://github.com/emanuelef/daily-stars-explorer)) `MIT` `Go/Nodejs/Docker`
- [Druid](https://druid.apache.org) - Distributed, column-oriented, real-time analytics data store. ([Source Code](https://github.com/apache/druid)) `Apache-2.0` `Java/Docker`
- [EDA](https://github.com/jortilles/EDA) - Web application for data analysis and visualization. `AGPL-3.0` `Nodejs/Docker`
- [ghstats](https://github.com/vladkens/ghstats) `⚠` - Dashboard for tracking GitHub repos traffic history longer than 14 days. `MIT` `Docker`
- [GoAccess](http://goaccess.io/) - Real-time web log analyzer and interactive viewer that runs in a terminal. ([Source Code](https://github.com/allinurl/goaccess)) `GPL-2.0` `C`
- [GoatCounter](https://www.goatcounter.com) - Easy web statistics without tracking of personal data. ([Source Code](https://github.com/arp242/goatcounter)) `EUPL-1.2` `Go`
- [Litlyx](https://litlyx.com) - All-in-one Analytics Solution. Setup in 30 seconds. Display all your data on an AI-powered dashboard. Fully self-hostable and GDPR compliant. ([Source Code](https://github.com/Litlyx/litlyx)) `Apache-2.0` `Docker`
- [Liwan](https://liwan.dev/) - Privacy-first web analytics. ([Demo](https://demo.liwan.dev/p/liwan.dev), [Source Code](https://github.com/explodingcamera/liwan)) `Apache-2.0` `Rust/Docker`
- [Matomo](https://matomo.org/) - Web analytics that protects your data and your customers' privacy (alternative to Google Analytics). ([Source Code](https://github.com/matomo-org/matomo)) `GPL-3.0` `PHP`
- [Medama Analytics](https://oss.medama.io) - Privacy-first website analytics. Tiny, simple, and cookie-free. ([Demo](https://demo.medama.io), [Source Code](https://github.com/medama-io/medama)) `Apache-2.0/MIT` `Docker/Go`
- [Metabase](https://metabase.com/) - Easy way for everyone in your company to ask questions and learn from data. ([Source Code](https://github.com/metabase/metabase)) `AGPL-3.0` `Java/Docker`
- [Middleware](https://middlewarehq.com/) - Tool designed to help engineering leaders measure and analyze the effectiveness of their teams using the DORA metrics. ([Source Code](https://github.com/middlewarehq/middleware)) `Apache-2.0` `Docker/Python/Nodejs`
- [Mixpost](https://mixpost.app/) - Social media management software to easily create, schedule, publish, and manage social media content in one place (alternative to Hootsuite and Buffer). ([Source Code](https://github.com/inovector/MixpostApp)) `MIT` `PHP/Docker`
- [Netron](https://netron.app/) - Visualizer for neural network and machine learning models. ([Source Code](https://github.com/lutzroeder/netron)) `MIT` `Python/Nodejs`
- [Offen](https://www.offen.dev/) - Fair, lightweight and open web analytics tool. Gain insights while your users have full access to their data. ([Demo](https://www.offen.dev/try-demo/), [Source Code](https://github.com/offen/offen)) `Apache-2.0` `Go/Docker`
- [Plausible Analytics](https://plausible.io/) - Simple, lightweight (< 1 KB) and privacy-friendly web analytics. ([Source Code](https://github.com/plausible/analytics/)) `AGPL-3.0` `Elixir`
- [PostHog](https://posthog.com) - Product analytics, session recording, feature flagging and a/b testing that you can self-host (alternative to Mixpanel, Amplitude, Heap, HotJar, Optimizely). ([Source Code](https://github.com/posthog/posthog)) `MIT` `Python`
- [Postiz](https://postiz.com) `⚠` - Schedule posts, track the performance of your content, and manage all your social media accounts in one place (Alternative to Buffer, Hootsuite, Sprout Social). ([Source Code](https://github.com/gitroomhq/postiz-app)) `AGPL-3.0` `Docker`
- [Prisme Analytics](https://www.prismeanalytics.com) - Privacy-focused and progressive analytics service based on Grafana. ([Source Code](https://github.com/prismelabs/analytics)) `AGPL-3.0/MIT` `Docker`
- [Redash](http://redash.io) - Connect and query your data sources, build dashboards to visualize data and share them with your company. ([Source Code](https://github.com/getredash/redash)) `BSD-2-Clause` `Docker`
- [Rybbit](https://rybbit.io) - Web and products analytics that is easy to setup and more intuitive (alternative to Google Analytics). ([Demo](https://demo.rybbit.io/21/), [Source Code](https://github.com/rybbit-io/rybbit)) `AGPL-3.0` `Docker`
- [Shynet](https://github.com/milesmcc/shynet) - Modern, privacy-friendly, and detailed web analytics that works without cookies or JS. `Apache-2.0` `Python/Docker`
- [Socioboard](https://github.com/socioboard/Socioboard-5.0) `⚠` - Social media management, analytics, and reporting platform supporting nine social media networks out-of-the-box. `GPL-3.0` `Nodejs`
- [Statistics for Strava](https://github.com/robiningelbrecht/statistics-for-strava) `⚠` - Statistics dashboard generated from Strava data. ([Demo](https://statistics-for-strava.robiningelbrecht.be/)) `AGPL-3.0` `Docker`
- [Superset](http://superset.apache.org/) - Modern data exploration and visualization platform. ([Source Code](https://github.com/apache/superset)) `Apache-2.0` `Python`
- [Swetrix](https://swetrix.com/) - Ultimate, open-source web analytics to satisfy all your needs. ([Demo](https://swetrix.com/projects/STEzHcB1rALV), [Source Code](https://github.com/Swetrix/selfhosting)) `AGPL-3.0` `Docker`
- [Umami](https://umami.is/) - Simple, fast, privacy-focused alternative to Google Analytics. ([Demo](https://analytics.umami.is/share/LGazGOecbDtaIwDr/umami.is), [Source Code](https://github.com/umami-software/umami)) `MIT` `Nodejs/Docker`
- [Vince](https://www.vinceanalytics.com/) - Web analytics and dashboard (alternative to Google Analytics). ([Demo](https://demo.vinceanalytics.com/v1/share/vinceanalytics.com?auth=Ls9tV4pzqOn7BJ7-&demo=true), [Source Code](https://github.com/vinceanalytics/vince)) `AGPL-3.0` `Go/Docker/K8S/deb`


### Archiving and Digital Preservation (DP)

**[`^        back to top        ^`](#awesome-selfhosted)**

Digital [archiving](https://en.wikipedia.org/wiki/Archival_science) and [preservation](https://en.wikipedia.org/wiki/Digital_preservation) software.

_Related: [Content Management Systems (CMS)](#content-management-systems-cms)_

_See also: [awesome-web-archiving](https://github.com/iipc/awesome-web-archiving)_

- [ArchiveBox](https://archivebox.io/) - Create HTML & screenshot archives of sites from your bookmarks, browsing history, RSS feeds, or other sources (alternative to Wayback Machine). ([Demo](https://demo.archivebox.io/), [Source Code](https://github.com/ArchiveBox/ArchiveBox)) `MIT` `Python/Docker`
- [ArchivesSpace](https://archivesspace.org/) - Archives information management application for managing and providing Web access to archives, manuscripts and digital objects. ([Demo](https://archivesspace.org/application/sandbox), [Source Code](https://github.com/archivesspace/archivesspace)) `ECL-2.0` `Ruby`
- [bitmagnet](https://bitmagnet.io) - BitTorrent indexer, DHT crawler, content classifier and torrent search engine with web UI, GraphQL API and Servarr stack integration. ([Source Code](https://github.com/bitmagnet-io/bitmagnet)) `MIT` `Go/Docker`
- [CKAN](https://ckan.org) - Make open data websites. ([Source Code](https://github.com/ckan/ckan)) `AGPL-3.0` `Python`
- [Collective Access - Providence](https://collectiveaccess.org/) - Highly configurable Web-based framework for management, description, and discovery of digital and physical collections supporting a variety of metadata standards, data types, and media formats. ([Source Code](https://github.com/collectiveaccess/providence)) `GPL-3.0` `PHP`
- [Ganymede](https://github.com/Zibbp/ganymede) `⚠` - Twitch VOD and live stream archiving platform. Includes a rendered chat for each archive. `GPL-3.0` `Docker`
- [Omeka S](https://omeka.org/s/) - Next-generation web publishing platform for institutions interested in connecting digital cultural heritage collections with other resources online. ([Source Code](https://github.com/omeka/omeka-s)) `GPL-3.0` `Nodejs`
- [Wallabag](https://www.wallabag.org) - Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability. ([Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`
- [Wayback](https://github.com/wabarc/wayback) - A self-hosted toolkit for archiving webpages to the Internet Archive, archive.today, IPFS, and local file systems. `GPL-3.0` `Go`
- [Webarchive](https://github.com/derfenix/webarchive) - Lightweight self-hosted _wayback machine_ that creates HTML and PDF files from your bookmarks. `BSD-3-Clause` `Go`


### Automation

**[`^        back to top        ^`](#awesome-selfhosted)**

[Automation](https://en.wikipedia.org/wiki/Automation) software designed to reduce human intervention in processes.

_Related: [Internet of Things (IoT)](#internet-of-things-iot), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Media Management](#media-management)_

- [Activepieces](https://www.activepieces.com) - No-code business automation tool like Zapier or Tray. For example, you can send a Slack notification for each new Trello card. ([Source Code](https://github.com/activepieces/activepieces)) `MIT` `Docker`
- [Apache Airflow](https://airflow.apache.org/) - Platform to programmatically author, schedule, and monitor workflows. ([Source Code](https://github.com/apache/airflow/)) `Apache-2.0` `Python/Docker`
- [Automatisch](https://automatisch.io) - Business automation tool that lets you connect different services like Twitter, Slack, and more to automate your business processes (alternative to Zapier). ([Source Code](https://github.com/automatisch/automatisch)) `AGPL-3.0` `Docker`
- [BookBounty](https://github.com/TheWicklowWolf/BookBounty) `⚠` - Retrieve missing Readarr books from Library Genesis. `MPL-2.0` `Docker`
- [changedetection.io](https://changedetection.io/) - Stay up-to-date with web-site content changes. ([Source Code](https://github.com/dgtlmoon/changedetection.io)) `Apache-2.0` `Python/Docker`
- [ChiefOnboarding](https://chiefonboarding.com) - Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot. ([Source Code](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Docker`
- [Dagu](https://docs.dagu.cloud/) - Powerful Cron alternative with a Web UI. It allows you to define dependencies between commands as a Directed Acyclic Graph (DAG) in a declarative YAML format. ([Source Code](https://github.com/dagu-org/dagu)) `GPL-3.0` `Go/Docker`
- [Discount Bandit](https://discount-bandit.cybrarist.com/) `⚠` - Track pricing, stock status of products across multiple stores such as Amazon, Ebay, Walmart, etc. ([Source Code](https://github.com/Cybrarist/Discount-Bandit)) `GPL-3.0` `PHP/Docker`
- [Dittofeed](https://www.dittofeed.com) - Omni-channel customer engagement and messaging automation platform (alternative to Braze, Customer.io, Iterable). ([Demo](https://demo.dittofeed.com/dashboard/journeys), [Source Code](https://github.com/dittofeed/dittofeed)) `MIT` `Docker`
- [feedmixer](https://github.com/cristoper/feedmixer) - Micro web service which takes a list of feed URLs and returns a new feed consisting of the most recent n entries from each given feed (returns Atom, RSS, or JSON). ([Demo](https://mretc.net/feedmixer/json?f=https://hnrss.org/newest&f=https://americancynic.net/atom.xml&n=1)) `WTFPL` `Python`
- [Github Ntfy](https://github.com/BreizhHardware/ntfy_alerts) `⚠` - Push notifications to NTFY, Gotify, Discord or Slack when a new release is available on Docker Hub or Github. ([Clients](https://github.com/binwiederhier/ntfy)) `GPL-3.0` `Rust/Docker`
- [HandBrake Web](https://github.com/TheNickOfTime/handbrake-web) - Use one or more instances of HandBrake video transcoder on a headless device via a web interface. `AGPL-3.0` `Docker`
- [Healthchecks](https://healthchecks.io/) - Listen for pings and sends alerts when pings are late. ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python/Docker`
- [Huginn](https://github.com/huginn/huginn) - Build agents that monitor and act on your behalf. `MIT` `Ruby`
- [Kestra](https://kestra.io) - Event-driven, language-agnostic platform to create, schedule, and monitor workflows. In code. Coordinate data pipelines and tasks such as ETL and ELT. ([Source Code](https://github.com/kestra-io/kestra)) `Apache-2.0` `Docker`
- [Kibitzr](https://kibitzr.github.io) - Lightweight personal web assistant with powerful integrations. ([Source Code](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `⚠` - Follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads, Librarything and optionally GoogleBooks as sources for author info and book info. `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - Personal assistant who can live on your server. ([Source Code](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Matchering](https://github.com/sergree/matchering) - Automated music mastering (alternative to LANDR, eMastered and MajorDecibel). `GPL-3.0` `Docker`
- [Mylar3](https://mylarcomics.com/) - Automated Comic Book (cbr/cbz) downloader program for use with NZB and torrents. ([Source Code](https://github.com/mylar3/mylar3)) `GPL-3.0` `Python/Docker`
- [OliveTin](https://www.olivetin.app/) - Web interface for running Linux shell commands. ([Source Code](https://github.com/OliveTin/OliveTin)) `AGPL-3.0` `Go`
- [pyLoad](https://pyload.net/) - Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to. ([Source Code](https://github.com/pyload/pyload)) `AGPL-3.0` `Python`
- [StackStorm](https://stackstorm.com) - StackStorm (aka _IFTTT for Ops_) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps. ([Source Code](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [µTask](https://github.com/ovh/utask) - Automation engine that models and executes business processes declared in yaml. `BSD-3-Clause` `Go/Docker`


### Backup

**[`^        back to top        ^`](#awesome-selfhosted)**

[Backup](https://en.wikipedia.org/wiki/Backup) software.

**Please visit [awesome-sysadmin/Backups](https://github.com/awesome-foss/awesome-sysadmin#backups)**



### Blogging Platforms

**[`^        back to top        ^`](#awesome-selfhosted)**

A [blog](https://en.wikipedia.org/wiki/Blog) is a discussion or informational website consisting of discrete, diary-style text entries (posts).

_Related: [Static Site Generators](#static-site-generators), [Content Management Systems (CMS)](#content-management-systems-cms)_

_See also: [WeblogMatrix](https://www.weblogmatrix.org/)_

- [Antville](https://antville.org) - Free, open source project aimed at the development of a high performance, feature rich weblog hosting software. ([Source Code](https://github.com/antville/antville)) `Apache-2.0` `Javascript`
- [Castopod](https://castopod.org) - Podcast management hosting platform that includes the latest podcast 2.0 standards, an automated Fediverse feed, analytics, an embeddable player, and more. ([Source Code](https://code.castopod.org/adaures/castopod)) `AGPL-3.0` `PHP/Docker`
- [Chyrp Lite](https://chyrplite.net) - Extra-awesome, extra-lightweight blog engine. ([Source Code](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dotclear](https://git.dotclear.org/dev/dotclear) - Take control over your blog. `GPL-2.0` `PHP`
- [FlatPress](https://flatpress.org/) - A lightweight, easy-to-set-up flat-file blogging engine. ([Source Code](https://github.com/flatpressblog/flatpress)) `GPL-2.0` `PHP`
- [fx](https://github.com/rikhuijzer/fx) - Micro-blog tool offering built-in syntax highlighting, mobile publishing and more (alternative to Twitter, Bluesky). `MIT` `Docker`
- [Ghost](https://ghost.org/) - Just a blogging platform. ([Source Code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
- [Haven](https://havenweb.org/) - Private blogging system with markdown editing and built in RSS reader. ([Demo](https://havenweb.org/demo.html), [Source Code](https://github.com/havenweb/haven)) `MIT` `Ruby`
- [HTMLy](https://www.htmly.com/) - Databaseless PHP blogging platform. A flat-file CMS that allows you to create a fast, secure, and powerful website or blog in seconds. ([Demo](http://demo.htmly.com/), [Source Code](https://github.com/danpros/htmly)) `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - Collaborative social publishing platform. ([Source Code](https://github.com/idno/known)) `Apache-2.0` `PHP`
- [Mataroa](https://mataroa.blog/) - Naked blogging platform for minimalists. ([Source Code](https://github.com/mataroablog/mataroa)) `MIT` `Python`
- [PluXml](https://pluxml.org) - XML-based blog/CMS platform. ([Source Code](https://github.com/pluxml/PluXml)) `GPL-3.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Serendipity (s9y) is a highly extensible and customizable PHP blog engine using Smarty templating. ([Source Code](https://github.com/s9y/serendipity)) `BSD-3-Clause` `PHP`
- [WriteFreely](https://writefreely.org) - Writing software for starting a minimalist, federated blog — or an entire community. ([Source Code](https://github.com/writefreely/writefreely)) `AGPL-3.0` `Go`


### Booking and Scheduling

**[`^        back to top        ^`](#awesome-selfhosted)**

Event scheduling, reservation, and appointment management software.

_Related: [Polls and Events](#polls-and-events)_

- [Alf.io](https://alf.io/) - Ticket reservation system. ([Demo](https://demo.alf.io/authentication), [Source Code](https://github.com/alfio-event/alf.io)) `GPL-3.0` `Java`
- [Cal.com](https://cal.com/) - Online appointment scheduling system. ([Demo](https://app.cal.com/bailey), [Source Code](https://github.com/calcom/cal.com)) `AGPL-3.0` `Nodejs`
- [Easy!Appointments](https://easyappointments.org/) - Allows your customers to book appointments with you via the web. ([Demo](https://demo.easyappointments.org/), [Source Code](https://github.com/alextselegidis/easyappointments)) `GPL-3.0` `PHP`
- [Hi.Events](https://hi.events) - Event management and ticketing platform for conferences, concerts, and more. Offering customizable event pages and embeddable ticket widgets. ([Demo](https://demo.hi.events/event/1/dog-conf-2030), [Source Code](https://github.com/HiEventsDev/hi.events)) `AGPL-3.0` `Docker`
- [LibreBooking](https://librebooking.readthedocs.io/) - Resource scheduling solution offering a flexible, mobile-friendly, and extensible interface for organizations to manage resource reservations. ([Demo](https://librebooking-demo.fly.dev/), [Source Code](https://github.com/LibreBooking/app)) `GPL-3.0` `PHP/Docker`
- [QloApps](https://qloapps.com/) - Customizable and intuitive web-based hotel reservation system and a booking engine. ([Demo](https://demo.qloapps.com/), [Source Code](https://github.com/Qloapps/QloApps)) `OSL-3.0` `PHP/Nodejs`
- [Rallly](https://rallly.co) - Create polls to vote on dates and times (alternative to Doodle). ([Demo](https://app.rallly.co), [Source Code](https://github.com/lukevella/rallly)) `AGPL-3.0` `Nodejs/Docker`
- [Seatsurfing](https://seatsurfing.app/) - Webbased app to book seats, desks and rooms for offices. ([Source Code](https://github.com/seatsurfing/seatsurfing)) `GPL-3.0` `Docker`


### Bookmarks and Link Sharing

**[`^        back to top        ^`](#awesome-selfhosted)**

Software which allows users to add, annotate, edit, and share [bookmarks](https://en.wikipedia.org/wiki/Bookmark_(digital)) of web documents.

- [Briefkasten](https://github.com/ndom91/briefkasten) - Modern app for saving and managing your own bookmarks. Includes a browser extension. ([Demo](https://briefkastenhq.com/auth/signin)) `MIT` `Nodejs/Docker`
- [Buku](https://github.com/jarun/Buku) - Powerful bookmark manager and a personal textual mini-web. `GPL-3.0` `Python/deb`
- [Digibunch](https://ladigitale.dev/digibunch/#/) - Create bunches of links to share with your learners or colleagues. ([Demo](https://ladigitale.dev/digibunch/#/b/5f67b12092b60), [Source Code](https://codeberg.org/ladigitale/digibunch)) `AGPL-3.0` `Nodejs/PHP`
- [Espial](https://github.com/jonschoning/espial) - An open-source, web-based bookmarking server. `AGPL-3.0` `Haskell`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - Host your own Firefox accounts server. ([Source Code](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs/Java`
- [Grimoire](https://grimoire.pro) - Bookmark manager with a modern UI, automatic content & metadata extraction, categorization, filtering, and more. It has fully documented REST API, and Docker image for easy deployment. ([Source Code](https://github.com/goniszewski/grimoire)) `MIT` `Nodejs/Docker`
- [Karakeep](https://karakeep.app/) - Bookmark-everything app with a touch of AI for the data hoarders out there. ([Demo](https://try.karakeep.app/signin), [Source Code](https://github.com/karakeep-app/karakeep)) `AGPL-3.0` `Docker`
- [LinkAce](https://www.linkace.org/) - Bookmark archive with automatic backups to the Internet Archive, link monitoring, and a full REST API. Installation is done via Docker, or as a simple PHP application. ([Demo](https://demo.linkace.org/guest/links), [Source Code](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `Docker/PHP`
- [linkding](https://linkding.link/) - Minimal bookmark management with a fast and clean UI. Simple installation through Docker and can run on your Raspberry Pi. ([Demo](https://demo.linkding.link/login/), [Source Code](https://github.com/sissbruecker/linkding)) `MIT` `Docker`
- [LinkWarden](https://linkwarden.app/) - Bookmark and archive manager to store your useful links. ([Source Code](https://github.com/linkwarden/linkwarden)) `MIT` `Docker/Nodejs`
- [NeonLink](https://github.com/AlexSciFier/neonlink) - Bookmark service with unique design and simple installation with Docker. `MIT` `Docker`
- [Readeck](https://readeck.org/en/) - Save the precious readable content of web pages you like and want to keep forever. See it as a bookmark manager and a read later tool. ([Source Code](https://codeberg.org/readeck/readeck), [Clients](https://codeberg.org/readeck/browser-extension)) `AGPL-3.0` `Go/Docker`
- [Servas](https://github.com/beromir/Servas) - A self-hosted bookmark management tool. It allows organization with tags, groups, and a list specifically for later access. It supports multiple users with 2FA. Companion browser extensions are available for Firefox and Chrome. ([Clients](https://github.com/beromir/Servas#browser-extensions)) `GPL-3.0` `Docker/Nodejs/PHP`
- [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing platform. ([Demo](https://demo.shaarli.org)) `Zlib` `PHP/deb`
- [Shiori](https://github.com/go-shiori/shiori) - Simple bookmark manager built with Go. `MIT` `Go/Docker`
- [Slash](https://github.com/yourselfhosted/slash) - An open source, self-hosted bookmarks and link sharing platform. `GPL-3.0` `Docker`
- [SyncMarks](https://codeberg.org/Offerel/SyncMarks-Webapp) - Sync and manage your browser bookmarks from Edge, Firefox and Chromium. ([Clients](https://codeberg.org/Offerel/SyncMarks-Extension)) `AGPL-3.0` `PHP`


### Calendar & Contacts

**[`^        back to top        ^`](#awesome-selfhosted)**

[CalDAV](https://en.wikipedia.org/wiki/CalDAV) and [CardDAV](https://en.wikipedia.org/wiki/CardDAV) protocol servers and web clients/interfaces for [Electronic calendar](https://en.wikipedia.org/wiki/Calendaring_software), [address book](https://en.wikipedia.org/wiki/Address_book) and [contact management](https://en.wikipedia.org/wiki/Contact_manager).

_Related: [Groupware](#groupware)_

_See also: [Comparison of CalDAV and CardDAV implementations - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations)_

- [Baïkal](https://sabre.io/baikal/) - Lightweight CalDAV and CardDAV server based on sabre/dav. ([Source Code](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [DAViCal](https://www.davical.org/) - Server for calendar sharing (CalDAV) that uses a PostgreSQL database as a data store. ([Source Code](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP/deb`
- [Davis](https://github.com/tchapi/davis) - A simple, dockerizable and fully translatable admin interface for sabre/dav based on Symfony 5 and Bootstrap 4, largely inspired by Baïkal. `MIT` `PHP`
- [Manage My Damn Life](https://intri.in/manage-my-damn-life/) - Manage my Damn Life (MMDL) is a self-hosted front end for managing your CalDAV tasks and calendars. ([Source Code](https://github.com/intri-in/manage-my-damn-life-nextjs)) `GPL-3.0` `Nodejs/Docker`
- [Radicale](https://radicale.org/) - Simple calendar and contact server with extremely low administrative overhead. ([Source Code](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python/deb`
- [SabreDAV](https://sabre.io/) - Open source CardDAV, CalDAV, and WebDAV framework and server. ([Source Code](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://github.com/jelmer/xandikos) - Open source CardDAV and CalDAV server with minimal administrative overhead, backed by a Git repository. `GPL-3.0` `Python/deb`


### Communication - Custom Communication Systems

**[`^        back to top        ^`](#awesome-selfhosted)**

[Communication software](https://en.wikipedia.org/wiki/Communication_software) used to provide remote access to systems and exchange files and messages in text, audio and/or video formats between different computers or users, using their own custom protocols.

- [AnyCable](https://anycable.io/) - Realtime server for reliable two-way communication over WebSockets, Server-sent events, etc. ([Demo](https://demo.anycable.io), [Source Code](https://github.com/anycable/anycable)) `MIT` `Go/Docker`
- [Apprise](https://github.com/caronc/apprise) - Apprise allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc. `MIT` `Python/Docker/deb`
- [Centrifugo](https://centrifugal.dev/) - Language-agnostic real-time messaging (Websocket or SockJS) server. ([Demo](https://github.com/centrifugal/centrifugo#demo), [Source Code](https://github.com/centrifugal/centrifugo)) `MIT` `Go/Docker/K8S`
- [Chitchatter](https://chitchatter.im/) - Peer-to-peer chat app that is serverless, decentralized, and ephemeral. ([Source Code](https://github.com/jeremyckahn/chitchatter)) `GPL-2.0` `Nodejs`
- [Conduit](https://conduit.rs/) - A simple, fast, and reliable chat server powered by Matrix. ([Source Code](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Databag](https://github.com/balzack/databag) - Federated, end-to-end encrypted messaging service for the web, iOS, and Android, supporting text, photos, video, and WebRTC video and audio calls. ([Demo](https://databag.coredb.org/#/create)) `Apache-2.0` `Docker`
- [Element](https://element.io) - Fully-featured Matrix client for Web, iOS & Android. ([Source Code](https://github.com/element-hq/element-web)) `Apache-2.0` `Nodejs`
- [GlobaLeaks](https://www.globaleaks.org/) - Whistleblowing software enabling anyone to easily set up and maintain a secure reporting platform. ([Demo](https://demo.globaleaks.org), [Source Code](https://github.com/globaleaks/globaleaks-whistleblowing-software)) `AGPL-3.0` `Python/deb/Docker`
- [GNUnet](https://gnunet.org/) - Software framework for decentralized, peer-to-peer networking. ([Source Code](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - Notification server with Android and CLI clients (alternative to PushBullet). ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android)) `MIT` `Go/Docker`
- [Hyphanet](https://hyphanet.org/) - Anonymously share files, browse and publish _freesites_ (web sites accessible only through Hyphanet) and chat on forums. ([Source Code](https://github.com/hyphanet/fred)) `GPL-2.0` `Java`
- [Jami](https://jami.net/) - Universal communication platform which preserves the user's privacy and freedoms. ([Source Code](https://git.jami.net/savoirfairelinux?sort=latest_activity_desc&filter=jami)) `GPL-3.0` `C++`
- [Live Helper Chat](https://livehelperchat.com/) - Live Support chat for your website. ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mattermost](https://mattermost.com/) - Platform for secure collaboration across the entire software development lifecycle, can be integrated with Gitlab (alternative to Slack). ([Source Code](https://github.com/mattermost/mattermost)) `AGPL-3.0/Apache-2.0` `Go/Docker/K8S`
- [MiAOU](https://miaou.dystroy.org/login) - Multi-room persistent chat server. ([Source Code](https://github.com/Canop/miaou)) `MIT` `Nodejs`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++/deb`
- [Notifo](https://github.com/notifo-io/notifo) - Multichannel notification server with support for Email, Mobile Push, Web Push, SMS, messaging and a javascript plugin. `MIT` `C#`
- [Novu](https://novu.co/) - Notification infrastructure for developers. ([Source Code](https://github.com/novuhq/novu/)) `MIT` `Docker/Nodejs`
- [ntfy](https://ntfy.sh/) - Push notifications to phone or desktop using HTTP PUT/POST, with Android app, CLI and web app, similar to Pushover and Gotify. ([Demo](https://ntfy.sh/app), [Source Code](https://github.com/binwiederhier/ntfy), [Clients](https://github.com/binwiederhier/ntfy-android)) `Apache-2.0/GPL-2.0` `Go/Docker/K8S`
- [One Time Secret](https://docs.onetimesecret.com) - Share sensitive information securely with self-destructing links that are only viewable once. ([Demo](https://onetimesecret.com), [Source Code](https://github.com/onetimesecret/onetimesecret)) `MIT` `Docker/Ruby/Nodejs`
- [OTS](https://ots.fyi/) - One-Time-Secret sharing platform with a symmetric 256bit AES encryption in the browser. ([Source Code](https://github.com/Luzifer/ots)) `Apache-2.0` `Go`
- [PushBits](https://github.com/pushbits/server) - Notification server for relaying push notifications via Matrix, similar to PushBullet and Gotify. `ISC` `Go`
- [RetroShare](https://retroshare.cc) - Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer. ([Source Code](https://github.com/RetroShare/RetroShare)) `GPL-2.0` `C++`
- [Revolt](https://revolt.chat/) - Revolt is a user-first chat platform built with modern web technologies. ([Source Code](https://github.com/revoltchat/self-hosted)) `AGPL-3.0` `Rust`
- [Rocket.Chat](https://rocket.chat/) - Communications platform that puts data protection first (alternative to Gitter.im and Slack). ([Source Code](https://github.com/RocketChat/Rocket.Chat)) `MIT` `Nodejs/Docker/K8S`
- [SAMA](https://samacloud.io) - Next-Gen self-hosted chat server and clients. ([Demo](https://app.samacloud.io/demo), [Source Code](https://github.com/SAMA-Communications/sama-server), [Clients](https://github.com/SAMA-Communications/sama-client)) `GPL-3.0` `Nodejs/Docker`
- [Screego](https://screego.net) - Screego is a simple tool to quickly share your screen to one or multiple people via web browser. ([Demo](https://app.screego.net/), [Source Code](https://github.com/screego/server)) `GPL-3.0` `Docker/Go`
- [Shhh](https://github.com/smallwat3r/shhh) - Keep secrets out of emails or chat logs, share them using secure links with passphrase and expiration dates. `MIT` `Python`
- [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - The most private and secure chat and applications platform - now with double ratchet E2E encryption. `AGPL-3.0` `Haskell`
- [Spectrum 2](https://spectrum.im/) - Spectrum 2 is an open source instant messaging transport.  It allows users to chat together even when they are using different IM networks. ([Source Code](https://github.com/SpectrumIM/spectrum2)) `GPL-3.0` `C++`
- [Synapse](https://element-hq.github.io/synapse/latest/index.html) - Server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication. ([Source Code](https://github.com/element-hq/synapse)) `Apache-2.0` `Python/deb`
- [Syndie](https://syndie.de) - Syndie is a libre system for operating distributed forums. `CC0-1.0` `Java`
- [Tailchat](https://tailchat.msgbyte.com/) - Next generation noIM application in your own workspace, not only another Slack/Discord/rocket.chat. ([Demo](https://nightly.paw.msgbyte.com/), [Source Code](https://github.com/msgbyte/tailchat)) `Apache-2.0` `Docker/K8S/Nodejs`
- [Tiledesk](https://tiledesk.com) - All-in-one customer engagement platform from lead-gen to post-sales, from WhatsApp to your website. With omni-channel live agents and AI-powered chatbots (alternative to Intercom, Zendesk, Tawk.to and Tidio). ([Source Code](https://github.com/Tiledesk/tiledesk)) `MIT` `Docker/K8S`
- [Tinode](https://github.com/tinode) - Instant messaging platform. Backend in Go. Clients: Swift iOS, Java Android, JS webapp, scriptable command line; chatbots. ([Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp)) `GPL-3.0` `Go`
- [Tox](https://tox.chat/) - Distributed, secure messenger with audio and video chat capabilities. ([Source Code](https://github.com/TokTok/c-toxcore)) `GPL-3.0` `C`
- [Typebot](https://typebot.io) - Conversational app builder (alternative to Typeform and Landbot). ([Source Code](https://github.com/baptisteArno/typebot.io)) `AGPL-3.0` `Docker`
- [WBO](https://github.com/lovasoa/whitebophir) - Web Whiteboard to collaborate in real-time on schemas, drawings, and notes. ([Demo](https://wbo.ophir.dev/)) `AGPL-3.0` `Nodejs/Docker`
- [Zulip](https://zulip.org) - Zulip is a powerful, open source group chat application. ([Source Code](https://github.com/zulip/zulip)) `Apache-2.0` `Python`


### Communication - Email - Complete Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

Simple deployment of [E-mail](https://en.wikipedia.org/wiki/Email) servers, e.g. for inexperienced or impatient admins.

- [AnonAddy](https://anonaddy.com) - Email forwarding service for creating aliases. ([Source Code](https://github.com/anonaddy/anonaddy)) `MIT` `PHP/Docker`
- [b1gMail](https://www.b1gmail.eu) - Complete email solution that runs on any webspace with PHP and MariaDB. It supports POP3 catchall mailboxes and can also integrate with Postfix or b1gMailServer if you're running your own server. ([Source Code](https://codeberg.org/b1gMail/b1gMail), [Clients](https://www.b1gmail.eu/en/start/addon-b1gmailserver/)) `GPL-2.0` `PHP`
- [DebOps](https://docs.debops.org/) - Your Debian-based data center in a box. A set of general-purpose Ansible roles that can be used to manage Debian or Ubuntu hosts. ([Source Code](https://github.com/debops/debops)) `GPL-3.0` `Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - Production-ready fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. Only configuration files, no SQL database. ([Source Code](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [Dovel](https://dovel.email) - SMTP server that sends and receives emails according to a simple configuration file, with an optional web interface that you can use to browse your emails. ([Source Code](https://dovel.email/server/tree.html)) `LGPL-3.0` `Go`
- [emailwiz](https://github.com/LukeSmithxyz/emailwiz) - Luke Smith's bash script to completely automate the setup of a Postfix/Dovecot/SpamAssassin/OpenDKIM server on debian. `GPL-3.0` `Shell`
- [Inboxen](https://inboxen.org) - Lets you have an infinite number of unique inboxes. ([Source Code](https://codeberg.org/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [iRedMail](https://www.iredmail.org/) - Full-featured mail server solution based on Postfix and Dovecot. ([Source Code](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Maddy Mail Server](https://maddy.email/) - All-in-one mail server that implements SMTP (both MTA and MX) and IMAP. Replaces Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC with single daemon. ([Source Code](https://github.com/foxcpp/maddy)) `GPL-3.0` `Go`
- [Mail-in-a-Box](https://mailinabox.email/) - Turns any Ubuntu server into a fully functional mail server with one command. ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Mailcow](https://mailcow.email/) - Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration. ([Source Code](https://github.com/mailcow/mailcow-dockerized)) `GPL-3.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - Simple yet full-featured mail server as a set of Docker images. ([Source Code](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Modoboa](https://modoboa.org/en/) - Mail hosting and management platform including a modern and simplified web user interface. ([Source Code](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Mox](https://www.xmox.nl/) - Complete e-mail solution with IMAP4, SMTP, SPF, DKIM, DMARC, MTA-STS, DANE and DNSSEC, reputation-based and content-based junk filtering, Internationalization (IDNA), automatic TLS with ACME and Let's Encrypt, account autoconfiguration, and webmail. ([Source Code](https://github.com/mjl-/mox)) `MIT` `Go`
- [Postal](https://docs.postalserver.io/) - Complete and fully featured mail server for use by websites & web servers. ([Source Code](https://github.com/postalserver/postal)) `MIT` `Docker/Ruby`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Complete mailserver solution leveraging the Nix Ecosystem. `GPL-3.0` `Nix`
- [SimpleLogin](https://simplelogin.io) - Open source email alias solution to protect your email address. Comes with browser extensions and mobile apps. ([Source Code](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [Stalwart Mail Server](https://stalw.art) - All-in-one mail server with JMAP, IMAP4, and SMTP support and a wide range of modern features. ([Source Code](https://github.com/stalwartlabs/stalwart)) `AGPL-3.0` `Rust/Docker`
- [wildduck](https://wildduck.email/) - Scalable no-SPOF IMAP/POP3 mail server. ([Source Code](https://github.com/zone-eu/wildduck)) `EUPL-1.2` `Nodejs/Docker`


### Communication - Email - Mail Delivery Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Delivery Agents](https://en.wikipedia.org/wiki/Message_delivery_agent) (MDAs) - [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)/[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) server software.

- [Cyrus IMAP](https://www.cyrusimap.org/) - Email (IMAP/POP3), contacts and calendar server. ([Source Code](https://github.com/cyrusimap/cyrus-imapd)) `BSD-3-Clause-Attribution` `C`
- [DavMail](https://davmail.sourceforge.net/) `⚠` - POP/IMAP/SMTP/Caldav/Carddav/LDAP exchange gateway allowing users to use any mail/calendar client with an Exchange server, even from the internet or behind a firewall through Outlook Web Access. ([Source Code](https://github.com/mguessan/davmail)) `GPL-2.0` `Java`
- [Dovecot](https://www.dovecot.org/) - IMAP and POP3 server written primarily with security in mind. ([Source Code](https://github.com/dovecot/core)) `MIT/LGPL-2.1` `C/deb`
- [Piler](https://www.mailpiler.org/) - Feature-rich email archiving solution. ([Source Code](https://github.com/jsuto/piler/)) `GPL-3.0` `C`


### Communication - Email - Mail Transfer Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Transfer Agents](https://en.wikipedia.org/wiki/Message_transfer_agent) (MTAs) - [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) servers.

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP (email) server with a focus on simplicity, security, and ease of operation. ([Source Code](https://blitiri.com.ar/git/r/chasquid/)) `Apache-2.0` `Go`
- [Courier MTA](https://www.courier-mta.org/) - Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services. ([Source Code](https://www.courier-mta.org/repo.html)) `GPL-3.0` `C/deb`
- [DragonFly](https://github.com/corecode/dma) - A small MTA for home and office use. Works on Linux and FreeBSD. `BSD-3-Clause` `C`
- [EmailRelay](https://emailrelay.sourceforge.net/) - A small and easy to configure SMTP and POP3 server for Windows and Linux. ([Source Code](https://sourceforge.net/p/emailrelay/code/HEAD/tree/)) `GPL-3.0` `C++`
- [Exim](https://www.exim.org/) - Message transfer agent (MTA) developed at the University of Cambridge. ([Source Code](https://git.exim.org/exim.git)) `GPL-3.0` `C/deb`
- [Haraka](https://haraka.github.io/) - Fast, highly extensible, and event driven SMTP server. ([Source Code](https://github.com/haraka/Haraka)) `MIT` `Nodejs`
- [OpenSMTPD](https://opensmtpd.org/) - Secure SMTP server implementation from the OpenBSD project. ([Source Code](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.sbin/smtpd/)) `ISC` `C/deb`
- [OpenTrashmail](https://github.com/HaschekSolutions/opentrashmail) - Complete trashmail solution that exposes an SMTP server and has a web interface to manage received emails. Works with multiple and wildcard domains and is fully file based (no database needed). Includes RSS feeds and JSON API. `Apache-2.0` `Python/PHP/Docker`
- [Postfix](http://www.postfix.org/) - Fast, easy to administer, and secure Sendmail replacement. `IPL-1.0` `C/deb`
- [Sendmail](https://www.proofpoint.com/us/products/email-protection/open-source-email-solution) - Message transfer agent (MTA). `Sendmail` `C/deb`


### Communication - Email - Mailing Lists and Newsletters

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mailing list](https://en.wikipedia.org/wiki/Mailing_list) servers and mass mailing software - one message to many recipients.

- [HyperKitty](https://wiki.list.org/HyperKitty) - Access GNU Mailman v3 archives. ([Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty)) `GPL-3.0` `Python`
- [Keila](https://www.keila.io) - Reliable and easy-to-use newsletter tool (alternative to Mailchimp and Sendinblue). ([Demo](https://app.keila.io), [Source Code](https://github.com/pentacent/keila)) `AGPL-3.0` `Docker`
- [Listmonk](https://listmonk.app/) - High performance, self-hosted newsletter and mailing list manager with a modern dashboard. ([Demo](https://demo.listmonk.app/), [Source Code](https://github.com/knadh/listmonk)) `AGPL-3.0` `Go/Docker`
- [Mailman](https://www.list.org/) - Manage electronic mail discussion and e-newsletter lists. ([Source Code](https://gitlab.com/mailman/)) `GPL-3.0` `Python`
- [Mautic](https://www.mautic.org/) - Marketing automation software (email, social and more). ([Source Code](https://github.com/mautic/mautic)) `GPL-3.0` `PHP`
- [phpList](https://www.phplist.org) - Newsletter and email marketing with advanced management of subscribers, bounces, and plugins. ([Source Code](https://github.com/phpList/phplist3)) `AGPL-3.0` `PHP`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - Web user interface to access GNU Mailman. ([Source Code](https://gitlab.com/mailman/postorius/)) `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPG-enabled mailing list manager with resending-capabilities. ([Source Code](https://0xacab.org/schleuder/schleuder/tree/master)) `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.community/) - Mailing list manager. ([Source Code](https://github.com/sympa-community/sympa)) `GPL-2.0` `Perl`


### Communication - Email - Webmail Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Webmail](https://en.wikipedia.org/wiki/Webmail) clients.

- [Cypht](https://cypht.org) - Feed reader for your email accounts. ([Source Code](https://github.com/cypht-org/cypht)) `LGPL-2.1` `PHP`
- [Roundcube](https://roundcube.net) - Browser-based IMAP client with an application-like user interface. ([Source Code](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP/deb`
- [SnappyMail](https://snappymail.eu/) - Simple, modern, lightweight & fast web-based email client (fork of RainLoop). ([Demo](https://snappymail.eu/demo/), [Source Code](https://github.com/the-djmaze/snappymail)) `AGPL-3.0` `PHP`
- [SquirrelMail](https://squirrelmail.org) - Another browser-based IMAP client. ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`


### Communication - IRC

**[`^        back to top        ^`](#awesome-selfhosted)**

[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) communication software.

- [Convos](https://convos.chat/) - Always online web IRC client. ([Demo](https://convos.chat/#instant-demo), [Source Code](https://github.com/convos-chat/convos)) `Artistic-2.0` `Perl/Docker`
- [Ergo](https://ergo.chat/) - Modern IRCv3 server written in Go, combining the features of an ircd, a services framework, and a bouncer. ([Source Code](https://github.com/ergochat/ergo)) `MIT` `Go/Docker`
- [Glowing Bear](https://github.com/glowing-bear/glowing-bear) - A web frontend for WeeChat. ([Demo](https://www.glowing-bear.org)) `GPL-3.0` `Nodejs`
- [InspIRCd](https://www.inspircd.org/) - Modular IRC server written in C++ for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/inspircd/inspircd)) `GPL-2.0` `C++/Docker`
- [Kiwi IRC](https://kiwiirc.com/) - Responsive web IRC client with theming support. ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - Portable and lightweight Internet Relay Chat server for small or private networks. ([Source Code](https://github.com/ngircd/ngircd)) `GPL-2.0` `C/deb`
- [Quassel IRC](https://quassel-irc.org/) - Distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. ([Source Code](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - IRC without netsplits. Distributed IRC server, based on RobustSession protocol. ([Source Code](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [The Lounge](https://thelounge.chat/) - Self-hosted web IRC client. ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge)) `MIT` `Nodejs/Docker`
- [UnrealIRCd](https://www.unrealircd.org/) - Modular, advanced and highly configurable IRC server written in C for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/unrealircd/unrealircd)) `GPL-2.0` `C`
- [Weechat](https://weechat.org/) - Fast, light and extensible chat client. ([Source Code](https://github.com/weechat/weechat)) `GPL-3.0` `C/Docker/deb`
- [ZNC](https://wiki.znc.in/ZNC) - Advanced IRC bouncer. ([Source Code](https://github.com/znc/znc)) `Apache-2.0` `C++/deb`


### Communication - SIP

**[`^        back to top        ^`](#awesome-selfhosted)**

[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) telephony software.

- [Asterisk](https://www.asterisk.org/) - Easy to use but advanced IP PBX system, VoIP gateway and conference server. ([Source Code](https://github.com/asterisk/asterisk)) `GPL-2.0` `C/deb`
- [Flexisip](https://www.linphone.org/en/flexisip-sip-server/) - Complete, modular and scalable SIP server, includes a push gateway, to deliver SIP incoming calls or text messages on mobile device platforms where push notifications are required to receive information when the app is not active in the foreground. ([Source Code](https://github.com/BelledonneCommunications/flexisip)) `AGPL-3.0` `C/Docker`
- [Freepbx](https://www.freepbx.org) - Web-based open source GUI that controls and manages Asterisk. ([Source Code](https://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - Scalable open source cross-platform telephony platform. ([Source Code](https://github.com/signalwire/freeswitch)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - Web interface for multi-platform voice switch called FreeSWITCH. ([Source Code](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](https://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc). ([Source Code](https://github.com/kamailio/kamailio)) `GPL-2.0` `C/deb`
- [openSIPS](https://opensips.org/) - SIP proxy/server for voice, video, IM, presence and any other SIP extensions. ([Source Code](https://github.com/OpenSIPS/opensips)) `GPL-2.0` `C`
- [Routr](https://routr.io) - Lightweight SIP proxy, location server, and registrar for a reliable and scalable SIP infrastructure. ([Source Code](https://github.com/fonoster/routr)) `MIT` `Docker/K8S`
- [SIP3](https://sip3.io/) - VoIP troubleshooting and monitoring platform. ([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/)) `Apache-2.0` `Java`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - Troubleshooting and monitoring VoIP calls. ([Source Code](https://github.com/sipcapture/homer)) `AGPL-3.0` `Nodejs/Go/Docker`
- [Wazo](https://wazo-platform.org/) - Full-featured IPBX solution built atop Asterisk with integrated Web administration interface and REST-ful API. ([Source Code](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - Transit class4 softswitch(SBC) with integrated billing and routing engine and REST API. ([Demo](https://yeti-switch.org/demo.html), [Source Code](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`


### Communication - Social Networks and Forums

**[`^        back to top        ^`](#awesome-selfhosted)**

[Social Networking](https://en.wikipedia.org/wiki/Social_networking_service) and [Forum](https://en.wikipedia.org/wiki/Internet_forum) software.

- [Akkoma](https://akkoma.social/) - Federated microblogging server with Mastodon, GNU social, and ActivityPub compatibility. ([Source Code](https://akkoma.dev/AkkomaGang/akkoma)) `AGPL-3.0` `Elixir/Docker`
- [Answer](https://answer.apache.org) - Knowledge-based community software. You can use it to quickly build your Q&A community for product technical support, customer support, user communication, and more. ([Source Code](https://github.com/apache/answer)) `Apache-2.0` `Docker/Go`
- [Artalk](https://artalk.js.org/) - Comment system built in Golang, providing a lightweight and highly customizable solution for adding comments to your website. ([Source Code](https://github.com/ArtalkJS/Artalk)) `MIT` `Go/Docker`
- [AsmBB](https://board.asm32.info) - Fast, SQLite-powered forum engine written in ASM. ([Source Code](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [BuddyPress](https://buddypress.org/about/) - Powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more. ([Source Code](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Chirpy](https://chirpy.dev) - Privacy-friendly and customizable Disqus (comment system) alternate. ([Demo](https://chirpy.dev/play), [Source Code](https://github.com/devrsi0n/chirpy)) `AGPL-3.0` `Docker/Nodejs`
- [Coral](https://coralproject.net/) - A better commenting experience from Vox Media. ([Source Code](https://github.com/coralproject/talk)) `Apache-2.0` `Docker/Nodejs`
- [diaspora*](https://diasporafoundation.org/) - Distributed social networking server. ([Source Code](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](https://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS. ([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse)) `GPL-2.0` `Docker`
- [Elgg](https://elgg.org/) - Powerful open source social networking engine. ([Source Code](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Enigma 1/2 BBS](https://nuskooler.github.io/enigma-bbs/) - Enigma 1/2 is a modern, multi-platform BBS engine with unlimited "callers" and legacy DOS door game support. ([Source Code](https://github.com/NuSkooler/enigma-bbs)) `BSD-2-Clause` `Shell/Docker/Nodejs`
- [Flarum](https://flarum.org) - Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
- [Friendica](https://friendi.ca/) - Social Communication Server. ([Source Code](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [GoToSocial](https://docs.gotosocial.org/en/latest/) - ActivityPub federated social network server implementing the Mastodon client API. ([Source Code](https://codeberg.org/superseriousbusiness/gotosocial)) `AGPL-3.0` `Docker/Go`
- [Hatsu](https://hatsu.cli.rs/) - Bridge that interacts with Fediverse on behalf of your static site. ([Source Code](https://github.com/importantimport/hatsu)) `AGPL-3.0` `Docker/Rust`
- [Hubzilla](https://hubzilla.org) - Decentralized identity, privacy, publishing, sharing, cloud storage, and communications/social platform. ([Source Code](https://framagit.org/hubzilla/core)) `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - Flexible kit for private social networks. ([Source Code](https://github.com/humhub/humhub)) `AGPL-3.0` `PHP`
- [Isso](https://isso-comments.de/) - Lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus. ([Source Code](https://github.com/isso-comments/isso)) `MIT` `Python/Docker`
- [Lemmy](https://join-lemmy.org/) - Link aggregator for the fediverse (alternative to Reddit). ([Source Code](https://github.com/LemmyNet/lemmy)) `AGPL-3.0` `Docker/Rust`
- [Loomio](https://www.loomio.org/) - Collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them. ([Source Code](https://github.com/loomio/loomio)) `AGPL-3.0` `Docker`
- [Mastodon](https://joinmastodon.org/) - Federated microblogging server. ([Source Code](https://github.com/mastodon/mastodon), [Clients](https://github.com/hyperupcall/awesome-mastodon)) `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - Fully featured modern forum application that is fast, scalable and responsive. ([Source Code](https://github.com/rafalp/Misago)) `GPL-2.0` `Docker`
- [Misskey](https://misskey.io/) - Decentralized app-like microblogging server/SNS for the Fediverse, using the ActivityPub protocol like GNU social and Mastodon. ([Source Code](https://github.com/misskey-dev/misskey)) `AGPL-3.0` `Nodejs/Docker`
- [Movim](https://movim.eu/) - Modern, federated social network based on XMPP, with a fully featured group-chat, subscriptions and microblogging. ([Source Code](https://github.com/movim/movim)) `AGPL-3.0` `PHP/Docker`
- [MyBB](https://mybb.com/) - Free, extensible forum software package. ([Source Code](https://github.com/mybb/mybb)) `LGPL-3.0` `PHP`
- [NodeBB](https://nodebb.org/) - Forum software built for the modern web. ([Demo](https://try.nodebb.org/), [Source Code](https://github.com/NodeBB/NodeBB)) `GPL-3.0` `Nodejs/Docker`
- [OSSN](https://www.opensource-socialnetwork.org/) - Social networking software that allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests. ([Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)) `CAL-1.0` `PHP`
- [phpBB](https://www.phpbb.com/) - Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website. ([Source Code](https://github.com/phpbb/phpbb)) `GPL-2.0` `PHP`
- [PixelFed](https://pixelfed.social) - Ethical photo sharing platform, powered by ActivityPub federation (alternative to Instagram). ([Source Code](https://github.com/pixelfed/pixelfed)) `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - Federated microblogging server, Mastodon, GNU social, & ActivityPub compatible. ([Source Code](https://git.pleroma.social/pleroma/pleroma)) `AGPL-3.0` `Elixir`
- [qpixel](https://codidact.com/) - Q&A-based community knowledge-sharing software. ([Source Code](https://github.com/codidact/qpixel)) `AGPL-3.0` `Ruby`
- [Redlib](https://github.com/redlib-org/redlib) `⚠` - An alternative private front-end to Reddit, with its origins in Libreddit. `AGPL-3.0` `Rust`
- [remark42](https://remark42.com/) - Lightweight and simple comment engine, which doesn't spy on users. It can be embedded into blogs, articles or any other place where readers add comments. ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42)) `MIT` `Docker/Go`
- [Scoold](https://scoold.com) - Stack Overflow in a JAR. An enterprise-ready Q&A platform with full-text search, SAML, LDAP integration and social login support. ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold)) `Apache-2.0` `Java/Docker/K8S`
- [Simple Machines Forum](https://www.simplemachines.org/) - Free, professional grade software package that allows you to set up your own online community within minutes. ([Source Code](https://github.com/SimpleMachines/SMF)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - Federated and decentralized profile builder and social network engine. ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Docker/Python`
- [Talkyard](https://www.talkyard.io/) - Create a community, where your users can suggest ideas and get questions answered. And have friendly open-ended discussions and chat (Slack/StackOverflow/Discourse/Reddit/Disqus hybrid). ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard)) `AGPL-3.0` `Docker/Scala`
- [yarn.social](https://yarn.social) - Self-Hosted, Twitter™-like Decentralised micro-logging platform. No ads, no tracking, your content, your data. ([Source Code](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`
- [Zusam](https://github.com/zusam/zusam) - Free and open-source way to self-host private forums for groups of friends or family. ([Demo](https://demo.zusam.org)) `AGPL-3.0` `PHP`


### Communication - Video Conferencing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video/Web Conferencing](https://en.wikipedia.org/wiki/Web_conferencing) tools and software.

_Related: [Conference Management](#conference-management)_

- [BigBlueButton](https://bigbluebutton.org/) - Supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen. Instructors can engage remote students with polling, emojis, and breakout rooms. ([Source Code](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Galene](https://galene.org/) - Video conferencing server that is easy to deploy and that requires moderate server resources. ([Source Code](https://github.com/jech/galene)) `MIT` `Go`
- [Janus](https://janus.conf.meetecho.com/) - General-purpose, lightweight, minimalist WebRTC Server. ([Demo](https://janus.conf.meetecho.com/demos/), [Source Code](https://github.com/meetecho/janus-gateway)) `GPL-3.0` `C`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - WebRTC application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Demo](https://meet.jit.si), [Source Code](https://github.com/jitsi/jitsi-meet)) `Apache-2.0` `Nodejs/Docker/deb`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java/deb`
- [MiroTalk C2C](https://c2c.mirotalk.com) - Real-time cam-2-cam video calls & screen sharing, end-to-end encrypted, to embed in any website with a simple iframe. ([Source Code](https://github.com/miroslavpejic85/mirotalkc2c)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk P2P](https://p2p.mirotalk.com) - Simple, secure, fast real-time video conferences up to 4k and 60fps, compatible with all browsers and platforms. ([Demo](https://p2p.mirotalk.com/newcall), [Source Code](https://github.com/miroslavpejic85/mirotalk)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk SFU](https://sfu.mirotalk.com) - Simple, secure, scalable real-time video conferences up to 4k, compatible with all browsers and platforms. ([Demo](https://sfu.mirotalk.com/newroom), [Source Code](https://github.com/miroslavpejic85/mirotalksfu)) `AGPL-3.0` `Nodejs/Docker`
- [plugNmeet](https://www.plugnmeet.org/) - Scalable and high performance web conferencing system. ([Demo](https://demo.plugnmeet.com/login.html), [Source Code](https://github.com/mynaparrot/plugNmeet-server)) `MIT` `Docker/Go`


### Communication - XMPP - Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) servers.

- [ejabberd](https://www.ejabberd.im/) - XMPP instant messaging server. ([Source Code](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang/Docker`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - Mobile messaging platform with a focus on performance and scalability. ([Source Code](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang/Docker/K8S`
- [Openfire](https://www.igniterealtime.org/projects/openfire/) - Real time collaboration (RTC) server. ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](https://prosody.im/) - Feature-rich and easy to configure XMPP server. ([Source Code](https://hg.prosody.im/)) `MIT` `Lua`
- [Snikket](https://snikket.org/) - All-in-one Dockerized easy XMPP solution, including web admin and clients. ([Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/)) `Apache-2.0` `Docker`
- [Tigase](https://tigase.net/xmpp-server) - XMPP server implementation in Java. ([Source Code](https://github.com/tigase/tigase-server)) `GPL-3.0` `Java`


### Communication - XMPP - Web Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) Web clients/interfaces.

- [Converse.js](https://conversejs.org/) - XMPP chat client in your browser. ([Source Code](https://github.com/conversejs/converse.js)) `MPL-2.0` `Javascript`
- [Libervia](https://repos.goffi.org/libervia-web) - Web frontend from Salut à Toi. `AGPL-3.0` `Python`
- [Salut à Toi](https://www.salut-a-toi.org/) - Multipurpose, multi frontend, libre and decentralized communication tool. ([Source Code](https://repos.goffi.org/libervia-backend)) `AGPL-3.0` `Python`


### Community-Supported Agriculture (CSA)

**[`^        back to top        ^`](#awesome-selfhosted)**

Management and administration tools for community supported agriculture and food cooperatives.

_Related: [E-commerce](#e-commerce)_

- [ACP Admin](https://acp-admin.ch/) - CSA administration. Manage members, subscriptions, deliveries, drop-off locations, member participation, invoices and emails (documentation in French). ([Source Code](https://github.com/csa-admin-org/csa-admin)) `MIT` `Ruby`
- [E-Label](https://filipecarneiro.github.io/ELabel/) - Solution for electronic labels, with QR Codes, on wine bottles sold within the European Union. ([Source Code](https://github.com/filipecarneiro/ELabel)) `MIT` `Docker`
- [FoodCoopShop](https://www.foodcoopshop.com/) - User-friendly software for food-coops. ([Source Code](https://github.com/foodcoopshop/foodcoopshop)) `AGPL-3.0` `PHP/Docker`
- [Foodsoft](https://foodcoops.net/) - Manage a non-profit food coop (product catalog, ordering, accounting, job scheduling). ([Source Code](https://github.com/foodcoops/foodsoft)) `AGPL-3.0` `Docker/Ruby`
- [Hive-Pal](https://hivepal.app) - Mobile-first beekeeping management app for tracking hives, inspections, queen records, and equipment with streamlined data entry optimized for field use. ([Demo](https://hivepal.app), [Source Code](https://github.com/martinhrvn/hive-pal)) `MIT` `Nodejs/Docker`
- [juntagrico](https://juntagrico.org/) - Management platform for community gardens and vegetable cooperatives. ([Source Code](https://github.com/juntagrico/juntagrico)) `LGPL-3.0` `Python`
- [Open Food Network](https://www.openfoodnetwork.org/) - Online marketplace for local food. It enables a network of independent online food stores that connect farmers and food hubs with individuals and local businesses. ([Source Code](https://github.com/openfoodfoundation/openfoodnetwork)) `AGPL-3.0` `Ruby`
- [OpenOlitor](https://openolitor.org/) - Administration platform for Community Supported Agriculture groups. ([Source Code](https://github.com/OpenOlitor/openolitor-server)) `AGPL-3.0` `Scala`
- [teikei](https://github.com/teikei/teikei) - A web application that maps out community-supported agriculture based on crowdsourced data. ([Demo](https://ernte-teilen.org/karte/#/)) `AGPL-3.0` `Nodejs`


### Conference Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for submission of [abstracts](https://en.wikipedia.org/wiki/Abstract_management) and preparation/management of academic conferences.

- [indico](https://getindico.io/) - Feature-rich event management system, made @ CERN, the place where the Web was born. ([Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico)) `MIT` `Python`
- [motion.tools (Antragsgrün)](https://motion.tools/) - Manage motions and amendments for (political) conventions. ([Demo](https://sandbox.motion.tools/createsite), [Source Code](https://github.com/CatoTH/antragsgruen)) `AGPL-3.0` `PHP/Docker`
- [OpenSlides](https://openslides.com/) - Presentation and assembly system for managing and projecting agenda, motions and elections of an assembly. ([Demo](https://demo.os4.openslides.com/login), [Source Code](https://github.com/OpenSlides/OpenSlides)) `MIT` `Docker`
- [osem](https://osem.io/) - Event management tailored to free Software conferences. ([Source Code](https://github.com/openSUSE/osem)) `MIT` `Ruby/Docker`
- [pretalx](https://pretalx.org) - Web-based event management, including running a Call for Papers, reviewing submissions, and scheduling talks. Exports and imports for various related tools. ([Source Code](https://github.com/pretalx/pretalx)) `Apache-2.0` `Python`


### Content Management Systems (CMS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system) offer a practical way to setup a website with many features, using third party plugins, themes and functionality that are easy to add and customize.

_Related: [Blogging Platforms](#blogging-platforms), [Static Site Generators](#static-site-generators), [Photo Galleries](#photo-galleries)_

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - The open source Enterprise Content Management software that handles any type of content, allowing users to easily share and collaborate on content. ([Source Code](https://github.com/Alfresco/alfresco-community-repo)) `LGPL-3.0` `Java`
- [Apostrophe](https://apostrophecms.com/) - CMS with a focus on extensible in-context editing tools. ([Demo](https://apostrophecms.com/demo), [Source Code](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [Backdrop CMS](https://backdropcms.org/) - Comprehensive CMS for small to medium sized businesses and non-profits. ([Source Code](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [BigTree CMS](https://www.bigtreecms.org/) - Straightforward, well documented, and capable CMS. ([Source Code](https://github.com/bigtreecms/BigTree-CMS)) `LGPL-2.1` `PHP`
- [Bludit](https://www.bludit.com/) `⚠` - Build a site or blog in seconds. Bludit uses flat-files (text files in JSON format) to store posts and pages. ([Source Code](https://github.com/bludit/bludit)) `MIT` `PHP`
- [CMS Made Simple](https://www.cmsmadesimple.org/) - Faster and easier management of website contents, scalable for small businesses to large corporations. ([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-2.0` `PHP`
- [Cockpit](https://getcockpit.com) - Simple content platform to manage any structured content. ([Source Code](https://github.com/Cockpit-HQ/Cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](https://www.concretecms.com) - Open source content management system. ([Source Code](https://github.com/concretecms/concretecms)) `MIT` `PHP`
- [Contao](https://contao.org/) - Powerful CMS that allows you to create professional websites and scalable web applications. ([Demo](https://demo.contao.org/contao), [Source Code](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](https://www.couchcms.com/) - CMS for designers. ([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Drupal](https://www.drupal.org/) - Advanced open source content management platform. ([Source Code](https://git.drupalcode.org/project/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](https://www.elabftw.net) - Online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - Content Management System for powering database driven websites using JSON schemas. Provides permission management and automatic REST APIs. `MIT` `Nodejs`
- [Joomla!](https://www.joomla.org/) - Advanced Content Management System (CMS). ([Source Code](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](https://keystonejs.com/) - CMS and web application platform. ([Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [Localess](https://localess.org/home) `⚠` - Powerful translation management and content management system. Manage and translate your website or app content into multiple languages, using AI to translate faster. ([Source Code](https://github.com/Lessify/localess)) `MIT` `Docker`
- [MODX](https://modx.com/) - Advanced content management and publishing platform. The current version is called 'Revolution'. ([Source Code](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - Neos or TYPO3 Neos (for version 1) is a modern, open source CMS. ([Source Code](https://github.com/neos)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - Platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective intelligence for solidarity economy in the same system. `AGPL-3.0` `Ruby`
- [Omeka](https://omeka.org) - Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](https://omeka.org/classic/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Payload CMS](https://payloadcms.com/) - Developer-first headless CMS and application framework. ([Source Code](https://github.com/payloadcms/payload)) `MIT` `Nodejs`
- [Pimcore](http://www.pimcore.com/) - Multi-channel experience and engagement management platform. ([Source Code](https://github.com/pimcore/pimcore)) `GPL-3.0` `PHP/Docker`
- [Plone](https://plone.org/) - Powerful open-source CMS system. ([Source Code](https://github.com/plone)) `ZPL-2.0` `Python/Docker`
- [Publify](https://publify.github.io/) - Simple but full featured web publishing software. ([Source Code](https://github.com/publify/publify)) `MIT` `Ruby`
- [REDAXO](https://www.redaxo.org) - Simple, flexible and useful content management system (documentation in German). ([Source Code](https://github.com/redaxo/redaxo)) `MIT` `PHP/Docker`
- [Roadiz](https://www.roadiz.io/) - Modern CMS based on a node system which can handle many types of services. ([Source Code](https://github.com/roadiz/roadiz)) `MIT` `PHP`
- [SilverStripe](https://www.silverstripe.org) - Easy to use CMS with powerful MVC framework underlying. ([Demo](https://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe)) `BSD-3-Clause` `PHP`
- [SPIP](https://www.spip.net/fr) - Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors. ([Source Code](https://git.spip.net/)) `GPL-3.0` `PHP`
- [Squidex](https://squidex.io) - Headless CMS, based on MongoDB, CQRS and Event Sourcing. ([Demo](https://cloud.squidex.io), [Source Code](https://github.com/Squidex/squidex)) `MIT` `.NET`
- [Strapi](https://strapi.io/) - The most advanced open-source Content Management Framework (headless-CMS) to build powerful API with no effort. ([Source Code](https://github.com/strapi/strapi)) `MIT` `Nodejs`
- [Superdesk](https://superdesk.org/) `⚠` - End-to-end news creation, production, curation, distribution, and publishing platform. ([Source Code](https://github.com/superdesk/superdesk)) `AGPL-3.0` `Docker/Python/PHP`
- [Textpattern](https://textpattern.com/) - Flexible, elegant and easy-to-use CMS. ([Demo](https://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern)) `GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - Author-friendly flat-file-cms with a visual markdown editor based on vue.js. ([Source Code](https://github.com/typemill/typemill)) `MIT` `PHP`
- [TYPO3](https://typo3.org/) - Powerful and advanced CMS with a large community. ([Source Code](https://github.com/TYPO3/typo3)) `GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - The friendly CMS. Free and open source with an amazing community. ([Source Code](https://github.com/umbraco/Umbraco-CMS)) `MIT` `.NET`
- [Vvveb CMS](https://www.vvveb.com) - Powerful and easy to use CMS to build websites, blogs or e-commerce stores. ([Demo](https://demo.vvveb.com), [Source Code](https://github.com/givanz/Vvveb)) `AGPL-3.0` `PHP/Docker`
- [Wagtail](https://wagtail.io/) - Django content management system focused on flexibility and user experience. ([Source Code](https://github.com/wagtail/wagtail)) `BSD-3-Clause` `Python`
- [WinterCMS](https://wintercms.com/) - Speedy and secure content management system built on the Laravel PHP framework. ([Source Code](https://github.com/wintercms/winter)) `MIT` `PHP`
- [WonderCMS](https://www.wondercms.com) - WonderCMS is the smallest flat file CMS since 2008. ([Demo](https://www.wondercms.com/demo), [Source Code](https://github.com/WonderCMS/wondercms)) `MIT` `PHP`
- [WordPress](https://wordpress.org/) - World's most-used blogging and CMS engine. ([Source Code](https://github.com/WordPress/WordPress)) `GPL-2.0` `PHP`


### Customer Relationship Management (CRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Customer relationship management (CRM)](https://en.wikipedia.org/wiki/Customer_relationship_management) is a strategic process that organizations use to manage, analyze, and improve their interactions with customers.

_Related: [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters), [Analytics](#analytics), [Calendar & Contacts](#calendar--contacts)_

- [Corteza](https://docs.cortezaproject.org) - CRM including a unified workspace, enterprise messaging and a low code environment for rapidly and securely delivering records-based management solutions. ([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza)) `Apache-2.0` `Go`
- [Django-CRM](https://DjangoCRM.github.io/info/) - Analytical CRM with tasks management, email marketing and many more. Django CRM is built for individual use, businesses of any size or freelancers and is designed to provide easy customization and quick development. ([Source Code](https://github.com/DjangoCRM/django-crm)) `AGPL-3.0` `Python`
- [EspoCRM](https://www.espocrm.com/) - CRM with a frontend designed as a single page application, and a REST API. ([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm)) `AGPL-3.0` `PHP`
- [Krayin](https://krayincrm.com/) - CRM solution for SMEs and Enterprises for complete customer lifecycle management. ([Demo](https://demo.krayincrm.com/), [Source Code](https://github.com/krayin/laravel-crm)) `MIT` `PHP`
- [Monica](https://monicahq.com/) - Personal relationship manager, and a new kind of CRM to organize interactions with your friends and family. ([Source Code](https://github.com/monicahq/monica)) `AGPL-3.0` `PHP/Docker`
- [SuiteCRM](https://suitecrm.com) - The award-winning, enterprise-class open source CRM. ([Source Code](https://github.com/SuiteCRM/SuiteCRM)) `AGPL-3.0` `PHP`
- [Twenty](https://twenty.com) - A modern CRM offering the flexibility of open source, advanced features, and a sleek design. ([Source Code](https://github.com/twentyhq/twenty)) `AGPL-3.0` `Docker`


### Database Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Web interfaces for [database](https://en.wikipedia.org/wiki/Database) management. Includes tools for database analytics and visualization.

_Related: [Analytics](#analytics), [Automation](#automation)_

_See also: [dbdb.io - Database of Databases](https://dbdb.io/)_

- [Adminer](https://www.adminer.org/) - Database management in a single PHP file. Available for MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others. ([Source Code](https://github.com/vrana/adminer)) `Apache-2.0/GPL-2.0` `PHP`
- [Azimutt](https://azimutt.app) - Visual database exploration made for real world databases (big and messy). Explore your database schema as well as data, document them, extend them and even get analysis and guidelines. ([Demo](https://azimutt.app/gallery/gospeak), [Source Code](https://github.com/azimuttapp/azimutt)) `MIT` `Elixir/Nodejs/Docker`
- [Baserow](https://baserow.io/) - Create your own database without technical experience (alternative to Airtable). ([Source Code](https://gitlab.com/baserow/baserow)) `MIT` `Docker`
- [Bytebase](https://www.bytebase.com/) - Safe database schema change and version control for DevOps teams, supports MySQL, PostgreSQL, TiDB, ClickHouse, and Snowflake. ([Demo](https://demo.bytebase.com), [Source Code](https://github.com/bytebase/bytebase)) `MIT` `Docker/K8S/Go`
- [Chartbrew](https://chartbrew.com) - Connect directly to databases and APIs and use the data to create beautiful charts. ([Demo](https://app.chartbrew.com/live-demo), [Source Code](https://github.com/chartbrew/chartbrew)) `MIT` `Nodejs/Docker`
- [ChartDB](https://chartdb.io/) - Database diagrams editor that allows you to visualize and design your DB with a single query. ([Demo](https://app.chartdb.io), [Source Code](https://github.com/chartdb/chartdb)) `AGPL-3.0` `Nodejs/Docker`
- [CloudBeaver](https://dbeaver.com/) - Manage databases, supports PostgreSQL, MySQL, SQLite and more. A web/hosted version of DBeaver. ([Source Code](https://github.com/dbeaver/cloudbeaver)) `Apache-2.0` `Docker`
- [Databunker](https://databunker.org/) - Network-based, self-hosted, GDPR compliant, secure database for personal data or PII. ([Source Code](https://github.com/securitybunker/databunker)) `MIT` `Docker`
- [Datasette](https://datasette.io/) - Explore and publish data with easy import and export and database management. ([Demo](https://global-power-plants.datasettes.com/global-power-plants/global-power-plants), [Source Code](https://github.com/simonw/datasette)) `Apache-2.0` `Python/Docker`
- [Evidence](https://evidence.dev) - Code-based BI tool. Write reports using SQL and markdown and they render as a website. ([Source Code](https://github.com/evidence-dev/evidence)) `MIT` `Nodejs`
- [Kottster](https://kottster.app/) - Low-code admin panel that connects to your database and automatically generates pages to view and manage your data. ([Demo](https://demo.kottster.app/), [Source Code](https://github.com/kottster/kottster)) `Apache-2.0` `Nodejs/Docker`
- [Limbas](https://www.limbas.com/en/) - Database framework for creating database-driven business applications. As a graphical database frontend, it enables the efficient processing of data stocks and the flexible development of comfortable database applications. ([Source Code](https://github.com/limbas/limbas)) `GPL-2.0` `PHP`
- [Mathesar](https://mathesar.org/) - Intuitive UI to manage data collaboratively, for users of all technical skill levels. Built on Postgres – connect an existing DB or set up a new one. ([Source Code](https://github.com/mathesar-foundation/mathesar)) `GPL-3.0` `Docker/Python`
- [NocoDB](https://www.nocodb.com/) - No-code platform that turns any database into a smart spreadsheet (alternative to Airtable and Smartsheet). ([Source Code](https://github.com/nocodb/nocodb)) `AGPL-3.0` `Nodejs/Docker`
- [WebDB](https://webdb.app) - Efficient database IDE. ([Demo](https://demo.webdb.app/), [Source Code](https://gitlab.com/web-db/app)) `AGPL-3.0` `Docker`


### DNS

**[`^        back to top        ^`](#awesome-selfhosted)**

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System) servers and management tools with advertisement blocking functionality, primarily aimed at home or small networks.

_See also: [awesome-sysadmin/DNS - Servers](https://github.com/awesome-foss/awesome-sysadmin#dns---servers), [awesome-sysadmin/DNS - Control Panels & Domain Management](https://github.com/awesome-foss/awesome-sysadmin#dns---control-panels--domain-management)_

- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) - User-friendly ads & trackers blocking DNS server. ([Source Code](https://github.com/AdguardTeam/AdGuardHome)) `GPL-3.0` `Docker`
- [blocky](https://0xerr0r.github.io/blocky/latest/) - Fast and lightweight DNS proxy as ad-blocker for local network with many features (alternative to Pi-hole). ([Source Code](https://github.com/0xERR0R/blocky)) `Apache-2.0` `Go/Docker`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - Local ad blocker. Like Pi-hole but local and using your operating system. ([Source Code](https://github.com/tanrax/maza-ad-blocking)) `Apache-2.0` `Shell`
- [Pi-hole](https://pi-hole.net/) - Blackhole for Internet advertisements with a GUI for management and monitoring. ([Source Code](https://github.com/pi-hole/pi-hole)) `EUPL-1.2` `Shell/PHP/Docker`
- [Technitium DNS Server](https://technitium.com/dns/) - Authoritative/recursive DNS server with ad blocking functionality. ([Source Code](https://github.com/TechnitiumSoftware/DnsServer)) `GPL-3.0` `Docker/C#`


### Document Management

**[`^        back to top        ^`](#awesome-selfhosted)**

A [document management system](https://en.wikipedia.org/wiki/Document_management_system) (DMS) is a system used to receive, track, manage and store documents and reduce paper.

- [Docspell](https://docspell.org) - Auto-tagging document organizer and archive. ([Source Code](https://github.com/eikek/docspell)) `GPL-3.0` `Scala/Java/Docker`
- [Documenso](https://documenso.com) - Digital document signing platform (alternative to DocuSign). ([Source Code](https://github.com/documenso/documenso)) `AGPL-3.0` `Nodejs/Docker`
- [Docuseal](https://www.docuseal.co) - Create, fill, and sign digital documents (alternative to DocuSign). ([Demo](https://demo.docuseal.tech/), [Source Code](https://github.com/docusealco/docuseal)) `AGPL-3.0` `Docker`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core) - Simple Document Management System for private use with basic functionality to organize your documents digitally. `GPL-3.0` `Docker/Ruby`
- [Gotenberg](https://gotenberg.dev) - Developer-friendly API to interact with powerful tools like Chromium and LibreOffice for converting numerous document formats (HTML, Markdown, Word, Excel, etc.) into PDF files, and more. ([Source Code](https://github.com/gotenberg/gotenberg)) `MIT` `Docker`
- [I, Librarian](https://i-librarian.net) - Organize PDF papers and office documents. It provides a lot of extra features for students and research groups both in industry and academia. ([Demo](https://i-librarian.net/demo/), [Source Code](https://github.com/mkucej/i-librarian-free)) `GPL-3.0` `PHP`
- [Mayan EDMS](https://www.mayan-edms.com) - Electronic document management system for your documents with preview generation, OCR, and automatic categorization among other features. ([Source Code](https://gitlab.com/mayan-edms/mayan-edms)) `GPL-2.0` `Docker/K8S`
- [OpenSign](https://www.opensignlabs.com) `⚠` - Document signing software (alternative to DocuSign). ([Source Code](https://github.com/opensignlabs/opensign)) `AGPL-3.0` `Nodejs/Docker`
- [Paperless-ngx](https://docs.paperless-ngx.com/) - Scan, index, and archive all of your paper documents with an improved interface (fork of Paperless). ([Demo](https://demo.paperless-ngx.com/), [Source Code](https://github.com/paperless-ngx/paperless-ngx)) `GPL-3.0` `Python/Docker`
- [Papermerge](https://papermerge.com) - Document management system focused on scanned documents (electronic archives). Features file browsing in similar way to dropbox/google drive. OCR, full text search, text overlay/selection. ([Source Code](https://github.com/papermerge/papermerge-core)) `Apache-2.0` `Docker/K8S`
- [Papra](https://papra.app) - Minimalist document storage, management and archiving platform designed to be simple to use and accessible to everyone. ([Demo](https://demo.papra.app/), [Source Code](https://github.com/papra-hq/papra/)) `AGPL-3.0` `Docker`
- [PdfDing](https://github.com/mrmn2/PdfDing) - PDF manager, viewer and editor offering a seamless user experience on multiple devices. It's designed to be minimal, fast, and easy to set up using Docker. `AGPL-3.0` `Docker`
- [SeedDMS](https://www.seeddms.org) - Document Management System with workflows, access rights, fulltext search, and more. ([Demo](https://www.seeddms.org/about/), [Source Code](https://sourceforge.net/p/seeddms/code/ci/master/tree/)) `GPL-2.0` `PHP`
- [Signature PDF](https://github.com/24eme/signaturepdf) - Sign and manipulate PDFs with collaboration, organization, compression and metadata editing. ([Demo](https://pdf.24eme.fr/)) `AGPL-3.0` `PHP/deb/Docker`
- [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) - Local hosted web application that allows you to perform various operations on PDF files, such as merging, splitting, file conversions and OCR. `Apache-2.0` `Docker/Java`


### Document Management - E-books

**[`^        back to top        ^`](#awesome-selfhosted)**

[Ebook](https://en.wikipedia.org/wiki/Ebook) library management software.

- [Atsumeru](https://atsumeru.xyz) - Manga/comic/light novel media server with clients for Windows, Linux, macOS and Android. ([Source Code](https://github.com/Atsumeru-xyz/Atsumeru), [Clients](https://atsumeru.xyz/guides/#how-does-it-work)) `MIT` `Java/Docker`
- [BookLogr](https://github.com/Mozzo1000/booklogr) - Manage your personal book library with ease. ([Demo](https://demo.booklogr.app/)) `Apache-2.0` `Docker`
- [BookLore](https://github.com/booklore-app/booklore) - Host and manage books, with support for PDFs, eBooks, reading progress, metadata, and stats. `GPL-3.0` `Docker`
- [Calibre Web](https://github.com/janeczku/calibre-web) - Browse, read and download eBooks using an existing Calibre database. `GPL-3.0` `Python`
- [Calibre](https://calibre-ebook.com/) - E-book library manager that can view, convert, and catalog e-books in most of the major e-book formats and provides a built-in Web server for remote clients. ([Demo](https://calibre-ebook.com/demo), [Source Code](https://github.com/kovidgoyal/calibre)) `GPL-3.0` `Python/deb`
- [Kapowarr](https://casvt.github.io/Kapowarr/) - Build and manage a comic book library. Download, rename, move and convert issues of the volume to your liking. ([Source Code](https://github.com/Casvt/Kapowarr)) `GPL-3.0` `Docker/Python`
- [Kavita](https://www.kavitareader.com/) - Cross-platform e-book/manga/comic/pdf server and web reader with user management, ratings and reviews, and metadata support. ([Demo](https://www.kavitareader.com/#demo), [Source Code](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET/Docker`
- [kiwix-serve](https://www.kiwix.org/en/downloads/kiwix-serve/) - HTTP daemon for serving wikis from ZIM files. ([Source Code](https://github.com/kiwix/kiwix-tools)) `GPL-3.0` `C++`
- [Komga](https://komga.org) - Media server for comics/mangas/BDs with API and OPDS support, a modern web interface for exploring your libraries, as well as a web reader. ([Source Code](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [Stump](https://www.stumpapp.dev) - A fast, free and open source comics, manga and digital book server with OPDS support. ([Source Code](https://github.com/stumpapp/stump)) `MIT` `Rust`
- [The Epube](https://tt-rss.org/ZeEpube/) - Self-hosted web EPUB reader using EPUB.js, Bootstrap, and Calibre. ([Source Code](https://gitlab.tt-rss.org/main/the-epube)) `GPL-3.0` `PHP`


### Document Management - Institutional Repository and Digital Library Software

**[`^        back to top        ^`](#awesome-selfhosted)**

[Institutional repository](https://en.wikipedia.org/wiki/Institutional_repository) and [digital library](https://en.wikipedia.org/wiki/Digital_library) management software.

- [DSpace](http://www.dspace.org/) - Turnkey repository application providing durable access to digital resources. ([Source Code](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - Digital document management system with a flexible metadata and workflow model primarily aimed at academic institutions. ([Demo](http://tryme.demo.eprints-hosting.org/), [Source Code](https://github.com/eprints/eprints3.4)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home) - Robust and modular repository system for the management and dissemination of digital content especially suited for digital libraries and archives, both for access and preservation. ([Source Code](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [InvenioRDM](https://inveniordm.docs.cern.ch/) - Highly scalable turn-key research data management platform with a beautiful user experience. ([Demo](https://inveniordm.web.cern.ch/), [Source Code](https://github.com/inveniosoftware/invenio-app-rdm), [Clients](https://inveniosoftware.org/products/rdm/)) `MIT` `Python`
- [Islandora](https://www.islandora.ca/) - Drupal module for browsing and managing Fedora-based digital repositories. ([Demo](https://sandbox.islandora.ca/), [Source Code](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Front-end for the Samvera framework, which itself is a Ruby on Rails application for browsing and managing Fedora-based digital repositories. ([Source Code](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`


### Document Management - Integrated Library Systems (ILS)

**[`^        back to top        ^`](#awesome-selfhosted)**

An [integrated library system](https://en.wikipedia.org/wiki/Integrated_library_system) is an enterprise resource planning system for a library, used to track items owned, orders made, bills paid, and patrons who have borrowed.

_Related: [Content Management Systems (CMS)](#content-management-systems-cms), [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_

- [Evergreen](https://evergreen-ils.org) - Highly-scalable software for libraries that helps library patrons find library materials, and helps libraries manage, catalog, and circulate those materials. ([Source Code](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PLpgSQL`
- [Koha](https://koha-community.org/) - Enterprise-class ILS with modules for acquisitions, circulation, cataloging, label printing, offline circulation for when Internet access is not available, and much more. ([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - Large-scale ILS that can be run as a service with consortial features, intended primarily for library networks. Includes most standard modules (circulation, acquisitions, cataloging,...) and a web-based public and professional interface. ([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Docker`


### E-commerce

**[`^        back to top        ^`](#awesome-selfhosted)**

[E-commerce](https://en.wikipedia.org/wiki/E-commerce) software.

_Related: [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)_

- [Aimeos](https://aimeos.org/) - E-commerce framework for building custom online shops, market places and complex B2B applications scaling to billions of items with Laravel. ([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Bagisto](https://bagisto.com/en/) - Leading Laravel open source e-commerce framework with multi-inventory sources, taxation, localization, dropshipping and more exciting features. ([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - E-commerce plugin for Pimcore. ([Source Code](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - Popular e-commerce module for Drupal CMS, with support for dozens of payment, shipping, and shopping related modules. ([Source Code](https://git.drupalcode.org/project/commerce)) `GPL-2.0` `PHP`
- [EverShop](https://evershop.io/) `⚠` - E-commerce platform with essential commerce features. Modular architecture and fully customizable. ([Demo](https://demo.evershop.io/), [Source Code](https://github.com/evershopcommerce/evershop)) `GPL-3.0` `Docker/Nodejs`
- [Litecart](https://github.com/shurco/litecart) `⚠` - Shopping cart in 1 file (with support for payment by card or cryptocurrency). `MIT` `Go/Docker`
- [Magento Open Source](https://business.adobe.com/products/magento/magento-commerce.html) - Leading provider of open omnichannel innovation. ([Source Code](https://github.com/magento/magento2)) `OSL-3.0` `PHP`
- [MedusaJs](https://medusajs.com/) - Headless commerce engine that enables developers to create amazing digital commerce experiences. ([Demo](https://next.medusajs.com/), [Source Code](https://github.com/medusajs/medusa)) `MIT` `Nodejs`
- [Microweber](https://microweber.com/) - Drag and Drop CMS and online shop. ([Source Code](https://github.com/microweber/microweber)) `MIT` `PHP`
- [Open Source POS](https://github.com/opensourcepos/opensourcepos) - Open Source Point of Sale is a web based point of sale system. `MIT` `PHP`
- [OpenCart](https://www.opencart.com) - Shopping cart solution. ([Source Code](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [PrestaShop](https://www.prestashop.com/) - Fully scalable e-commerce solution. ([Demo](https://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - Ticket sales platform for events. ([Source Code](https://github.com/pretix/pretix)) `AGPL-3.0` `Python/Docker`
- [s-cart](https://s-cart.org/) - E-commerce website for individuals and businesses, built on top of Laravel Framework. ([Demo](https://demo.s-cart.org/), [Source Code](https://github.com/gp247net/s-cart)) `MIT` `PHP`
- [Saleor](https://saleor.io) - Django based open-sourced e-commerce storefront. ([Demo](https://demo.saleor.io/), [Source Code](https://github.com/saleor/saleor)) `BSD-3-Clause` `Docker/Python`
- [Shopware Community Edition](https://www.shopware.com/en/community/community-edition/) - PHP based open source e-commerce software made in Germany. ([Demo](https://www.shopware.com/en/test-demo/), [Source Code](https://github.com/shopware/shopware)) `MIT` `PHP`
- [Solidus](https://solidus.io/) - A free, open-source ecommerce platform that gives you complete control over your store. ([Source Code](https://github.com/solidusio/solidus)) `BSD-3-Clause` `Ruby/Docker`
- [Spree Commerce](https://spreecommerce.org) - Spree is a complete, modular & API-driven open source e-commerce solution for Ruby on Rails. ([Demo](https://demo.spreecommerce.org/), [Source Code](https://github.com/spree/spree)) `BSD-3-Clause` `Ruby`
- [Sylius](https://sylius.com) - Symfony2 powered open source full-stack platform for eCommerce. ([Demo](https://sylius.com/try/), [Source Code](https://github.com/Sylius/Sylius)) `MIT` `PHP`
- [Thelia](https://thelia.net/) - Thelia is an open source and flexible e-commerce solution. ([Demo](https://demo.thelia.net/), [Source Code](https://github.com/thelia/thelia)) `LGPL-3.0` `PHP`
- [Vendure](https://www.vendure.io) - A headless commerce framework. ([Demo](https://demo.vendure.io), [Source Code](https://github.com/vendure-ecommerce/vendure)) `MIT` `Nodejs`
- [WooCommerce](https://woocommerce.com/) - WordPress based e-commerce solution. ([Source Code](https://github.com/woocommerce/woocommerce)) `GPL-3.0` `PHP`


### Federated Identity & Authentication

**[`^        back to top        ^`](#awesome-selfhosted)**

[Federated identity](https://en.wikipedia.org/wiki/Federated_identity) and [authentication](https://en.wikipedia.org/wiki/Electronic_authentication) software.

**Please visit [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**



### Feed Readers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [news aggregator](https://en.wikipedia.org/wiki/News_aggregator), also termed a feed aggregator, feed reader, news reader, [RSS](https://en.wikipedia.org/wiki/RSS) reader, is an application that aggregates web content such as newspapers/blogs/vlogs/podcasts in one location for easy viewing.

- [Bubo Reader](https://github.com/georgemandis/bubo-rss) - Irrationally minimal RSS feed reader. ([Demo](https://bubo-rss-demo.netlify.app/)) `MIT` `Nodejs`
- [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader. ([Demo](https://www.commafeed.com/#/app/category/all), [Source Code](https://github.com/Athou/commafeed)) `Apache-2.0` `Java/Docker`
- [FeedCord](https://github.com/Qolors/FeedCord) `⚠` - Simple, lightweight & customizable RSS News Feed for your Discord Server. `MIT` `Docker`
- [Feedpushr](https://github.com/ncarlier/feedpushr) - Powerful RSS aggregator, able to transform and send articles to many outputs. Single binary, extensible with plugins. `GPL-3.0` `Go/Docker`
- [Feeds Fun](https://feeds.fun/) - News reader with tags, scoring, and AI. ([Source Code](https://github.com/Tiendil/feeds.fun)) `BSD-3-Clause` `Python`
- [FreshRSS](https://freshrss.org/) - Self-hostable RSS feed aggregator. ([Demo](https://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS)) `AGPL-3.0` `PHP/Docker`
- [Fusion](https://github.com/0x2E/fusion) - Lightweight RSS aggregator and reader. `MIT` `Go/Docker`
- [JARR](https://1pxsolidblack.pl/jarr-en.html) - JARR (Just Another RSS Reader) is a web-based news aggregator and reader (fork of Newspipe). ([Demo](https://www.jarr.info/), [Source Code](https://github.com/jaesivsm/JARR)) `AGPL-3.0` `Docker/Python`
- [Kriss Feed](https://github.com/tontof/kriss_feed) - Simple and smart (or stupid) feed reader. `CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - Leed (for Light Feed) is a Free and minimalist RSS aggregator. `AGPL-3.0` `PHP`
- [Miniflux](https://miniflux.app/) - Minimalist news reader. ([Source Code](https://github.com/miniflux/v2)) `Apache-2.0` `Go/deb/Docker`
- [NewsBlur](https://www.newsblur.com/) - Personal news reader that brings people together to talk about the world. A new sound of an old instrument. ([Source Code](https://github.com/samuelclay/NewsBlur)) `MIT` `Python`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - Web news reader. ([Demo](https://www.newspipe.org/signup)) `AGPL-3.0` `Python`
- [Precis](https://github.com/leozqin/precis) - Extensibility-oriented RSS reader that can use LLMs (including local LLMs) to summarize RSS entries with built-in notification support. `MIT` `Python/Docker`
- [reader](https://github.com/lemon24/reader) - Feed reader web app and library (so you can use it to build your own), with only standard library and pure-Python dependencies. `BSD-3-Clause` `Python`
- [Readflow](https://readflow.app) - Lightweight news reader with modern interface and features: full-text search, automatic categorization, archiving, offline support, notifications. ([Source Code](https://github.com/ncarlier/readflow)) `AGPL-3.0` `Go/Docker`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - Generate RSS/ATOM feeds for websites which don't have one. `Unlicense` `PHP/Docker`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - Easy to use web-based RSS aggregator and reader compatible with the Fever API (alternative to Google Reader). `MIT` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - Fetches RSS/Atom-feeds and pushes new content to any email-receiver, supports OPML. `GPL-2.0` `Python/deb`
- [RSSHub](https://docs.rsshub.app) - Easy to use, and extensible RSS feed aggregator capable of generating RSS feeds from pretty much everything ranging from social media to university departments. ([Demo](https://rsshub.app), [Source Code](https://github.com/DIYgod/RSSHub)) `MIT` `Nodejs/Docker`
- [Selfoss](https://selfoss.aditu.de/) - New multipurpose rss reader, live stream, mashup, aggregation web application. ([Source Code](https://github.com/fossar/selfoss)) `GPL-3.0` `PHP`
- [Stringer](https://github.com/stringer-rss/stringer) - Work-in-progress self-hosted, anti-social RSS reader. `MIT` `Ruby`
- [Tiny Tiny RSS](https://tt-rss.org) - Open source web-based news feed (RSS/Atom) reader and aggregator. ([Demo](https://demo.tt-rss.org/), [Source Code](https://git.tt-rss.org/fox/tt-rss)) `GPL-3.0` `Docker/PHP`
- [TinyFeed](https://feed.lovergne.dev/) - Generate a static HTML page from a collection of feeds wtih a simple CLI. ([Demo](https://feed.lovergne.dev/demo), [Source Code](https://github.com/TheBigRoomXXL/tinyfeed)) `MIT` `Go/Docker`
- [Yarr](https://github.com/nkanaev/yarr) - Yarr (yet another rss reader) is a web-based feed aggregator which can be used both as a desktop application and a personal self-hosted server. `MIT` `Go`


### File Transfer & Synchronization

**[`^        back to top        ^`](#awesome-selfhosted)**

[File transfer](https://en.wikipedia.org/wiki/File_transfer), [sharing](https://en.wikipedia.org/wiki/File_sharing) and [synchronization software](https://en.wikipedia.org/wiki/File_synchronization) software.

_Related: [Groupware](#groupware)_

- [bewCloud](https://bewcloud.com) - File sharing + sync, notes, and photos (alternative to Nextcloud and ownCloud's RSS reader). ([Source Code](https://github.com/bewcloud/bewcloud), [Clients](https://github.com/bewcloud)) `AGPL-3.0` `Docker`
- [Cloudreve](https://cloudreve.org/) - File management and sharing system, supports multiple storage providers. ([Demo](https://demo.cloudreve.org), [Source Code](https://github.com/cloudreve/cloudreve)) `GPL-3.0` `Docker/Go`
- [Git Annex](https://git-annex.branchable.com/) - File synchronization between computers, servers, external drives. ([Source Code](https://git.joeyh.name/index.cgi/git-annex.git/)) `GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - Minimalist JSON storage service with synchronisation and sharing abilities. ([Source Code](https://github.com/Kinto/kinto)) `Apache-2.0` `Python`
- [Nextcloud](https://nextcloud.com/) - Access and share your files, calendars, contacts, mail and [more](https://apps.nextcloud.com/) from any device, on your terms. ([Demo](https://try.nextcloud.com/), [Source Code](https://github.com/nextcloud/server)) `AGPL-3.0` `PHP/deb`
- [OpenSSH SFTP server](https://www.openssh.com/) - Secure File Transfer Program. ([Source Code](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh/)) `BSD-2-Clause` `C/deb`
- [ownCloud](https://owncloud.org/) - All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP/Docker/deb`
- [Peergos](https://peergos.org) - Secure and private space online where you can store, share and view your photos, videos, music and documents. Also includes a calendar, news feed, task lists, chat and email client. ([Source Code](https://github.com/Peergos/Peergos)) `AGPL-3.0` `Java`
- [Puter](https://puter.com/) - Web-based operating system designed to be feature-rich, exceptionally fast, and highly extensible. ([Demo](https://puter.com/), [Source Code](https://github.com/heyputer/puter)) `AGPL-3.0` `Nodejs/Docker`
- [Pydio](https://pydio.com/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Demo](https://pydio.com/en/demo), [Source Code](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - Samba is the standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol. ([Source Code](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. ([Source Code](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [Sync-in](https://sync-in.com) - File storage, syncing, sharing, and collaboration with real-time editing, permission management, and desktop/CLI clients. ([Demo](https://sync-in.com/docs/demo), [Source Code](https://github.com/Sync-in/server), [Clients](https://github.com/Sync-in/desktop)) `AGPL-3.0` `Nodejs/Docker`
- [Syncthing](https://syncthing.net/) - Syncthing is an open source peer-to-peer file synchronisation tool. ([Source Code](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go/Docker/deb`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - Unison is a file-synchronization tool for OSX, Unix, and Windows. ([Source Code](https://github.com/bcpierce00/unison)) `GPL-3.0` `deb/OCaml`


### File Transfer - Distributed Filesystems

**[`^        back to top        ^`](#awesome-selfhosted)**

Network distributed filesystems.

**Please visit [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems)**



### File Transfer - Object Storage & File Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Object storage](https://en.wikipedia.org/wiki/Object_storage) is a computer data storage that manages data as objects, as opposed to other storage architectures like file systems which manages data as a file hierarchy, and block storage which manages data as blocks within sectors and tracks.

- [GarageHQ](https://garagehq.deuxfleurs.fr/) - Geo-distributed, S3‑compatible storage service that can fulfill many needs. ([Source Code](https://git.deuxfleurs.fr/Deuxfleurs/garage)) `AGPL-3.0` `Docker/Rust`
- [Harbor](https://goharbor.io/) - Cloud native image registry that stores, signs, and scans content. ([Source Code](https://github.com/goharbor/harbor)) `Apache-2.0` `Docker/K8S`
- [Minio](https://min.io/) - Object storage server compatible with Amazon S3 APIs. ([Source Code](https://github.com/minio/minio)) `AGPL-3.0` `Go/Docker/K8S`
- [SeaweedFS](https://github.com/seaweedfs/seaweedfs) - SeaweedFS is an open source distributed file system supporting WebDAV, S3 API, FUSE mount, HDFS, etc, optimized for lots of small files, and easy to add capacity. `Apache-2.0` `Go`
- [SFTPGo](https://github.com/drakkan/sftpgo) - Flexible, fully featured and highly configurable SFTP server with optional FTP/S and WebDAV support. `AGPL-3.0` `Go/deb/Docker`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Zenko CloudServer, an open-source implementation of a server handling the Amazon S3 protocol. ([Source Code](https://github.com/scality/cloudserver)) `Apache-2.0` `Docker/Nodejs`
- [ZOT OCI Registry](https://zotregistry.dev) - A production-ready vendor-neutral OCI-native container image registry. ([Demo](https://zothub.io), [Source Code](https://github.com/project-zot/zot)) `Apache-2.0` `Go/Docker`


### File Transfer - Peer-to-peer Filesharing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Peer-to-peer file sharing](https://en.wikipedia.org/wiki/Peer-to-peer_file_sharing) is the distribution and [sharing](https://en.wikipedia.org/wiki/File_sharing) of digital media using [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) (P2P) networking technology.

- [bittorrent-tracker](https://webtorrent.io/) - Simple, robust, BitTorrent tracker (client and server) implementation. ([Source Code](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [Deluge](https://deluge-torrent.org/) - Lightweight, cross-platform BitTorrent client. ([Source Code](https://git.deluge-torrent.org/deluge/tree/?h=develop)) `GPL-3.0` `Python/deb`
- [qBittorrent](https://www.qbittorrent.org/) - Free cross-platform bittorrent client with a feature rich Web UI for remote access. ([Source Code](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [Send](https://gitlab.com/timvisee/send) - Simple, private, end to end encrypted temporary file sharing, originally built by Mozilla. ([Demo](https://send.vis.ee/), [Clients](https://gitlab.com/timvisee/send#clients)) `MPL-2.0` `Nodejs/Docker`
- [slskd](https://github.com/slskd/slskd) `⚠` - A modern client-server application for the Soulseek file sharing network. `AGPL-3.0` `Docker/C#`
- [Transmission](https://transmissionbt.com/) - Fast, easy, free Bittorrent client. ([Source Code](https://github.com/transmission/transmission)) `GPL-3.0` `C++/deb`
- [Webtor](https://github.com/webtor-io/self-hosted) - Web-based torrent client with instant audio/video streaming. ([Demo](https://webtor.io)) `MIT` `Docker`


### File Transfer - Single-click & Drag-n-drop Upload

**[`^        back to top        ^`](#awesome-selfhosted)**

Simplified file servers for sharing of one-time/short-lived/temporary files, providing single-click or [drag-and-drop](https://en.wikipedia.org/wiki/Drag_and_drop) upload functionality.

- [Chibisafe](https://chibisafe.app) - File uploader service that aims to to be easy to use and set up. It accepts files, photos, documents, anything you imagine and gives you back a shareable link for you to send to others. ([Source Code](https://github.com/chibisafe/chibisafe)) `MIT` `Docker/Nodejs`
- [Digirecord](https://ladigitale.dev/digirecord/) - Record and share audio files (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digirecord)) `AGPL-3.0` `Nodejs/PHP`
- [elixire](https://gitlab.com/elixire/elixire) - Simple yet advanced screenshot uploading and link shortening service. ([Clients](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [Enclosed](https://enclosed.cc/) - Minimalistic web application designed for sending private and secure notes. ([Demo](https://enclosed.cc/), [Source Code](https://github.com/CorentinTh/enclosed)) `Apache-2.0` `Docker/Nodejs`
- [Files Sharing](https://github.com/axeloz/filesharing) - File sharing application based on unique and temporary links. `GPL-3.0` `PHP/Docker`
- [Flare](https://github.com/FlintSH/Flare) - A nonbloated, modern, and highly configurable file/screenshot vault server with support for ShareX, Flameshot, and Spectacle. Offers OCR search and more. `MIT` `Docker/Nodejs`
- [Gokapi](https://github.com/Forceu/gokapi) - Lightweight server to share files, which expire after a set amount of downloads or days. Similar to the discontinued Firefox Send, with the difference that only the admin is allowed to upload files. `GPL-3.0` `Go/Docker`
- [goploader](https://depado.github.io/goploader/) - Easy file sharing with server-side encryption, curl/httpie/wget compliant. ([Source Code](https://github.com/Depado/goploader)) `MIT` `Go`
- [GoSƐ](https://github.com/stv0g/gose) - Modern file-uploader focusing on scalability and simplicity. It only depends on a S3 storage backend and hence scales horizontally without the need for additional databases or caches. `Apache-2.0` `Go/Docker`
- [OnionShare](https://github.com/onionshare/onionshare) - Securely and anonymously share a file of any size. `GPL-3.0` `Python/deb`
- [Pairdrop](https://pairdrop.net/) - Local file sharing in your browser, inspired by Apple's AirDrop (fork of Snapdrop). ([Source Code](https://github.com/schlagmichdoch/pairdrop)) `GPL-3.0` `Docker`
- [PicoShare](https://pico.rocks) - Minimalist, easy-to-host service for sharing images and other files. ([Demo](https://demo.pico.rocks), [Source Code](https://github.com/mtlynch/picoshare)) `AGPL-3.0` `Go/Docker`
- [Picsur](https://github.com/CaramelFur/Picsur) - Simple imaging hosting platform that allows you to easily host, edit, and share images. ([Demo](https://picsur.org/upload)) `AGPL-3.0` `Docker`
- [PictShare](https://www.pictshare.net/) - Multi lingual image hosting service with a simple resizing and upload API. ([Source Code](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP/Docker`
- [Plik](https://github.com/root-gg/plik) - Scalable and friendly temporary file upload system. ([Demo](https://plik.root.gg/)) `MIT` `Go/Docker`
- [ProjectSend](https://www.projectsend.org/) - Upload files and assign them to specific clients you create. Give access to those files to your clients. ([Source Code](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - Simple file sharing solution with robust up-/download-resume and password protection. `BSD-2-Clause` `Nodejs`
- [QuickShare](https://ihexxa.github.io/quickshare.site/) - Quick and simple file sharing between different devices. ([Source Code](https://github.com/ihexxa/quickshare)) `LGPL-3.0` `Docker/Go`
- [Sharry](https://github.com/eikek/sharry) - Share files easily over the internet between authenticated and anonymous users (both ways) with resumable up- and downloads. `GPL-3.0` `Scala/Java/deb/Docker`
- [Shifter](https://github.com/TobySuch/Shifter) - A simple, self-hosted file-sharing web app, powered by Django. `MIT` `Docker`
- [Slink](https://docs.slinkapp.io/) - Image sharing platform designed to give users complete control over their media sharing experience. ([Source Code](https://github.com/andrii-kryvoviaz/slink)) `AGPL-3.0` `Docker`
- [transfer.sh](https://github.com/dutchcoders/transfer.sh) - Easy file sharing from the command line. `MIT` `Go`
- [Uguu](https://github.com/nokonoko/uguu) - Stores files and deletes after X amount of time. `MIT` `PHP`
- [Uploady](https://github.com/farisc0de/Uploady) - Uploady is a simple file uploader script with multi file upload support. `MIT` `PHP`
- [XBackBone](https://xbackbone.app/) - A simple, fast and lightweight file manager with instant sharing tools integration, like ShareX (a free and open-source screenshot utility for Windows). ([Source Code](https://github.com/SergiX44/XBackBone)) `AGPL-3.0` `PHP/Docker`
- [Zipline](https://github.com/diced/zipline) - A lightweight, fast and reliable file sharing server that is commonly used with ShareX, offering a react-based Web UI and fast API. `MIT` `Docker/Nodejs`


### File Transfer - Web-based File Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

Web-based [file managers](https://en.wikipedia.org/wiki/File_manager).

_Related: [Groupware](#groupware)_

- [Apaxy](https://oupala.github.io/apaxy/) - Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing. ([Source Code](https://github.com/oupala/apaxy)) `GPL-3.0` `Javascript`
- [copyparty](https://github.com/9001/copyparty) - Portable file server with accelerated resumable uploads, deduplication, WebDAV, FTP, zeroconf, media indexer, video thumbnails, audio transcoding, and write-only folders, in a single file with no mandatory dependencies. ([Demo](https://a.ocv.me/pub/demo/)) `MIT` `Python`
- [Directory Lister](https://www.directorylister.com/) - Simple PHP based directory lister that lists a directory and all its sub-directories and allows you to navigate there within. ([Source Code](https://github.com/DirectoryLister/DirectoryLister)) `MIT` `PHP/Docker`
- [filebrowser](https://filebrowser.org/) - Web File Browser with a Material Design web interface. ([Source Code](https://github.com/filebrowser/filebrowser)) `Apache-2.0` `Go`
- [FileGator](https://filegator.io/) - FileGator is a powerful multi-user file manager with a single page front-end. ([Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator)) `MIT` `PHP/Docker`
- [FileRise](https://github.com/error311/FileRise) - Web file manager with uploads, tagging, share links, gallery/table views, and an in-browser editor. ([Demo](https://github.com/error311/FileRise?tab=readme-ov-file#live-demo)) `MIT` `Docker/PHP`
- [Filestash](https://www.filestash.app/) - Web file manager that lets you manage your data anywhere it is located: FTP, SFTP, WebDAV, Git, S3, Minio, Dropbox, or Google Drive. ([Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash)) `AGPL-3.0` `Docker`
- [Gossa](https://github.com/pldubouilh/gossa) - Light and simple webserver for your files. `MIT` `Go`
- [IFM](https://github.com/misterunknown/ifm) - Single script file manager. `MIT` `PHP`
- [mikochi](https://github.com/zer0tonin/Mikochi) - Browse remote folders, upload files, delete, rename, download and stream files to VLC/mpv. `MIT` `Go/Docker/K8S`
- [miniserve](https://github.com/svenstaro/miniserve) - CLI tool to serve files and dirs over HTTP. `MIT` `Rust`
- [ResourceSpace](https://www.resourcespace.com) - Simple, fast, and free way to organise your digital assets. ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn)) `BSD-4-Clause` `PHP`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - Simple static file server with webui to manage files. `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - TagSpaces is an offline, cross-platform file manager and organiser that also can function as a note taking app. The WebDAV version of the application can be installed on top of a WebDAV servers such as Nextcloud or ownCloud. ([Demo](https://demo.tagspaces.com), [Source Code](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Nodejs`
- [Tiny File Manager](https://tinyfilemanager.github.io) - Web based File Manager in PHP, simple, fast and small file manager with a single file. ([Demo](https://tinyfilemanager.github.io/demo/), [Source Code](https://github.com/prasathmani/tinyfilemanager)) `GPL-3.0` `PHP`


### Games

**[`^        back to top        ^`](#awesome-selfhosted)**

Multiplayer game servers and [browser games](https://en.wikipedia.org/wiki/Browser_game).

_Related: [Games - Administrative Utilities & Control Panels](#games---administrative-utilities--control-panels)_

- [0 A.D.](https://play0ad.com/) - Cross-platform real-time strategy game of ancient warfare. ([Source Code](https://gitea.wildfiregames.com/0ad/0ad)) `MIT/GPL-2.0/Zlib` `C++/C/deb`
- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - Minimalist text adventure game for your browser. ([Demo](https://adarkroom.doublespeakgames.com/)) `MPL-2.0` `Javascript`
- [Digibuzzer](https://digibuzzer.app/) - Create a virtual game room around a connected buzzer (documentation in French). ([Demo](https://digibuzzer.app/), [Source Code](https://codeberg.org/ladigitale/digibuzzer)) `AGPL-3.0` `Nodejs`
- [Hypersomnia](https://github.com/TeamHypersomnia/Hypersomnia) - Competitive top-down shooter blending Counter-Strike with Hotline Miami. Runs on Linux, Windows, MacOS and the Web. ([Demo](https://hypersomnia.io)) `AGPL-3.0` `C++/Docker`
- [Lila](https://lichess.org/) - Ad-less chess server powering lichess.org, with official iOS and Android client apps. ([Source Code](https://github.com/lichess-org/lila)) `AGPL-3.0` `Scala`
- [Luanti](https://www.luanti.org/) - Voxel game engine (formerly Minetest). Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server. ([Source Code](https://github.com/luanti-org/luanti)) `LGPL-2.1/MIT/Zlib` `C++/Lua/deb`
- [Mindustry](https://mindustrygame.github.io/) - Factorio-like tower defense game. Build production chains to gather more resources, and build complex facilities. ([Source Code](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [MTA:SA](https://multitheftauto.com/) `⚠` - Add network play functionality to Rockstar North's Grand Theft Auto game series, in which this functionality is not originally found. ([Source Code](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [OpenTTD](https://www.openttd.org/) - Transport tycoon simulation game. ([Source Code](https://github.com/OpenTTD/OpenTTD), [Clients](https://bananas.openttd.org/)) `GPL-2.0` `C++/Docker`
- [piqueserver](https://github.com/piqueserver/piqueserver) - Server for openspades, the first-person shooter in a destructible voxel world. ([Clients](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [Posio](https://github.com/abrenaut/posio) - Geography multiplayer game. `MIT` `Python`
- [Quizmaster](https://github.com/nymanjens/quizmaster) - Web application for conducting a quiz, including a page for players to enter their answers. `Apache-2.0` `Scala`
- [Red Eclipse 2](https://redeclipse.net) - Arena first-person shooter similar to Unreal Tournament. ([Source Code](https://github.com/redeclipse/base)) `Zlib/MIT/CC-BY-SA-4.0` `C/C++/deb`
- [Scribble.rs](https://github.com/scribble-rs/scribble.rs) - A web-based pictionary game. ([Demo](https://scribblers.fly.dev)) `BSD-3-Clause` `Go/Docker`
- [Suroi](https://suroi.io/) - An open-source 2D battle royale game inspired by surviv.io. ([Demo](https://suroi.io/), [Source Code](https://github.com/HasangerGames/suroi)) `GPL-3.0` `Nodejs`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - The Battle for Wesnoth is an Open Source, turn-based tactical strategy game with a high fantasy theme, featuring both singleplayer and online/hotseat multiplayer combat. `GPL-2.0` `C++/deb`
- [Veloren](https://veloren.net/) - Multiplayer RPG. Open-source game inspired by Cube World, Legend of Zelda, Dwarf Fortress and Minecraft. ([Source Code](https://gitlab.com/veloren/veloren)) `GPL-3.0` `Rust`
- [Word Mastermind](https://github.com/clupasq/word-mastermind) - Wordle clone. A Mastermind-like game, but instead of colors you need to guess words. ([Demo](https://word-mastermind.glitch.me/)) `MIT` `Nodejs`
- [Zero-K](https://zero-k.info/) - Open Source on Springrts engine. Zero-K is a traditional real time strategy game with a focus on player creativity through terrain manipulation, physics, and a large roster of unique units - all while being balanced to support competitive play. ([Source Code](https://github.com/ZeroK-RTS/Zero-K)) `GPL-2.0` `Lua`


### Games - Administrative Utilities & Control Panels

**[`^        back to top        ^`](#awesome-selfhosted)**

Utilities for managing game servers.

_Related: [Games](#games)_

- [auto-mcs](https://www.auto-mcs.com) - Cross-platform Minecraft server manager. ([Source Code](https://github.com/macarooni-man/auto-mcs)) `AGPL-3.0` `Python`
- [Crafty Controller](https://craftycontrol.com/) - Minecraft launcher and manager that allows users to start and administer Minecraft servers from a user-friendly interface. ([Source Code](https://gitlab.com/crafty-controller/crafty-4)) `GPL-3.0` `Docker/Python`
- [Drop](https://droposs.org) - Game distribution platform, designed for distributing and sharing DRM-free games efficiently (alternative to Steam, GameVault). ([Source Code](https://github.com/Drop-OSS/drop), [Clients](https://github.com/Drop-OSS/drop-app)) `AGPL-3.0` `Docker`
- [EasyWI](https://easy-wi.com) - Easy-Wi is a Web-interface that allows you to manage server daemons like gameservers. In addition it provides you with a CMS which includes a fully automated game- and voiceserver lending service. ([Source Code](https://github.com/easy-wi/developer/)) `GPL-3.0` `PHP/Shell`
- [Gameyfin](https://gameyfin.org) - Video game library manager with automatic scanning, web access, downloads, and plugin support. ([Source Code](https://github.com/gameyfin/gameyfin)) `AGPL-3.0` `Docker`
- [Gaseous Server](https://github.com/gaseous-project/gaseous-server) `⚠` - Game ROM manager with a built-in web-based emulator using multiple sources to identify and provide metadata. `AGPL-3.0` `Docker/.NET`
- [Kubek](https://kubek.seeeroy.ru) - Web management panel for Minecraft servers. ([Source Code](https://github.com/seeroy/kubek-minecraft-dashboard)) `GPL-3.0` `Nodejs`
- [Lancache](https://lancache.net) `⚠` - LAN Party game caching made easy. ([Source Code](https://github.com/lancachenet/monolithic)) `MIT` `Docker/Shell`
- [LinuxGSM](https://linuxgsm.com/) - CLI tool for deployment and management of dedicated game servers on Linux: more than 120 games are supported. ([Source Code](https://github.com/GameServerManagers/LinuxGSM)) `MIT` `Shell`
- [Minus Games](https://accessory.github.io/minus_games_user_guide) - Sync games and save files across multiple devices. ([Source Code](https://github.com/Accessory/minus_games)) `MIT` `Rust`
- [Pelican Panel](https://pelican.dev/) - Web application for easy management of game servers, offering a user-friendly interface for deploying, configuring, and managing servers, server monitoring tools, and extensive customization options (fork of Pterodactyl). ([Source Code](https://github.com/pelican-dev/panel)) `AGPL-3.0` `PHP/Docker`
- [Pterodactyl](https://pterodactyl.io/) - Management panel for game servers, with an intuitive UI for end users. ([Source Code](https://github.com/pterodactyl/panel)) `MIT` `PHP`
- [PufferPanel](https://www.pufferpanel.com/) - Game server management panel designed for both small networks and game server providers. ([Source Code](https://github.com/pufferpanel/pufferpanel)) `Apache-2.0` `Go`
- [RconCli](https://github.com/gorcon/rcon-cli) - CLI for executing queries on a remote Valve Source dedicated server using the RCON Protocol. `MIT` `Go`
- [Retrom](https://github.com/JMBeresford/retrom) - Private cloud game library distribution server + frontend/launcher. `GPL-3.0` `Docker/Rust`
- [RomM](https://romm.app/) `⚠` - ROM manager for organizing, enriching, and playing retro games, with support for 400+ platforms. ([Demo](https://demo.romm.app/), [Source Code](https://github.com/rommapp/romm)) `AGPL-3.0` `Docker`
- [SourceBans++](https://sbpp.github.io/) - Admin, ban, and communication management system for games running on the Source engine. ([Source Code](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`
- [Sunshine](https://app.lizardbyte.dev/Sunshine/) - Remote game stream host for Moonlight with support up to 120 frames per second and 4K resolution. ([Source Code](https://github.com/LizardByte/Sunshine)) `GPL-3.0` `C++/deb/Docker`


### Genealogy

**[`^        back to top        ^`](#awesome-selfhosted)**

[Genealogy software](https://en.wikipedia.org/wiki/Genealogy_software) used to record, organize, and publish genealogical data.

- [Genea.app](https://www.genea.app/) - Genealogy tool designed with privacy in mind that anyone can use to author or edit their family tree. Data is stored in the GEDCOM format and all processing is done in the browser. ([Source Code](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [Genealogy](https://genealogy.kreaweb.be/) - Record family members and their relationships and build a family tree. ([Demo](https://genealogy.kreaweb.be/), [Source Code](https://github.com/MGeurts/genealogy)) `MIT` `PHP`
- [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - Genealogy software that can be used offline or as a Web service. ([Source Code](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [Gramps Web](https://www.grampsweb.org/) - Web app for collaborative genealogy, based on and interoperable with Gramps, the open source genealogy desktop application. ([Demo](https://gramps-project.github.io/gramps-web-api/), [Source Code](https://github.com/gramps-project/gramps-web-api)) `AGPL-3.0` `Docker`
- [webtrees](https://www.webtrees.net) - Webtrees is the web's leading online collaborative genealogy application. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`


### Generative Artificial Intelligence (GenAI)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Generative Artificial Intelligence (GenAI)](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) is a subset of [artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence) that uses generative models to produce text, images, videos, or other forms of data.

- [Agenta](https://agenta.ai/) - LLMOps platform for prompt management, LLM evaluation, and observability. Build, evaluate, and monitor production-grade LLM applications with collaborative prompt engineering. ([Source Code](https://github.com/agenta-ai/agenta)) `MIT` `Docker`
- [AnythingLLM](https://anythingllm.com/) - All-in-one desktop & Docker AI application with built-in RAG, AI agents, No-code agent builder, MCP compatibility, and more. ([Source Code](https://github.com/Mintplex-Labs/anything-llm)) `MIT` `Nodejs/Docker`
- [Khoj](https://khoj.dev/) - Your AI second brain. Get answers from the web or your docs. Build custom agents, schedule automations, do deep research. Turn any online or local LLM into your personal, autonomous AI. ([Demo](https://app.khoj.dev/), [Source Code](https://github.com/khoj-ai/khoj)) `AGPL-3.0` `Python/Docker`
- [Ollama](https://ollama.com/) - Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 3, and other large language models. ([Source Code](https://github.com/ollama/ollama)) `MIT` `Docker/Python`
- [Open-WebUI](https://openwebui.com) - User-friendly AI Interface, supports Ollama, OpenAI API. ([Source Code](https://github.com/open-webui/open-webui)) `BSD-3-Clause` `Docker/Python`
- [Perplexica](https://github.com/ItzCrazyKns/Perplexica) - AI-powered search engine (alternative to Perplexity AI). `MIT` `Docker`
- [TuxSEO](https://tuxseo.com/) `⚠` - Create automated blog content for your business, using AI. ([Source Code](https://github.com/rasulkireev/TuxSEO)) `MIT` `Python/Django/Docker`


### Groupware

**[`^        back to top        ^`](#awesome-selfhosted)**

Collaborative software or [groupware](https://en.wikipedia.org/wiki/Collaborative_software) is designed to help people working on a common task to attain their goals. Groupware often regroups multiple services such as file sharing, calendar/events management, address books... in a single, integrated application.

- [Citadel](https://www.citadel.org/) - Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more. ([Source Code](https://www.citadel.org/source.html)) `GPL-3.0` `C/Docker/Shell`
- [Colanode](https://colanode.com) - Collaboration suite with real-time messaging, rich text pages, file management, and dynamic databases - built for offline work (alternative to Slack, Notion). ([Source Code](https://github.com/colanode/colanode)) `Apache-2.0` `K8S/Docker`
- [Cozy Cloud](https://cozy.io/) - Personal cloud where you can manage and sync your files, notes, contacts, passwords, and documents. ([Source Code](https://github.com/cozy/), [Clients](https://github.com/cozy/cozy-store)) `GPL-3.0` `Nodejs`
- [Digipad](https://digipad.app/) - An online self-hosted application for creating collaborative digital notepads (Documentation in french). ([Source Code](https://codeberg.org/ladigitale/digipad)) `AGPL-3.0` `Nodejs`
- [Digistorm](https://digistorm.app/) - Create collaborative surveys, quizzes, brainstorms, and word clouds (documentation in French). ([Demo](https://digistorm.app/), [Source Code](https://codeberg.org/ladigitale/digistorm)) `AGPL-3.0` `Nodejs`
- [Digiwall](https://digiwall.app/) - Create multimedia collaborative walls for in-person or remote work (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiwall)) `AGPL-3.0` `Nodejs`
- [egroupware](https://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS. ([Source Code](https://github.com/EGroupware/egroupware)) `GPL-2.0` `PHP`
- [Group Office](https://www.group-office.com) - Enterprise CRM and groupware tool. Share projects, calendars, files and e-mail online with co-workers and clients. ([Source Code](https://github.com/Intermesh/groupoffice/)) `AGPL-3.0` `PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Video conferencing, instant messaging, whiteboard, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming. ([Source Code](https://github.com/apache/openmeetings)) `Apache-2.0` `Java`
- [SOGo](https://www.sogo.nu/) - SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and Web interface. ([Demo](https://demo.sogo.nu/SOGo/), [Source Code](https://github.com/Alinto/sogo)) `LGPL-2.1` `Objective-C`
- [Tine](https://www.tine-groupware.de/) - Software for digital collaboration in companies and organizations. From powerful groupware functionalities to clever add-ons, tine combines everything to make daily team collaboration easier. ([Source Code](https://github.com/tine-groupware/tine)) `AGPL-3.0` `Docker`
- [Tracim](https://github.com/tracim/tracim) - Collaborative Platform for team collaboration: file,threads,notes,agenda,etc. `AGPL-3.0/LGPL-3.0/MIT` `Python`
- [Zimbra Collaboration](https://www.zimbra.com/) - Email, calendar, collaboration server with Web interface and lots of integrations. ([Source Code](https://github.com/zimbra)) `GPL-2.0/CPAL-1.0` `Java`


### Health and Fitness

**[`^        back to top        ^`](#awesome-selfhosted)**

[Medical](https://en.wikipedia.org/wiki/Medical_software), [Health](https://en.wikipedia.org/wiki/Health_information_technology) and [Fitness](https://en.wikipedia.org/wiki/Fitness_tracker) software.

- [Endurain](https://docs.endurain.com/) - Fitness tracking service designed to give users full control over their data and hosting environment. ([Source Code](https://github.com/joaovitoriasilva/endurain)) `AGPL-3.0` `Docker`
- [Fasten Health](https://github.com/fastenhealth/fasten-onprem/) `⚠` - Personal/family electronic medical record aggregator, designed to integrate with hundreds of thousands of insurances/hospitals/clinics in the United States. `GPL-3.0` `Go/Docker`
- [Mere Medical](https://meremedical.co/) `⚠` - Manage all of your medical records from Epic MyChart, Cerner, and OnPatient patient portals in one place. Privacy-focused, self-hosted, and offline-first. ([Demo](https://demo.meremedical.co), [Source Code](https://github.com/cfu288/mere-medical)) `GPL-3.0` `Docker/Nodejs`
- [OpenEMR](https://www.open-emr.org/) - Electronic health records and medical practice management solution. ([Demo](https://www.open-emr.org/demo/), [Source Code](https://github.com/openemr/openemr)) `GPL-3.0` `PHP/Docker`
- [wger](https://wger.de/) - Web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger)) `AGPL-3.0` `Python/Docker`
- [Wingfit](https://wingfit.fr) - Minimalist fitness app to plan your workouts, track your personal records and leverage smartwatch data. ([Demo](https://wingfit.fr/home), [Source Code](https://github.com/itskovacs/wingfit)) `CC-BY-SA-4.0` `Python/Docker`


### Human Resources Management (HRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

A [human resources management system](https://en.wikipedia.org/wiki/Human_resource_management_system) combines a number of systems and processes to ensure the easy management of [human resources](https://en.wikipedia.org/wiki/Human_resources), business processes and data.

- [admidio](https://www.admidio.org/) - User management system for websites of organizations and groups. The system has a flexible role model so that it’s possible to reflect the structure and permissions of your organization. ([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP/Docker`
- [Frappe HR](https://frappe.io/hr) - Complete HRMS solution with over 13 different modules right from employee management, onboarding, leaves, to payroll, taxation, and more. ([Source Code](https://github.com/frappe/hrms)) `GPL-3.0` `Docker/Python/Nodejs`
- [MintHCM](https://minthcm.org/) - Tool for Human Capital Management based on two popular, well-known business applications SugarCRM Community Edition and SuiteCRM. ([Source Code](https://github.com/minthcm/minthcm)) `AGPL-3.0` `PHP`


### Identity Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Identity management](https://en.wikipedia.org/wiki/Identity_management) (IdM), also known as identity and access management (IAM or IdAM), is a framework of policies and technologies to ensure that the right users have the appropriate access to technology resources.

**Please visit [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**



### Internet of Things (IoT)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things) describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices over the Internet.

- [Domoticz](https://www.domoticz.com/) - Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. ([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++/Docker/Shell`
- [EMQX](https://www.emqx.io/) - Scalable MQTT broker. Connect 100M+ IoT devices in one single cluster, move and process real-time IoT data with 1M msg/s throughput at 1ms latency. ([Demo](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [Source Code](https://github.com/emqx/emqx)) `Apache-2.0` `Docker/Erlang`
- [evcc](https://evcc.io/) - Extensible Electric Vehicle Charge Controller and home energy management system. ([Source Code](https://github.com/evcc-io/evcc)) `MIT` `deb/Docker/Go`
- [FHEM](https://fhem.de/fhem.html) - Automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly. ([Source Code](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [FlowForge](https://flowforge.com/) - Deploy Node-RED applications in a reliable, scalable and secure manner. The FlowForge platform provides DevOps capabilities for Node-RED development teams. ([Source Code](https://github.com/FlowFuse/flowfuse)) `Apache-2.0` `Nodejs/Docker/K8S`
- [FMD Server](https://fmd-foss.org) - A server to communicate with the FMD (Find My Device) Android app, to locate and control your devices. ([Source Code](https://gitlab.com/fmd-foss/fmd-server), [Clients](https://gitlab.com/fmd-foss/fmd-android)) `GPL-3.0` `Docker/Go`
- [Gladys](https://gladysassistant.com/) - Privacy-first home assistant. ([Source Code](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs/Docker`
- [Home Assistant](https://home-assistant.io/) - Home automation platform. ([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core)) `Apache-2.0` `Python/Docker`
- [ioBroker](https://www.iobroker.net/) - Integration platform for the Internet of Things, focused on building automation, smart metering, ambient assisted living, process automation, visualization and data logging. ([Source Code](https://github.com/ioBroker/ioBroker)) `MIT` `Nodejs`
- [LHA](https://github.com/javalikescript/lha) - Light Home Automation application that is fully extensible using Blockly, HTML or Lua. It includes extensions such as ConBee, Philips Hue or Z-Wave JS. `MIT` `Lua`
- [Node RED](https://nodered.org/) - Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. ([Source Code](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs/Docker`
- [openHAB](https://www.openhab.org) - Vendor and technology agnostic open source software for home automation. ([Source Code](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. ([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/openremote)) `AGPL-3.0` `Java`
- [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) - Open source software for sprinkler/irrigation control. ([Source Code](https://github.com/Dan-in-CA/SIP)) `GPL-3.0` `Python`
- [Tasmota](https://tasmota.com) - Open source firmware for ESP devices. Total local control with quick setup and updates. Control using MQTT, Web UI, HTTP or serial. Automate using timers, rules or scripts. Integration with home automation solutions. ([Source Code](https://github.com/arendst/Tasmota)) `GPL-3.0` `C/C++`
- [Thingsboard](https://thingsboard.io/) - Open-source IoT Platform - Device management, data collection, processing and visualization. ([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java/Docker/K8S`
- [WebThings Gateway](https://webthings.io/gateway/) - WebThings is an open source implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework. ([Source Code](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`


### Inventory Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Inventory management software](https://en.wikipedia.org/wiki/Inventory_management_software).

_Related: [Money, Budgeting & Management](#money-budgeting--management), [Resource Planning](#resource-planning)_

_See also: [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)_

- [Cannery](https://cannery.app) - Firearm and ammunition tracker app. ([Source Code](https://gitea.bubbletea.dev/shibao/cannery)) `AGPL-3.0` `Docker`
- [HomeBox (SysAdminsMedia)](https://homebox.software/) - Inventory and organization system built for the home user. ([Demo](https://demo.homebox.software/), [Source Code](https://github.com/sysadminsmedia/homebox)) `AGPL-3.0` `Docker/Go`
- [Inventaire](https://inventaire.io/welcome) - Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs. ([Source Code](https://codeberg.org/inventaire/inventaire)) `AGPL-3.0` `Nodejs`
- [Inventree](https://docs.inventree.org/en/latest/) - Inventory management system which provides intuitive parts management and stock control. ([Demo](https://inventree.org/demo), [Source Code](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [Open QuarterMaster](https://openquartermaster.com/) - Powerful inventory management system, designed to be flexible and scalable. ([Source Code](https://github.com/Epic-Breakfast-Productions/OpenQuarterMaster)) `GPL-3.0` `deb/Docker`
- [Part-DB](https://docs.part-db.de/) - Inventory management system for your electronic components. ([Demo](https://demo.part-db.de/en/), [Source Code](https://github.com/Part-DB/Part-DB-server)) `AGPL-3.0` `Docker/PHP/Nodejs`
- [Shelf](https://www.shelf.nu) - Asset and equipment tracking software used by teams who value clarity. Shelf is an asset database and QR asset label generator that lets you create, manage and overview your assets across locations. Unlimited assets, free forever. ([Source Code](https://github.com/Shelf-nu/shelf.nu)) `AGPL-3.0` `Nodejs`
- [Spoolman](https://github.com/Donkie/Spoolman) - Keep track of your inventory of 3D-printer filament spools. `MIT` `Docker/Python`


### Knowledge Management Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

[Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management) is the collection of methods relating to creating, sharing, using and managing the knowledge and information.

_Related: [Note-taking & Editors](#note-taking--editors), [Wikis](#wikis), [Database Management](#database-management)_

- [AFFiNE Community Edition](https://affine.pro/) - Next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, customizable and ready to use (alternative to Notion and Miro). ([Demo](https://app.affine.pro/), [Source Code](https://github.com/toeverything/AFFiNE)) `MIT/AGPL-3.0` `Docker`
- [Atomic Server](https://github.com/atomicdata-dev/atomic-server) - Knowledge graph database with documents (similar to Notion), tables, search, and a powerful linked data API. Lightweight, very fast and no runtime dependencies. ([Demo](https://atomicdata.dev/)) `MIT` `Docker/Rust`
- [Digimindmap](https://ladigitale.dev/digimindmap/#/) - Create simple mindmaps (documentation in French). ([Demo](https://ladigitale.dev/digimindmap/#/), [Source Code](https://codeberg.org/ladigitale/digimindmap)) `AGPL-3.0` `Nodejs/PHP`
- [LibreKB](https://librekb.com/) - Web-based knowledge base solution. A simple web app, it runs on pretty much any web server or hosting provider with PHP and MySQL. ([Source Code](https://github.com/michaelstaake/LibreKB/)) `GPL-3.0` `PHP`
- [memEx](https://gitea.bubbletea.dev/shibao/memEx) - Structured personal knowledge base, inspired by zettlekasten and org-mode. `AGPL-3.0` `Docker`
- [SiYuan](https://b3log.org/siyuan/) - A privacy-first personal knowledge management software, written in typescript and golang. ([Source Code](https://github.com/siyuan-note/siyuan)) `AGPL-3.0` `Docker/Go`
- [TeamMapper](https://github.com/b310-digital/teammapper) - Host and create your own mindmaps. Share your mindmap sessions with your team and collaborate live on mindmaps. ([Demo](https://map.kits.blog)) `MIT` `Docker/Nodejs`


### Learning and Courses

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software to help with education and learning.

- [Canvas LMS](https://www.instructure.com/canvas/) - Learning management system (LMS) that is revolutionizing the way we educate. ([Demo](https://canvas.instructure.com/register), [Source Code](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - Create a virtual campus for the provision of online or semi-online training. ([Source Code](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [Digiscreen](https://ladigitale.dev/digiscreen/) - Interactive whiteboard/wallpaper for the classroom, in person or remotely (documentation in French). ([Demo](https://ladigitale.dev/digiscreen/), [Source Code](https://codeberg.org/ladigitale/digiscreen)) `AGPL-3.0` `Nodejs/PHP`
- [Digitools](https://ladigitale.dev/digitools) - A set of simple tools to accompany the animation of courses in person or remotely. (documentation in French). ([Demo](https://ladigitale.dev/digitools/), [Source Code](https://codeberg.org/ladigitale/digitools)) `AGPL-3.0` `PHP`
- [edX](https://www.edx.org/) - The Open edX platform is open-source code that powers edX.org. ([Source Code](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://gibbonedu.org/) - Flexible school management platform designed to make life better for teachers, students, parents and leaders. ([Source Code](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [ILIAS](https://www.ilias.de) - Learning management system that can cope with anything you throw at it. ([Demo](https://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [INGInious](https://inginious.org/?lang=en) - Intelligent grader that allows secured and automated testing of code made by students. ([Source Code](https://github.com/INGInious/INGInious), [Clients](https://github.com/INGInious/plugins)) `AGPL-3.0` `Python/Docker`
- [Moodle](https://moodle.org/) - Learning and courses platform with one of the largest open source communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](https://www.openeclass.org/) - Open eClass is an advanced e-learning solution that can enhance the teaching and learning process. ([Demo](https://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass)) `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - Learning management system for teaching, education, assessment and communication. ([Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT)) `Apache-2.0` `Java`
- [QST](https://qstonline.org) - Online assessment software. From a quick quiz on your phone to large scale, high stakes, proctored desktop testing, easy, secure and economical. ([Demo](https://qstonline.org/free_account.htm), [Source Code](https://sourceforge.net/projects/qstonline/)) `GPL-2.0` `Perl`
- [RELATE](https://documen.tician.de/relate/) - Courseware package that includes features such as: flexible rules, statistics, multi-course support, class calendar. ([Source Code](https://github.com/inducer/relate)) `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - Student Information System for school management. Features students demographics, grades, scheduling, attendance, student billing, discipline & food service modules. ([Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/)) `GPL-2.0` `PHP`
- [Schoco](https://github.com/PhiTux/schoco) - Online IDE for learning Java programming at school, including automatic JUnit tests. Designed to give coding homework/assignments. `MIT` `Docker`


### Manufacturing

**[`^        back to top        ^`](#awesome-selfhosted)**

Software to manage [3D printers](https://en.wikipedia.org/wiki/3D_printing), [CNC machines](https://en.wikipedia.org/wiki/Numerical_control) and other physical manufacturing tools.

- [CNCjs](https://cnc.js.org/) - Web interface for CNC milling controllers running Grbl, Smoothieware, or TinyG. ([Source Code](https://github.com/cncjs/cncjs/)) `MIT` `Nodejs`
- [Fluidd](https://docs.fluidd.xyz/) - Lightweight & responsive user interface for Klipper, the 3D printer firmware. ([Source Code](https://github.com/fluidd-core/fluidd)) `GPL-3.0` `Docker/Nodejs`
- [Mainsail](https://docs.mainsail.xyz/) - Modern and responsive user interface for the Klipper 3D printer firmware. Control and monitor your printer from everywhere, from any device. ([Source Code](https://github.com/mainsail-crew/mainsail)) `GPL-3.0` `Docker/Python`
- [Manyfold](https://manyfold.app) - Digital asset manager for 3d print files; STL, OBJ, 3MF and more. ([Source Code](https://github.com/manyfold3d/manyfold)) `MIT` `Docker`
- [Octoprint](https://octoprint.org/) - Snappy web interface for controlling consumer 3D printers. ([Source Code](https://github.com/OctoPrint/OctoPrint)) `AGPL-3.0` `Docker/Python`


### Maps and Global Positioning System (GPS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Maps](https://en.wikipedia.org/wiki/Map), [cartography](https://en.wikipedia.org/wiki/Cartography), [GIS](https://en.wikipedia.org/wiki/Geographic_information_system) and [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) software.

_See also: [awesome-openstreetmap](https://github.com/osmlab/awesome-openstreetmap), [awesome-gis](https://github.com/sshuair/awesome-gis)_

- [AdventureLog](https://adventurelog.app) - Travel tracker and trip planner. ([Demo](https://adventurelog.app), [Source Code](https://github.com/seanmorley15/AdventureLog)) `GPL-3.0` `Docker`
- [AirTrail](https://airtrail.johan.ohly.dk) - Personal flight tracking system. ([Source Code](https://github.com/johanohly/AirTrail)) `GPL-3.0` `Docker/Nodejs`
- [Bicimon](https://github.com/knrdl/bicimon) - Bike Speedometer as Progressive Web App. ([Demo](https://knrdl.github.io/bicimon/)) `MIT` `Javascript`
- [Dawarich](https://dawarich.app/) - Visualize your location history, track your movements, and analyze your travel patterns with complete privacy and control (alternative to Google Timeline a.k.a. Google Location History). ([Source Code](https://github.com/Freika/dawarich)) `AGPL-3.0` `Docker`
- [Geo2tz](https://github.com/noandrea/geo2tz) - Get the timezone from geo coordinates (lat, lon). `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - Fast routing library and server using OpenStreetMap. ([Source Code](https://github.com/graphhopper/graphhopper)) `Apache-2.0` `Java`
- [Nominatim](https://nominatim.org/) - Server application for geocoding (address -> coordinates) and reverse geocoding (coordinates -> address) on OpenStreetMap data. ([Source Code](https://github.com/osm-search/Nominatim)) `GPL-2.0` `C`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - High performance routing engine designed to run on OpenStreetMap data and offering an HTTP API, C++ library interface, and Nodejs wrapper. ([Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend)) `BSD-2-Clause` `C++`
- [OpenRouteService](https://openrouteservice.org/) - Route service with directions, isochrones, time-distance matrix, route optimization, etc. ([Demo](https://openrouteservice.org/dev/#/api-docs/introduction), [Source Code](https://github.com/GIScience/openrouteservice)) `GPL-3.0` `Docker/Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative project to create a free editable map of the world. ([Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software)) `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - Multimodal trip planning software based on OpenStreetMap data and consuming published GTFS-formatted data to suggest routes using local public transit systems. ([Source Code](https://github.com/opentripplanner/OpenTripPlanner)) `LGPL-3.0` `Java/Javascript`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `⚠` - Store and access data published by [OwnTracks](https://owntracks.org/) location tracking apps. `GPL-2.0` `C/Lua/deb/Docker`
- [TileServer GL](https://tileserver.readthedocs.io/) - Vector and raster maps with GL styles. Server side rendering by Mapbox GL Native. Map tile server for Mapbox GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc. ([Source Code](https://github.com/maptiler/tileserver-gl)) `BSD-2-Clause` `Nodejs/Docker`
- [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](https://demo.traccar.org/), [Source Code](https://github.com/traccar)) `Apache-2.0` `Java`
- [wanderer](https://github.com/Flomp/wanderer) - Trail database where you can upload your recorded tracks or create new ones and add various metadata to build an easily searchable catalogue. ([Demo](https://demo.wanderer.to)) `AGPL-3.0` `Docker/Go/Nodejs`


### Media Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Digital media](https://en.wikipedia.org/wiki/Digital_media) management tools and software.

_Related: [Automation](#automation), [Media Streaming](#media-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media Streaming - Video Streaming](#media-streaming---video-streaming)_

- [ChannelTube](https://github.com/TheWicklowWolf/ChannelTube) `⚠` - Download video or audio from YouTube channels on a schedule via yt-dlp. `AGPL-3.0` `Docker`
- [Headphones](https://github.com/rembo10/headphones) - Automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole. `GPL-3.0` `Python`
- [Jellyseerr](https://github.com/Fallenbagel/jellyseerr) - Manage requests for your media library, supports Plex, Jellyfin and Emby media servers (fork of Overseerr). `MIT` `Docker/Nodejs`
- [Lidarr](https://lidarr.audio/) - Music collection manager for Usenet and BitTorrent users. ([Source Code](https://github.com/Lidarr/Lidarr)) `GPL-3.0` `C#/Docker`
- [LidaTube](https://github.com/TheWicklowWolf/LidaTube) `⚠` - Finding and fetch missing Lidarr albums via yt-dlp. `GPL-3.0` `Docker`
- [Lidify](https://github.com/TheWicklowWolf/Lidify) `⚠` - Music discovery tool that provides recommendations based on selected Lidarr artists, using Spotify or LastFM. `MIT` `Docker`
- [Medusa](https://github.com/pymedusa/Medusa) - Automatic Video library manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Clients](https://github.com/medusajs/nextjs-starter-medusa)) `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites. `AGPL-3.0` `Python/Nodejs/Docker`
- [nefarious](https://lardbit.github.io/nefarious/) - Automate downloading Movies and TV Shows. ([Source Code](https://github.com/lardbit/nefarious)) `GPL-3.0` `Python`
- [Ombi](https://ombi.io/) - Content request system for Plex/Emby, connects to SickRage, CouchPotato, Sonarr, with a growing feature set. ([Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi)) `GPL-2.0` `C#/deb`
- [Overseerr](https://overseerr.dev/) `⚠` - Manage requests for your media library. It integrates with your existing services, such as Sonarr, Radarr, and Plex!. ([Source Code](https://github.com/sct/overseerr)) `MIT` `Docker`
- [Pinchflat](https://github.com/kieraneglin/pinchflat) `⚠` - Download YouTube content built using yt-dlp. `AGPL-3.0` `Docker`
- [PodFetch](https://samtv12345.github.io/PodFetch) - Sleek and efficient podcast downloader. ([Source Code](https://github.com/SamTV12345/PodFetch)) `Apache-2.0` `Docker/Rust`
- [Radarr](https://radarr.video/) - Automatically download movies via Usenet and BitTorrent (fork of Sonarr). ([Source Code](https://github.com/Radarr/Radarr)) `GPL-3.0` `C#/Docker`
- [Reaparr](https://www.reaparr.rocks/) `⚠` - Cross-platform Plex media downloader that seamlessly adds media from other Plex servers to your own. ([Source Code](https://github.com/Reaparr/Reaparr)) `GPL-3.0` `Docker`
- [Reiverr](https://github.com/aleksilassila/reiverr) `⚠` - Clean combined interface for Jellyfin, TMDB, Radarr and Sonarr, as well as a replacement to Overseerr. `AGPL-3.0` `Docker`
- [Sonarr](https://sonarr.tv/) - Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. ([Source Code](https://github.com/Sonarr/Sonarr)) `GPL-3.0` `C#/Docker`
- [Spooty](https://github.com/Raiper34/spooty) `⚠` - Download tracks/playlists/albums from Spotify. It can also subscribe to a playlist or author page and download new songs upon release. `MIT` `Docker/Nodejs`
- [tubesync](https://github.com/meeb/tubesync) `⚠` - Syncs YouTube channels and playlists to a locally hosted media server. `AGPL-3.0` `Docker/Python`
- [Watcharr](https://github.com/sbondCo/Watcharr) - Add and track all the shows and movies you are watching. Comes with user authentication, modern and clean UI and a very simple setup. ([Demo](https://beta.watcharr.app/)) `MIT` `Docker`
- [ydl_api_ng](https://github.com/Totonyus/ydl_api_ng) - Simple youtube-dl REST API to launch downloads on a distant server. `GPL-3.0` `Python`
- [YoutubeDL-Server](https://github.com/nbr23/youtube-dl-server) - Web and REST interface to Youtube-DL for downloading videos onto a server. `MIT` `Python/Docker`
- [yt-dlp Web UI](https://github.com/marcopiovanello/yt-dlp-web-ui) - Web GUI for yt-dlp. `MPL-2.0` `Docker/Go/Nodejs`


### Media Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Streaming media](https://en.wikipedia.org/wiki/Streaming_media) is multimedia that is delivered and consumed in a continuous manner from a source, with little or no intermediate storage in network elements.

**Please visit [Media streaming - Audio Streaming](#media-streaming---audio-streaming), [Media streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media streaming - Video Streaming](#media-streaming---video-streaming), [Media Management](#media-management)**

_See also: [List of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [Comparison of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)_



### Media Streaming - Audio Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Audio](https://en.wikipedia.org/wiki/Audio) streaming tools and software.

_Related: [Media Management](#media-management)_

- [Ampache](https://ampache.org/) - Web based audio/video streaming application. ([Demo](https://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)) `AGPL-3.0` `PHP`
- [Audiobookshelf](https://www.audiobookshelf.org/) - Audiobook and podcast server. It streams all audio formats, keeps and syncs progress across devices. Comes with open-source apps for Android and iOS. ([Source Code](https://github.com/advplyr/audiobookshelf), [Clients](https://github.com/advplyr/audiobookshelf-app)) `GPL-3.0` `Docker/deb/Nodejs`
- [Audioserve](https://github.com/izderadicka/audioserve) - Simple personal server to serve audio files from directories (audiobooks, music, podcasts...). Focused on simplicity and supports sync of play position between clients. `MIT` `Rust`
- [AzuraCast](https://www.azuracast.com/) - Modern and accessible web radio management suite. ([Source Code](https://github.com/AzuraCast/AzuraCast)) `Apache-2.0` `Docker`
- [Beets](https://beets.io/) - Music library manager and MusicBrainz tagger (command-line and Web interface). ([Source Code](https://github.com/beetbox/beets)) `MIT` `Python/deb`
- [Black Candy](https://github.com/blackcandy-org/blackcandy) - Music streaming server. `MIT` `Docker/Ruby`
- [Funkwhale](https://dev.funkwhale.audio/funkwhale) - Modern, web-based, convivial, multi-user and free music server. `BSD-3-Clause` `Python/Django`
- [gonic](https://github.com/sentriz/gonic) - Lightweight music streaming server. Subsonic compatible. `GPL-3.0` `Go/Docker`
- [koel](https://koel.dev/) - Personal music streaming server that works. ([Demo](https://demo.koel.dev/), [Source Code](https://github.com/koel/koel)) `MIT` `PHP`
- [LibreTime](https://libretime.org) - Broadcast streaming radio on the web (fork of [Airtime](https://github.com/sourcefabric/Airtime)). ([Source Code](https://github.com/LibreTime/libretime)) `AGPL-3.0` `Docker/PHP`
- [LMS](https://github.com/epoupon/lms) - Access your self-hosted music using a web interface. `GPL-3.0` `Docker/deb/C++`
- [Maloja](https://github.com/krateng/maloja) - Music scrobble database (alternative to Last.fm). ([Demo](https://maloja.krateng.ch/)) `GPL-3.0` `Python/Docker`
- [moOde Audio](https://moodeaudio.org/) - Audiophile-quality music playback for the wonderful Raspberry Pi family of single board computers. ([Source Code](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](https://docs.mopidy.com/) `⚠` - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source Code](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python/deb`
- [mpd](https://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
- [mStream](https://mstream.io/) - Music streaming server with GUI management tools. Runs on Mac, Windows, and Linux. ([Source Code](https://github.com/IrosTheBeggar/mStream)) `GPL-3.0` `Nodejs`
- [multi-scrobbler](https://foxxmd.github.io/multi-scrobbler) - Scrobble plays from multiple sources to multiple scrobbling services. ([Source Code](https://github.com/FoxxMD/multi-scrobbler)) `MIT` `Nodejs/Docker`
- [musikcube](https://musikcube.com/) - Streaming audio server with Linux/macOS/Windows/Android clients. ([Source Code](https://github.com/clangen/musikcube)) `BSD-3-Clause` `C++/deb`
- [Navidrome Music Server](https://www.navidrome.org) - Modern Music Server and Streamer, compatible with Subsonic/Airsonic. ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Docker/Go`
- [Pinepods](https://www.pinepods.online/) - Podcast management system with multi-user support. Pinepods utilizes a central database so aspects like listen time and themes follow from device to device. ([Demo](https://try.pinepods.online), [Source Code](https://github.com/madeofpendletonwool/PinePods)) `GPL-3.0` `Docker`
- [Polaris](https://github.com/agersant/polaris) - Music browsing and streaming application optimized for large music collections, ease of use and high performance. `MIT` `Rust/Docker`
- [Snapcast](https://github.com/badaix/snapcast) - Synchronous multiroom audio server. `GPL-3.0` `C++/deb`
- [Stretto](https://github.com/benkaiser/stretto) `⚠` - Music player with Youtube/Soundcloud import and iTunes/Spotify discovery. ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Supysonic](https://github.com/spl0k/supysonic) - Python implementation of the Subsonic server API. `AGPL-3.0` `Python/deb`
- [SwingMusic](https://swingmusic.vercel.app/) - Swing Music is a beautiful, self-hosted music player and streaming server for your local audio files. Like a cooler Spotify ... but bring your own music. ([Source Code](https://github.com/swingmx/swingmusic)) `MIT` `Python/Docker`
- [vod2pod-rss](https://github.com/madiele/vod2pod-rss) `⚠` - Convert YouTube and Twitch channels to podcasts, no storage required. Transcodes VoDs to MP3 192k on the fly, generates an RSS feed to use in podcast clients. `MIT` `Docker`


### Media Streaming - Multimedia Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Multimedia](https://en.wikipedia.org/wiki/Multimedia) streaming tools and software.

_Related: [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Media Streaming - Audio Streaming](#media-streaming---audio-streaming), [Media Management](#media-management)_

- [ClipBucket](https://clipbucket.fr/) - Start your own video sharing website (YouTube/Netflix Clone) in a matter of minutes. ([Demo](https://demo.clipbucket.oxygenz.fr/), [Source Code](https://github.com/MacWarrior/clipbucket-v5)) `AAL` `Docker/PHP`
- [cmyflix](https://github.com/farfalleflickan/cmyflix) - Minimalist Plex/Jellyfin alternative to stream video. `AGPL-3.0` `C/deb`
- [Gerbera](https://gerbera.io/) - UPnP Media Server, which allows you to stream your digital media throughout your home network and listen to/watch it on a variety of UPnP compatible devices. ([Source Code](https://github.com/gerbera/gerbera)) `GPL-2.0` `Docker/deb/C++`
- [Icecast 2](https://icecast.org) - Streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://gitlab.xiph.org/xiph/icecast-server), [Clients](https://icecast.org/apps/)) `GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - Media server for audio, video, books, comics, and photos with a sleek interface and robust transcoding capabilities. Almost all modern platforms have clients, including Roku, Android TV, iOS, and Kodi. ([Demo](https://demo.jellyfin.org/stable), [Source Code](https://github.com/jellyfin/jellyfin), [Clients](https://github.com/awesome-jellyfin/awesome-jellyfin)) `GPL-2.0` `C#/deb/Docker`
- [Karaoke Eternal](https://www.karaoke-eternal.com) - Host awesome karaoke parties where everyone can easily find and queue songs from their phone's browser. The player is also fully browser-based with support for MP3+G, MP4 and WebGL visualizations. ([Source Code](https://www.karaoke-eternal.com/repo)) `ISC` `Docker/Nodejs`
- [Kodi](https://kodi.tv/) - Multimedia/Entertainment center, formerly known as XBMC. Runs on Android, BSD, Linux, macOS, iOS and Windows. ([Source Code](https://github.com/xbmc/xbmc)) `GPL-2.0` `C++/deb`
- [Kyoo](https://github.com/zoriya/kyoo) - Innovative media browser designed for seamless streaming of anime, series and movies, offering advanced features like dynamic transcoding, auto watch history and intelligent metadata retrieval. ([Demo](https://kyoo.zoriya.dev)) `GPL-3.0` `Docker`
- [Meelo](https://github.com/Arthi-chaud/Meelo) - Personal Music Server, designed for collectors and music maniacs. `GPL-3.0` `Docker`
- [MistServer](https://mistserver.org/) - Public domain streaming media server that works with any device and any format. ([Source Code](https://github.com/DDVTECH/mistserver)) `Unlicense` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - Turn your choice of Linux-capable hardware into an audio and video source for a television or powered speakers (alternative to Chromecast). ([Source Code](https://github.com/MayaPosch/NymphCast)) `BSD-3-Clause` `C++`
- [Rygel](https://gnome.pages.gitlab.gnome.org/rygel/) - UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller. ([Source Code](https://gitlab.gnome.org/GNOME/rygel/)) `LGPL-2.1` `C`
- [Stash](https://stashapp.cc) - A web-based library organizer and player for your adult media stash, with auto-tagging and metadata scraping support. ([Source Code](https://github.com/stashapp/stash)) `AGPL-3.0` `Docker/Go`
- [µStreamer](https://github.com/pikvm/ustreamer) - Lightweight and very quick server to stream MJPEG video from any V4L2 device to the net. `GPL-3.0` `C/deb`
- [üWave](https://u-wave.net/) `⚠` - Self-hosted collaborative listening platform. Users take turns playing media—songs, talks, gameplay videos, or anything else—from a variety of media sources like YouTube and SoundCloud. ([Demo](https://wlk.yt/), [Source Code](https://github.com/u-wave)) `MIT` `Nodejs`


### Media Streaming - Video Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video](https://en.wikipedia.org/wiki/Video) streaming tools and software.

_Related: [Video Surveillance](#video-surveillance), [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Photo Galleries](#photo-galleries), [Media Management](#media-management)_

- [CyTube](https://github.com/calzoneman/sync) - Synchronize media, chat, and more for an arbitrary number of channels. ([Demo](https://cytu.be)) `MIT` `Nodejs`
- [Invidious](https://github.com/iv-org/invidious) `⚠` - Alternative YouTube front-end. ([Demo](https://docs.invidious.io/instances/)) `AGPL-3.0` `Docker/Crystal`
- [MediaCMS](https://mediacms.io) - Modern, fully featured open source video and media CMS, written in Python/Django/React, featuring a REST API. ([Source Code](https://github.com/mediacms-io/mediacms)) `AGPL-3.0` `Python/Docker`
- [OvenMediaEngine](https://github.com/AirenSoft/OvenMediaEngine) - Streaming Server with Sub-Second Latency. ([Demo](https://demo.ovenplayer.com)) `AGPL-3.0` `C++/Docker`
- [Owncast](https://owncast.online/) - Decentralized single-user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. ([Source Code](https://github.com/owncast/owncast)) `MIT` `Go`
- [PeerTube](https://joinpeertube.org/en/) - Decentralized video streaming platform using P2P (BitTorrent) directly in the web browser. ([Source Code](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - Videostreaming service/torrent client that allows searching and playing videos from torrents in the browser or from a Chromecast/AppleTV/Smart TV. `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - Access H.264 real-time video streaming on your website without a streaming provider. ([Source Code](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [SRS](https://ossrs.io/) - A simple, high efficiency and real-time video server, supports RTMP, WebRTC, HLS, HTTP-FLV and SRT. ([Source Code](https://github.com/ossrs/srs)) `MIT` `Docker/C++`
- [SyncTube](https://github.com/RblSb/SyncTube) - Lightweight and very simple to setup CyTube alternative to watch videos with friends and chat. `MIT` `Nodejs/Haxe`
- [Tube Archivist](https://tubearchivist.com/) `⚠` - Organize, search, and enjoy your YouTube collection. Subscribe, download, and track viewed content with metadata indexing and a user-friendly interface. ([Source Code](https://github.com/tubearchivist/tubearchivist), [Clients](https://docs.tubearchivist.com/faq/#how-do-i-import-my-videos-to-emby-plex-jellyfin-kodi)) `GPL-3.0` `Docker`
- [Tube](https://git.mills.io/prologic/tube) - Youtube-like (_without censorship and features you don't need!_) video sharing app written in Go which also supports automatic transcoding to MP4 H.265 AAC, multiple collections and RSS feed. ([Demo](https://tube.mills.io)) `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - Cross-platform multimedia player client and server supporting most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. ([Source Code](https://code.videolan.org/videolan/vlc)) `GPL-2.0` `C/deb`


### Miscellaneous

**[`^        back to top        ^`](#awesome-selfhosted)**

Software that does not fit in another section.

- [2FAuth](https://github.com/Bubka/2FAuth) - Manage your Two-Factor Authentication (2FA) accounts and generate their security codes. ([Demo](https://demo.2fauth.app/)) `AGPL-3.0` `PHP/Docker`
- [AlertHub](https://github.com/Ardakilic/alerthub) `⚠` - Get alerts from GitHub releases. `MIT` `Nodejs/Docker`
- [Anchr](https://anchr.io) - Toolbox for tiny tasks on the internet, including bookmark collections, URL shortening and (encrypted) image uploads. ([Source Code](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Anubis](https://anubis.techaro.lol/) - Web AI firewall utility which protects upstream resources from scraper bots. ([Source Code](https://github.com/TecharoHQ/anubis)) `MIT` `Docker/deb/Go`
- [asciinema](https://asciinema.org/) - Web app for hosting asciicasts. ([Demo](https://asciinema.org/explore), [Source Code](https://github.com/asciinema/asciinema-server)) `Apache-2.0` `Elixir/Docker`
- [Baby Buddy](https://github.com/babybuddy/babybuddy) - Helps caregivers track baby sleep, feedings, diaper changes, and tummy time. ([Demo](https://github.com/babybuddy/babybuddy#-demo)) `BSD-2-Clause` `Python`
- [beelzebub](https://beelzebub-honeypot.com/) `⚠` - Honeypot framework designed to provide a highly secure environment for detecting and analyzing cyber attacks. ([Source Code](https://github.com/mariocandela/beelzebub)) `MIT` `Docker/K8S/Go`
- [Canary Tokens](https://canarytokens.org) - Generates lightweight, embedded honeypot triggers called canary tokens for detecting unauthorized access. ([Source Code](https://github.com/thinkst/opencanary)) `BSD-3-Clause` `Docker/Python`
- [ClipCascade](https://github.com/Sathvik-Rao/ClipCascade) - Syncs your clipboard across multiple devices instantly, without any button press. Available on Windows, macOS, Linux, and Android, it provides seamless and secure clipboard sharing with end-to-end data encryption. `GPL-3.0` `Java/Docker`
- [Cloudlog](https://magicbug.co.uk/cloudlog/) - Log your amateur radio contacts anywhere. ([Source Code](https://github.com/magicbug/cloudlog)) `MIT` `PHP/Docker`
- [ConvertX](https://github.com/C4illin/ConvertX) - Online file converter which supports over a thousand different formats. `AGPL-3.0` `Docker`
- [CUPS](https://www.cups.org/) - The Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers. ([Source Code](https://github.com/OpenPrinting/cups)) `GPL-2.0` `C`
- [CyberChef](https://github.com/gchq/CyberChef) - Perform all manner of operations within a web browser such as AES, DES and Blowfish encryption and decryption, creating hexdumps, calculating hashes, and much more. ([Demo](https://gchq.github.io/CyberChef)) `Apache-2.0` `Javascript`
- [Digiboard](https://digiboard.app/) - Create collaborative whiteboards (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiboard)) `AGPL-3.0` `Nodejs`
- [Digicard](https://codeberg.org/ladigitale/digicard) - Create simple graphic compositions (documentation in French). ([Demo](https://ladigitale.dev/digicard/)) `AGPL-3.0` `Nodejs`
- [Digicut](https://ladigitale.dev/digicut/) - Cut audio and video files using FFMPEG.wasm (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digicut)) `AGPL-3.0` `Nodejs`
- [Digiface](https://ladigitale.dev/digiface/) - Create avatars using the Avataaars library (documentation in French). ([Demo](https://ladigitale.dev/digiface/), [Source Code](https://codeberg.org/ladigitale/digiface)) `AGPL-3.0` `Nodejs`
- [Digiflashcards](https://ladigitale.dev/digiflashcards/) - An online application to create flashcards (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiflashcards)) `AGPL-3.0` `Nodejs/PHP`
- [Digimerge](https://ladigitale.dev/digimerge/) - Assemble audio and video files directly in your browser (documentation in French). ([Demo](https://ladigitale.dev/digimerge/), [Source Code](https://codeberg.org/ladigitale/Digimerge)) `AGPL-3.0` `Nodejs`
- [Digiquiz](https://ladigitale.dev/digiquiz/) - An online application to publish content created with H5P (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiquiz)) `AGPL-3.0` `Nodejs`
- [Digiread](https://ladigitale.dev/digiread/) `⚠` - Clean up online pages and articles using Mozilla's Readability (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiread)) `AGPL-3.0` `Nodejs/PHP`
- [Digisteps](https://ladigitale.dev/digisteps/) - A simple application for creating online educational paths (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digisteps)) `AGPL-3.0` `Nodejs/PHP`
- [Digitranscode](https://ladigitale.dev/digitranscode) - Convert audio files and videos directly in the browser (documentation in French). ([Demo](https://ladigitale.dev/digitranscode), [Source Code](https://codeberg.org/ladigitale/digitranscode)) `AGPL-3.0` `Nodejs`
- [Digiview](https://ladigitale.dev/digiview/) `⚠` - View YouTube videos in a distraction-free interface (documentation in French). ([Demo](https://ladigitale.dev/digiview/), [Source Code](https://codeberg.org/ladigitale/digiview)) `AGPL-3.0` `Nodejs/PHP`
- [Digiwords](https://ladigitale.dev/digiwords/) - A simple online application for creating word clouds (documentation in French). ([Source Code](https://codeberg.org/ladigitale/digiwords)) `AGPL-3.0` `Nodejs/PHP`
- [DOCAT](https://github.com/docat-org/docat) - Host your docs. Simple. Versioned. Fancy. `MIT` `Python/Docker`
- [Domain Locker](https://domain-locker.com) - Domain name portfolio management and tracker. ([Demo](https://demo.domain-locker.com), [Source Code](https://github.com/lissy93/domain-locker)) `MIT` `Deno/Docker`
- [DOMJudge](https://www.domjudge.org/) - System for running a programming contest, like the ICPC regional and world championship programming contests. ([Demo](https://www.domjudge.org/demo), [Source Code](https://github.com/DOMjudge/domjudge)) `GPL-2.0/BSD-3-Clause/MIT` `PHP`
- [ESMira](https://esmira.kl.ac.at) - Run longitudinal studies (ESM, AA, EMA) with data collection and communication with participants being completely anonymous. ([Demo](https://demo-esmira.kl.ac.at/#admin,username:demo,password:demodemodemo), [Source Code](https://github.com/KL-Psychological-Methodology/ESMira)) `AGPL-3.0` `PHP`
- [F-Droid](https://f-droid.org) - Server tools for maintaining an F-Droid repository system. ([Source Code](https://gitlab.com/fdroid/fdroidserver)) `AGPL-3.0` `Python/Docker/deb`
- [Flyimg](https://flyimg.io) - Resize and crop images on the fly. Get optimised images with MozJPEG, WebP or PNG using ImageMagick, with an efficient caching system. ([Demo](https://demo.flyimg.io), [Source Code](https://github.com/flyimg/flyimg)) `MIT` `Docker`
- [Geeftlist](https://codeberg.org/nanawel/geeftlist) - Collaborative platform for managing, sharing and reserving gifts between friends and family. `GPL-3.0` `Docker`
- [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) `⚠` - Hassle-Free Way to Self-Host Google Fonts. Get eot, ttf, svg, woff and woff2 files + CSS snippets. ([Demo](https://gwfh.mranftl.com/fonts)) `MIT` `Nodejs`
- [Habitica](https://habitica.com/) - Habit tracker app which treats your goals like a Role Playing Game. ([Source Code](https://github.com/HabitRPG/habitica)) `GPL-3.0/CC-BY-SA-3.0` `Nodejs/Docker`
- [HortusFox](https://hortusfox.github.io) - Collaborative plant management and tracking system for plant enthusiasts. ([Source Code](https://github.com/danielbrendel/hortusfox-web)) `MIT` `PHP/Docker`
- [iSponsorBlockTV](https://github.com/dmunozv04/iSponsorBlockTV) `⚠` - Block and skip sponsors, while also muting and skipping ads on YouTube. `GPL-3.0` `Docker/Python`
- [Jelu](https://bayang.github.io/jelu-web) - Read and to-read list book tracker. ([Source Code](https://github.com/bayang/jelu)) `MIT` `Java/Docker`
- [Kasm Workspaces](https://kasmweb.com/) - Streaming containerized apps and desktops to end-users. Examples include Ubuntu in your browser, or simply single apps such as Chrome, OpenOffice, Gimp, Filezilla etc. ([Demo](https://www.kasmweb.com/#demo), [Source Code](https://github.com/kasmtech)) `GPL-3.0` `Docker`
- [Koillection](https://koillection.github.io/) - Koillection is a service allowing users to manage any kind of collections. ([Source Code](https://github.com/benjaminjonard/koillection)) `MIT` `Docker/PHP`
- [LanguageTool](https://languagetool.org/) - Proofread more than 20 languages. It finds many errors that a simple spell checker cannot detect. ([Source Code](https://github.com/languagetool-org/languagetool), [Clients](https://languagetool.org/insights/post/product-windows-app/)) `LGPL-2.1` `Java/Docker`
- [Libre Translate](https://libretranslate.com/) - Machine Translation API. ([Source Code](https://github.com/LibreTranslate/LibreTranslate)) `AGPL-3.0` `Docker/Python`
- [LubeLogger](https://lubelogger.com) - Web-based vehicle maintenance and fuel mileage tracker. ([Demo](https://github.com/hargata/lubelog?tab=readme-ov-file#demo), [Source Code](https://github.com/hargata/lubelog)) `MIT` `Docker/K8S/C#`
- [mosparo](https://mosparo.io/) - The modern spam protection tool. It replaces other captcha methods with a simple and easy to use spam protection solution. ([Source Code](https://github.com/mosparo/mosparo)) `MIT` `PHP`
- [MyIP](https://ipcheck.ing) `⚠` - All in one IP Toolbox. Easy to check what's your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability and more. ([Demo](https://ipcheck.ing), [Source Code](https://github.com/jason5ng32/MyIP)) `MIT` `Nodejs/Docker`
- [MySpeed](https://myspeed.dev/) - Speed test analysis software that shows your internet speed for up to 30 days. ([Source Code](https://github.com/gnmyt/myspeed)) `MIT` `Docker/Nodejs`
- [Neko](https://neko.m1k1o.net) - Virtual browser that runs in docker and uses WebRTC. ([Source Code](https://github.com/m1k1o/neko)) `Apache-2.0` `Docker/Go`
- [Open-Meteo](https://open-meteo.com/) - Weather API with open-data forecasts, historical and climate data from all major national weather services. ([Demo](https://open-meteo.com/en/docs), [Source Code](https://github.com/open-meteo/open-meteo)) `AGPL-3.0` `Docker`
- [OpenZiti](https://openziti.github.io/) - Fully-featured, zero trust, full mesh overlay network. Includes a 2FA support out of the box, clients for all major desktop/mobile OS'es. ([Source Code](https://github.com/openziti/ziti)) `Apache-2.0` `Go`
- [Operational.co](https://operational.co) - Receive alerts in a live timeline from your product. ([Demo](https://app.operational.co/?signinas=kevin), [Source Code](https://github.com/operational-co/operational.co)) `AGPL-3.0` `Nodejs/Docker`
- [penpot](https://penpot.app/) - Web-based design and prototyping platform meant for cross-domain teams. ([Source Code](https://github.com/penpot/penpot)) `MPL-2.0` `Docker`
- [POMjs](https://password.oppetmoln.se/) - Random password generator. ([Source Code](https://github.com/joho1968/POMjs)) `GPL-2.0` `Javascript`
- [Reactive Resume](https://rxresu.me/) - One-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. ([Demo](https://rxresu.me/app/dashboard/), [Source Code](https://github.com/AmruthPillai/Reactive-Resume)) `MIT` `Docker/Nodejs`
- [revealjs](https://revealjs.com) - Framework for easily creating beautiful presentations using HTML. ([Demo](https://revealjs.com/), [Source Code](https://github.com/hakimel/reveal.js)) `MIT` `Javascript`
- [Revive Adserver](https://www.revive-adserver.com/) - Ad serving system. Formerly known as OpenX Adserver and phpAdsNew. ([Source Code](https://github.com/revive-adserver/revive-adserver)) `GPL-2.0` `PHP`
- [SANE Network Scanning](http://sane-project.org/) - Allow remote clients to access image acquisition devices (scanners) available on the local host. ([Source Code](http://www.sane-project.org/cvs.html)) `GPL-2.0` `C`
- [Speed Test by OpenSpeedTest™](https://openspeedtest.com/) - Free & Open-Source HTML5 Network Performance Estimation Tool. ([Source Code](https://github.com/openspeedtest/Speed-Test)) `MIT` `Docker`
- [Speedtest Tracker](https://docs.speedtest-tracker.dev/) - Monitor the performance and uptime of your internet connection. ([Source Code](https://github.com/alexjustesen/speedtest-tracker)) `MIT` `Docker/K8S`
- [string.is](https://string.is/) - An open-source, privacy-friendly online string toolkit for developers. ([Source Code](https://github.com/recurser/string-is)) `AGPL-3.0` `Nodejs`
- [Teleport](https://goteleport.com/) - Certificate authority and access plane for SSH, Kubernetes, web applications, and databases. ([Source Code](https://github.com/gravitational/teleport)) `Apache-2.0` `Go/Docker/K8S`
- [TeslaMate](https://github.com/teslamate-org/teslamate) - A powerful data logger for Tesla vehicles. `MIT` `Elixir/Docker`
- [Upsnap](https://github.com/seriousm4x/UpSnap) - A simple Wake on LAN (WOL) dashboard app. Wake up devices on your network and see current status. `MIT` `Go/Docker`
- [URL-to-PNG](https://github.com/jasonraimondi/url-to-png) - URL to PNG utility featuring parallel rendering using Playwright for screenshots and with storage caching via Local, S3, or CouchDB. `MIT` `Nodejs/Docker`
- [Usertour](https://www.usertour.io/) - User onboarding platform allowing you to create in-app product tours, checklists, and surveys in minutes effortlessly. ([Source Code](https://github.com/usertour/usertour/)) `AGPL-3.0` `Docker`
- [Wakupator](https://github.com/Gibus21250/Wakupator) - Wake On LAN Machine Manager based on network traffic. `MIT` `C`
- [Warracker](https://warracker.com) - Warranty tracker that lets you monitor expiry dates, upload receipts/files, and get alerts before warranties expire. ([Source Code](https://github.com/sassanix/Warracker)) `AGPL-3.0` `Docker`
- [Wavelog](https://www.wavelog.org) - Webbased Logging Software for Radio Amateurs. Enhanced QSO logging, statistics and maps for your browser. ([Demo](https://demo.wavelog.org), [Source Code](https://github.com/wavelog/wavelog)) `MIT` `PHP/Docker`
- [WeeWX](https://weewx.com/) - Open source software for your weather station. ([Demo](https://weewx.com/showcase.html), [Source Code](https://github.com/weewx/weewx)) `GPL-3.0` `Python/deb`
- [WeTTY](https://butlerx.github.io/wetty/#/) - Terminal in browser over http/https. ([Source Code](https://github.com/butlerx/wetty)) `MIT` `Docker/Nodejs`
- [Yamtrack](https://github.com/FuzzyGrim/Yamtrack) `⚠` - Media tracker for movies, tv shows, anime, manga, video games and books. ([Demo](https://github.com/FuzzyGrim/Yamtrack?tab=readme-ov-file#demo)) `AGPL-3.0` `Docker/Python`
- [Zero-TOTP](https://zero-totp.com) - Complete, reliable, secure and zero-trust webapp based on zero-knowledge encryption to store your TOTP codes. ([Source Code](https://github.com/SeaweedbrainCY/zero-totp)) `GPL-3.0` `Docker`


### Money, Budgeting & Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Money management](https://en.wikipedia.org/wiki/Money_management) and budgeting software.

_Related: [Inventory Management](#inventory-management), [Resource Planning](#resource-planning)_

- [Actual](https://actualbudget.org) - Local-first personal finance tool based on zero-sum budgeting, supporting synchronization across devices, custom rules, manual transaction importing (from QIF, OFX, and QFX files), and optional automatic synchronization with many banks. ([Source Code](https://github.com/actualbudget/actual)) `MIT` `Nodejs/Docker`
- [Bigcapital](https://bigcapital.app/) - Financial accounting and inventory management software for small to medium businesses. ([Source Code](https://github.com/bigcapitalhq/bigcapital)) `AGPL-3.0` `Docker`
- [Bitcart](https://bitcart.ai) - Cryptocurrencies payment processor and development platform. ([Demo](https://admin.bitcart.ai), [Source Code](https://github.com/bitcart/bitcart)) `MIT` `Docker/Python/Nodejs`
- [BTCPay Server](https://btcpayserver.org/) - Bitcoin and other cryptocurrencies payment processor. ([Demo](https://mainnet.demo.btcpayserver.org/), [Source Code](https://github.com/btcpayserver/btcpayserver)) `MIT` `C#`
- [DePay](https://depay.com) - Accept Web3 Payments directly into your wallet. Peer-to-peer, free, self-hosted & open-source. ([Demo](https://depay.com/products/payments), [Source Code](https://github.com/depayfi/widgets)) `MIT` `Nodejs`
- [ExpenseOwl](https://github.com/tanq16/expenseowl) - Extremely simple expense tracker with a beautiful UI. `MIT` `Go/Docker/K8S`
- [ezbookkeeping](https://ezbookkeeping.mayswind.net/) - A lightweight personal bookkeeping app hosted by yourself. ([Demo](https://ezbookkeeping-demo.mayswind.net/), [Source Code](https://github.com/mayswind/ezbookkeeping)) `MIT` `Go/Docker`
- [Family Accounting Tool](https://github.com/nymanjens/facto) - Web-based finance management tool for partners with partially shared expenses. `Apache-2.0` `Scala`
- [Fava](https://beancount.github.io/fava/) - Web frontend of Beancount, a text based double-entry accounting system. ([Demo](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [Source Code](https://github.com/beancount/fava)) `MIT` `Python`
- [Firefly III](https://firefly-iii.org/) - Firefly III is a modern financial manager. It helps you to keep track of your money and make budget forecasts. It supports credit cards, has an advanced rule engine and can import data from many banks. ([Demo](https://demo.firefly-iii.org/), [Source Code](https://github.com/firefly-iii/firefly-iii)) `AGPL-3.0` `PHP/Docker`
- [FOSSBilling](https://fossbilling.org/) - Hosting and billing automation. Integrates with WHM, CWP, cPanel and HestiaCP. Full API and easily extensible. ([Demo](https://fossbilling.org/demo), [Source Code](https://github.com/FOSSBilling/FOSSBilling)) `Apache-2.0` `PHP/Docker`
- [Galette](https://galette.eu/) - Membership management web application aimed towards non profit organizations. ([Source Code](https://github.com/galette/galette)) `GPL-3.0` `PHP`
- [Ghostfolio](https://ghostfol.io/) - Wealth management software to keep track of stocks, ETFs and cryptocurrencies. ([Source Code](https://github.com/ghostfolio/ghostfolio)) `AGPL-3.0` `Docker/Nodejs`
- [GRR](https://grr.devome.com/?lang=en) - Assets management and booking for small/medium companies. ([Source Code](https://github.com/JeromeDevome/GRR)) `GPL-2.0` `PHP`
- [HyperSwitch](https://hyperswitch.io/) `⚠` - Payment switch to make payments fast, reliable and affordable. Connect with multiple payment processors and route traffic effortlessly, all with a single API integration. ([Source Code](https://github.com/juspay/hyperswitch)) `Apache-2.0` `Docker/Rust`
- [IHateMoney](https://ihatemoney.org/) - Manage your shared expenses, easily. ([Demo](https://ihatemoney.org/demo/), [Source Code](https://github.com/spiral-project/ihatemoney)) `BSD-3-Clause` `Docker/Python`
- [InvoicePlane](https://www.invoiceplane.com/) - Manage quotes, invoices, payments and customers for your small business. ([Source Code](https://github.com/InvoicePlane/InvoicePlane)) `MIT` `PHP`
- [InvoiceShelf](https://invoiceshelf.com/) - Track expenses, payments & create professional invoices & estimates (fork of Crater). ([Source Code](https://github.com/InvoiceShelf/InvoiceShelf)) `AGPL-3.0` `PHP/Docker`
- [Kill Bill](https://killbill.io/) - Subscription billing & payments platform. Have access to real-time analytics and financial reports. ([Source Code](https://github.com/killbill/killbill)) `Apache-2.0` `Java/Docker`
- [Kresus](https://kresus.org/) - Personal finance manager. ([Demo](https://kresus.org/en/demo.html), [Source Code](https://github.com/kresusapp/kresus)) `AGPL-3.0` `Nodejs/Docker`
- [Lago](https://www.getlago.com/) - Metering and usage-based billing. ([Source Code](https://github.com/getlago/lago)) `AGPL-3.0` `Docker`
- [Mybucks.online](https://mybucks.online) - Secure, browser-based, password-only self-custodial cryptocurrency wallet. ([Demo](https://app.mybucks.online), [Source Code](https://github.com/mybucks-online/app)) `MIT` `Nodejs`
- [MyFin Budget](https://myfinbudget.com) - Personal finances platform (web + REST API + Android) that'll help you budget, keep track of your income/spending and forecast your financial future. ([Demo](https://github.com/afaneca/myfin?tab=readme-ov-file#demo-account---try-it-for-yourself), [Source Code](https://github.com/afaneca/myfin), [Clients](https://github.com/afaneca/myfin-api)) `GPL-3.0` `Nodejs/Docker`
- [OctoBot](https://www.octobot.cloud/) - Cryptocurrency trading bot. ([Source Code](https://github.com/Drakkar-Software/OctoBot)) `GPL-3.0` `Python/Docker`
- [Ocular](https://simonwep.github.io/ocular/) - Simplistic and straightforward budgeting app to track your budget across months and years. ([Demo](https://ocular.reinisch.io/#demo), [Source Code](https://github.com/simonwep/ocular)) `MIT` `Docker`
- [OpenBudgeteer](https://github.com/TheAxelander/OpenBudgeteer) - Budgeting app based on the Bucket Budgeting Principle. `AGPL-3.0` `Docker/C#`
- [Receipt Wrangler](https://receiptwrangler.io) `⚠` - Easy-to-use receipt manager, powered by AI. Allows users to create receipts effortlessly and quickly, categorize and more. ([Demo](https://demo.receiptwrangler.io), [Source Code](https://github.com/Receipt-Wrangler/receipt-wrangler-api)) `AGPL-3.0` `Docker`
- [REI3](https://rei3.de/home_en/) - Manage tasks, time, assets and much more within your business. ([Demo](https://rei3.de/demo_en/), [Source Code](https://github.com/r3-team/r3)) `MIT` `Go`
- [SHKeeper](https://shkeeper.io/) - Cryptocurrency payment processor with the unique combination of gateway and merchant allowing you to accept payments in multiple cryptocurrencies without fees and intermediaries. ([Demo](https://github.com/vsys-host/shkeeper.io?tab=readme-ov-file#11-demo), [Source Code](https://github.com/vsys-host/shkeeper.io)) `GPL-3.0` `Python`
- [SolidInvoice](https://solidinvoice.co) - Open source invoicing and quote application. ([Source Code](https://github.com/SolidInvoice/SolidInvoice)) `MIT` `PHP`
- [VoucherVault](https://github.com/l4rm4nd/VoucherVault) - Store and manage vouchers, coupons, loyalty and gift cards digitally. Supports expiry notifications, transaction histories, file uploads and OIDC SSO. `GPL-3.0` `Docker`
- [Wallos](https://wallosapp.com) - Lightweight personal subscription tracker with statistics and optional notifications. ([Demo](https://github.com/ellite/wallos?tab=readme-ov-file#demo), [Source Code](https://github.com/ellite/wallos)) `GPL-3.0` `PHP/Docker`
- [WYGIWYH](https://github.com/eitchtee/WYGIWYH) - Simple and powerful finance tracker. ([Demo](https://wygiwyh-demo.herculino.com/)) `AGPL-3.0` `Docker/Django`
- [YAFFA](https://www.yaffa.cc) - Personal finance web application, that can be used to keep track of your money, expenses, budgets, and investments. It also helps with long-term financial planning. ([Demo](https://sandbox.yaffa.cc), [Source Code](https://github.com/kantorge/yaffa)) `MIT` `PHP`


### Monitoring

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for [monitoring](https://en.wikipedia.org/wiki/Monitoring#Computing) systems, networks, applications and websites. 

**Please visit [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring), [awesome-sysadmin/Metrics and Metric Collection](https://github.com/awesome-foss/awesome-sysadmin#metrics--metric-collection)**



### Note-taking & Editors

**[`^        back to top        ^`](#awesome-selfhosted)**

[Note taking](https://en.wikipedia.org/wiki/Note-taking) editors.

_Related: [Wikis](#wikis)_

- [Blinko](https://blinko.space/) - A personal note tool with AI features. ([Source Code](https://github.com/blinkospace/blinko)) `AGPL-3.0` `Docker`
- [DailyTxT](https://github.com/PhiTux/DailyTxT) - Encrypted diary Web application to save your personal memories of each day. Includes a search function and encrypted file upload. `MIT` `Docker`
- [Docs](https://docs.numerique.gouv.fr/) - Collaborative note taking, wiki and documentation platform that scales. ([Source Code](https://github.com/suitenumerique/docs)) `MIT` `K8S`
- [draw.io](https://draw.io) - Diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams. ([Source Code](https://github.com/jgraph/drawio)) `Apache-2.0` `Javascript/Docker`
- [flatnotes](https://github.com/dullage/flatnotes) - Database-less note-taking web app that utilises a flat folder of markdown files for storage. ([Demo](https://demo.flatnotes.io)) `MIT` `Docker`
- [HedgeDoc](https://hedgedoc.org/) - Realtime collaborative markdown notes on all platforms, formerly known as CodiMD and HackMD CE. ([Demo](https://demo.hedgedoc.org/), [Source Code](https://github.com/hedgedoc/hedgedoc)) `AGPL-3.0` `Docker/Nodejs`
- [Joplin](https://joplinapp.org/) - Note taking application with markdown editor and encryption support for mobile and desktop platforms. Runs client-side and syncs through a self hosted Nextcloud instance or similar (alternative to Evernote). ([Source Code](https://github.com/laurent22/joplin)) `MIT` `Nodejs`
- [Livebook](https://livebook.dev) - Realtime collaborative notebook app based on Markdown that supports running Elixir code snippets, TeX and Mermaid Diagrams. Easily deployed using Docker or Elixir. ([Source Code](https://github.com/livebook-dev/livebook)) `Apache-2.0` `Elixir/Docker`
- [Many Notes](https://github.com/brufdev/many-notes) - Markdown note-taking web application designed for simplicity. `MIT` `Docker`
- [Memos](https://usememos.com/) - Knowledge base that works with a SQLite db file. ([Demo](https://demo.usememos.com/explore), [Source Code](https://github.com/usememos/memos)) `MIT` `Docker/Go`
- [Note Mark](https://notemark.docs.enchantedcode.co.uk/) - Minimal web-based Markdown notes app. ([Source Code](https://github.com/enchant97/note-mark)) `AGPL-3.0` `Docker`
- [Overleaf](https://www.overleaf.com/) - Web-based collaborative LaTeX editor. ([Source Code](https://github.com/overleaf/overleaf)) `AGPL-3.0` `Ruby`
- [Plainpad](https://alextselegidis.com/get/plainpad/) - Modern note taking application for the cloud, utilizing the best features of progressive web apps technology. ([Demo](https://alextselegidis.com/try/plainpad/), [Source Code](https://github.com/alextselegidis/plainpad)) `GPL-3.0` `PHP`
- [SilverBullet](https://silverbullet.md/) - Note-taking application optimized for people with a hacker mindset. ([Demo](https://play.silverbullet.md/), [Source Code](https://github.com/silverbulletmd/silverbullet), [Clients](https://silverbullet.md/Libraries)) `MIT` `Docker/Deno`
- [Standard Notes](https://docs.standardnotes.com/self-hosting/getting-started) - Simple and private notes app. Protect your privacy while getting more done. That's Standard Notes. ([Demo](https://app.standardnotes.com/), [Source Code](https://github.com/standardnotes/app)) `GPL-3.0` `Ruby`
- [TriliumNext Notes](https://github.com/TriliumNext/Trilium) - Cross-platform hierarchical note taking application with focus on building large personal knowledge bases (fork of Trilium Notes). `AGPL-3.0` `Nodejs/Docker/K8S`
- [Turtl](https://turtl.it/) - Totally private personal database and note taking app. ([Source Code](https://github.com/turtl)) `GPL-3.0` `CommonLisp`
- [Writing](https://josephernest.github.io/writing/) - Lightweight distraction-free text editor, in the browser (Markdown and LaTeX supported). No lag when writing. ([Source Code](https://github.com/josephernest/writing)) `MIT` `Javascript`


### Office Suites

**[`^        back to top        ^`](#awesome-selfhosted)**

An [office suite](https://en.wikipedia.org/wiki/List_of_office_suites) is a collection of productivity software usually containing at least a word processor, spreadsheet and a presentation program.

- [Collabora Online Development Edition](https://www.collaboraoffice.com/code) - Collabora Online Development Edition (CODE) is a powerful LibreOffice-based online office that supports all major document, spreadsheet and presentation file formats, which you can integrate in your own infrastructure. ([Source Code](https://cgit.freedesktop.org/libreoffice/online/)) `MPL-2.0` `C++`
- [CryptPad](https://cryptpad.org) - Collaboration suite built to enable collaboration, synchronizing changes to documents in real time. ([Source Code](https://github.com/cryptpad/cryptpad)) `AGPL-3.0` `Nodejs/Docker`
- [Digislides](https://ladigitale.dev/digislides/) - Create multimedia presentations in a quick and easy way. (documentation in French). ([Demo](https://ladigitale.dev/digislides/), [Source Code](https://codeberg.org/ladigitale/Digislides)) `AGPL-3.0` `Nodejs/PHP`
- [Etherpad](https://etherpad.org/) - Highly customizable online editor providing collaborative editing in real-time. ([Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad-lite)) `Apache-2.0` `Nodejs/Docker`
- [Grist](https://getgrist.com/) - Next-generation spreadsheet with relational structure, formula-based access control, and a portable, self-contained format (alternative to Airtable). ([Demo](https://docs.getgrist.com), [Source Code](https://github.com/gristlabs/grist-core)) `Apache-2.0` `Nodejs/Python/Docker`
- [ONLYOFFICE](https://helpcenter.onlyoffice.com/faq/server-opensource.aspx) - Office suite that enables you to manage documents, projects, team and customer relations in one place. ([Source Code](https://github.com/ONLYOFFICE/DocumentServer)) `AGPL-3.0` `Nodejs/Docker`


### Password Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [password manager](https://en.wikipedia.org/wiki/Password_manager) allows users to store, generate, and manage their passwords for local applications and online services.

- [AliasVault](https://www.aliasvault.net) - End-to-end encrypted password manager with a built-in email alias generator and server. ([Source Code](https://github.com/lanedirt/AliasVault)) `MIT` `Docker`
- [Bitwarden](https://bitwarden.com/) `⚠` - Password manager with a webapp, browser extension, and mobile app. ([Source Code](https://github.com/bitwarden/server)) `AGPL-3.0` `Docker/C#`
- [Passbolt](https://www.passbolt.com/) - Collaborative password manager. ([Source Code](https://github.com/passbolt/passbolt_api)) `AGPL-3.0` `PHP/deb/K8S/Docker`
- [PassIt](https://passit.io/) - Simple password manage with sharing features by group and user, but no administration interface. ([Demo](https://app.passit.io/), [Source Code](https://gitlab.com/passit)) `AGPL-3.0` `Docker/Django`
- [Passky](https://passky.org) - Simple and modern password manager with website, browser extension, android and desktop application. ([Demo](https://vault.passky.org), [Source Code](https://github.com/Rabbit-Company/Passky-Server)) `GPL-3.0` `PHP/Docker`
- [Psono](https://psono.com/) - Password manager for companies. ([Demo](https://www.psono.pw), [Source Code](https://gitlab.com/esaqa/psono/psono-fileserver)) `Apache-2.0` `Python`
- [Teampass](https://teampass.net/) - Password manager dedicated for managing passwords in a collaborative way. One symmetric key is used to encrypt all shared/team passwords and stored server side in a file and the database. works on any server Apache, MySQL and PHP. ([Source Code](https://github.com/nilsteampassnet/TeamPass)) `GPL-3.0` `PHP`
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Lightweight Bitwarden server API implementation written in Rust. `GPL-3.0` `Rust/Docker`


### Pastebins

**[`^        back to top        ^`](#awesome-selfhosted)**

A [pastebin](https://en.wikipedia.org/wiki/Pastebin) is a type of online content-hosting service used for sharing and storing code and text.

- [bin](https://github.com/w4/bin) - A paste bin that's actually minimalist. `WTFPL/0BSD` `Rust`
- [BinPastes](https://github.com/querwurzel/BinPastes) - Minimal pastebin supporting client-side encryption, fulltext search, one-time messages. Intended for one to few users looking for a simple pastebin deployment. ([Demo](https://paste.wylke.it)) `Apache-2.0` `Java`
- [ByteStash](https://github.com/jordan-dalby/ByteStash) - Pastebin and file storage service with a simple web interface. Supports syntax highlighting, optional user authentication and public sharing. ([Demo](https://github.com/jordan-dalby/ByteStash?tab=readme-ov-file#demo)) `GPL-3.0` `Docker`
- [Chiyogami](https://github.com/rhee876527/chiyogami) - Pastebin with API, client-side encryption, user accounts, syntax highlighting, markdown rendering, and more. ([Demo](https://chiyogami.myaddr.dev/)) `BSD-3-Clause` `Docker`
- [dpaste](https://dpaste.org/) - Simple pastebin with multiple text and code option, with short url result easy to remember. ([Source Code](https://github.com/DarrenOfficial/dpaste)) `MIT` `Docker/Django`
- [FlashPaper](https://github.com/AndrewPaglusch/FlashPaper) - One-time encrypted zero-knowledge password/secret sharing application focused on simplicity and security. No database or complicated set-up required. ([Demo](https://flashpaper.io)) `MIT` `Docker/PHP`
- [Hemmelig](https://hemmelig.app) - Share encrypted secrets cross organizations, or as private persons. ([Source Code](https://github.com/HemmeligOrg/Hemmelig.app)) `MIT` `Docker/Nodejs`
- [lesma](https://lesma.eu) - Simple paste app friendly with browser and command line. ([Demo](https://lesma.eu), [Source Code](https://gitlab.com/ogarcia/lesma)) `GPL-3.0` `Rust/Docker`
- [Local Content Share](https://github.com/Tanq16/local-content-share) - Store and share text snippets and files within your local network. `MIT` `Docker/Go`
- [not-th.re](https://not-th.re) - Simple paste sharing platform, with client side encryption, featuring the monaco browser-based code editor. ([Demo](https://not-th.re), [Source Code](https://github.com/not-three/main)) `AGPL-3.0` `Nodejs/Docker`
- [Opengist](https://github.com/thomiceli/opengist) - Pastebin powered by Git. ([Demo](https://demo.opengist.io)) `AGPL-3.0` `Docker/Go/Nodejs`
- [paaster](https://paaster.io) - End-to-end encrypted pastebin built with the objective of simplicity. ([Source Code](https://github.com/WardPearce/paaster)) `AGPL-3.0` `Docker`
- [pacebin](https://git.crueter.xyz/crueter/pacebin) - Super-minimal pastebin and file upload service focusing on small executable size, portability, and ease of configuration. ([Demo](https://paste.crueter.xyz)) `AGPL-3.0` `C`
- [Password Pusher](https://pwpush.com) - Dead-simple application to securely communicate passwords (or text) over the web. Passwords automatically expire after a certain number of views and/or time has passed. ([Source Code](https://github.com/pglombardo/PasswordPusher)) `Apache-2.0` `Docker/K8S/Ruby`
- [Pastefy](https://pastefy.app/) - Beautiful, simple and easy to deploy Pastebin with optional client encryption, multitab pastes, an API, a highlighted editor and more. ([Source Code](https://github.com/interaapps/pastefy), [Clients](https://github.com/topics/pastefy-addon)) `MIT` `Docker/K8S/Java`
- [PrivateBin](https://privatebin.info/) - Minimalist pastebin/discussion board where the server has zero knowledge of hosted data. ([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
- [rustypaste](https://github.com/orhun/rustypaste) - Minimal file upload/pastebin service. `MIT` `Rust`
- [SnyPy](https://snypy.com) - Open source on-prem code snippet manager. ([Demo](https://app.snypy.com), [Source Code](https://github.com/snypy)) `MIT` `Docker`
- [Sup3rS3cretMes5age](https://github.com/algolia/sup3rS3cretMes5age) - Very simple (to deploy and to use) secret message service using Hashicorp Vault as a secrets storage. `MIT` `Go`
- [Wastebin](https://github.com/matze/wastebin) - Lightweight, minimal and fast pastebin with an SQLite backend. ([Demo](https://bin.bloerg.net)) `MIT` `Rust/Docker`
- [ybFeed](https://github.com/ybizeul/ybFeed) - Personal micro feed where you can post snippets of text or images. `MIT` `Go/Nodejs/Docker`
- [Yopass](https://github.com/jhaals/yopass) - Secure sharing of secrets, passwords and files. ([Demo](https://yopass.se/)) `Apache-2.0` `Go/Docker`


### Personal Dashboards

**[`^        back to top        ^`](#awesome-selfhosted)**

Dashboards for accessing information and applications.

_Related: [Monitoring](#monitoring), [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)_

- [Dashy](https://dashy.to/) - Feature-rich homepage for your homelab, with easy YAML configuration. ([Demo](https://demo.dashy.to/), [Source Code](https://github.com/lissy93/dashy)) `MIT` `Nodejs/Docker`
- [Fenrus](https://github.com/revenz/fenrus) - Personal home page that allows for multiple users, guest access and multiple dashboards for each user. It also has "Smart Apps" which display live data for those apps. `GPL-3.0` `.NET/Docker`
- [Glance](https://github.com/glanceapp/glance) - Highly customizable dashboard that puts all your feeds in one place. `AGPL-3.0` `Docker/Go`
- [gobookmarks](https://github.com/arran4/gobookmarks) - Landing page to display bookmarks stored in GitHub, GitLab or local Git. `AGPL-3.0` `Go/Docker`
- [Heimdall](https://heimdall.site/) - Elegant solution to organise all your web applications. ([Source Code](https://github.com/linuxserver/Heimdall)) `MIT` `PHP`
- [Hiccup](https://designedbyashw.in/test/hiccup/) - Beautiful static homepage to get to your links and services quickly. It has built-in search, editing, PWA support and localstorage caching to easily organize your start page. ([Source Code](https://github.com/ashwin-pc/hiccup)) `MIT` `Javascript/Docker`
- [Homarr](https://homarr.dev) - Sleek, modern dashboard with many integrations and web-based config. ([Source Code](https://github.com/homarr-labs/homarr)) `MIT` `Docker/Nodejs`
- [Homepage by gethomepage](https://github.com/gethomepage/homepage) - Highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations. `GPL-3.0` `Docker/Nodejs`
- [Homepage by tomershvueli](https://github.com/tomershvueli/homepage) - Simple, standalone, self-hosted PHP page that is your window to your server and the web. `MIT` `PHP`
- [Homer](https://github.com/bastienwirtz/homer) - Dead simple static homepage to expose your server services, with an easy yaml configuration and connectivity check. ([Demo](https://homer-demo.netlify.app)) `Apache-2.0` `Docker/K8S/Nodejs`
- [Hubleys](https://github.com/knrdl/hubleys-dashboard) - Personal dashboards to organize links for multiple users via a central yaml config. `MIT` `Docker`
- [LinkStack](https://linkstack.org/) - Link all your social media platforms easily accessible on one page, customizable through an intuitive, easy to use user/admin interface (alternative to Linktree and Manylink). ([Demo](https://linksta.cc/), [Source Code](https://github.com/LinkStackOrg/LinkStack)) `AGPL-3.0` `PHP/Docker`
- [LittleLink](https://littlelink.io/) - Simplistic approach for links in bio with 100+ branded buttons (alternative to Linktree). ([Demo](https://littlelink.io/), [Source Code](https://github.com/sethcottle/littlelink)) `MIT` `Javascript`
- [Mafl](https://mafl.hywax.space/) - Minimalistic flexible homepage. ([Source Code](https://github.com/hywax/mafl)) `MIT` `Docker/Nodejs`
- [Personal Management System](https://volmarg.github.io/) - Organize the essentials of everyday life, everything from a simple to-do list, and notes up to payments, and schedules. ([Demo](https://github.com/Volmarg/personal-management-system#documentation--demo), [Source Code](https://github.com/Volmarg/personal-management-system)) `MIT` `Docker`
- [portkey](https://portkey.page) - Simple web portal that serves as a startup page, displaying a compilation of links and URLs, while also allowing the addition of custom pages, all managed through a single configuration file. ([Demo](https://demo.portkey.page), [Source Code](https://github.com/kodehat/portkey)) `AGPL-3.0` `Go/Docker`
- [ryot](https://github.com/ignisda/ryot) - Track various facets of your life - media, fitness, etc. ([Demo](https://github.com/IgnisDa/ryot?tab=readme-ov-file#-demo)) `GPL-3.0` `Docker`
- [Starbase 80](https://github.com/notclickable-jordan/starbase-80) - A simple homepage with an iPad-style application grid, for mobile and desktop. One JSON configuration file. `MIT` `Docker`
- [Your Spotify](https://github.com/Yooooomi/your_spotify) `⚠` - Allows you to record your Spotify listening activity and have statistics about them served through a Web application. `MIT` `Nodejs/Docker`


### Photo Galleries

**[`^        back to top        ^`](#awesome-selfhosted)**

A [gallery](https://en.wikipedia.org/wiki/Gallery_Software) is software that helps the user publish or share photos, pictures, videos or other digital media.

_Related: [Static Site Generators](#static-site-generators), [Media Streaming - Video Streaming](#media-streaming---video-streaming), [Content Management Systems (CMS)](#content-management-systems-cms)_

- [Chevereto](https://chevereto.com/) - Ultimate image sharing software. Create your very own personal image hosting website in just minutes. ([Source Code](https://github.com/chevereto/chevereto)) `AGPL-3.0` `PHP/Docker`
- [Damselfly](https://damselfly.info) - Fast server-based photo management system for large collections of images. Includes face detection, face & object recognition, powerful search, and EXIF Keyword tagging. Runs on Linux, MacOS and Windows. ([Source Code](https://github.com/webreaper/damselfly)) `GPL-3.0` `Docker/C#/.NET`
- [Ente](https://ente.io/) - An end-to-end encrypted photo-sharing platform (alternative to Google Photos, Apple Photos). ([Source Code](https://github.com/ente-io/ente)) `AGPL-3.0` `Docker/Nodejs/Go`
- [HomeGallery](https://home-gallery.org) - Browse personal photos and videos featuring tagging, mobile-friendly, and AI powered image discovery. ([Demo](https://demo.home-gallery.org), [Source Code](https://github.com/xemle/home-gallery)) `MIT` `Nodejs/Docker`
- [Immich Kiosk](https://github.com/damongolding/immich-kiosk) - Lightweight slideshow for running on kiosk devices and browsers that uses Immich as a data source. `GPL-3.0` `Docker/Go`
- [Immich](https://immich.app/) - Photo and video backup solution directly from your mobile phone. ([Demo](https://github.com/immich-app/immich#demo), [Source Code](https://github.com/immich-app/immich)) `AGPL-3.0` `Docker`
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Photo management service with a slight focus on cool graphs (alternative to Google Photos). ([Clients](https://docs.librephotos.com/docs/user-guide/mobile/)) `MIT` `Python/Docker`
- [Lychee](https://lycheeorg.github.io/) - Grid and album based photo-management-system. ([Source Code](https://github.com/LycheeOrg/Lychee)) `MIT` `PHP/Docker`
- [Mediagoblin](https://mediagoblin.org) - Media publishing platform that anyone can run (alternative to Flickr, YouTube, SoundCloud). ([Source Code](https://git.savannah.gnu.org/cgit/mediagoblin.git/tree/)) `AGPL-3.0` `Python`
- [Mejiro](https://github.com/dmpop/pellicola) - Easy-to-use instant photo publishing. `GPL-3.0` `PHP`
- [Nextcloud Memories](https://memories.gallery/) - Fast, modern and advanced photo management suite. Runs as a Nextcloud app. ([Demo](https://demo.memories.gallery/apps/memories/), [Source Code](https://github.com/pulsejet/memories)) `AGPL-3.0` `PHP`
- [Photofield](https://github.com/SmilyOrg/photofield) - Experimental fast photo viewer. `MIT` `Docker/Go`
- [PhotoPrism](https://photoprism.org) - Personal photo management powered by Go and Google TensorFlow.  Browse, organize, and share your personal photo collection, using the latest technologies to automatically tag and find pictures. ([Demo](https://demo.photoprism.app/library/browse), [Source Code](https://github.com/photoprism/photoprism)) `AGPL-3.0` `Go/Docker`
- [Photoview](https://photoview.github.io/) - Simple and user-friendly photo gallery for personal servers. It is made for photographers and aims to provide an easy and fast way to navigate directories, with thousands of high resolution photos. ([Demo](https://photoview.github.io/), [Source Code](https://github.com/photoview/photoview)) `GPL-3.0` `Go/Docker`
- [PiGallery 2](https://bpatrik.github.io/pigallery2/) - Directory-first photo gallery website, with a rich UI, optimised for running on low resource servers. ([Source Code](https://github.com/bpatrik/pigallery2)) `MIT` `Docker/Nodejs`
- [Piwigo](https://piwigo.org/) - Photo gallery software for the web, built by an active community of users and developers. ([Source Code](https://github.com/Piwigo/Piwigo)) `GPL-2.0` `PHP`
- [sigal](https://github.com/saimn/sigal) - Yet another simple static gallery generator. `MIT` `Python`
- [SPIS](https://github.com/gbbirkisson/spis) - A simple, lightweight and fast media server with decent mobile support. `GPL-3.0` `Docker/Rust`
- [This week in past](https://github.com/RouHim/this-week-in-past) - Aggregates images taken this week, from previous years and presents them on a web page with a simple slideshow. `MIT` `Docker/Rust`
- [Thumbor](http://thumbor.org/) - A smart imaging service and enables on-demand cropping, resizing, applying filters and optimizing images. ([Source Code](https://github.com/thumbor/thumbor)) `MIT` `Python/Docker`
- [WeddingShare](https://docs.wedding-share.org/) - Event photo sharing platform and gallery with slideshow that allows guests to view and share memories via a QR code. ([Demo](https://demo.wedding-share.org/), [Source Code](https://github.com/Cirx08/WeddingShare)) `GPL-3.0` `C#/Docker`
- [Zenphoto](https://www.zenphoto.org/) - Open-source gallery and CMS project. ([Source Code](https://github.com/zenphoto/zenphoto)) `GPL-2.0` `PHP`


### Polls and Events

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for organising [polls](https://en.wikipedia.org/wiki/Opinion_poll) and [events](https://en.wikipedia.org/wiki/Event).

_Related: [Booking and Scheduling](#booking-and-scheduling)_

- [Bitpoll](https://github.com/fsinfuhh/Bitpoll) - Conduct polls about dates, times or general questions. ([Demo](https://bitpoll.de/)) `GPL-3.0` `Docker/Python`
- [Bracket](https://docs.bracketapp.nl/) - Flexible tournament system to build a tournament setup, add teams, schedule matches, keep track of scores and present ranking live to the public. ([Demo](https://www.bracketapp.nl/demo), [Source Code](https://github.com/evroon/bracket)) `AGPL-3.0` `Docker/Nodejs`
- [Christmas Community](https://github.com/Wingysam/Christmas-Community) - Create a simple place for your entire family to use to find gifts that people want, and to avoid double-gifting. `AGPL-3.0` `Docker/Nodejs`
- [Claper](https://claper.co/) - The ultimate tool to interact with your audience (alternative to Slido, AhaSlides and Mentimeter). ([Source Code](https://github.com/ClaperCo/Claper)) `GPL-3.0` `Elixir/Docker`
- [ClearFlask](https://clearflask.com) - Community-feedback tool for managing incoming feedback and prioritizing a public roadmap (alternative to Canny, UserVoice, Upvoty). ([Demo](https://product.clearflask.com), [Source Code](https://github.com/clearflask/clearflask)) `AGPL-3.0` `Docker`
- [docassemble](https://docassemble.org/) - A free, open-source expert system for guided interviews and document assembly, based on Python, YAML, and Markdown. ([Demo](https://demo.docassemble.org/run/legal), [Source Code](https://github.com/jhpyle/docassemble)) `MIT` `Docker/Python`
- [Fider](https://fider.io) - Open platform to collect and prioritize feedback (alternative to UserVoice). ([Demo](https://demo.fider.io), [Source Code](https://github.com/getfider/fider)) `MIT` `Docker`
- [Formbricks](https://formbricks.com) - Experience Management Suite built on the largest open source survey stack worldwide. Gracefully gather feedback at every step of the customer journey to know what your customers need. ([Demo](https://app.formbricks.com), [Source Code](https://github.com/formbricks/formbricks)) `AGPL-3.0` `Nodejs/Docker`
- [Framadate](https://framadate.org/abc/) - Online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision. ([Demo](https://framadate.org/aqg259dth55iuhwm), [Source Code](https://framagit.org/framasoft/framadate?)) `CECILL-B` `PHP`
- [Gancio](https://gancio.org/) - Local community event and agenda sharing. ([Demo](https://demo.gancio.org/), [Source Code](https://framagit.org/les/gancio)) `AGPL-3.0` `Nodejs`
- [gathio](https://docs.gath.io/) - Self-destructing, shareable, no-registration event pages. ([Demo](https://gath.io/), [Source Code](https://github.com/lowercasename/gathio)) `GPL-3.0` `Nodejs/Docker`
- [HeyForm](https://heyform.net) - Form builder that allows anyone to create engaging conversational forms for surveys, questionnaires, quizzes, and polls. ([Source Code](https://github.com/heyform/heyform)) `AGPL-3.0` `Docker`
- [hitobito](https://hitobito.com) - Manage complex group hierarchies with members, events and a lot more. ([Demo](https://demo.hitobito.com/en/users/sign_in), [Source Code](https://github.com/hitobito/hitobito)) `AGPL-3.0` `Ruby`
- [Input](https://getinput.co) - Privacy-focused, no-code, open-source form builder designed for simplicity and brand consistency. ([Source Code](https://github.com/deck9/input)) `AGPL-3.0` `PHP/Nodejs/Docker`
- [LimeSurvey](https://www.limesurvey.org) - Feature-rich web-based polling software. Supports extensive survey logic. ([Demo](https://demo.limesurvey.org), [Source Code](https://github.com/LimeSurvey/LimeSurvey)) `GPL-2.0` `PHP`
- [Meetable](https://events.indieweb.org) - Minimal events aggregator. ([Source Code](https://github.com/aaronpk/Meetable)) `MIT` `PHP`
- [Mobilizon](https://mobilizon.org) - Federated tool that helps you find, create and organise events and groups. ([Source Code](https://framagit.org/framasoft/mobilizon/)) `AGPL-3.0` `Elixir/Docker`
- [OpnForm](https://opnform.com) - Beautiful open-source form builder. ([Demo](https://opnform.com/forms/create/guest), [Source Code](https://github.com/JhumanJ/opnform)) `AGPL-3.0` `PHP/Nodejs/Docker`


### Proxy

**[`^        back to top        ^`](#awesome-selfhosted)**

A [proxy](https://en.wikipedia.org/wiki/Proxy_server) is a server application that acts as an intermediary between a client requesting a resource and the server providing that resource. This section about forward (i.e. outgoing) proxies. For reverse proxies, see the Web Server section.

_Related: [Web Servers](#web-servers)_

- [g3proxy](https://g3-project.readthedocs.io/projects/g3proxy/en/latest/) - Forward proxy server supporting proxy chaining, protocol inspection, MITM Interception, ICAP adaptation and transparent proxy. ([Source Code](https://github.com/bytedance/g3/tree/master/g3proxy)) `Apache-2.0` `Rust/deb`
- [imgproxy](https://imgproxy.net/) - Fast and secure standalone server for resizing and converting remote images. ([Source Code](https://github.com/imgproxy/imgproxy)) `MIT` `Go/Docker/K8S`
- [iodine](https://code.kryo.se/iodine/) - IPv4 over DNS tunnel solution, enabling you to start up a socks5 proxy listener. ([Source Code](https://github.com/yarrick/iodine)) `ISC` `C/deb`
- [Outline Server](https://getoutline.org/) - A proxy server that runs a Shadowsocks instance for each access key and a REST API to manage the access keys. ([Source Code](https://github.com/Jigsaw-Code/outline-server)) `Apache-2.0` `Docker/Nodejs`
- [Privoxy](https://www.privoxy.org) - Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk. `GPL-2.0` `C/deb`
- [sish](https://github.com/antoniomika/sish) - HTTP(S)/WS(S)/TCP tunnels to localhost using only SSH (serveo/ngrok alternative). `MIT` `Go/Docker`
- [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) - SOCKS5 proxy server with built-in authentication and Telegram-bot for user management and user statistics on data spent (handy when you pay per GB of data). It is dockerised and simple to install. `Apache-2.0` `Docker`
- [Squid](http://www.squid-cache.org/) - Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. ([Source Code](https://code.launchpad.net/squid)) `GPL-2.0` `C/deb`
- [Tinyproxy](https://tinyproxy.github.io/) - Light-weight HTTP/HTTPS proxy daemon. ([Source Code](https://github.com/tinyproxy/tinyproxy)) `GPL-2.0` `C/deb`
- [txtdot](https://tempoworks.github.io/documentation) - A HTTP proxy that parses only text, links and pictures from pages reducing internet bandwidth usage, removing ads and heavy scripts. ([Demo](https://txt.dc09.ru), [Source Code](https://github.com/TempoWorks/txtdot)) `MIT` `Nodejs/Docker`


### Recipe Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Software and tools for managing [recipes](https://en.wikipedia.org/wiki/Recipe).

- [Bar Assistant](https://barassistant.app/) - Manage your home bar while adding your ingredients, searching for cocktails and creating custom cocktail recipes. ([Demo](https://demo.barassistant.app/), [Source Code](https://github.com/karlomikus/bar-assistant)) `MIT` `PHP/Docker`
- [CookCLI](https://cooklang.org) - Command-line tool for automating meal planning and shopping with Cooklang recipes, scriptable for UNIX workflows, includes web server. ([Source Code](https://github.com/cooklang/CookCLI)) `MIT` `Rust`
- [Fork Recipes](https://mikebgrep.github.io/forkapi/latest/clients/) - Manage your food recipes with simplicity. ([Source Code](https://github.com/mikebgrep/fork.recipes)) `BSD-3-Clause` `Docker`
- [KitchenOwl](https://docs.kitchenowl.org/latest/) - Cross-platform shopping list, recipe storage, expense tracker, and meal planner following the material design language. ([Source Code](https://github.com/TomBursch/kitchenowl)) `AGPL-3.0` `Docker/deb`
- [ManageMeals](https://managemeals.com/) - Manage recipes, import recipes by URL and organize them without any ads or unnecessary text. ([Demo](https://demo.managemeals.com/), [Source Code](https://github.com/managemeals/manage-meals-web)) `GPL-3.0` `Docker`
- [Mealie](https://nightly.mealie.io/) - Material design inspired recipe manager with category and tag management, shopping-lists, meal-planner, and site customizations. Mealie is focused on simple user interactions to keep the whole family using the app. ([Source Code](https://github.com/mealie-recipes/mealie)) `MIT` `Python`
- [RecipeSage](https://github.com/julianpoy/recipesage) - A recipe keeper, meal plan organizer, and shopping list manager that can import recipes directly from any URL. ([Demo](https://recipesage.com)) `AGPL-3.0` `Nodejs`
- [Recipya](https://recipes.musicavis.ca) - Clean, simple and powerful recipe manager your whole family will enjoy. ([Demo](https://recipes.musicavis.ca/guide/login), [Source Code](https://github.com/reaper47/recipya)) `GPL-3.0` `Docker/Go`
- [Specifically Clementines](https://davideshay.github.io/groceries/) - Grocery shopping app (previously Groceries), providing reliable sync with multiple users/devices (web/Android/iOS), recipes and integration with Tandoor. ([Source Code](https://github.com/davideshay/groceries)) `MIT` `Docker`
- [Tamari](https://tamariapp.com) - Recipe manager web app with a built-in collection of recipes. Organize by favorites and categories, create shopping lists, and plan meals. ([Demo](https://app.tamariapp.com), [Source Code](https://github.com/alexbates/Tamari)) `GPL-3.0` `Docker/Python`
- [Vanilla Cookbook](https://vanilla-cookbook.readthedocs.io/en/) - Recipe manager designed with complexity under the hood, keeping the user experience as uncluttered, simply vanilla as possible. ([Source Code](https://github.com/jt196/vanilla-cookbook)) `GPL-3.0` `Docker/Nodejs`
- [What To Cook?](https://github.com/kassner/whattocook) - Get a recipe to cook today, based on the ingredients you have at home. `AGPL-3.0` `Docker`


### Remote Access

**[`^        back to top        ^`](#awesome-selfhosted)**

[Remote desktop](https://en.wikipedia.org/wiki/Remote_desktop_software) and [SSH](https://en.wikipedia.org/wiki/Secure_Shell) servers and web interfaces for remote management of computer systems.

- [Engity's Bifröst](https://bifroest.engity.org/) - Highly customizable SSH server with several ways to authorize a user and options where and how to execute a user's session. ([Source Code](https://github.com/engity-com/bifroest)) `Apache-2.0` `Go/Docker`
- [Firezone](https://www.firezone.dev/) - Secure remote access gateway that supports the WireGuard protocol. It offers a Web GUI, 1-line install script, multi-factor auth (MFA), and SSO. ([Source Code](https://github.com/firezone/firezone)) `Apache-2.0` `Elixir/Docker`
- [Guacamole](https://guacamole.apache.org) - Clientless remote desktop gateway supporting standard protocols like VNC and RDP. ([Source Code](https://github.com/apache/guacamole-server)) `Apache-2.0` `Java/C`
- [MeshCentral](https://meshcentral.com/) - Run your own web server to remotely manage and control computers on a local network or anywhere on the internet. ([Source Code](https://github.com/Ylianst/MeshCentral)) `Apache-2.0` `Nodejs`
- [Remotely](https://github.com/immense/Remotely) - Remote desktop control and remote scripting solution, enterprise level remote support solution with admin web interface and remote control via browser. `GPL-3.0` `C#/Docker`
- [ShellHub](https://www.shellhub.io) - Modern SSH server for remotely accessing linux devices via command line (using any SSH client) or web-based user interface (alternative to sshd). ([Source Code](https://github.com/shellhub-io/shellhub)) `Apache-2.0` `Docker`
- [Sshwifty](https://github.com/nirui/sshwifty) - Sshwifty is a SSH and Telnet connector made for the Web. ([Demo](https://sshwifty-demo.nirui.org)) `AGPL-3.0` `Go/Docker`
- [Termix](https://docs.termix.site/) - Clientless web-based server management platform with SSH terminal, tunneling, and file editing capabilities. ([Source Code](https://github.com/LukeGus/Termix)) `Apache-2.0` `Docker`
- [Warpgate](https://github.com/warp-tech/warpgate) - Smart SSH and HTTPS bastion that works with any SSH client. `Apache-2.0` `Rust/Docker`


### Resource Planning

**[`^        back to top        ^`](#awesome-selfhosted)**

Software and tools to help with [resource and supply planning](https://en.wikipedia.org/wiki/Resource_planning), including [enterprise resource and supply planning (ERP)](https://en.wikipedia.org/wiki/Enterprise_resource_planning).

_Related: [Money, Budgeting & Management](#money-budgeting--management), [Inventory Management](#inventory-management)_

- [Dolibarr](https://www.dolibarr.org/) - Modern CRM software package to manage your company or foundation activity (contacts, suppliers, invoices, orders, stocks, agenda, accounting, ...). ([Demo](https://www.dolibarr.org/onlinedemo.php), [Source Code](https://github.com/Dolibarr/dolibarr)) `GPL-3.0` `PHP/deb`
- [ERPNext](https://frappe.io/erpnext) - ERP system to help you run your business. ([Source Code](https://github.com/frappe/erpnext)) `GPL-3.0` `Python/Docker`
- [farmOS](https://farmos.org/) - Web-based farm record keeping application. ([Demo](https://farmos-demo.rootedsolutions.io/), [Source Code](https://github.com/farmOS/farmOS)) `GPL-2.0` `PHP/Docker`
- [grocy](https://grocy.info/) - ERP beyond your fridge. Groceries & household management solution for your home. ([Demo](https://en.demo.grocy.info/), [Source Code](https://github.com/grocy/grocy)) `MIT` `PHP/Docker`
- [LedgerSMB](https://ledgersmb.org/) - Integrated accounting and ERP system for small and midsize businesses, with double entry accounting, budgeting, invoicing, quotations, projects, orders and inventory management, shipping and more. ([Source Code](https://github.com/ledgersmb/LedgerSMB)) `GPL-2.0` `Docker/Perl`
- [Odoo](https://www.odoo.com) - Free open source ERP system. ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo)) `LGPL-3.0` `Python/deb/Docker`
- [OFBiz](https://ofbiz.apache.org/) - Enterprise Resource Planning system with a suite of business applications flexible enough to be used across any industry. ([Source Code](https://github.com/apache/ofbiz-framework)) `Apache-2.0` `Java`
- [Tryton](https://www.tryton.org/) - Free open source business solution. ([Demo](https://www.tryton.org/demo), [Source Code](https://foss.heptapod.net/tryton/tryton)) `GPL-3.0` `Python`


### Search Engines

**[`^        back to top        ^`](#awesome-selfhosted)**

A [search engine](https://en.wikipedia.org/wiki/Search_engine_(computing)) is an [information retrieval system](https://en.wikipedia.org/wiki/Information_retrieval) designed to help find information stored on a computer system. This includes [Web search engines](https://en.wikipedia.org/wiki/Web_search_engine).

- [Aleph](https://aleph.occrp.org/) - Tool for indexing large amounts of both documents (PDF, Word, HTML) and structured (CSV, XLS, SQL) data for easy browsing and search. It is built with investigative reporting as a primary use case. ([Demo](https://aleph.occrp.org/), [Source Code](https://github.com/alephdata/aleph)) `MIT` `Docker/K8S`
- [Apache Solr](https://lucene.apache.org/solr/) - Enterprise search platform featuring full-text search, hit highlighting, faceted search, real-time indexing, dynamic clustering, and rich document (e.g., Word, PDF) handling. ([Source Code](https://github.com/apache/solr)) `Apache-2.0` `Java/Docker/K8S`
- [Fess](https://fess.codelibs.org/) - Powerful and easily deployable Enterprise Search Server. ([Demo](https://search.n2sm.co.jp/), [Source Code](https://github.com/codelibs/fess)) `Apache-2.0` `Java/Docker`
- [Jina](https://github.com/jina-ai/serve) - Cloud-native neural search framework for any kind of data. `Apache-2.0` `Python/Docker`
- [Manticore Search](https://github.com/manticoresoftware/manticoresearch/) - Full-text search and data analytics, with fast response time for small, medium and big data (alternative to Elasticsearch). `GPL-3.0` `Docker/deb/C++/K8S`
- [MeiliSearch](https://www.meilisearch.com) - Ultra relevant, instant and typo-tolerant full-text search API. ([Source Code](https://github.com/meilisearch/MeiliSearch)) `MIT` `Rust/Docker/deb`
- [OpenSearch](https://opensearch.org) - Distributed and RESTful search engine. ([Source Code](https://github.com/opensearch-project/OpenSearch)) `Apache-2.0` `Java/Docker/K8S/deb`
- [SearXNG](https://docs.searxng.org/) `⚠` - Internet metasearch engine which aggregates results from various search services and databases (Fork of Searx). ([Source Code](https://github.com/searxng/searxng/)) `AGPL-3.0` `Python/Docker`
- [sist2](https://github.com/sist2app/sist2) - Lightning-fast file system indexer and search tool. `GPL-3.0` `C/Docker`
- [Sosse](https://sosse.readthedocs.io/en/stable/) - Selenium based search engine and crawler with offline archiving. ([Source Code](https://gitlab.com/biolds1/sosse)) `AGPL-3.0` `Python/Docker`
- [Typesense](https://typesense.org) - Blazing fast, typo-tolerant open source search engine optimized for developer happiness and ease of use. ([Source Code](https://github.com/typesense/typesense)) `GPL-3.0` `C++/Docker/K8S/deb`
- [Websurfx](https://github.com/neon-mmd/websurfx) `⚠` - Aggregate results from other search engines (metasearch engine) without ads while keeping privacy and security in mind. It is extremely fast and provides a high level of customization (alternative to SearX). `AGPL-3.0` `Rust/Docker`
- [Whoogle](https://github.com/benbusby/whoogle-search) `⚠` - A self-hosted, ad-free, privacy-respecting metasearch engine. `MIT` `Python`
- [Yacy](https://yacy.net/en/index.html) - Peer based, decentralized search engine server. ([Source Code](https://github.com/yacy/yacy_search_server)) `GPL-2.0` `Java/Docker/K8S`
- [ZincSearch](https://zincsearch.com) - Search engine that requires minimal resources (alternative to Elasticsearch). ([Demo](https://github.com/zinclabs/zinc#playground-server), [Source Code](https://github.com/zincsearch/zincsearch)) `Apache-2.0` `Go/Docker/K8S`


### Self-hosting Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for easy installation, management and configuration of self-hosted services and applications.

- [Ansible-NAS](https://github.com/DaveStephens/ansible-nas) - Build a full-featured home server with this playbook and an Ubuntu box. `MIT` `Ansible/Docker`
- [CasaOS](https://casaos.zimaspace.com/) - Simple, easy-to-use, elegant Home Cloud system. ([Source Code](https://github.com/IceWhaleTech/CasaOS)) `Apache-2.0` `Go/Docker`
- [DietPi](https://dietpi.com/) - Minimal Debian OS optimized for single-board computers, which allows you to easily install and manage several services for selfhosting at home. ([Source Code](https://github.com/MichaIng/DietPi)) `GPL-2.0` `Shell`
- [DockSTARTer](https://dockstarter.com/) - DockSTARTer helps you get started with home server apps running in Docker. ([Source Code](https://github.com/GhostWriters/DockSTARTer)) `MIT` `Shell`
- [Dropserver](https://dropserver.org) - An application platform for your personal web services. ([Source Code](https://github.com/teleclimber/Dropserver/)) `Apache-2.0` `Go/Deno`
- [FreedomBox](https://freedombox.org/) - Community project to develop, design and promote personal servers running free software for private, personal, communications. ([Source Code](https://salsa.debian.org/freedombox-team/freedombox)) `AGPL-3.0` `Python/deb`
- [HomelabOS](https://homelabos.com) - Offline privacy-centric data-center. Deploy over 100 services with a few commands. ([Source Code](https://gitlab.com/NickBusey/HomelabOS)) `MIT` `Docker`
- [HomeServerHQ](https://www.homeserverhq.com/) - All-in-one home server infrastructure and installer. Have a fully configured email server, VPN, and public website(s) set up in less than an hour, even behind CGNAT. ([Source Code](https://github.com/homeserverhq/hshq)) `GPL-3.0` `Shell`
- [LibreServer](https://libreserver.org/) - Home server configuration based on Debian. ([Source Code](https://github.com/bashrc2/libreserver)) `AGPL-3.0` `Shell`
- [Mistborn](https://gitlab.com/cyber5k/mistborn) - Virtual private cloud platform and WebUI that manages self hosted services. `MIT` `Shell/Docker`
- [NextCloudPi](https://github.com/nextcloud/nextcloudpi) - Nextcloud preinstalled and preconfigured, with a text and web management interface and all the tools needed to self host private data. With installation images for Raspberry Pi, Odroid, Rock64, Docker, and a curl installer for Armbian/Debian. `GPL-2.0` `Shell/PHP`
- [Nirvati](https://nirvati.org) - Easily 1-click spin up popular self-hosted apps from a convenient web interface. ([Source Code](https://gitlab.com/nirvati-ug/nirvati)) `AGPL-3.0` `Rust/K8S`
- [OpenMediaVault](https://www.openmediavault.org/) - Network attached storage (NAS) solution based on Debian Linux. It contains services like SSH, (S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many more. ([Source Code](https://github.com/openmediavault/openmediavault)) `GPL-3.0` `PHP`
- [Sandstorm](https://sandstorm.io/) - Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm)) `Apache-2.0` `C++/Shell`
- [Self Host Blocks](https://github.com/ibizaman/selfhostblocks) `⚠` - Modular server management based on NixOS modules and focused on best practices. `AGPL-3.0` `Nix`
- [StartOS](https://start9.com) - Browser-based, graphical Operating System (OS) that makes running a personal server as easy as running a personal computer. ([Source Code](https://github.com/Start9Labs/start-os)) `MIT` `Rust`
- [Syncloud](https://syncloud.org/) - Your own online file storage, social network or email server. ([Source Code](https://github.com/syncloud/platform)) `GPL-3.0` `Go/Shell`
- [Tipi](https://runtipi.io/) - Homeserver manager. One command setup, one click installs for your favorites self-hosted apps. ([Source Code](https://github.com/runtipi/runtipi)) `GPL-3.0` `Shell`
- [UBOS](https://ubos.net/) - Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., and other features. `GPL-3.0` `Perl`
- [Websoft9](https://www.websoft9.com) `⚠` - GitOps-driven, multi-application hosting for cloud servers and home servers, one-click deployment of 200+ open source apps. ([Demo](https://www.websoft9.com/demo), [Source Code](https://github.com/websoft9/websoft9), [Clients](https://www.websoft9.com/apps)) `LGPL-3.0` `Shell/Python`
- [WikiSuite](https://wikisuite.org) - The most comprehensive and integrated Free / Libre / Open Source enterprise software suite. ([Source Code](https://wikisuite.org/Source-Code)) `GPL-3.0/LGPL-2.1/Apache-2.0/MPL-2.0/MPL-1.1/MIT/AGPL-3.0` `Shell/Perl/deb`
- [xsrv](https://xsrv.readthedocs.io/) - Install and manage self-hosted services/applications, on your own server(s). ([Source Code](https://github.com/nodiscc/xsrv)) `GPL-3.0` `Ansible/Shell`
- [YunoHost](https://yunohost.org/) - Server operating system aiming to make self-hosting accessible to everyone. ([Demo](https://yunohost.org/#/try), [Source Code](https://github.com/YunoHost)) `AGPL-3.0` `Python/Shell`


### Software Development

**[`^        back to top        ^`](#awesome-selfhosted)**

[Software development](https://en.wikipedia.org/wiki/Software_development) is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.

**Please visit [Software Development - API Management](#software-development---api-management), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Software Development - FaaS & Serverless](#software-development---faas--serverless), [Software Development - IDE & Tools](#software-development---ide--tools), [Software Development - Localization](#software-development---localization), [Software Development - Low Code](#software-development---low-code), [Software Development - Project Management](#software-development---project-management), [Software Development - Testing](#software-development---testing), [Software Development - Feature Toggle](#software-development---feature-toggle)**



### Software Development - API Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[API management](https://en.wikipedia.org/wiki/API_management) is the process of creating and publishing [application programming interfaces (APIs)](https://en.wikipedia.org/wiki/API), enforcing their usage policies, controlling access, nurturing the subscriber community, collecting and analyzing usage statistics, and reporting on performance. 

- [DreamFactory](https://www.dreamfactory.com/) - Turns any SQL/NoSQL/Structured data into Restful API. ([Source Code](https://github.com/dreamfactorysoftware/dreamfactory)) `Apache-2.0` `PHP/Docker/K8S`
- [form.io](https://form.io) - A REST API building platform that utilizes a drag & drop form builder, and is application framework agnostic. Contains open source and enterprise version. ([Demo](https://portal.form.io), [Source Code](https://github.com/formio)) `MIT` `Nodejs/Docker`
- [Fusio](https://www.fusio-project.org/) - Open-source API management platform which helps to build and manage REST APIs. ([Demo](https://fusio-project.org/demo), [Source Code](https://github.com/apioo/fusio)) `AGPL-3.0` `PHP/Docker`
- [Graphweaver](https://graphweaver.com/) - Turn multiple data sources into a single GraphQL API. ([Source Code](https://github.com/exogee-technology/graphweaver)) `MIT` `Nodejs`
- [Hasura](https://hasura.io) - Fast, instant realtime GraphQL APIs on Postgres with fine grained access control, also trigger webhooks on database events. ([Source Code](https://github.com/hasura/graphql-engine)) `Apache-2.0` `Haskell/Docker/K8S`
- [Hoppscotch Community Edition](https://hoppscotch.io) - Fast and beautiful API request builder. ([Source Code](https://github.com/hoppscotch/hoppscotch)) `MIT` `Nodejs/Docker`
- [Kong](https://konghq.com/kong/) - Microservice API Gateway and Platform. ([Source Code](https://github.com/Kong/kong)) `Apache-2.0` `Lua/Docker/K8S/deb`
- [Lura](https://luraproject.org/) - High-performance API Gateway. ([Source Code](https://github.com/luraproject/lura)) `Apache-2.0` `Go`
- [Opik](https://www.comet.com/site/products/opik/) `⚠` - Evaluate, test, and ship LLM applications with a suite of observability tools to calibrate language model outputs across your dev and production lifecycle. ([Source Code](https://github.com/comet-ml/opik)) `Apache-2.0` `Docker/Python`
- [Panora](https://panora.dev) `⚠` - Add an integration catalog to your SaaS product in minutes (alternative to Merge.dev). ([Source Code](https://github.com/panoratech/Panora)) `AGPL-3.0` `Nodejs/Docker`
- [Para](https://paraio.org) - Flexible and modular backend framework/server for object persistence, API development and authentication. ([Source Code](https://github.com/erudika/para)) `Apache-2.0` `Java/Docker`
- [Svix](https://svix.com) - Open-source webhooks as a service that makes it super easy for API providers to send webhooks. ([Source Code](https://github.com/svix/svix-webhooks)) `MIT` `Docker/Rust`
- [Tyk](https://tyk.io) - Fast and scalable open source API Gateway. Out of the box, Tyk offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard. ([Source Code](https://github.com/TykTechnologies/tyk)) `MPL-2.0` `Go/Docker/K8S`
- [Yaade](https://docs.yaade.io/) - Yaade is an open-source, self-hosted, collaborative API development environment. ([Source Code](https://github.com/EsperoTech/yaade)) `MIT` `Docker`


### Software Development - Continuous Integration & Deployment

**[`^        back to top        ^`](#awesome-selfhosted)**

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) and [Continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment) software and tools.

**Please visit [awesome-sysadmin/Continuous Integration & Continuous Deployment](https://github.com/awesome-foss/awesome-sysadmin#continuous-integration--continuous-deployment)**

_Related: [Automation](#automation)_



### Software Development - FaaS & Serverless

**[`^        back to top        ^`](#awesome-selfhosted)**

[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing), [Function as a Service (FaaS)](https://en.wikipedia.org/wiki/Function_as_a_service) and [Platform as a Service (Paas)](https://en.wikipedia.org/wiki/Platform_as_a_service) management software.

**Please visit [awesome-sysadmin/PaaS](https://github.com/awesome-foss/awesome-sysadmin#paas)**



### Software Development - Feature Toggle

**[`^        back to top        ^`](#awesome-selfhosted)**

A [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) in software development provides an alternative to maintaining multiple feature branches in source code.

_Related: [Software Development - IDE & Tools](#software-development---ide--tools)_

- [Featbit](https://www.featbit.co/) - Enterprise-grade feature flag platform that you can self-host. ([Source Code](https://github.com/featbit/featbit)) `MIT` `Docker/K8S`
- [Flagsmith](https://flagsmith.com) - Dashboard, API and SDKs for adding Feature Flags to your applications (alternative to LaunchDarkly). ([Source Code](https://github.com/flagsmith/flagsmith)) `BSD-3-Clause` `Docker/K8S`
- [Flipt](https://flipt.io) - Feature flag solution with support for multiple data backends (alternative to LaunchDarkly). ([Source Code](https://github.com/flipt-io/flipt)) `GPL-3.0` `Docker/K8S/Go`
- [GO Feature Flag](https://gofeatureflag.org) - Simple, complete, and lightweight feature flag solution (alternative to LaunchDarkly). ([Source Code](https://github.com/thomaspoignant/go-feature-flag)) `MIT` `Go`


### Software Development - IDE & Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

An [integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) is a software application that provides comprehensive facilities to computer programmers for software development.

_Related: [Software Development - Low Code](#software-development---low-code)_

- [Atheos](https://www.atheos.io) - Web-based IDE framework with a small footprint and minimal requirements, continued from Codiad. ([Source Code](https://github.com/Atheos/Atheos)) `MIT` `PHP/Docker`
- [code-server](https://github.com/coder/code-server) - VS Code in the browser, hosted on a remote server. `MIT` `Nodejs/Docker`
- [Coder](https://coder.com/) - Remote development machines on your own infrastructure. ([Source Code](https://github.com/coder/coder)) `AGPL-3.0` `Go/Docker/K8S/deb`
- [Eclipse Che](https://www.eclipse.org/che/) - Open source workspace server and cloud IDE. ([Source Code](https://github.com/eclipse-che/che)) `EPL-1.0` `Docker/Java`
- [Judge0 CE](https://judge0.com) - API to compile and run source code. ([Source Code](https://github.com/judge0/judge0)) `GPL-3.0` `Docker`
- [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) - Web-based environment for interactive and reproducible computing. ([Demo](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [Source Code](https://github.com/jupyterlab/jupyterlab/)) `BSD-3-Clause` `Python/Docker`
- [Langfuse](https://langfuse.com) - LLM engineering platform for model tracing, prompt management, and application evaluation. Langfuse helps teams collaboratively debug, analyze, and iterate on their LLM applications such as chatbots or AI agents. ([Demo](https://langfuse.com/docs/demo), [Source Code](https://github.com/langfuse/langfuse), [Clients](https://langfuse.com/docs/integrations/overview)) `MIT` `Docker`
- [LiveCodes](https://livecodes.io/docs/features/self-hosting) `⚠` - Feature-rich client-side code playground for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP and 90+ other languages. ([Demo](https://livecodes.io), [Source Code](https://github.com/live-codes/livecodes)) `MIT` `Nodejs`
- [Lowdefy](https://www.lowdefy.com/) - Build internal tools, BI dashboards, admin panels, CRUD apps and workflows in minutes using YAML / JSON on an self-hosted, open-source platform. Connect to your data sources, host via Serverless, Netlify or Docker. ([Source Code](https://github.com/lowdefy/lowdefy)) `Apache-2.0` `Nodejs/Docker`
- [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - Web browser based IDE for R. ([Source Code](https://github.com/rstudio/rstudio)) `AGPL-3.0` `Java/C++`
- [Wakapi](https://wakapi.dev/) - Tracking tool for coding statistics, compatible with WakaTime. ([Source Code](https://github.com/muety/wakapi)) `GPL-3.0` `Go/Docker`


### Software Development - Localization

**[`^        back to top        ^`](#awesome-selfhosted)**

[Localization](https://en.wikipedia.org/wiki/Internationalization_and_localization) is the process of adapting code and software to other languages.

- [Accent](https://www.accent.reviews/) - Developer-oriented translation tool. ([Source Code](https://github.com/mirego/accent)) `BSD-3-Clause` `Elixir/Docker`
- [Tolgee](https://tolgee.io) - Developer & translator friendly web-based localization platform enabling users to translate directly in the app they develop. ([Source Code](https://github.com/tolgee/tolgee-platform)) `Apache-2.0` `Docker/Java`
- [Traduora](https://traduora.co) - Translation management platform for teams. ([Source Code](https://github.com/ever-co/ever-traduora)) `AGPL-3.0` `Docker/K8S/Nodejs`
- [Weblate](https://weblate.org) - Web-based translation tool with tight version control integration. ([Source Code](https://github.com/WeblateOrg/weblate)) `GPL-3.0` `Python/Docker/K8S`


### Software Development - Low Code

**[`^        back to top        ^`](#awesome-selfhosted)**

A [low-code](https://en.wikipedia.org/wiki/Low-code_development_platform) development platform (LCDP) provides a development environment used to create application software through a graphical user interface.

_Related: [Software Development - IDE & Tools](#software-development---ide--tools)_

- [Appsmith](https://www.appsmith.com/) - Build admin panels, CRUD apps and workflows. Build everything you need, 10x faster. ([Source Code](https://github.com/appsmithorg/appsmith)) `Apache-2.0` `Java/Docker/K8S`
- [Appwrite](https://appwrite.io) - End to end backend server for web, native, and mobile developers 🚀. ([Source Code](https://github.com/appwrite/appwrite)) `BSD-3-Clause` `Docker`
- [Dashpress](https://github.com/dashpresshq/dashpress) - Generate fully functional admin apps in seconds from your database information, with a single command. `AGPL-3.0` `Nodejs/Docker`
- [Halo](https://www.halo.run) - A powerful and easy-to-use website building tool (documentation in Chinese). ([Demo](https://demo.halo.run), [Source Code](https://github.com/halo-dev/halo), [Clients](https://github.com/halo-sigs/awesome-halo)) `GPL-3.0` `Java/Docker`
- [Manifest](https://manifest.build) - Complete backend that fits into 1 YAML file. ([Demo](https://manifest.new), [Source Code](https://github.com/mnfst/manifest)) `MIT` `Nodejs`
- [PocketBase](https://pocketbase.io/) - Backend for your next SaaS and Mobile app in one file. ([Source Code](https://github.com/pocketbase/pocketbase)) `MIT` `Go/Docker`
- [SQLPage](https://sql-page.com) - SQL-only dynamic website builder. ([Source Code](https://github.com/sqlpage/SQLPage)) `MIT` `Rust/Docker`
- [ToolJet](https://tooljet.io/) - Low-code framework to build & deploy internal tools with minimal engineering effort (alternative to Retool and Mendix). ([Source Code](https://github.com/ToolJet/ToolJet)) `GPL-3.0` `Nodejs/Docker/K8S`
- [TrailBase](https://trailbase.io/) - Open, sub-millisecond, single-executable FireBase alternative with type-safe REST & realtime APIs, built-in JS/TS runtime, auth & admin UI. ([Demo](https://demo.trailbase.io), [Source Code](https://github.com/trailbaseio/trailbase)) `OSL-3.0` `Rust/Docker`


### Software Development - Project Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software for [software project management](https://en.wikipedia.org/wiki/Software_project_management).

_Related: [Ticketing](#ticketing), [Task Management & To-do Lists](#task-management--to-do-lists)_

- [Cgit](https://git.zx2c4.com/cgit/about/) - Fast lightweight web interface for git repositories. ([Source Code](https://git.zx2c4.com/cgit/tree/)) `GPL-2.0` `C`
- [Forgejo](https://forgejo.org) - A lightweight software forge focused on scaling, federation, and privacy (fork of Gitea). ([Demo](https://next.forgejo.org), [Source Code](https://codeberg.org/forgejo/forgejo/), [Clients](https://codeberg.org/forgejo-contrib/delightful-forgejo)) `MIT` `Docker/Go`
- [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Distributed version control system featuring wiki and bug tracker. `BSD-2-Clause-FreeBSD` `C`
- [Gerrit](https://www.gerritcodereview.com/) - Code review and project management tool for Git-based projects. ([Source Code](https://github.com/GerritCodeReview/gerrit)) `Apache-2.0` `Java/Docker`
- [gitbucket](https://gitbucket.github.io/) - Git platform powered with easy installation, high extensibility & GitHub API compatibility (alternative to GitHub). ([Source Code](https://github.com/gitbucket/gitbucket)) `Apache-2.0` `Scala/Java`
- [Gitea](https://gitea.com) - Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD. ([Demo](https://demo.gitea.com), [Source Code](https://github.com/go-gitea/gitea)) `MIT` `Go/Docker/K8S`
- [GitLab](https://about.gitlab.com) - Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis. ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby/deb/Docker/K8S`
- [Gogs](https://gogs.io/) - Painless self-hosted Git Service written in Go. ([Source Code](https://github.com/gogs/gogs)) `MIT` `Go`
- [Huly](https://huly.io) - All-in-one project management platform (alternative to Linear, Jira, Slack, Notion, Motion). ([Demo](https://app.huly.io), [Source Code](https://github.com/hcengineering/platform)) `EPL-2.0` `Docker/K8S/Nodejs`
- [Kallithea](https://kallithea-scm.org/) - Source code management system that supports two leading version control systems, Mercurial and Git, with a web interface. ([Source Code](https://kallithea-scm.org/repos/kallithea)) `GPL-3.0` `Python`
- [Kaneo](https://kaneo.app/) - Project management platform focused on simplicity and efficiency. ([Demo](https://demo.kaneo.app/), [Source Code](https://github.com/usekaneo/kaneo)) `MIT` `K8S/Docker`
- [Leantime](https://leantime.io) - Lean project management system for small teams and startups helping to manage projects from ideation through delivery. ([Source Code](https://github.com/leantime/leantime)) `AGPL-3.0` `PHP/Docker`
- [Mergeable](https://www.usemergeable.dev) `⚠` - A better inbox for GitHub pull requests. ([Demo](https://app.usemergeable.dev), [Source Code](https://github.com/pvcnt/mergeable)) `MIT` `Nodejs/Docker/K8S`
- [Mindwendel](https://www.mindwendel.com/) - Brainstorm and upvote ideas and thoughts within your team. ([Demo](https://www.mindwendel.com), [Source Code](https://github.com/b310-digital/mindwendel)) `AGPL-3.0` `Docker/Elixir`
- [minimal-git-server](https://github.com/mcarbonne/minimal-git-server) - Lightweight git server with a basic CLI to manage repositories, supporting multiple accounts and running in a container. `MIT` `Docker`
- [Octobox](https://octobox.io/) `⚠` - Take back control of your GitHub Notifications. ([Source Code](https://github.com/octobox/octobox)) `AGPL-3.0` `Ruby/Docker`
- [OneDev](https://onedev.io/) - All-In-One DevOps Platform. With Git Management, Issue Tracking, and CI/CD. Simple yet Powerful. ([Source Code](https://code.onedev.io/projects/160)) `MIT` `Java/Docker/K8S`
- [OpenProject](https://www.openproject.org) - Manage your projects, tasks and goals. Collaborate via work packages and link them to your pull requests on Github. ([Source Code](https://github.com/opf/openproject)) `GPL-3.0` `Ruby/deb/Docker`
- [Pagure](https://pagure.io/pagure) - Lightweight, powerful, and flexible git-centric forge with features laying the foundation for federated and decentralized development. ([Demo](https://pagure.io/)) `GPL-2.0` `Docker/Python/deb`
- [Phorge](https://we.phorge.it/) - Community-driven platform for collaborating, managing, organizing and reviewing software development projects. ([Source Code](https://we.phorge.it/source/phorge/)) `Apache-2.0` `PHP`
- [Plane](https://plane.so) - Track issues, epics, and product roadmaps in the simplest way possible (alternative to JIRA, Linear and Height). ([Demo](https://app.plane.so), [Source Code](https://github.com/makeplane/plane)) `AGPL-3.0` `Docker`
- [ProjeQtOr](https://www.projeqtor.org/) - Complete, mature, multi-user project management system with extensive functionality for all phases of a project. ([Demo](https://demo.projeqtor.org/), [Source Code](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/)) `AGPL-3.0` `PHP`
- [Redmine](https://www.redmine.org/) - Flexible project management web application. ([Source Code](https://svn.redmine.org/redmine/)) `GPL-2.0` `Ruby`
- [Review Board](https://www.reviewboard.org/) - Extensible and friendly code review tool for projects and companies of all sizes. ([Demo](https://demo.reviewboard.org/), [Source Code](https://github.com/reviewboard/reviewboard)) `MIT` `Python/Docker`
- [rgit](https://github.com/w4/rgit) - Ultra-fast & lightweight cgit clone. `WTFPL` `Rust/Docker`
- [RhodeCode](https://rhodecode.com/) - Unify and simplify repository management for Git, Subversion, and Mercurial. ([Source Code](https://code.rhodecode.com/)) `AGPL-3.0` `Python`
- [Rukovoditel](https://www.rukovoditel.net/) - Configurable open source project management, web-based application. ([Source Code](https://www.rukovoditel.net/download.php)) `GPL-2.0` `PHP`
- [SCM Manager](https://www.scm-manager.org/) - The easiest way to share and manage your Git, Mercurial and Subversion repositories over http. ([Source Code](https://github.com/scm-manager/scm-manager)) `BSD-3-Clause` `Java/deb/Docker/K8S`
- [Smederee](https://smeder.ee) - A frugal platform which is dedicated to help people build great software together leveraging the power of the Darcs version control system. ([Source Code](https://smeder.ee/~jan0sch/smederee)) `AGPL-3.0` `Scala`
- [Sourcehut](https://sourcehut.org/) - A full web git interface with no javascript. ([Demo](https://sr.ht/), [Source Code](https://git.sr.ht/~sircmpwn/git.sr.ht/tree)) `GPL-2.0` `Go`
- [Taiga](https://www.taiga.io/) - Agile Project Management Tool based on the Kanban and Scrum methods. ([Source Code](https://github.com/kaleidos-ventures)) `MPL-2.0` `Docker/Python/Nodejs`
- [Titra](https://titra.io/) - Time-tracking solution for freelancers and small teams. ([Source Code](https://github.com/kromitgmbh/titra)) `GPL-3.0` `Javascript/Docker`
- [Trac](https://trac.edgewall.org/) - Trac is an enhanced wiki and issue tracking system for software development projects. `BSD-3-Clause` `Python/deb`
- [Traq](https://traq.io/) - Project management and issue tracking system written in PHP. ([Source Code](https://github.com/nirix/traq)) `GPL-3.0` `PHP/Nodejs`
- [Tuleap](https://www.tuleap.org/) - Tuleap is a libre suite to plan, track, code and collaborate on software projects. ([Source Code](https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree)) `GPL-2.0` `PHP`
- [UVDesk](https://www.uvdesk.com/) - UVDesk community is a service oriented, event driven extensible opensource helpdesk system that can be used by your organization to provide efficient support to your clients effortlessly whichever way you imagine. ([Demo](https://demo.uvdesk.com/), [Source Code](https://github.com/uvdesk/community-skeleton)) `MIT` `PHP`
- [ZenTao](https://www.zentao.pm/) - An agile(scrum) project management system/tool. ([Source Code](https://github.com/easysoft/zentaopms)) `AGPL-3.0` `PHP`


### Software Development - Testing

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software for [software testing](https://en.wikipedia.org/wiki/Software_testing).

- [Bencher](https://bencher.dev/) - Suite of continuous benchmarking tools designed to catch performance regressions in CI. ([Source Code](https://github.com/bencherdev/bencher)) `MIT/Apache-2.0` `Rust`
- [WebHook Tester](https://github.com/tarampampam/webhook-tester) - Powerful tool for testing WebHooks and more. `MIT` `Docker/Go/deb/K8S`


### Static Site Generators

**[`^        back to top        ^`](#awesome-selfhosted)**

[Static site generators](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) generate full static HTML websites based on raw data, plain text files and a set of templates. 

**Please visit [staticsitegenerators.bevry.me](https://staticsitegenerators.bevry.me), [staticgen.com](https://www.staticgen.com)**

_Related: [Blogging Platforms](#blogging-platforms), [Photo Galleries](#photo-galleries), [Content Management Systems (CMS)](#content-management-systems-cms)_



### Status / Uptime pages

**[`^        back to top        ^`](#awesome-selfhosted)**

[Uptime](https://en.wikipedia.org/wiki/Uptime) is a measure of system reliability, expressed as the percentage of time a machine, typically a computer, has been working and available. 

_Related: [Monitoring](#monitoring)_

- [cState](https://cstate.netlify.app/) - Static status page for hyperfast Hugo. Clean design, minimal JS, super light HTML/CSS, high customization, optional admin panel, read-only API, IE8+. Best used with Netlify, Docker. ([Demo](https://cstate.mnts.lt/), [Source Code](https://github.com/cstate/cstate)) `MIT` `Go`
- [Gatus](https://gatus.io/) - Automated service health dashboard. ([Demo](https://status.twin.sh), [Source Code](https://github.com/TwiN/gatus)) `Apache-2.0` `Docker/K8S`
- [kener](https://kener.ing/) - Status page with incident management, easy to use and customize. ([Demo](https://kener.ing/), [Source Code](https://github.com/rajnandan1/kener)) `MIT` `Nodejs/Docker`
- [Kuvasz Uptime](https://kuvasz-uptime.dev) - Performant, stable uptime & SSL monitoring service with brandable status pages, IAC support, Prometheus integration and a complete REST API. ([Demo](https://kuvasz-uptime.dev/demo/), [Source Code](https://github.com/kuvasz-uptime/kuvasz)) `Apache-2.0` `Docker`
- [StatPing.ng](https://statping-ng.github.io/) - An easy to use Status Page for your websites and applications. Statping will automatically fetch the application and render a beautiful status page with tons of features for you to build an even better status page. ([Source Code](https://github.com/statping-ng/statping-ng)) `GPL-3.0` `Docker/Go`
- [Uptime Kuma](https://uptime.kuma.pet/) - Self-hosted website monitoring tool like "Uptime Robot". ([Demo](https://demo.kuma.pet), [Source Code](https://github.com/louislam/uptime-kuma)) `MIT` `Docker/Nodejs`


### Task Management & To-do Lists

**[`^        back to top        ^`](#awesome-selfhosted)**

[Task management](https://en.wikipedia.org/wiki/Task_management#Task_management_software) software.

_Related: [Software Development - Project Management](#software-development---project-management), [Ticketing](#ticketing)_

- [4ga Boards](https://4gaboards.com) - Straightforward realtime kanban boards management for intuitive task tracking. Featuring an elegant dark mode, collapsible todo lists, and multitasking tools to supercharge your team's productivity. ([Demo](https://demo.4gaboards.com), [Source Code](https://github.com/RARgames/4gaBoards)) `MIT` `Nodejs/Docker/K8S`
- [AppFlowy](https://appflowy.io/) - Build detailed lists of to-do’s for different projects while tracking the status of each one. Open Source Notion Alternative. ([Source Code](https://github.com/AppFlowy-IO/appflowy)) `AGPL-3.0` `Rust/Dart/Docker`
- [Donetick](https://donetick.com) - Task and chore management tool for personal and family use, with advanced scheduling, flexible assignment, and group sharing capabilities, detailed history, automation via API, simple and modern design. ([Demo](https://app.donetick.com/), [Source Code](https://github.com/donetick/donetick)) `AGPL-3.0` `Go/Docker`
- [Focalboard](https://www.focalboard.com/) - Define, organize, track and manage work across individuals and teams (alternative to Trello, Notion and Asana). ([Source Code](https://github.com/mattermost-community/focalboard), [Clients](https://www.focalboard.com/download/personal-edition/desktop/)) `MIT/AGPL-3.0/Apache-2.0` `Nodejs/Go/Docker`
- [Kanboard](https://kanboard.org/) - Simple visual task board. ([Source Code](https://github.com/kanboard/kanboard)) `MIT` `PHP`
- [Listaway](https://github.com/jeffrpowell/listaway/) - List management app for creating and publicly sharing lists of items. Supports auth, admin tools, item notes and priorities, and opt-in public read-only links with randomized URLs (alternative to Amazon Lists). ([Source Code](https://github.com/jeffrpowell/listaway)) `MIT` `Docker`
- [myTinyTodo](https://www.mytinytodo.net/) - Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. ([Demo](https://www.mytinytodo.net/demo/), [Source Code](https://github.com/maxpozdeev/mytinytodo/)) `GPL-2.0` `PHP`
- [Nullboard](https://github.com/apankrat/nullboard) - Single-page minimalist kanban board; compact, highly readable and quick to use. ([Demo](https://nullboard.io/preview)) `BSD-2-Clause` `Javascript`
- [Our Shopping List](https://github.com/nanawel/our-shopping-list) - Simple shared list application including shopping lists and any other small todo-list that needs to be used collaboratively. ([Demo](https://osl.lanterne-rouge.info/)) `AGPL-3.0` `Docker`
- [Planka](https://planka.app/) - Realtime kanban board for workgroups (alternative to Trello). ([Demo](https://plankanban.github.io/planka/#/), [Source Code](https://github.com/plankanban/planka)) `AGPL-3.0` `Nodejs/Docker/K8S`
- [Task Keeper](https://github.com/nymanjens/piga) - List editor for power users, backed by a self-hosted server. `Apache-2.0` `Scala`
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - A self-hosted, file based task management board that supports Markdown syntax. `MIT` `Docker`
- [Taskwarrior](https://taskwarrior.org/) - Taskwarrior is Free and Open Source Software that manages your TODO list from your command line. It is flexible, fast, efficient, and unobtrusive. It does its job then gets out of your way. ([Source Code](https://taskwarrior.org/download/#git)) `MIT` `C++`
- [Tracks](https://www.getontracks.org/) - Web-based application to help you implement David Allen’s [Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done) methodology. ([Source Code](https://github.com/TracksApp/tracks)) `GPL-2.0` `Ruby`
- [Vikunja](https://vikunja.io/) - The to-do app to organize your life. ([Demo](https://try.vikunja.io/login), [Source Code](https://kolaente.dev/vikunja/)) `GPL-3.0` `Go`
- [Wekan](https://wekan.github.io/) - Open-source Trello-like kanban. ([Source Code](https://github.com/wekan/wekan)) `MIT` `Nodejs`


### Ticketing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Helpdesk](https://en.wikipedia.org/wiki/Help_desk_software), [bug](https://en.wikipedia.org/wiki/Bug_tracking_system) and [issue](https://en.wikipedia.org/wiki/Issue_tracking_system) tracking software to help the tracking of user requests, bugs and missing features.

_Related: [Task Management & To-do Lists](#task-management--to-do-lists), [Software Development - Project Management](#software-development---project-management)_

- [Bugzilla](https://www.bugzilla.org/) - General-purpose bugtracker and testing tool originally developed and used by the Mozilla project. ([Source Code](https://github.com/bugzilla/bugzilla)) `MPL-2.0` `Perl`
- [Frappe Helpdesk](https://frappe.io/helpdesk) - Helpdesk software which helps you streamline your company's support, offers an easy setup, clean user interface, and automation tools to resolve customer queries efficiently. ([Source Code](https://github.com/frappe/helpdesk)) `AGPL-3.0` `Docker`
- [FreeScout](https://freescout.net/) - Email-based customer support application, help desk and shared mailbox (alternative to Zendesk and Help Scout). ([Demo](https://demo.freescout.net/login), [Source Code](https://github.com/freescout-help-desk/freescout)) `AGPL-3.0` `PHP/Docker`
- [GlitchTip](https://glitchtip.com) - Error tracking app to collect errors reported by your app. ([Source Code](https://gitlab.com/glitchtip/glitchtip)) `MIT` `Python/Docker/K8S`
- [ITFlow](https://itflow.org) - Client IT documentation, ticketing, invoicing and accounting for MSPs (Managed Service Providers). ([Demo](https://demo.itflow.org), [Source Code](https://github.com/itflow-org/itflow)) `GPL-3.0` `PHP`
- [MantisBT](https://www.mantisbt.org/) - Bug tracker, fits best for software development. ([Demo](https://www.mantisbt.org/bugs/my_view_page.php), [Source Code](https://github.com/mantisbt/mantisbt)) `GPL-2.0` `PHP`
- [OTOBO](https://otobo.io/en/) - Flexible web-based ticketing system used for customer service, help desk, IT service management. ([Demo](https://otobo.io/en/service-management-plattform/otobo-demo/), [Source Code](https://github.com/RotherOSS/otobo)) `GPL-3.0` `Perl/Docker`
- [Request Tracker](https://www.bestpractical.com/rt/) - Enterprise-grade issue tracking system. ([Source Code](https://github.com/bestpractical/rt)) `GPL-2.0` `Perl`
- [Roundup Issue Tracker](https://www.roundup-tracker.org/) - Simple-to-use and -install issue tracking system with command-line, web, REST, XML-RPC, and e-mail interfaces. Designed with flexibility in mind - not just another bug tracker. ([Source Code](https://www.roundup-tracker.org/code.html)) `MIT/ZPL-2.0` `Python/Docker`
- [Zammad](https://zammad.org/) - Easy to use but powerful open-source support and ticketing system. ([Source Code](https://github.com/zammad/zammad)) `AGPL-3.0` `Ruby/deb`


### Time Tracking

**[`^        back to top        ^`](#awesome-selfhosted)**

[Time-tracking software](https://en.wikipedia.org/wiki/Time-tracking_software) is a category of computer software that allows its users to record time spent on tasks or projects.

- [ActivityWatch](https://activitywatch.net) - Automatically track how you spend time on your devices. ([Source Code](https://github.com/ActivityWatch/activitywatch)) `MPL-2.0` `Python`
- [Beaver Habit Tracker](https://github.com/daya0576/beaverhabits) - Habit tracking app to save your precious moments in your fleeting life. ([Demo](https://beaverhabits.com/demo)) `BSD-3-Clause` `Docker`
- [Ever Gauzy](https://gauzy.co) - Open business management platform for collaborative, on-demand and sharing economies (ERP/CRM/HRM/ATS/PM). ([Demo](https://demo.gauzy.co), [Source Code](https://github.com/ever-co/ever-gauzy)) `AGPL-3.0` `Docker/Nodejs`
- [Kimai](https://www.kimai.org/) - Track work time and print out a summary of your activities on demand. ([Demo](https://www.kimai.org/demo/), [Source Code](https://github.com/kimai/kimai)) `AGPL-3.0` `PHP`
- [solidtime](https://www.solidtime.io) - Modern time tracking application for freelancers and agencies. ([Source Code](https://github.com/solidtime-io/solidtime)) `AGPL-3.0` `Docker`
- [TimeTagger](https://timetagger.app) - An open source time-tracker based on an interactive timeline and powerful reporting. ([Demo](https://timetagger.app/app/demo), [Source Code](https://github.com/almarklein/timetagger)) `GPL-3.0` `Python`
- [Traggo](https://traggo.net/) - Traggo is a tag-based time tracking tool. In Traggo there are no tasks, only tagged time spans. ([Source Code](https://github.com/traggo/server)) `GPL-3.0` `Docker/Go`
- [Ziit](https://ziit.app) - The Swiss army knife of code time tracking (alternative to WakaTime). ([Source Code](https://github.com/0pandadev/ziit)) `AGPL-3.0` `Docker`


### URL Shorteners

**[`^        back to top        ^`](#awesome-selfhosted)**

[URL shortening](https://en.wikipedia.org/wiki/URL_shortening) is the action of shortening a [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) to make it substantially shorter and still direct to the required page. Before hosting one, please see [disadvantages](https://en.wikipedia.org/wiki/URL_shortening#Disadvantages) of URL shorteners.

- [bit](https://github.com/sjdonado/bit) - Fast, lightweight, resource-efficient, compiled URL shortener. `MIT` `Docker/Crystal`
- [Chhoto URL](https://github.com/SinTan1729/chhoto-url) - Simple, lightning-fast URL shortener with no bloat (fork of simply-shorten). ([Demo](https://github.com/SinTan1729/chhoto-url?tab=readme-ov-file#demo), [Clients](https://github.com/SinTan1729/chhoto-url/blob/main/TOOLS.md)) `MIT` `Rust/Docker`
- [clink](https://git.crueter.xyz/crueter/clink) - A super-minimal link shortening service written in pure C, focusing on small executable size, portability, and ease of configuration. ([Demo](https://short.crueter.xyz)) `AGPL-3.0` `C`
- [Flink](https://gitlab.com/rtraceio/web/flink) - Create QR Codes, embeddable link previews for your website and crawls/scrapes metadata. ([Demo](https://flink.is)) `MIT` `Docker`
- [Kutt](https://kutt.it) - Modern URL shortener with support for custom domains and custom URLs. ([Demo](https://kutt.it), [Source Code](https://github.com/thedevs-network/kutt)) `MIT` `Nodejs/Docker`
- [rs-short](https://git.42l.fr/42l/rs-short) - Lightweight link shortener written in Rust, with features such as caching, spambot protection and phishing detection. ([Demo](https://s.42l.fr/)) `MPL-2.0` `Rust`
- [Shlink](https://shlink.io) - URL shortener with REST API and command line interface. Includes official progressive web application and docker images. ([Source Code](https://github.com/shlinkio/shlink), [Clients](https://shlink.io/apps)) `MIT` `PHP/Docker`
- [Simple-URL-Shortener](https://github.com/azlux/Simple-URL-Shortener) - KISS URL shortener, public or private (with account). Minimalist and lightweight. No dependencies. ([Demo](https://u.azlux.fr)) `MIT` `PHP`
- [YOURLS](https://yourls.org/) - YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp. ([Source Code](https://github.com/YOURLS/YOURLS)) `MIT` `PHP`


### Video Surveillance

**[`^        back to top        ^`](#awesome-selfhosted)**

Video surveillance, also known as [Closed-circuit television (CCTV)](https://en.wikipedia.org/wiki/Closed-circuit_television), is the use of video cameras for surveillance in areas that require additional security or ongoing monitoring.

_Related: [Media Streaming - Video Streaming](#media-streaming---video-streaming)_

- [Bluecherry](https://www.bluecherrydvr.com/) - Closed-circuit television (CCTV) software application which supports IP and Analog cameras. ([Source Code](https://github.com/bluecherrydvr/bluecherry-apps)) `GPL-2.0` `PHP`
- [Frigate](https://frigate.video/) - Monitor your security cameras with locally processed AI. ([Source Code](https://github.com/blakeblackshear/frigate)) `MIT` `Docker/Python/Nodejs`
- [SentryShot](https://codeberg.org/SentryShot/sentryshot) - Video surveillance management system. `GPL-2.0` `Docker/Rust`
- [Viseron](https://viseron.netlify.app/) - Self-hosted, local-only NVR and AI Computer Vision software. With features such as object detection, motion detection, face recognition and more, it gives you the power to keep an eye on your home, office or any other place you want to monitor. ([Source Code](https://github.com/roflcoopter/viseron)) `MIT` `Docker`
- [Zoneminder](https://www.zoneminder.com/) - Closed-circuit television (CCTV) software application which supports IP, USB and Analog cameras. ([Source Code](https://github.com/ZoneMinder/ZoneMinder)) `GPL-2.0` `PHP/deb`


### VPN

**[`^        back to top        ^`](#awesome-selfhosted)**

A [virtual private network (VPN)](https://en.wikipedia.org/wiki/Virtual_private_network) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.

**Please visit [awesome-sysadmin/VPN](https://github.com/awesome-foss/awesome-sysadmin#vpn)**



### Web Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

Web Servers and Reverse Proxies. A [web server](https://en.wikipedia.org/wiki/Web_server) is a piece of software and underlying hardware that accepts requests via [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (the network protocol created to distribute web content) or its secure variant [HTTPS](https://en.wikipedia.org/wiki/HTTPS). A [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) is a proxy server that appears to any client to be an ordinary web server, but in reality merely acts as an intermediary that forwards requests to one or more ordinary web servers.

_Related: [Proxy](#proxy)_

- [Algernon](https://algernon.roboticoverlords.org/) - Small self-contained pure-Go web server with Lua, Markdown, HTTP/2, QUIC, Redis and PostgreSQL support. ([Source Code](https://github.com/xyproto/algernon)) `BSD-3-Clause` `Go/Docker`
- [Apache HTTP Server](https://httpd.apache.org/) - Secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards. ([Source Code](https://svn.apache.org/repos/asf/httpd/httpd/trunk/)) `Apache-2.0` `C/deb/Docker`
- [BunkerWeb](https://www.bunkerweb.io) - Next-gen Web Application Firewall (WAF) that will protect your web services. ([Demo](https://demo.bunkerweb.io), [Source Code](https://github.com/bunkerity/bunkerweb), [Clients](https://docs.bunkerweb.io/latest/plugins/)) `AGPL-3.0` `deb/Docker/K8S/Python`
- [Caddy](https://caddyserver.com/) - Powerful, enterprise-ready, open source web server with automatic HTTPS. ([Source Code](https://github.com/caddyserver/caddy)) `Apache-2.0` `Go/deb/Docker`
- [go-doxy](https://github.com/yusing/godoxy) - Lightweight, simple, and  performant reverse proxy with WebUI, Docker integration, automatic shutdown/startup for container based on traffic. `MIT` `Docker/Go`
- [HAProxy](https://www.haproxy.org/) - Very fast and reliable reverse-proxy offering high availability, load balancing, and proxying for TCP and HTTP-based applications. ([Source Code](https://git.haproxy.org/?p=haproxy.git;a=tree)) `GPL-2.0` `C/deb/Docker`
- [Jauth](https://github.com/Jipok/Jauth) `⚠` - Lightweight SSL/TLS reverse proxy with authorization (via Telegram and SSH) for self-hosted apps. `GPL-3.0` `Go`
- [Lighttpd](https://www.lighttpd.net/) - Secure, fast, compliant, and very flexible web server that has been optimized for high-performance environments. ([Source Code](https://git.lighttpd.net/lighttpd/lighttpd1.4)) `BSD-3-Clause` `C/deb/Docker`
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Docker container for managing Nginx proxy hosts with a simple, powerful interface. ([Source Code](https://github.com/NginxProxyManager/nginx-proxy-manager)) `MIT` `Docker`
- [NGINX](https://nginx.org/en/) - HTTP and reverse proxy server, mail proxy server, and generic TCP/UDP proxy server. ([Source Code](https://github.com/nginx/nginx)) `BSD-2-Clause` `C/deb/Docker`
- [Pangolin](https://digpangolin.com/) - Identity-aware tunneled reverse proxy with dashboard UI, access control, and WireGuard-based tunnels (alternative to Cloudflare Tunnel, Tailscale). ([Source Code](https://github.com/fosrl/pangolin)) `AGPL-3.0` `Docker`
- [Pomerium](https://www.pomerium.io) - Identity-aware reverse proxy, successor to now obsolete oauth_proxy. It inserts an OAuth step before proxying your request to the backend, so that you can safely expose your self-hosted websites to public Internet. ([Source Code](https://github.com/pomerium/pomerium)) `Apache-2.0` `Go/Docker`
- [SafeLine](https://waf.chaitin.com/) - Web application firewall / reverse proxy to protect your web apps from attacks and exploits. ([Demo](https://demo.waf.chaitin.com/), [Source Code](https://github.com/chaitin/SafeLine)) `GPL-3.0` `Docker`
- [Static Web Server](https://static-web-server.net/) - Cross-platform, high-performance, and asynchronous web server for static file serving. ([Source Code](https://github.com/static-web-server/static-web-server)) `Apache-2.0/MIT` `Rust/Docker`
- [SWAG (Secure Web Application Gateway)](https://github.com/linuxserver/docker-swag) - Nginx webserver and reverse proxy with PHP support, built-in Certbot (Let's Encrypt) client and fail2ban integration. `GPL-3.0` `Docker`
- [Traefik](https://traefik.io/) - HTTP reverse proxy and load balancer that makes deploying microservices easy. ([Source Code](https://github.com/traefik/traefik)) `MIT` `Go/Docker`
- [UUSEC WAF](https://uuwaf.uusec.com) - Industry-leading high-performance, AI and semantic technology web application firewall and API security gateway (fork of nginx). ([Source Code](https://github.com/Safe3/uusec-waf)) `GPL-3.0` `C/Lua/Docker`
- [Varnish](https://varnish-cache.org/) - Web application accelerator/caching HTTP reverse proxy. ([Source Code](https://github.com/varnishcache/varnish-cache)) `BSD-3-Clause` `Go/deb/Docker`
- [Zoraxy](https://zoraxy.aroz.org/) - General purpose HTTP reverse proxy and forwarding tool. ([Source Code](https://github.com/tobychui/zoraxy)) `AGPL-3.0` `Go/Docker`


### Wikis

**[`^        back to top        ^`](#awesome-selfhosted)**

A [wiki](https://en.wikipedia.org/wiki/Wiki) is a publication collaboratively edited and managed by its own audience directly using a web browser.

_Related: [Note-taking & Editors](#note-taking--editors), [Static Site Generators](#static-site-generators), [Knowledge Management Tools](#knowledge-management-tools)_

_See also: [Wikimatrix](https://www.wikimatrix.org/), [List of wiki software - Wikipedia](https://en.wikipedia.org/wiki/List_of_wiki_software), [Comparison of wiki software - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_wiki_software)_

- [AmuseWiki](https://amusewiki.org/) - Amusewiki is based on the Emacs Muse markup, remaining mostly compatible with the original implementation. It can work as a read-only site, as a moderated wiki, or as a fully open wiki or even as a private site. ([Demo](https://sandbox.amusewiki.org), [Source Code](https://github.com/melmothx/amusewiki)) `GPL-1.0` `Perl/Docker`
- [BookStack](https://www.bookstackapp.com/) - Organize and store information. Stores documentation in a book like fashion. ([Demo](https://www.bookstackapp.com/#demo), [Source Code](https://github.com/BookStackApp/BookStack)) `MIT` `PHP/Docker`
- [django-wiki](https://github.com/django-wiki/django-wiki) - Wiki system with complex functionality for simple integration and a superb interface. Store your knowledge with style: Use django models. ([Demo](https://demo.django-wiki.org/)) `GPL-3.0` `Python`
- [docmost](https://docmost.com/) - Collaborative wiki and documentation software (alternative to Confluence, Notion). ([Source Code](https://github.com/docmost/docmost)) `AGPL-3.0` `Docker/Nodejs`
- [Documize](https://documize.com) - Modern Docs + Wiki software with built-in workflow, single binary executable, just bring MySQL/Percona. ([Source Code](https://github.com/documize/community)) `AGPL-3.0` `Go`
- [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - Easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain text files, therefore no database is required. ([Source Code](https://github.com/dokuwiki/dokuwiki)) `GPL-2.0` `PHP`
- [Feather Wiki](https://feather.wiki) - A lightning fast and infinitely extensible tool for creating personal non-linear notebooks, databases, and wikis that is entirely self-contained, runs in your browser, and is only 58 kilobytes in size. ([Demo](https://feather.wiki/?page=gallery#wikis), [Source Code](https://codeberg.org/Alamantus/FeatherWiki), [Clients](https://feather.wiki/?page=gallery#extensions)) `AGPL-3.0` `Javascript`
- [Gitit](https://github.com/jgm/gitit) - Wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface. `GPL-2.0` `Haskell`
- [Gollum](https://github.com/gollum/gollum) - Simple, Git-powered wiki with a sweet API and local frontend. `MIT` `Ruby`
- [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - Wiki software package that powers Wikipedia and all other Wikimedia projects, serving hundreds of millions of users each month. ([Demo](https://en.wikipedia.org/wiki/Main_Page), [Source Code](https://phabricator.wikimedia.org/source/mediawiki/)) `GPL-2.0` `PHP`
- [Mycorrhiza Wiki](https://mycorrhiza.wiki/) - Filesystem and git-based wiki engine written in Go using Mycomarkup as its primary markup language. ([Source Code](https://github.com/bouncepaw/mycorrhiza/)) `AGPL-3.0` `Go`
- [Oddmuse](https://oddmuse.org/) - Simple wiki engine written in Perl. No database required. ([Source Code](https://github.com/kensanata/oddmuse)) `GPL-3.0` `Perl`
- [Otter Wiki](https://otterwiki.com/) - Simple, easy to use wiki software using markdown. ([Source Code](https://github.com/redimp/otterwiki)) `MIT` `Docker`
- [PmWiki](https://www.pmwiki.org) - Wiki-based system for collaborative creation and maintenance of websites. `GPL-3.0` `PHP`
- [Raneto](https://raneto.com/) - Knowledgebase platform that uses static Markdown files. ([Source Code](https://github.com/ryanlelek/Raneto)) `MIT` `Nodejs`
- [TiddlyWiki](https://tiddlywiki.com/) - Reusable non-linear personal web notebook. ([Source Code](https://github.com/TiddlyWiki/TiddlyWiki5)) `BSD-3-Clause` `Nodejs`
- [Tiki](https://tiki.org/HomePage) - Wiki CMS Groupware with the most built-in features. ([Demo](https://tiki.org/Try-Tiki), [Source Code](https://gitlab.com/tikiwiki/tiki)) `LGPL-2.1` `PHP`
- [W](https://w.club1.fr) - Lightweight, mutli-user, flat-file-database Wiki engine. Create pages quickly and edit them in your Web browser using Mardown/HTML/CSS/JS. The main difference with other wiki is that you are encouraged to customize each page style individually. ([Source Code](https://github.com/vincent-peugnet/wcms)) `AGPL-3.0` `PHP`
- [WackoWiki](https://wackowiki.org/) - WackoWiki is a light and easy to install multilingual Wiki-engine. ([Source Code](https://github.com/WackoWiki/wackowiki)) `BSD-3-Clause` `PHP`
- [Wiki-Go](https://leomoon.com/downloads/web-apps/wiki-go/) - A modern, feature-rich, databaseless flat-file wiki platform. ([Demo](https://wikigo.leomoon.com), [Source Code](https://github.com/leomoon-studios/wiki-go)) `GPL-3.0` `Go/Docker`
- [Wiki.js](https://js.wiki/) - Modern, lightweight and powerful wiki app using Git and Markdown. ([Demo](https://docs.requarks.io), [Source Code](https://github.com/Requarks/wiki)) `AGPL-3.0` `Nodejs/Docker/K8S`
- [WikiDocs](http://wikidocs.it) - A databaseless markdown flat-file wiki engine. ([Source Code](https://github.com/Zavy86/WikiDocs)) `MIT` `PHP/Docker`
- [WiKiss](https://wikiss.tuxfamily.org/) - Wiki, simple to use and install. ([Source Code](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)) `GPL-2.0` `PHP`
- [XWiki](https://www.xwiki.org) - Second generation wiki that allows the user to extend its functionalities with a powerful extension-based architecture. ([Demo](https://www.xwikiplayground.org/xwiki/bin/view/Main/), [Source Code](https://github.com/xwiki/xwiki-platform)) `LGPL-2.1` `Java/Docker/deb`
- [Zim](https://zim-wiki.org/) - Graphical text editor used to maintain a collection of wiki pages. Each page can contain links to other pages, simple formatting and images. ([Source Code](https://github.com/zim-desktop-wiki/zim-desktop-wiki)) `GPL-2.0` `Python/deb`


--------------------

## List of Licenses

**[`^        back to top        ^`](#awesome-selfhosted)**

- `0BSD` - [BSD Zero-Clause Licence](https://spdx.org/licenses/0BSD.html)
- `AAL` - [Attribution Assurance License](https://spdx.org/licenses/AAL.html)
- `AGPL-3.0` - [GNU Affero General Public License 3.0](https://spdx.org/licenses/AGPL-3.0.html)
- `Apache-2.0` - [Apache, Version 2.0](https://spdx.org/licenses/Apache-2.0.html)
- `APSL-2.0` - [Apple Public Source License, Version 2.0](https://spdx.org/licenses/APSL-2.0.html)
- `Artistic-2.0` - [Artistic License Version 2.0](https://spdx.org/licenses/Artistic-2.0.html)
- `Beerware` - [Beerware License](https://spdx.org/licenses/Beerware.html)
- `BSD-2-Clause` - [BSD 2-clause "Simplified"](https://spdx.org/licenses/BSD-2-Clause.html)
- `BSD-2-Clause-FreeBSD` - [BSD 2-Clause FreeBSD License](https://spdx.org/licenses/BSD-2-Clause-FreeBSD.html)
- `BSD-3-Clause` - [BSD 3-Clause "New" or "Revised"](https://spdx.org/licenses/BSD-3-Clause.html)
- `BSD-3-Clause-Attribution` - [BSD with attribution](https://spdx.org/licenses/BSD-3-Clause-Attribution.html)
- `BSD-4-Clause` - [BSD 4-clause "Original"](https://spdx.org/licenses/BSD-4-Clause.html)
- `CAL-1.0` - [Cryptographic Autonomy License 1.0](https://spdx.org/licenses/CAL-1.0.html)
- `CC-BY-SA-3.0` - [Creative Commons Attribution-ShareAlike 3.0 License](https://spdx.org/licenses/CC-BY-SA-3.0.html)
- `CC-BY-SA-4.0` - [Creative Commons Attribution-ShareAlike 4.0 License](https://spdx.org/licenses/CC-BY-SA-4.0.html)
- `CC0-1.0` - [Public Domain/Creative Common Zero 1.0](https://spdx.org/licenses/CC0-1.0.html)
- `CDDL-1.0` - [Common Development and Distribution License](https://spdx.org/licenses/CDDL-1.0.html)
- `CECILL-B` - [CEA CNRS INRIA Logiciel Libre](https://spdx.org/licenses/CECILL-B.html)
- `CPAL-1.0` - [Common Public Attribution License Version 1.0](https://spdx.org/licenses/CPAL-1.0.html)
- `ECL-2.0` - [Educational Community License, Version 2.0](https://spdx.org/licenses/ECL-2.0.html)
- `EPL-1.0` - [Eclipse Public License, Version 1.0](https://spdx.org/licenses/EPL-1.0.html)
- `EPL-2.0` - [Eclipse Public License, Version 2.0](https://spdx.org/licenses/EPL-2.0.html)
- `EUPL-1.2` - [European Union Public License 1.2](https://spdx.org/licenses/EUPL-1.2.html)
- `GPL-1.0` - [GNU General Public License 1.0](https://spdx.org/licenses/GPL-1.0.html)
- `GPL-2.0` - [GNU General Public License 2.0](https://spdx.org/licenses/GPL-2.0.html)
- `GPL-3.0` - [GNU General Public License 3.0](https://spdx.org/licenses/GPL-3.0.html)
- `IPL-1.0` - [IBM Public License](https://spdx.org/licenses/IPL-1.0.html)
- `ISC` - [Internet Systems Consortium License](https://spdx.org/licenses/ISC.html)
- `LGPL-2.1` - [Lesser General Public License 2.1](https://spdx.org/licenses/LGPL-2.1.html)
- `LGPL-3.0` - [Lesser General Public License 3.0](https://spdx.org/licenses/LGPL-3.0.html)
- `MIT` - [MIT License](https://spdx.org/licenses/MIT.html)
- `MPL-1.1` - [Mozilla Public License Version 1.1](https://spdx.org/licenses/MPL-1.1.html)
- `MPL-2.0` - [Mozilla Public License](https://spdx.org/licenses/MPL-2.0.html)
- `OSL-3.0` - [Open Software License 3.0](https://spdx.org/licenses/OSL-3.0.html)
- `Sendmail` - [Sendmail License](https://spdx.org/licenses/Sendmail.html)
- `Ruby` - [Ruby License](https://spdx.org/licenses/Ruby.html)
- `Unlicense` - [The Unlicense](https://spdx.org/licenses/Unlicense.html)
- `WTFPL` - [Do What the Fuck You Want to Public License](https://spdx.org/licenses/WTFPL.html)
- `Zlib` - [Zlib/libpng License](https://spdx.org/licenses/Zlib.html)
- `ZPL-2.0` - [Zope Public License 2.0](https://spdx.org/licenses/ZPL-2.0.html)


--------------------

## Anti-features

- `⚠ ` - Depends on a proprietary service outside the user's control

--------------------

## External Links

**[`^        back to top        ^`](#awesome-selfhosted)**

- Alternative frontends/portals to discover/filter awesome-selfhosted apps: [awweso.me](https://awweso.me/) | [awesome-web.theravenhub](https://awesome-web.theravenhub.com/browse.html)
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin) - Curated list of amazingly awesome open source sysadmin resources.
- Lists of software aimed at privacy and decentralization in some form: [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](https://libreprojects.net/), [Easy Indie App](https://easyindie.app)
- Other Awesome lists: [Awesome Big Data](https://github.com/0xnr/awesome-bigdata), [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets)
- Dynamic Domain Name services: [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
- Communities/forums: [/c/selfhosted on lemmy.world](https://lemmy.world/c/selfhosted), [/c/selfhost on lemmy.ml](https://lemmy.ml/c/selfhost), [/r/selfhosted on reddit](https://old.reddit.com/r/selfhosted/), [r-selfhosted forum](https://forum.r-selfhosted.com/), [/r/selfhosted Matrix Channel](https://matrix.to/#/#selfhosted:selfhosted.chat), [Homelab forum](https://homelabforum.com/), [/r/homelab on reddit](https://old.reddit.com/r/homelab/), [IndieWeb](https://indieweb.org/)
- [theme.park](https://theme-park.dev/) - A collection of themes/skins for 50 selfhosted apps! ([Source Code](https://github.com/GilbN/theme.park/)) `MIT` `CSS`

--------------------

## Contributing

Contributing guidelines can be found [here](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/CONTRIBUTING.md).

## License

This list is under the [Creative Commons Attribution-ShareAlike 3.0 Unported](https://github.com/awesome-selfhosted/awesome-selfhosted/blob/master/LICENSE) License.
Terms of the license are summarized [here](https://creativecommons.org/licenses/by-sa/3.0/).  
The list of authors can be found in the [AUTHORS](https://github.com/awesome-selfhosted/awesome-selfhosted-data/blob/master/AUTHORS) file.
