# Awesome-Selfhosted

[![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![](https://github.com/awesome-selfhosted/awesome-selfhosted-data/actions/workflows/ci.yml/badge.svg)](https://github.com/awesome-selfhosted/awesome-selfhosted/issues/3558)

Self-hosting is the practice of hosting and managing applications on your own server(s) instead of consuming from [SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html) providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted on your own server(s). Non-Free software is listed on the [Non-Free](non-free.md) page.

See [Contributing](.github/CONTRIBUTING.md).

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
  - [Calendar & Contacts - CalDAV or CardDAV Servers](#calendar--contacts---caldav-or-carddav-servers)
  - [Calendar & Contacts - CalDAV or CardDAV Web-based Clients](#calendar--contacts---caldav-or-carddav-web-based-clients)
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
  - [Groupware](#groupware)
  - [Human Resources Management (HRM)](#human-resources-management-hrm)
  - [Internet of Things (IoT)](#internet-of-things-iot)
  - [Inventory Management](#inventory-management)
  - [Knowledge Management Tools](#knowledge-management-tools)
  - [Learning and Courses](#learning-and-courses)
  - [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)
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
  - [Photo and Video Galleries](#photo-and-video-galleries)
  - [Polls and Events](#polls-and-events)
  - [Proxy](#proxy)
  - [Recipe Management](#recipe-management)
  - [Remote Access](#remote-access)
  - [Resource Planning](#resource-planning)
  - [Resource Planning - Enterprise Resource Planning](#resource-planning---enterprise-resource-planning)
  - [Search Engines](#search-engines)
  - [Self-hosting Solutions](#self-hosting-solutions)
  - [Software Development](#software-development)
  - [Software Development - API Management](#software-development---api-management)
  - [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)
  - [Software Development - FaaS & Serverless](#software-development---faas--serverless)
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
  - [VPN](#vpn)
  - [Web Servers](#web-servers)
  - [Wikis](#wikis)
- [List of Licenses](#list-of-licenses)
- [Anti-features](#anti-features)
- [External Links](#external-links)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

--------------------

## Software

### Analytics

**[`^        back to top        ^`](#awesome-selfhosted)**

[Analytics](https://en.wikipedia.org/wiki/Analytics) is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data.

_Related: [Database Management](#database-management), [Personal Dashboards](#personal-dashboards)_

- [Ackee](https://ackee.electerious.com) - Self-hosted analytics tool for those who care about privacy. ([Demo](http://demo.ackee.electerious.com), [Source Code](https://github.com/electerious/Ackee)) `MIT` `Nodejs/Docker/K8S`
- [Aptabase](https://aptabase.com/) - Open source, privacy first and simple analytics for mobile and desktop apps. SDKs available for Swift, Kotlin, Flutter and many others! ([Source Code](https://github.com/aptabase/aptabase)) `AGPL-3.0` `Docker`
- [AWStats](http://www.awstats.org/) - Generate statistics from web, streaming, ftp or mail server logfiles. ([Source Code](https://github.com/eldy/awstats)) `GPL-3.0` `Perl`
- [Countly Community Edition](https://count.ly) - Real time mobile and web analytics, crash reporting and push notifications platform. ([Source Code](https://github.com/countly)) `AGPL-3.0` `Nodejs/Docker`
- [Druid](http://druid.io/) - Distributed, column-oriented, real-time analytics data store. ([Source Code](https://github.com/apache/druid)) `Apache-2.0` `Java/Docker`
- [EDA](https://eda.jortilles.com/en/jortilles-english/) - Web application for data analysis and visualization. ([Source Code](https://github.com/jortilles/EDA)) `Apache-2.0` `Nodejs`
- [Fathom Lite](https://github.com/usefathom/fathom) - A simple and privacy-focused web analytics alternative to Google Analytics. `MIT` `Go/Docker`
- [GoAccess](http://goaccess.io/) - Real-time web log analyzer and interactive viewer that runs in a terminal. ([Source Code](https://github.com/allinurl/goaccess)) `GPL-2.0` `C`
- [GoatCounter](https://www.goatcounter.com) - Easy web statistics without tracking of personal data. ([Source Code](https://github.com/arp242/goatcounter)) `EUPL-1.2` `Go`
- [Matomo](https://matomo.org/) - Google Analytics alternative that protects your data and your customers' privacy. ([Source Code](https://github.com/matomo-org/matomo)) `GPL-3.0` `PHP`
- [Metabase](https://metabase.com/) - Easy, open-source way for everyone in your company to ask questions and learn from data. ([Source Code](https://github.com/metabase/metabase)) `AGPL-3.0` `Java/Docker`
- [Mixpost](https://mixpost.app/) - Self-hosted social media management software. Easily create, schedule, publish, and manage social media content in one place. Alternative to Hootsuite, Buffer, and other social media tools. ([Source Code](https://github.com/inovector/MixpostApp)) `MIT` `PHP/Docker`
- [Netron](https://netron.app/) - Visualizer for neural network and machine learning models. ([Source Code](https://github.com/lutzroeder/netron)) `MIT` `Python/Nodejs`
- [Offen](https://www.offen.dev/) - Fair, lightweight and open web analytics tool. Gain insights while your users have full access to their data. ([Demo](https://www.offen.dev/try-demo/), [Source Code](https://github.com/offen/offen)) `Apache-2.0` `Go/Docker`
- [Open Web Analytics](http://www.openwebanalytics.com/) - Web analytics framework that lets you stay in control of how you instrument and analyze the use of your websites and applications. ([Source Code](https://github.com/Open-Web-Analytics/Open-Web-Analytics)) `GPL-2.0` `PHP`
- [Plausible Analytics](https://plausible.io/) - Simple, open-source, lightweight (< 1 KB) and privacy-friendly web analytics. ([Source Code](https://github.com/plausible/analytics/)) `MIT` `Elixir`
- [PoeticMetric](https://www.poeticmetric.com) - Free as in freedom, open source, privacy-first and regulation-compliant web analytics tool. ([Demo](https://www.poeticmetric.com/s?d=www.poeticmetric.com), [Source Code](https://github.com/th0th/poeticmetric)) `AGPL-3.0` `Docker`
- [PostHog](https://posthog.com) - Product analytics, session recording, feature flagging and a/b testing that you can self-host. Alternative to Mixpanel/Amplitude/Heap/HotJar/Optimizely. ([Source Code](https://github.com/posthog/posthog)) `MIT` `Python`
- [Redash](http://redash.io) - Connect and query your data sources, build dashboards to visualize data and share them with your company. ([Source Code](https://github.com/getredash/redash)) `BSD-2-Clause` `Docker`
- [RudderStack](https://rudderstack.com/) - Collect, unify, transform, and store your customer data, and route it to a wide range of common, popular marketing, sales, and product tools. alternative to Segment. ([Source Code](https://github.com/rudderlabs/rudder-server/)) `AGPL-3.0` `Docker/K8S/Go/Nodejs`
- [Shynet](https://github.com/milesmcc/shynet) - Modern, privacy-friendly, and detailed web analytics that works without cookies or JS. `Apache-2.0` `Python/Docker`
- [Socioboard](https://github.com/socioboard/Socioboard-5.0) `⚠` - Social media management, analytics, and reporting platform supporting nine social media networks out-of-the-box. `GPL-3.0` `Nodejs`
- [Superset](http://superset.apache.org/) - Modern data exploration and visualization platform. ([Source Code](https://github.com/apache/superset)) `Apache-2.0` `Python`
- [Swetrix](https://swetrix.com/) - Ultimate, open-source web analytics to satisfy all your needs. ([Demo](https://swetrix.com/projects/STEzHcB1rALV), [Source Code](https://github.com/Swetrix/selfhosting)) `AGPL-3.0` `Docker`
- [Umami](https://umami.is/) - Simple, fast, privacy-focused alternative to Google Analytics. ([Demo](https://app.umami.is/share/8rmHaheU/umami.is), [Source Code](https://github.com/umami-software/umami)) `MIT` `Nodejs/Docker`


### Archiving and Digital Preservation (DP)

**[`^        back to top        ^`](#awesome-selfhosted)**

Digital [archiving](https://en.wikipedia.org/wiki/Archival_science) and [preservation](https://en.wikipedia.org/wiki/Digital_preservation) software.

_Related: [Content Management Systems (CMS)](#content-management-systems-cms)_

- [Access to Memory (AtoM)](https://www.accesstomemory.org/) - Web-based, open source application for standards-based archival description and access in a multilingual, multi-repository environment. ([Demo](https://demo.accesstomemory.org/), [Source Code](https://github.com/artefactual/atom)) `AGPL-3.0` `PHP`
- [ArchiveBox](https://archivebox.io/) - Self-hosted _wayback machine_ that creates HTML & screenshot archives of sites from your bookmarks, browsing history, RSS feeds, or other sources. ([Source Code](https://github.com/ArchiveBox/ArchiveBox)) `MIT` `Python/Docker`
- [Archivematica](https://www.archivematica.org/en/) - Mature digital preservation system designed to maintain standards-based, long-term access to collections of digital objects. ([Demo](https://sandbox.archivematica.org/administration/accounts/login/), [Source Code](https://github.com/artefactual/archivematica)) `AGPL-3.0` `Python`
- [ArchivesSpace](https://archivesspace.org/) - Archives information management application for managing and providing Web access to archives, manuscripts and digital objects. ([Demo](https://archivesspace.org/application/demo), [Source Code](https://github.com/archivesspace/archivesspace)) `ECL-2.0` `Ruby`
- [CKAN](https://ckan.org) - CKAN is a tool for making open data websites. ([Source Code](https://github.com/ckan/ckan)) `AGPL-3.0` `Python`
- [Collective Access - Providence](https://collectiveaccess.org/) - Highly configurable Web-based framework for management, description, and discovery of digital and physical collections supporting a variety of metadata standards, data types, and media formats. ([Source Code](https://github.com/collectiveaccess/providence)) `GPL-3.0` `PHP`
- [Ganymede](https://github.com/Zibbp/ganymede) `⚠` - Twitch VOD and Live Stream archiving platform. Includes a rendered chat for each archive. `GPL-3.0` `Docker`
- [LiveStreamDVR](https://github.com/MrBrax/LiveStreamDVR) `⚠` - An automatic Twitch recorder capable of capturing live streams, chat messages and stream metadata. `MIT` `Python/Nodejs/Docker`
- [Omeka S](https://omeka.org/s/) - Omeka S is a web publication system for universities, galleries, libraries, archives, and museums. It consists of a local network of independently curated exhibits sharing a collaboratively built pool of items, media, and their metadata. ([Source Code](https://github.com/omeka/omeka-s)) `GPL-3.0` `Nodejs`
- [Wayback](https://github.com/wabarc/wayback) - A self-hosted toolkit for archiving webpages to the Internet Archive, archive.today, IPFS, and local file systems. `GPL-3.0` `Go`
- [Webarchive](https://github.com/derfenix/webarchive) - Lightweight self-hosted _wayback machine_ that creates HTML and PDF files from your bookmarks. `BSD-3-Clause` `Go`


### Automation

**[`^        back to top        ^`](#awesome-selfhosted)**

[Automation](https://en.wikipedia.org/wiki/Automation) software designed to reduce human intervention in processes.

_Related: [Internet of Things (IoT)](#internet-of-things-iot), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)_

- [Accelerated Text](https://github.com/accelerated-text/accelerated-text) - Automatically generate multiple natural language descriptions of your data varying in wording and structure. `Apache-2.0` `Java`
- [Actionsflow](https://actionsflow.github.io/docs/) `⚠` - The free Zapier/IFTTT alternative for developers to automate your workflows based on Github actions. ([Source Code](https://github.com/actionsflow/actionsflow)) `MIT` `Docker/Nodejs`
- [Activepieces](https://www.activepieces.com) - No-code business automation tool like Zapier or Tray. For example, you can send a Slack notification for each new Trello card. ([Source Code](https://www.github.com/activepieces/activepieces)) `MIT` `Typescript`
- [ActiveWorkflow](https://github.com/automaticmode/active_workflow) - An intelligent process and workflow automation platform based on software agents. `MIT` `Ruby`
- [AmIUnique](https://amiunique.org/) - Learn how identifiable you are on the Internet (browser fingerprinting tool). ([Source Code](https://github.com/DIVERSIFY-project/amiunique)) `MIT` `Java`
- [Apache Airflow](https://airflow.apache.org/) - Airflow is a platform to programmatically author, schedule, and monitor workflows. ([Source Code](https://github.com/apache/airflow/)) `Apache-2.0` `Python/Docker`
- [Automatisch](https://automatisch.io) - Business automation tool that lets you connect different services like Twitter, Slack, and more to automate your business processes (Open source Zapier alternative). ([Source Code](https://github.com/automatisch/automatisch)) `AGPL-3.0` `Docker`
- [betanin](https://github.com/sentriz/betanin) - Music organization man-in-the-middle of your torrent client and music player. Based on beets.io, similar to Sonarr and Radarr. `GPL-3.0` `Python/Docker`
- [ChiefOnboarding](https://chiefonboarding.com) - Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot. ([Source Code](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Docker`
- [Eonza](https://www.eonza.org) - Eonza is used to create scripts and automate tasks on servers or VPS hosting. Manage your servers from any browser on any device. ([Demo](https://playground.eonza.org/), [Source Code](https://github.com/gentee/eonza)) `MIT` `Go`
- [Exadel CompreFace](https://exadel.com/solutions/compreface/) - Face recognition system that provides REST API for face recognition, face detection, and other face services, and is easily deployed with docker. There are SDKs for Python and JavaScript languages. Can be used without prior machine learning skills. ([Source Code](https://github.com/exadel-inc/CompreFace)) `Apache-2.0` `Docker/Java/Nodejs`
- [feed2toot](https://feed2toot.readthedocs.io/en/latest/) - Feed2toot parses a RSS feed, extracts the last entries and sends them to Mastodon. ([Source Code](https://gitlab.com/chaica/feed2toot)) `GPL-3.0` `Python`
- [feedmixer](https://github.com/cristoper/feedmixer) - FeedMixer is a WSGI (Python3) micro web service which takes a list of feed URLs and returns a new feed consisting of the most recent n entries from each given feed(Returns Atom, RSS, or JSON). ([Demo](https://mretc.net/feedmixer/json?f=https://hnrss.org/newest&f=https://americancynic.net/atom.xml&n=1)) `WTFPL` `Python`
- [Headphones](https://github.com/rembo10/headphones) - Automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole. `GPL-3.0` `Python`
- [Healthchecks](https://healthchecks.io/) - Django app which listens for pings and sends alerts when pings are late. ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python`
- [homebank-converter](https://github.com/Binnette/homebank-converter) - Web app to convert an export bank file to compatible Homebank csv. ([Demo](https://binnette.github.io/homebank-converter/)) `AGPL-3.0` `HTML5`
- [HRConvert2](https://github.com/zelon88/HRConvert2) - Drag-and-drop file conversion server with session based authentication, automatic temporary file maintenance, and logging capability. `GPL-3.0` `PHP`
- [Huginn](https://github.com/huginn/huginn) - Allows you to build agents that monitor and act on your behalf. `MIT` `Ruby`
- [Kibitzr](https://kibitzr.github.io) - Lightweight personal web assistant with powerful integrations. ([Source Code](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [Krayin](https://krayincrm.com/) - Free and Opensource Laravel CRM Application. ([Demo](https://demo.krayincrm.com/), [Source Code](https://github.com/krayin/laravel-crm)) `MIT` `PHP`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `⚠` - LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads Librarything and optionally GoogleBooks as sources for author info and book info. `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - Open-source personal assistant who can live on your server. ([Source Code](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Lidarr](https://lidarr.audio/) - Lidarr is a music collection manager for Usenet and BitTorrent users. ([Source Code](https://github.com/Lidarr/Lidarr)) `GPL-3.0` `C#/Docker`
- [Matchering](https://github.com/sergree/matchering) - A containerized web app for automated music mastering. An open-source alternative to LANDR, eMastered, and MajorDecibel. `GPL-3.0` `Docker`
- [Medusa](https://pymedusa.com/) - Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Source Code](https://github.com/pymedusa/Medusa)) `GPL-3.0` `Python`
- [MetaTube](https://github.com/JVT038/MetaTube) `⚠` - A Web GUI to automatically download music from YouTube add metadata from Spotify, Deezer or Musicbrainz. `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites. `AGPL-3.0` `Python/Nodejs/Docker`
- [nefarious](https://github.com/lardbit/nefarious) - Web application that automates downloading Movies and TV Shows. `GPL-3.0` `Python`
- [OliveTin](https://github.com/OliveTin/OliveTin) - OliveTin is a web interface for running Linux shell commands. `AGPL-3.0` `Go`
- [Patrowl](https://github.com/Patrowl/PatrowlManager) - Open Source, Smart and Scalable Security Operations Orchestration Platform. `AGPL-3.0` `Python`
- [Podgrab](https://github.com/akhilrex/podgrab) - Lightweight podcast manager and automatic podcast episode downloader. It will monitor podcasts for your and download them automatically whenever a new episode goes live. `GPL-3.0` `Docker/Go`
- [pyLoad](https://pyload.net/) - Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to. ([Source Code](https://github.com/pyload/pyload)) `GPL-3.0` `Python`
- [Radarr](https://radarr.video/) - Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent, à la Couchpotato. ([Source Code](https://github.com/Radarr/Radarr)) `GPL-3.0` `C#/Docker`
- [SickChill](https://sickchill.github.io/) - SickChill is an automatic video library manager for TV shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Source Code](https://github.com/SickChill/SickChill)) `GPL-3.0` `Python/Docker`
- [SiteInspector](https://www.getsiteinspector.com/) - Web-based tool for catching spelling errors, grammatical errors, broken links, and other errors on websites. ([Source Code](https://github.com/siteinspector/siteinspector)) `AGPL-3.0` `Docker`
- [Sonarr](https://sonarr.tv/) - Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. ([Source Code](https://github.com/Sonarr/Sonarr)) `GPL-3.0` `C#/Docker`
- [StackStorm](https://stackstorm.com) - StackStorm (aka _IFTTT for Ops_) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps. ([Source Code](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [Tube Archivist](https://www.tubearchivist.com/) `⚠` - Your self hosted YouTube media server: Subscribe, download, index, search and play your favorite videos. ([Source Code](https://github.com/tubearchivist/tubearchivist)) `GPL-3.0` `Python/Docker`
- [tubesync](https://github.com/meeb/tubesync) `⚠` - Syncs YouTube channels and playlists to a locally hosted media server. `AGPL-3.0` `Docker/Python`
- [WebUI-aria2](https://github.com/ziahamza/webui-aria2) - Interface to interact with the aria2 downloader. Very simple to use, just download and open index.html in any web browser. ([Demo](https://ziahamza.github.io/webui-aria2/)) `MIT` `HTML5`
- [ydl_api_ng](https://github.com/Totonyus/ydl_api_ng) - Simple youtube-dl REST API to launch downloads on a distant server. `GPL-3.0` `Python`
- [YoutubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) - Material Design inspired YouTube downloader, based on youtube-dl. Supports playlists, quality select, search, dark mode and much more, all with a clean and modern design. `MIT` `Nodejs/Docker`
- [YoutubeDL-Server](https://github.com/nbr23/youtube-dl-server) - Web and REST interface for downloading videos onto a server. `MIT` `Python/Docker`
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
- [Blog](https://github.com/m1k1o/blog) - Facebook-styled blog. Free, extremely lightweight, single-user and easy to install. `GPL-3.0` `PHP`
- [Castopod](https://castopod.org) - A podcast management hosting platform that includes the latest podcast 2.0 standards, an automated Fediverse feed, analytics, an embeddable player, and more. ([Source Code](https://code.castopod.org/adaures/castopod)) `AGPL-3.0` `PHP/Docker`
- [Chyrp Lite](https://chyrplite.net) - Extra-awesome, extra-lightweight blog engine. ([Source Code](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dotclear](https://dotclear.org/) - Take control over your blog. ([Source Code](https://git.dotclear.org/dev/dotclear)) `GPL-2.0` `PHP`
- [FlatPress](https://flatpress.org/) - A lightweight, easy-to-set-up flat-file blogging engine. ([Source Code](https://github.com/flatpressblog/flatpress)) `GPL-2.0` `PHP`
- [Ghost](https://ghost.org/) - Just a blogging platform. ([Source Code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
- [Haven](https://havenweb.org/) - Private blogging system with markdown editing and built in RSS reader. ([Demo](https://havenweb.org/demo.html), [Source Code](https://github.com/havenweb/haven)) `MIT` `Ruby`
- [htmly](https://www.htmly.com/) - Databaseless Blogging Platform (Flat-File Blog). ([Demo](https://demo.htmly.com/), [Source Code](https://github.com/danpros/htmly)) `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - A collaborative social publishing platform. ([Source Code](https://github.com/idno/known)) `Apache-2.0` `PHP`
- [PluXml](https://pluxml.org) - XML-based blog/CMS platform. ([Source Code](https://github.com/pluxml/PluXml)) `GPL-3.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Serendipity (s9y) is a highly extensible and customizable PHP blog engine using Smarty templating. ([Source Code](https://github.com/s9y/serendipity)) `BSD-3-Clause` `PHP`
- [WriteFreely](https://writefreely.org) - Writing software for starting a minimalist, federated blog — or an entire community. ([Source Code](https://github.com/writefreely/writefreely)) `AGPL-3.0` `Go`


### Booking and Scheduling

**[`^        back to top        ^`](#awesome-selfhosted)**

Event scheduling, reservation, and appointment management software.

_Related: [Polls and Events](#polls-and-events)_

- [Alf.io](https://alf.io/) - The open source ticket reservation system. ([Demo](https://demo.alf.io/authentication), [Source Code](https://github.com/alfio-event/alf.io)) `GPL-3.0` `Java`
- [Cal.com](https://cal.com/) - The open-source online appointment scheduling system. ([Demo](https://app.cal.com/bailey), [Source Code](https://github.com/calcom/cal.com)) `MIT` `Nodejs`
- [Easy!Appointments](https://easyappointments.org/) - A highly customizable web application that allows your customers to book appointments with you via the web. ([Demo](https://easyappointments.org/demo/), [Source Code](https://github.com/alextselegidis/easyappointments)) `GPL-3.0` `PHP`
- [QloApps](https://qloapps.com/) - An open-source, customizable and intuitive web-based hotel reservation system and a booking engine. ([Demo](https://demo.qloapps.com/), [Source Code](https://github.com/webkul/hotelcommerce)) `OSL-3.0` `PHP/Nodejs`
- [Seatsurfing](https://seatsurfing.app/) - Webbased app to book seats, desks and rooms for offices. ([Demo](https://seatsurfing.app/get-started/), [Source Code](https://github.com/seatsurfing/backend)) `GPL-3.0` `Docker`


### Bookmarks and Link Sharing

**[`^        back to top        ^`](#awesome-selfhosted)**

Software which allows users to add, annotate, edit, and share [bookmarks](https://en.wikipedia.org/wiki/Bookmark_(digital)) of web documents.

- [Briefkasten](https://github.com/ndom91/briefkasten) - Modern app for saving and managing your own bookmarks. Includes a browser extension. ([Demo](https://briefkastenhq.com/auth/signin)) `MIT` `Nodejs/Docker`
- [Buku](https://github.com/jarun/Buku) - A powerful bookmark manager and a personal textual mini-web. `GPL-3.0` `Python`
- [Espial](https://github.com/jonschoning/espial) - An open-source, web-based bookmarking server. `AGPL-3.0` `Haskell`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - This allows you to host your own Firefox accounts server. ([Source Code](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs/Java`
- [golinks](https://git.mills.io/prologic/golinks) - Web application that allows you to create smart bookmarks, commands and aliases by pointing your web browser's default search engine at a running instance. Similar to bunny1 or yubnub. ([Demo](https://search.mills.io)) `MIT` `Go/Docker`
- [Hackershare](https://github.com/hackershare/hackershare) - Social bookmarks website for hackers. ([Demo](https://hackershare.dev/en)) `MIT` `Ruby`
- [LinkAce](https://www.linkace.org/) - A bookmark archive with automatic backups to the Internet Archive, link monitoring, and a full REST API. Installation is done via Docker, or as a simple PHP application. ([Demo](https://demo.linkace.org/guest/links), [Source Code](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `Docker/PHP`
- [linkding](https://github.com/sissbruecker/linkding) - Minimal bookmark management with a fast and clean UI. Simple installation through Docker and can run on your Raspberry Pi. `MIT` `Docker/Python/Nodejs`
- [LinkWarden](https://github.com/linkwarden/linkwarden) - A self-hosted bookmark + archive manager to store your useful links. ([Demo](https://linkwarden.netlify.app/)) `MIT` `Docker/Nodejs`
- [NeonLink](https://github.com/AlexSciFier/neonlink) - Self-hosted bookmark service with unique design and simple installation with Docker. `MIT` `Docker`
- [Pinry](https://docs.getpinry.com/) - The tiling image board system for people who want to save, tag, and share images, videos, and webpages. ([Demo](https://pin.37soloist.com/), [Source Code](https://github.com/pinry/pinry)) `BSD-2-Clause` `Docker/Python`
- [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing platform. ([Demo](https://demo.shaarli.org)) `Zlib` `PHP`
- [Shiori](https://github.com/go-shiori/shiori) - Simple bookmark manager built with Go. `MIT` `Go/Docker`
- [SyncMarks](https://codeberg.org/Offerel/SyncMarks-Webapp) - Sync and manage your browser bookmarks from Edge, Firefox and Chromium. ([Clients](https://codeberg.org/Offerel/SyncMarks-Extension)) `AGPL-3.0` `PHP`
- [xBrowserSync](https://www.xbrowsersync.org) - Open source tool for syncing browser data between browsers and devices. ([Source Code](https://github.com/xBrowserSync)) `MIT` `Nodejs`


### Calendar & Contacts - CalDAV or CardDAV Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[CalDAV](https://en.wikipedia.org/wiki/CalDAV) and [CardDAV](https://en.wikipedia.org/wiki/CardDAV) protocol servers [Electronic calendar](https://en.wikipedia.org/wiki/Calendaring_software) and [address book](https://en.wikipedia.org/wiki/Address_book) and [contact management](https://en.wikipedia.org/wiki/Contact_manager).

_Related: [Groupware](#groupware)_

_See also: [Comparison of CalDAV and CardDAV implementations - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations)_


- [Baïkal](https://sabre.io/baikal/) - Lightweight CalDAV and CardDAV server based on sabre/dav. ([Source Code](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [calypso](https://keithp.com/calypso/) - Python-based CalDAV and CardDAV server, forked from Radicale. ([Source Code](https://keithp.com/cgit/)) `GPL-3.0` `Python`
- [DAViCal](https://www.davical.org/) - Server for calendar sharing (CalDAV) that uses a PostgreSQL database as a data store. ([Source Code](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP`
- [Davis](https://github.com/tchapi/davis) - A simple, dockerizable and fully translatable admin interface for sabre/dav based on Symfony 5 and Bootstrap 4, largely inspired by Baïkal. `MIT` `PHP`
- [Etebase (EteSync)](https://www.etebase.com/) - End-to-end encrypted and journaled personal information server supporting calendar and contact data, offering its own clients. ([Source Code](https://github.com/etesync/server)) `AGPL-3.0` `Python/Django`
- [Radicale](https://radicale.org/) - Simple calendar and contact server with extremely low administrative overhead. ([Source Code](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python`
- [SabreDAV](https://sabre.io/) - Open source CardDAV, CalDAV, and WebDAV framework and server. ([Source Code](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://github.com/jelmer/xandikos) - Open source CardDAV and CalDAV server with minimal administrative overhead, backed by a Git repository. `GPL-3.0` `Python`


### Calendar & Contacts - CalDAV or CardDAV Web-based Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[CalDAV](https://en.wikipedia.org/wiki/CalDAV) and [CardDAV](https://en.wikipedia.org/wiki/CardDAV) protocol web clients/interfaces.

- [AgenDAV](https://agendav.github.io/agendav/) - Multilanguage CalDAV web client with a rich AJAX interface and shared calendars support. ([Source Code](https://github.com/agendav/agendav)) `GPL-3.0` `PHP`
- [Bloben](https://bloben.com) - CalDAV web client. ([Demo](https://demo.bloben.com/api/app/v1/auth/login-demo?username=demo&password=Bg8v16a4q7gvC&redirect=https://demo.bloben.com/calendar?demo=true), [Source Code](https://github.com/nibdo/bloben-app)) `AGPL-3.0` `Docker`
- [EteSync Web](https://www.etesync.com/faq/#web-client) - EteSync's official Web-based client (i.e., their Web app). ([Demo](https://client.etesync.com/), [Source Code](https://github.com/etesync/etesync-web)) `AGPL-3.0` `Javascript`
- [Manage My Damn Life](https://intri.in/manage-my-damn-life/) - Manage my Damn Life (MMDL) is a self-hosted front end for managing your CalDAV tasks and calendars. ([Source Code](https://github.com/intri-in/manage-my-damn-life-nextjs)) `GPL-3.0` `Nodejs/Docker`


### Communication - Custom Communication Systems

**[`^        back to top        ^`](#awesome-selfhosted)**

[Communication software](https://en.wikipedia.org/wiki/Communication_software) used to provide remote access to systems and exchange files and messages in text, audio and/or video formats between different computers or users, using their own custom protocols.

- [Apprise](https://github.com/caronc/apprise) - Apprise allows you to send a notification to almost all of the most popular notification services available to us today such as: Telegram, Discord, Slack, Amazon SNS, Gotify, etc. `MIT` `Python/Docker`
- [BluetoothCommunicatorExample](https://github.com/niedev/BluetoothCommunicatorExample) - Bluetooth LE chat app to communicate between android devices with P2P architecture. ([Clients](https://github.com/niedev/RTranslator)) `Apache-2.0` `Java`
- [Centrifugo](https://centrifugal.dev/) - Language-agnostic real-time messaging (Websocket or SockJS) server. ([Demo](https://github.com/centrifugal/centrifugo#demo), [Source Code](https://github.com/centrifugal/centrifugo)) `MIT` `Go/Docker/K8S`
- [Chatwoot](https://www.chatwoot.com) - Self-hosted customer communication platform, an alternative to Intercom & Zendesk. ([Source Code](https://github.com/chatwoot/chatwoot)) `MIT` `Ruby/Docker/K8S`
- [Chitchatter](https://chitchatter.im/) - A peer-to-peer chat app that is serverless, decentralized, and ephemeral. ([Source Code](https://github.com/jeremyckahn/chitchatter)) `GPL-2.0` `Nodejs`
- [Conduit](https://conduit.rs/) - A simple, fast, and reliable chat server powered by Matrix. ([Source Code](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Darkwire.io](https://github.com/darkwire/darkwire.io) - End-to-end encrypted instant web chat. `MIT` `Nodejs`
- [Databag](https://github.com/balzack/databag) - Federated, end-to-end encrypted messaging service for the web, iOS, and Android, supporting text, photos, video, and WebRTC video and audio calls. ([Demo](https://databag.coredb.org/#/create)) `Apache-2.0` `Docker`
- [Dendrite](https://matrix-org.github.io/dendrite/) - Second-generation Matrix homeserver written in Go. It intends to provide an efficient, reliable and scalable alternative to Synapse. ([Source Code](https://github.com/matrix-org/dendrite)) `Apache-2.0` `Go`
- [Element](https://element.io) - Fully-featured Matrix client for Web, iOS & Android. ([Source Code](https://github.com/vector-im/element-web)) `Apache-2.0` `Nodejs`
- [Freenet](https://freenetproject.org/index.html) - Anonymously share files, browse and publish _freesites_ (web sites accessible only through Freenet) and chat on forums. ([Source Code](https://github.com/freenet/fred)) `GPL-2.0` `Java`
- [GNUnet](https://gnunet.org/) - Free software framework for decentralized, peer-to-peer networking. ([Source Code](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - Self-hosted notification server with Android and CLI clients, similar to PushBullet. ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android)) `MIT` `Go/Docker`
- [Hawkpost](https://hawkpost.co) - HawkPost is a web app that lets you create unique links that you can share with a person that desires to send you important information but doesn't know how to encrypt it. The message is encrypted in their browser and sent to your email address. ([Source Code](https://github.com/whitesmith/hawkpost)) `MIT` `Python/Docker`
- [Jam](https://jamshelf.com/) - Jam is an open source alternative to Clubhouse: private audio chat rooms to talk to friends and family. ([Demo](https://jam.systems/), [Source Code](https://github.com/jam-systems/jam)) `AGPL-3.0` `Docker/Nodejs`
- [Jami](https://jami.net/) - Free and universal communication platform which preserves the user's privacy and freedoms (formerly GNU Ring). ([Source Code](https://git.jami.net/savoirfairelinux/jami-project)) `GPL-3.0` `C++`
- [KChat](https://github.com/php-kchat/kchat) - PHP Based Live Chat Application. `Apache-2.0` `PHP`
- [LeapChat](https://www.leapchat.org/) - Ephemeral, encrypted, in-browser chat rooms. ([Source Code](https://github.com/cryptag/leapchat)) `AGPL-3.0` `Docker/Nodejs/Shell`
- [Live Helper Chat](https://livehelperchat.com/) - Live Support chat for your website. ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mattermost](https://mattermost.org/) - Open-source, on-prem Slack-alternative. It can be integrated with Gitlab. ([Source Code](https://github.com/mattermost/mattermost)) `AGPL-3.0/Apache-2.0` `Go/Docker/K8S`
- [MiAOU](https://miaou.dystroy.org/login) - Multi-room persistent chat server. ([Source Code](https://github.com/Canop/miaou)) `MIT` `Nodejs`
- [Mibew](https://mibew.org) - Mibew Messenger is an open-source live support application written in PHP and MySQL. It enables one-on-one chat assistance in real-time directly from your website. ([Demo](https://mibew.org/demo2), [Source Code](https://github.com/Mibew/mibew)) `Apache-2.0` `PHP`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++`
- [Notifo](https://github.com/notifo-io/notifo) - Multichannel notification server with support for Email, Mobile Push, Web Push, SMS, messaging and a javascript plugin. `MIT` `C#`
- [Novu](https://novu.co/) - Self-hosted / cloud notification infrastructure for developers. ([Source Code](https://github.com/novuhq/novu/)) `MIT` `Docker/Nodejs`
- [ntfy](https://ntfy.sh/) - Push notifications to phone or desktop using HTTP PUT/POST, with Android app, CLI and web app, similar to Pushover and Gotify. ([Demo](https://ntfy.sh/app), [Source Code](https://github.com/binwiederhier/ntfy), [Clients](https://github.com/binwiederhier/ntfy-android)) `Apache-2.0/GPL-2.0` `Go/Docker/K8S`
- [OTS](https://ots.fyi/) - One-Time-Secret sharing platform with a symmetric 256bit AES encryption in the browser. ([Source Code](https://github.com/Luzifer/ots)) `Apache-2.0` `Go`
- [Papercups](https://papercups.io/) - An open source live customer chat web app written in Elixir. ([Demo](https://app.papercups.io/demo), [Source Code](https://github.com/papercups-io/papercups)) `MIT` `Elixir`
- [PushBits](https://github.com/pushbits/server) - Self-hosted notification server for relaying push notifications via Matrix, similar to PushBullet and Gotify. `ISC` `Go`
- [Rallly](https://rallly.co) - Rallly is an open-source alternative to Doodle that lets you create polls to vote on dates and times. ([Source Code](https://github.com/lukevella/Rallly)) `AGPL-3.0` `Nodejs`
- [RetroShare](https://retroshare.cc) - Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer. ([Source Code](https://github.com/RetroShare/RetroShare)) `GPL-2.0` `C++`
- [Revolt](https://revolt.chat/) - Revolt is a user-first chat platform built with modern web technologies. ([Source Code](https://github.com/revoltchat/revolt)) `AGPL-3.0` `Rust`
- [Rocket.Chat](https://rocket.chat/) - Teamchat solution similar to Gitter.im or Slack. ([Source Code](https://github.com/RocketChat/Rocket.Chat)) `MIT` `Nodejs/Docker/K8S`
- [Screensy](https://github.com/screensy/screensy) - Simple peer-to-peer screen sharing solution for sharing your screen with WebRTC. ([Demo](https://screensy.marijn.it/)) `GPL-3.0` `Nodejs/Docker`
- [Shhh](https://github.com/smallwat3r/shhh) - Keep secrets out of emails or chat logs, share them using secure links with passphrase and expiration dates. `MIT` `Python`
- [SimpleX Chat](https://github.com/simplex-chat/simplex-chat) - The most private and secure chat and applications platform - now with double ratchet E2E encryption. `AGPL-3.0` `Haskell`
- [Soketi](https://soketi.app/) - Soketi is a free, open-source Pusher drop-in alternative. ([Source Code](https://github.com/soketi/soketi)) `MIT` `Nodejs/Docker/K8S`
- [Spectrum 2](https://spectrum.im/) - Spectrum 2 is an open source instant messaging transport.  It allows users to chat together even when they are using different IM networks. ([Source Code](https://github.com/SpectrumIM/spectrum2)) `GPL-3.0` `C++`
- [StoneAge Messenger](https://cweb.gitlab.io/StoneAge.html) - A self-hosted Android messenger, S3-compatible storage is the only backend needed. ([Source Code](https://gitlab.com/cweb-repos/cweb-conversations), [Clients](https://f-droid.org/en/packages/com.cweb.messenger/)) `GPL-3.0` `Java`
- [Synapse](https://matrix-org.github.io/synapse/latest/) - Server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication. ([Source Code](https://github.com/matrix-org/synapse)) `Apache-2.0` `Python`
- [Syndie](https://syndie.de) - Syndie is a libre system for operating distributed forums. `CC0-1.0` `Java`
- [Tailchat](https://tailchat.msgbyte.com/) - Next generation noIM application in your own workspace, not only another Slack/Discord/rocket.chat. ([Demo](https://nightly.paw.msgbyte.com/), [Source Code](https://github.com/msgbyte/tailchat)) `Apache-2.0` `Docker/K8S/Nodejs`
- [TextBelt](https://github.com/typpo/textbelt) `⚠` - Outgoing SMS API that uses carrier-specific gateways to deliver your text messages for free, and without ads. `MIT` `Javascript`
- [Tiledesk](https://tiledesk.com) - All-in-one customer engagement platform from lead-gen to post-sales, from WhatsApp to your website. With omni-channel live agents and AI-powered chatbots. Self hosted alternative to Intercom, Zendesk, Tawk.to and Tidio. ([Source Code](https://github.com/Tiledesk/tiledesk)) `MIT` `Docker/K8S`
- [Tinode](https://github.com/tinode) - Instant messaging platform. Backend in Go. Clients: Swift iOS, Java Android, JS webapp, scriptable command line; chatbots. ([Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp)) `GPL-3.0` `Go`
- [Tox](https://tox.chat/) - Distributed, secure messenger with audio and video chat capabilities. ([Source Code](https://github.com/TokTok/c-toxcore)) `GPL-3.0` `C`
- [Typebot](https://typebot.io) - Typebot is a conversational app builder as an alternative to Typeform or Landbot. ([Source Code](https://github.com/baptisteArno/typebot.io)) `AGPL-3.0` `Docker`
- [WBO](https://github.com/lovasoa/whitebophir) - Web Whiteboard to collaborate in real-time on schemas, drawings, and notes. ([Demo](https://wbo.ophir.dev/)) `AGPL-3.0` `Nodejs/Docker`
- [Yopass](https://github.com/jhaals/yopass) - Secure sharing of secrets, passwords and files. ([Demo](https://yopass.se/)) `Apache-2.0` `Go/Docker`
- [Zulip](https://zulip.org) - Zulip is a powerful, open source group chat application. ([Source Code](https://github.com/zulip/zulip)) `Apache-2.0` `Python`


### Communication - Email - Complete Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

Simple deployment of [E-mail](https://en.wikipedia.org/wiki/Email) servers, e.g. for inexperienced or impatient admins.

- [AnonAddy](https://anonaddy.com) - Open source email forwarding service for creating aliases. ([Source Code](https://github.com/anonaddy/anonaddy)) `MIT` `PHP`
- [DebOps](https://docs.debops.org/) - Your Debian-based data center in a box. A set of general-purpose Ansible roles that can be used to manage Debian or Ubuntu hosts. ([Source Code](https://github.com/debops/debops)) `GPL-3.0` `YAML/Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - Production-ready fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. Only configuration files, no SQL database. ([Source Code](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [Dovel](https://dovel.email) - SMTP server that sends and receives emails according to a simple configuration file, with an optional web interface that you can use to browse your emails. ([Source Code](https://blmayer.dev/x/dovel)) `LGPL-3.0` `Go`
- [emailwiz](https://github.com/LukeSmithxyz/emailwiz) - Luke Smith's bash script to completely automate the setup of a Postfix/Dovecot/SpamAssassin/OpenDKIM server on debian. `GPL-3.0` `Bash`
- [homebox](https://github.com/progmaticltd/homebox) - Suite of Ansible scripts to deploy a fully functional mail server on Debian. Unobtrusive and automatic as much as possible, focusing on stability and security. `GPL-3.0` `Shell`
- [Inboxen](https://inboxen.org) - Inboxen is a service that provides you with an infinite number of unique inboxes. ([Source Code](https://github.com/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [iRedMail](https://www.iredmail.org/) - Full-featured mail server solution based on Postfix and Dovecot. ([Source Code](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Maddy Mail Server](https://github.com/foxcpp/maddy) - All-in-one mail server that implements SMTP (both MTA and MX) and IMAP. Replaces Postfix, Dovecot, OpenDKIM, OpenSPF, OpenDMARC with single daemon. `GPL-3.0` `Go`
- [Mail-in-a-Box](https://mailinabox.email/) - Turns any Ubuntu server into a fully functional mail server with one command. ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Mailcow](https://mailcow.email/) - Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration. ([Source Code](https://github.com/mailcow/mailcow-dockerized)) `GPL-2.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - Mailu is a simple yet full-featured mail server as a set of Docker images. ([Source Code](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Modoboa](https://modoboa.org/en/) - Modoboa is a mail hosting and management platform including a modern and simplified Web User Interface. ([Source Code](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Postal](https://docs.postalserver.io/) - A complete and fully featured mail server for use by websites & web servers. ([Source Code](https://github.com/postalserver/postal)) `MIT` `Docker/Ruby`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Complete mailserver solution leveraging the Nix Ecosystem. `GPL-3.0` `Nix`
- [SimpleLogin](https://simplelogin.io) - Open source email alias solution to protect your email address. Comes with browser extensions and mobile apps. ([Source Code](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [wildduck](https://wildduck.email/) - Scalable no-SPOF IMAP/POP3 mail server. ([Source Code](https://github.com/nodemailer/wildduck)) `EUPL-1.2` `Nodejs/Docker`


### Communication - Email - Mail Delivery Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Delivery Agents](https://en.wikipedia.org/wiki/Message_delivery_agent) (MDAs) - [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol)/[POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol) server software.

- [Cyrus IMAP](https://www.cyrusimap.org/) - Email (IMAP/POP3), contacts and calendar server. ([Source Code](https://github.com/cyrusimap/cyrus-imapd)) `BSD-3-Clause-Attribution` `C`
- [Dovecot](https://www.dovecot.org/) - IMAP and POP3 server written primarily with security in mind. ([Source Code](https://github.com/dovecot/core)) `MIT/LGPL-2.1` `C`
- [MailForm](https://github.com/Feuerhamster/mailform) - Lightweight self-hosted open source alternative to Formspree and SendGrid. `Apache-2.0` `Nodejs/Docker`
- [Piler](https://www.mailpiler.org/wiki/start) - Feature-rich open source email archiving solution. ([Source Code](https://bitbucket.org/jsuto/piler)) `GPL-3.0` `C`
- [Stalwart JMAP](https://stalw.art/jmap) - JMAP and IMAP server designed to be secure, fast, robust and scalable. ([Source Code](https://github.com/stalwartlabs/jmap-server)) `AGPL-3.0` `Rust/Docker`


### Communication - Email - Mail Transfer Agents

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mail Transfer Agents](https://en.wikipedia.org/wiki/Message_transfer_agent) (MTAs) - [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) servers.

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP (email) server with a focus on simplicity, security, and ease of operation. ([Source Code](https://blitiri.com.ar/git/r/chasquid/)) `Apache-2.0` `Go`
- [Courier MTA](https://www.courier-mta.org/) - Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services. ([Source Code](https://www.courier-mta.org/repo.html)) `GPL-3.0` `C`
- [DragonFly](https://github.com/corecode/dma) - A small MTA for home and office use. Works on Linux and FreeBSD. `BSD-3-Clause` `C`
- [EmailRelay](https://emailrelay.sourceforge.net/) - A small and easy to configure SMTP and POP3 server for Windows and Linux. ([Source Code](https://sourceforge.net/p/emailrelay/code/HEAD/tree/)) `GPL-3.0` `C++`
- [Exim](https://www.exim.org/) - Message transfer agent (MTA) developed at the University of Cambridge. ([Source Code](https://git.exim.org/exim.git)) `GPL-3.0` `C`
- [Haraka](https://haraka.github.io/) - High-performance, pluginable SMTP server written in Javascript. ([Source Code](https://github.com/haraka/Haraka)) `MIT` `Nodejs`
- [MailCatcher](https://mailcatcher.me/) - Ruby gem that deploys a simply SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. ([Source Code](https://github.com/sj26/mailcatcher)) `MIT` `Ruby`
- [Maildrop](https://gitlab.com/markbeeson/maildrop) - Disposable email SMTP server, also useful for development. `MIT` `Scala`
- [MailHog](https://github.com/mailhog/MailHog) - Small Golang executable which runs an SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. `MIT` `Go/Docker`
- [OpenSMTPD](https://opensmtpd.org/) - Secure SMTP server implementation from the OpenBSD project. ([Source Code](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.sbin/smtpd/)) `ISC` `C`
- [Postfix](http://www.postfix.org/) - Fast, easy to administer, and secure Sendmail replacement. `IPL-1.0` `C`
- [Sendmail](https://www.proofpoint.com/us/products/email-protection/open-source-email-solution) - Message transfer agent (MTA). `Sendmail` `C`
- [Slimta](https://www.slimta.org) - Mail Transfer Library built on Python. ([Source Code](https://github.com/slimta/python-slimta)) `MIT` `Python`
- [Stalwart SMTP](https://stalw.art/smtp) - Modern SMTP server designed with a focus on security, speed, and extensive configurability. ([Source Code](https://github.com/stalwartlabs/smtp-server)) `AGPL-3.0` `Rust`
- [vSMTP](https://viridit.com/products/) - Next-gen MTA. Secured, Faster and Greener. ([Source Code](https://github.com/viridIT/vSMTP)) `GPL-3.0` `Rust`


### Communication - Email - Mailing Lists and Newsletters

**[`^        back to top        ^`](#awesome-selfhosted)**

[Mailing list](https://en.wikipedia.org/wiki/Mailing_list) servers and mass mailing software - one message to many recipients.

- [Dada Mail](https://dadamailproject.com/) - Web-based list management system that can be used for announcement lists and/or discussion lists. ([Source Code](https://github.com/justingit/dada-mail)) `GPL-2.0` `Perl`
- [Gray Duck Mail](https://grayduckmail.com) - Self hosted email discussion list management that uses external email providers. ([Source Code](https://github.com/wagesj45/gray-duck-mail)) `GPL-3.0` `Docker`
- [HyperKitty](https://wiki.list.org/HyperKitty) - Open source Django application to provide a web interface to access GNU Mailman v3 archives. ([Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty)) `GPL-3.0` `Python`
- [Keila](https://www.keila.io) - Self-hosted reliable and easy-to-use newsletter tool. Alternative to proprietary services like Mailchimp or Sendinblue. ([Demo](https://app.keila.io), [Source Code](https://github.com/pentacent/keila)) `AGPL-3.0` `Docker`
- [Listmonk](https://listmonk.app/) - High performance, self-hosted newsletter and mailing list manager with a modern dashboard. ([Source Code](https://github.com/knadh/listmonk)) `AGPL-3.0` `Go/Docker`
- [Mailman](https://www.gnu.org/software/mailman/) - The Gnu mailing list server. `GPL-3.0` `Python`
- [Mailtrain](https://github.com/Mailtrain-org/mailtrain) - Self hosted newsletter application. `GPL-3.0` `Nodejs`
- [Mautic](https://www.mautic.org/) - Mautic is marketing automation software (email, social and more). ([Source Code](https://github.com/mautic/mautic)) `GPL-3.0` `PHP`
- [phpList](https://phplist.org) - Newsletter and email marketing with advanced management of subscribers, bounces, and plugins. ([Source Code](https://github.com/phpList/phplist3)) `AGPL-3.0` `PHP`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - Web user interface to access GNU Mailman. ([Source Code](https://gitlab.com/mailman/postorius/)) `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPG-enabled mailing list manager with resending-capabilities. ([Source Code](https://0xacab.org/schleuder/schleuder/tree/master)) `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.community/) - Mailing list manager. `GPL-2.0` `Perl`


### Communication - Email - Webmail Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Webmail](https://en.wikipedia.org/wiki/Webmail) clients.

- [Cypht](https://cypht.org) - Feed reader for your email accounts. ([Source Code](https://github.com/cypht-org/cypht)) `LGPL-2.1` `PHP`
- [IMP](https://www.horde.org/apps/imp/) - HORDE application that provides webmail access to IMAP and POP3 accounts. ([Demo](http://demo.horde.org/), [Source Code](https://www.horde.org/download/imp)) `GPL-2.0` `PHP`
- [MailCare](https://mailcare.io) - Open source disposable email address service. ([Source Code](https://gitlab.com/mailcare/mailcare)) `MIT` `PHP`
- [Roundcube](https://roundcube.net) - Browser-based IMAP client with an application-like user interface. ([Source Code](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP`
- [SnappyMail](https://snappymail.eu/) - Simple, modern, lightweight & fast web-based email client. (It is an actively developed fork of RainLoop). ([Demo](https://snappymail.eu/demo/), [Source Code](https://github.com/the-djmaze/snappymail)) `AGPL-3.0` `PHP`
- [SquirrelMail](https://squirrelmail.org) - Another browser-based IMAP client. ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`


### Communication - IRC

**[`^        back to top        ^`](#awesome-selfhosted)**

[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) communication software.

- [Convos](https://convos.chat/) - Always online web IRC client. ([Demo](https://convos.chat/#instant-demo), [Source Code](https://github.com/convos-chat/convos)) `Artistic-2.0` `Perl/Docker`
- [Ergo](https://ergo.chat/) - Modern IRCv3 server written in Go, combining the features of an ircd, a services framework, and a bouncer. ([Source Code](https://github.com/ergochat/ergo)) `MIT` `Go/Docker`
- [Glowing Bear](https://github.com/glowing-bear/glowing-bear) - A web frontend for WeeChat. ([Demo](https://www.glowing-bear.org)) `GPL-3.0` `Nodejs`
- [InspIRCd](https://www.inspircd.org/) - Modular IRC server written in C++ for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/inspircd/inspircd)) `GPL-2.0` `C++/Docker`
- [Kiwi IRC](https://kiwiirc.com/) - Responsive web IRC client with theming support. ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - Free, portable and lightweight Internet Relay Chat server for small or private networks. ([Source Code](https://github.com/ngircd/ngircd)) `GPL-2.0` `C`
- [Quassel IRC](https://quassel-irc.org/) - Distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. ([Source Code](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - RobustIRC is IRC without netsplits. Distributed IRC server, based on RobustSession protocol. ([Source Code](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [The Lounge](https://thelounge.chat/) - Self-hosted web IRC client. ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge)) `MIT` `Nodejs/Docker`
- [UnrealIRCd](https://www.unrealircd.org/) - Modular, advanced and highly configurable IRC server written in C for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/unrealircd/unrealircd)) `GPL-2.0` `C`
- [Weechat](https://weechat.org/) - Fast, light and extensible chat client. `GPL-3.0` `C`
- [ZNC](https://wiki.znc.in/ZNC) - Advanced IRC bouncer. ([Source Code](https://github.com/znc/znc)) `Apache-2.0` `C++`


### Communication - SIP

**[`^        back to top        ^`](#awesome-selfhosted)**

[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) telephony software.

- [Asterisk](https://www.asterisk.org/) - Easy to use but advanced IP PBX system, VoIP gateway and conference server. ([Source Code](https://github.com/asterisk/asterisk)) `GPL-2.0` `C`
- [ASTPP](https://www.astppbilling.org/) - VoIP Billing Solution for Freeswitch. It supports prepaid and postpaid billing with call rating and credit control. It also provides many other features. ([Source Code](https://github.com/iNextrix/ASTPP)) `AGPL-3.0` `PHP`
- [Eqivo](https://eqivo.org/) - Eqivo implements an API layer on top of FreeSWITCH facilitating integration between web applications and voice/video-enabled endpoints such as traditional phone lines (PSTN), VoIP phones, webRTC clients etc. ([Source Code](https://github.com/rtckit/eqivo)) `MIT` `Docker/PHP`
- [Flexisip](https://www.linphone.org/technical-corner/flexisip/) - A complete, modular and scalable SIP server, includes a push gateway, to deliver SIP incoming calls or text messages on mobile device platforms where push notifications are required to receive information when the app is not active in the foreground. ([Source Code](https://github.com/BelledonneCommunications/flexisip)) `AGPL-3.0` `C/Docker`
- [Freepbx](https://www.freepbx.org) - Web-based open source GUI that controls and manages Asterisk. ([Source Code](https://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - Scalable open source cross-platform telephony platform. ([Source Code](https://github.com/signalwire/freeswitch)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - Open source project that provides a customizable and flexible web interface to the very powerful and highly scalable multi-platform voice switch called FreeSWITCH. ([Source Code](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](https://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc). ([Source Code](https://github.com/kamailio/kamailio)) `GPL-2.0` `C`
- [Kazoo](https://2600hz.org/) - KAZOO is an open-source, highly scalable software platform designed to provide carrier-grade VoIP switch functions and features. ([Source Code](https://github.com/2600hz/KAZOO)) `MPL-1.1` `Erlang`
- [openSIPS](https://opensips.org/) - OpenSIPS is an Open Source SIP proxy/server for voice, video, IM, presence and any other SIP extensions. ([Source Code](https://github.com/OpenSIPS/opensips)) `GPL-2.0` `C`
- [Routr](https://routr.io) - A lightweight sip proxy, location server, and registrar for a reliable and scalable SIP infrastructure. ([Source Code](https://github.com/fonoster/routr)) `MIT` `Docker`
- [SIP3](https://sip3.io/) - VoIP troubleshooting and monitoring platform. ([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/)) `Apache-2.0` `Kotlin`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - Troubleshooting and monitoring VoIP calls. ([Source Code](https://github.com/sipcapture/homer)) `AGPL-3.0` `Angular/C`
- [Wazo](https://wazo-platform.org/) - Full-featured IPBX solution built atop Asterisk with integrated Web administration interface and REST-ful API. ([Source Code](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - Transit class4 softswitch(SBC) with integrated billing and routing engine and REST API. ([Demo](https://yeti-switch.org/demo.html), [Source Code](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`


### Communication - Social Networks and Forums

**[`^        back to top        ^`](#awesome-selfhosted)**

[Social Networking](https://en.wikipedia.org/wiki/Social_networking_service) and [Forum](https://en.wikipedia.org/wiki/Internet_forum) software.

- [Akkoma](https://akkoma.social/) - Federated microblogging server with Mastodon, GNU social, and ActivityPub compatibility. ([Source Code](https://akkoma.dev/AkkomaGang/akkoma)) `AGPL-3.0` `Elixir`
- [Anahita](https://www.anahita.io/) - Open Source Social Networking Framework and Platform. ([Source Code](https://github.com/anahitasocial/anahita)) `GPL-3.0` `PHP`
- [Answer](https://answer.dev/) - An open-source knowledge-based community software. You can use it to quickly build your Q&A community for product technical support, customer support, user communication, and more. ([Source Code](https://github.com/answerdev/answer)) `Apache-2.0` `Docker/Go`
- [AsmBB](https://board.asm32.info) - A fast, SQLite-powered forum engine written in ASM. ([Source Code](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [Bibliogram](https://bibliogram.art) `⚠` - An alternative front-end for Instagram. ([Source Code](https://sr.ht/~cadence/bibliogram/)) `AGPL-3.0` `Nodejs`
- [Buddycloud](http://buddycloud.com/) - Tools, libraries, services and a community to build user-to-user, group and social messaging into your app. Saves time. Scales up. Supports you. ([Source Code](https://github.com/buddycloud)) `Apache-2.0` `Java`
- [BuddyPress](https://buddypress.org/about/) - Powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more. ([Source Code](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Cactus Comments](https://cactus.chat/) - Cactus Comments is a federated comment system for the open web built on Matrix. ([Demo](https://cactus.chat/demo/), [Source Code](https://gitlab.com/cactus-comments/)) `GPL-3.0` `Python`
- [Chirpy](https://chirpy.dev) - Chirpy is an open-source, privacy-friendly and customizable Disqus (comment system) alternate. ([Demo](https://chirpy.dev/play), [Source Code](https://github.com/devrsi0n/chirpy)) `AGPL-3.0` `Docker/Nodejs`
- [Commento](https://gitlab.com/commento/commento) - Commento is a discussion platform that you can embed on your blog, news articles, and any place where you want your readers to add comments. `MIT` `Go`
- [Coral](https://coralproject.net/) - A better commenting experience from Vox Media. ([Source Code](https://github.com/coralproject/talk)) `Apache-2.0` `Nodejs`
- [diaspora*](https://diasporafoundation.org/) - Distributed social networking server. ([Source Code](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](https://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS. ([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse)) `GPL-2.0` `Ruby`
- [Elgg](https://elgg.org/) - Powerful open source social networking engine. ([Source Code](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Enigma 1/2 BBS](https://nuskooler.github.io/enigma-bbs/) - Enigma 1/2 is a modern, multi-platform BBS engine with unlimited "callers" and legacy DOS door game support. ([Demo](https://l33t.codes/xibalba-bbs/), [Source Code](https://github.com/NuSkooler/enigma-bbs)) `BSD-2-Clause` `Shell/Docker/Nodejs`
- [Flarum](https://flarum.org) - Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
- [FlaskBB](https://flaskbb.org/) - FlaskBB is forum software written in Python using the microframework Flask. You can easily create new topics, posts and send other users private messages. It also includes basic administration and moderation tools. ([Source Code](https://github.com/flaskbb/flaskbb)) `BSD-3-Clause` `Python`
- [Friendica](https://friendi.ca/) - Social Communication Server. ([Source Code](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [GNU social](https://www.gnusocial.rocks/) - Social communication software for both public and private communications. ([Source Code](https://codeberg.org/GNUsocial/gnu-social)) `AGPL-3.0` `PHP`
- [GoToSocial](https://github.com/superseriousbusiness/gotosocial) - ActivityPub federated social network server implementing the Mastodon client API. `AGPL-3.0` `Docker/Go`
- [Hubzilla](https://hubzilla.org) - Decentralized identity, privacy, publishing, sharing, cloud storage, and communications/social platform. ([Source Code](https://framagit.org/hubzilla/core)) `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - Flexible kit for private social networks. ([Source Code](https://github.com/humhub/humhub)) `AGPL-3.0` `PHP`
- [Isso](https://isso-comments.de/) - Lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus. ([Source Code](https://github.com/posativ/isso)) `MIT` `Python/Docker`
- [kbin](https://kbin.pub/) - Federated content aggregator and microblogging platform. ([Source Code](https://github.com/ernestwisniewski/kbin)) `AGPL-3.0` `PHP/Nodejs/Docker`
- [Lemmy](https://join-lemmy.org/) - A link aggregator / reddit clone for the fediverse. Reddit alternative built in Rust. ([Source Code](https://github.com/LemmyNet/lemmy)) `AGPL-3.0` `Rust`
- [Libreddit](https://github.com/spikecodes/libreddit/) `⚠` - Private front-end for Reddit written in Rust. `AGPL-3.0` `Rust`
- [Loomio](https://www.loomio.org/) - Loomio is a collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them. ([Source Code](https://github.com/loomio/loomio)) `AGPL-3.0` `Ruby`
- [Mastodon](https://joinmastodon.org/) - Federated microblogging server, an alternative to GNU social. ([Source Code](https://github.com/mastodon/mastodon)) `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - Misago is fully featured modern forum application that is fast, scalable and responsive. ([Source Code](https://github.com/rafalp/Misago)) `GPL-2.0` `Python`
- [Misskey](https://misskey.io/) - Decentralized app-like microblogging server/SNS for the Fediverse, using the ActivityPub protocol like GNU social and Mastodon. ([Source Code](https://github.com/misskey-dev/misskey)) `AGPL-3.0` `Nodejs`
- [Movim](https://movim.eu/) - Modern, federated social network based on XMPP, with a fully featured group-chat, subscriptions and microblogging. ([Source Code](https://github.com/movim/movim)) `AGPL-3.0` `PHP`
- [MyBB](https://mybb.com/) - Free, extensible forum software package. ([Source Code](https://github.com/mybb/mybb)) `LGPL-3.0` `PHP`
- [Nitter](https://nitter.net) `⚠` - A alternative front end to twitter. ([Source Code](https://github.com/zedeus/nitter)) `AGPL-3.0` `Nimble`
- [NodeBB](https://nodebb.org/) - Forum software built for the modern web. ([Source Code](https://github.com/NodeBB/NodeBB)) `GPL-3.0` `Nodejs`
- [Orange Forum](https://www.goodoldweb.com/) - Orange Forum is an easy to deploy forum that has minimal dependencies and uses very little javascript. ([Source Code](https://github.com/s-gv/orangeforum)) `BSD-3-Clause` `Go`
- [OSSN](https://www.opensource-socialnetwork.org/) - Open Source Social Network (OSSN) is a social networking software written in PHP. It allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests. ([Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)) `GPL-2.0` `PHP`
- [phpBB](https://www.phpbb.com/) - Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website. ([Source Code](https://github.com/phpbb/phpbb)) `GPL-2.0` `PHP`
- [PixelFed](https://pixelfed.social) - Pixelfed is an open-source, federated platform alternate to Instagram. ([Source Code](https://github.com/pixelfed/pixelfed)) `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - Federated microblogging server, Mastodon, GNU social, & ActivityPub compatible. ([Source Code](https://git.pleroma.social/pleroma/pleroma)) `AGPL-3.0` `Elixir`
- [qpixel](https://codidact.com/) - Q&A-based community knowledge-sharing software. ([Source Code](https://github.com/codidact/qpixel)) `AGPL-3.0` `Ruby`
- [remark42](https://remark42.com/) - A lightweight and simple comment engine, which doesn't spy on users. It can be embedded into blogs, articles or any other place where readers add comments. ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42)) `MIT` `Go`
- [Retrospring](https://github.com/retrospring/retrospring) - A free, open-source social network following the Q/A (question and answer) principle of sites like Formspring, ask.fm or CuriousCat. ([Demo](https://retrospring.net)) `AGPL-3.0` `Ruby/Nodejs`
- [schnack](https://github.com/schn4ck/schnack) - Schnack is simple self-hosted node app for Disqus-like drop-in commenting on static websites. `LIL-1.0` `Nodejs`
- [Scoold](https://scoold.com) - Stack Overflow in a JAR. An enterprise-ready Q&A platform with full-text search, SAML, LDAP integration and social login support. ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold)) `Apache-2.0` `Java`
- [Simple Machines Forum](https://www.simplemachines.org/) - Free, professional grade software package that allows you to set up your own online community within minutes. ([Source Code](https://github.com/SimpleMachines/SMF)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - Federated and decentralized profile builder and social network engine. ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Python`
- [Takahē](https://jointakahe.org/) - Federated microblogging server. Mastodon, & ActivityPub compatible. ([Source Code](https://github.com/jointakahe/takahe)) `BSD-3-Clause` `Docker`
- [Talkyard](https://www.talkyard.io/) - Create a community, where your users can suggest ideas and get questions answered. And have friendly open-ended discussions and chat (Slack/StackOverflow/Discourse/Reddit/Disqus hybrid). ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard)) `AGPL-3.0` `Scala`
- [Teddit](https://teddit.net) `⚠` - Alternative Reddit front-end focused on privacy. ([Source Code](https://codeberg.org/teddit/teddit)) `AGPL-3.0` `Nodejs`
- [Thredded](https://github.com/thredded/thredded) - Forums, feature-rich and simple. `MIT` `Ruby`
- [Vanilla Forums](https://vanillaforums.org/) - Simple and flexible forum software. ([Source Code](https://github.com/vanilla/vanilla)) `GPL-2.0` `PHP`
- [yarn.social](https://yarn.social) - Self-Hosted, Twitter™-like Decentralised micro-logging platform. No ads, no tracking, your content, your data. ([Source Code](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`
- [Zusam](https://github.com/zusam/zusam) - Free and open-source way to self-host private forums for groups of friends or family. ([Demo](https://demo.zusam.org)) `AGPL-3.0` `PHP`


### Communication - Video Conferencing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video/Web Conferencing](https://en.wikipedia.org/wiki/Web_conferencing) tools and software.

_Related: [Conference Management](#conference-management)_

- [BigBlueButton](https://bigbluebutton.org/) - Supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen. Instructors can engage remote students with polling, emojis, and breakout rooms. ([Demo](https://demo.bigbluebutton.org/gl), [Source Code](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Galene](https://galene.org/) - Galène (or Galene) is a videoconference server (an “SFU”) that is easy to deploy and that requires moderate server resources. ([Source Code](https://github.com/jech/galene)) `MIT` `Go`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Meet is an OpenSource (MIT) WebRTC Javascript application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Source Code](https://github.com/jitsi/jitsi-meet)) `Apache-2.0` `Nodejs/Docker`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java`
- [LiveKit](https://livekit.io/) - Modern, scalable WebRTC conferencing platform with client SDKs. ([Demo](https://github.com/livekit/livekit#live-demos), [Source Code](https://github.com/livekit/livekit)) `Apache-2.0` `Go`
- [MiroTalk C2C](https://c2c.mirotalk.com) - Real-time cam-2-cam video calls & screen sharing, end-to-end encrypted, to embed in any website with a simple iframe. ([Source Code](https://github.com/miroslavpejic85/mirotalkc2c)) `MIT` `Nodejs/Docker`
- [MiroTalk P2P](https://p2p.mirotalk.com) - Simple, secure, fast real-time video conferences up to 4k and 60fps, compatible with all browsers and platforms. ([Demo](https://p2p.mirotalk.com/newcall), [Source Code](https://github.com/miroslavpejic85/mirotalk)) `AGPL-3.0` `Nodejs/Docker`
- [MiroTalk SFU](https://sfu.mirotalk.com) - Simple, secure, scalable real-time video conferences up to 4k, compatible with all browsers and platforms. ([Demo](https://sfu.mirotalk.com/newroom), [Source Code](https://github.com/miroslavpejic85/mirotalksfu)) `AGPL-3.0` `Nodejs/Docker`
- [plugNmeet](https://www.plugnmeet.org/) - Scalable, High Performance, Open source web conferencing system. ([Demo](https://demo.plugnmeet.com/login.html), [Source Code](https://github.com/mynaparrot/plugNmeet-server)) `MIT` `Docker/Go`
- [Wirow](https://github.com/wirow-io/wirow-server) - A full featured self-hosted video web-conferencing platform. `AGPL-3.0` `C`


### Communication - XMPP - Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) servers.

- [ejabberd](https://www.ejabberd.im/) - XMPP instant messaging server. ([Source Code](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang`
- [jackal](https://github.com/ortuman/jackal) - XMPP server with focus on stability, simple configuration and low resource consumption. `Apache-2.0` `Go`
- [Metronome IM](https://metronome.im/) - Fork of Prosody IM. ([Source Code](https://github.com/maranda/metronome)) `MIT` `Lua`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - Mobile messaging platform with a focus on performance and scalability. ([Source Code](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang`
- [Openfire](https://www.igniterealtime.org/projects/openfire/) - Real time collaboration (RTC) server. ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](https://prosody.im/) - Feature-rich and easy to configure XMPP server. ([Source Code](https://hg.prosody.im/)) `MIT` `Lua`
- [Snikket](https://snikket.org/) - All-in-one Dockerized easy XMPP solution, including web admin and clients. ([Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/)) `Apache-2.0` `Lua/Python`
- [Tigase](https://tigase.net/xmpp-server) - XMPP server implementation in Java. `GPL-3.0` `Java`


### Communication - XMPP - Web Clients

**[`^        back to top        ^`](#awesome-selfhosted)**

[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) Web clients/interfaces.

- [Converse.js](https://conversejs.org/) - Free and open-source XMPP chat client in your browser. ([Source Code](https://github.com/conversejs/converse.js)) `MPL-2.0` `Javascript`
- [JSXC](https://jsxc.org) - Real-time XMPP web chat application with video calls, file transfer and encrypted communication. There are also versions for Nextcloud/Owncloud and SOGo. ([Source Code](https://github.com/jsxc/jsxc)) `MIT` `Javascript`
- [Libervia](https://repos.goffi.org/libervia-web) - Web frontend from Salut à Toi. `AGPL-3.0` `Python`
- [Salut à Toi](https://www.salut-a-toi.org/) - Multipurpose, multi frontend, libre and decentralized communication tool. ([Source Code](https://repos.goffi.org/libervia-backend)) `AGPL-3.0` `Python`


### Community-Supported Agriculture (CSA)

**[`^        back to top        ^`](#awesome-selfhosted)**

Management and administration tools for community supported agriculture and food cooperatives.

_Related: [E-commerce](#e-commerce)_

- [ACP Admin](https://acp-admin.ch/) - CSA administration. Manage members, subscriptions, deliveries, drop-off locations, member participation, invoices and emails. ([Source Code](https://github.com/acp-admin/acp-admin/)) `MIT` `Ruby`
- [FoodCoopShop](https://www.foodcoopshop.com/) - User-friendly open source software for food-coops. ([Source Code](https://github.com/foodcoopshop/foodcoopshop)) `AGPL-3.0` `PHP`
- [Foodsoft](https://foodcoops.net/) - Web-based software to manage a non-profit food coop (product catalog, ordering, accounting, job scheduling). ([Source Code](https://github.com/foodcoops/foodsoft)) `AGPL-3.0` `Ruby`
- [juntagrico](https://juntagrico.org/) - Management platform for community gardens and vegetable cooperatives. ([Source Code](https://github.com/juntagrico/juntagrico)) `LGPL-3.0` `Python`
- [Local Food Nodes](https://localfoodnodes.org/) - Your open source platform for peoples driven local food markets and CSA. ([Source Code](https://gitlab.com/localfoodnodes/localfoodnodes)) `MIT` `PHP`
- [Open Food Network](https://www.openfoodnetwork.org/) - Online marketplace for local food. It enables a network of independent online food stores that connect farmers and food hubs with individuals and local businesses. ([Source Code](https://github.com/openfoodfoundation/openfoodnetwork)) `AGPL-3.0` `Ruby`
- [OpenOlitor](https://openolitor.org/) - Administration platform for Community Supported Agriculture groups. ([Source Code](https://github.com/OpenOlitor/openolitor-server)) `AGPL-3.0` `Scala`
- [teikei](https://github.com/teikei/teikei) - A web application that maps out community-supported agriculture based on crowdsourced data. ([Demo](https://ernte-teilen.org/karte/#/)) `AGPL-3.0` `Nodejs`


### Conference Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for submission of [abstracts](https://en.wikipedia.org/wiki/Abstract_management) and preparation/management of academic conferences.

- [Conference Organizing Distribution (COD)](http://usecod.com/) - Create conference and event websites built on top of Drupal. ([Source Code](https://git.drupalcode.org/project/cod)) `GPL-2.0` `PHP`
- [frab](https://frab.github.io/frab/) - Web-based conference planning and management system. It helps to collect submissions, to manage talks and speakers and to create a schedule. ([Source Code](https://github.com/frab/frab)) `MIT` `Ruby`
- [indico](https://getindico.io/) - A feature-rich event management system, made @ CERN, the place where the Web was born. ([Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico)) `MIT` `Python`
- [osem](https://osem.io/) - Event management tailored to free Software conferences. ([Source Code](https://github.com/openSUSE/osem)) `MIT` `Ruby`
- [pretalx](https://pretalx.org) - Web-based event management, including running a Call for Papers, reviewing submissions, and scheduling talks. Exports and imports for various related tools. ([Source Code](https://github.com/pretalx/pretalx)) `Apache-2.0` `Python`


### Content Management Systems (CMS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Content Management Systems](https://en.wikipedia.org/wiki/Content_management_system) offer a practical way to setup a website with many features, using third party plugins, themes and functionality that are easy to add and customize.

_Related: [Blogging Platforms](#blogging-platforms), [Static Site Generators](#static-site-generators)_

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - The open source Enterprise Content Management software that handles any type of content, allowing users to easily share and collaborate on content. ([Source Code](https://hub.alfresco.com/t5/alfresco-content-services-hub/project-overview-repository/ba-p/290502)) `LGPL-3.0` `Java`
- [Apostrophe](https://apostrophecms.com/) - CMS with a focus on extensible in-context editing tools. ([Demo](https://apostrophecms.com/demo), [Source Code](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [b2evolution CMS](https://b2evolution.net/) - The most integrated CMS ever: b2evolution includes everything you need to build websites for publishing, sharing and interacting with your community. ([Source Code](https://github.com/b2evolution/b2evolution)) `GPL-2.0` `PHP`
- [Backdrop CMS](https://backdropcms.org/) - Comprehensive CMS for small to medium sized businesses and non-profits. ([Source Code](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [BigTree CMS](https://www.bigtreecms.org/) - Straightforward, well documented, and capable written with PHP and MySQL. ([Source Code](https://github.com/bigtreecms/BigTree-CMS)) `LGPL-2.1` `PHP`
- [Bludit](https://www.bludit.com/) `⚠` - Simple application to build a site or blog in seconds. Bludit uses flat-files (text files in JSON format) to store posts and pages. ([Demo](https://demo.bludit.com/), [Source Code](https://github.com/bludit/bludit)) `MIT` `PHP`
- [Bolt CMS](https://boltcms.io/) - Open source Content Management Tool, which strives to be as simple and straightforward as possible. ([Source Code](https://github.com/bolt/core)) `MIT` `PHP`
- [CMS Made Simple](https://www.cmsmadesimple.org/) - Open source content management system, faster and easier management of website contents, scalable for small businesses to large corporations. ([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-2.0` `PHP`
- [Cockpit](https://getcockpit.com) - Simple Content Platform to manage any structured content. ([Source Code](https://github.com/agentejo/cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](https://www.concretecms.com) - Open source content management system. ([Source Code](https://github.com/concretecms/concretecms)) `MIT` `PHP`
- [Contao](https://contao.org/) - Contao is a powerful open source CMS that allows you to create professional websites and scalable web applications. ([Source Code](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](https://www.couchcms.com/) - Simple Open-Source CMS for designers. ([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Drupal](https://www.drupal.org/) - Advanced open source content management platform. ([Source Code](https://git.drupalcode.org/project/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](https://www.elabftw.net) - Online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - Content Management System for powering database driven websites using JSON schemas. Provides permission management and automatic REST APIs. `MIT` `Nodejs`
- [Flextype](https://flextype.org/) - Flextype is an open-source Hybrid Content Management System with the freedom of a headless CMS and with the full functionality of a traditional CMS. ([Source Code](https://github.com/flextype/flextype)) `MIT` `PHP`
- [Joomla!](https://www.joomla.org/) - Advanced Content Management System (CMS). ([Source Code](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](https://keystonejs.com/) - CMS and Web Application Platform. ([Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [MODX](https://modx.com/) - MODX is an advanced content management and publishing platform. The current version is called 'Revolution'. ([Source Code](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - Neos or TYPO3 Neos (for version 1) is a modern, open source CMS. ([Source Code](https://github.com/neos)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - Noosfero is a web platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective intelligence for solidarity economy in the same system. `AGPL-3.0` `Ruby`
- [Omeka](https://omeka.org) - Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](https://omeka.org/classic/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Payload CMS](https://payloadcms.com/) - Developer-first headless CMS and application framework. ([Demo](https://demo.payloadcms.com), [Source Code](https://github.com/payloadcms/payload)) `MIT` `Nodejs`
- [Pico](https://picocms.org/) - Stupidly simple, blazing fast, flat file CMS. ([Source Code](https://github.com/picocms/Pico)) `MIT` `PHP`
- [Pimcore](https://www.pimcore.org/) - Multi-Channel Experience and Engagement Management Platform. ([Source Code](https://github.com/pimcore/pimcore)) `GPL-3.0` `PHP`
- [Plone](https://plone.org/) - Powerful open-source CMS system. ([Source Code](https://github.com/plone)) `ZPL-2.0` `Python`
- [PropertyWebBuilder](https://propertywebbuilder.com) - Ultimate Ruby on Rails engine for creating real estate websites. ([Source Code](https://github.com/etewiah/property_web_builder)) `MIT` `Ruby`
- [Publify](https://publify.github.io/) - Simple but full featured web publishing software. ([Source Code](https://github.com/publify/publify)) `MIT` `Ruby`
- [Rapido](https://framagit.org/InfoLibre/rapido) - Create your website with Rapido. Edit, publish and share collaborative content. `AGPL-3.0` `Go`
- [REDAXO](https://www.redaxo.org) - Simple, flexible and useful content management system (documentation only available in German). ([Source Code](https://github.com/redaxo/redaxo)) `MIT` `PHP`
- [Roadiz](https://www.roadiz.io/) - Modern CMS based on a node system which can handle many types of services. ([Source Code](https://github.com/roadiz/roadiz)) `MIT` `PHP`
- [SilverStripe](https://www.silverstripe.org) - Easy to use CMS with powerful MVC framework underlying. ([Demo](https://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe)) `BSD-3-Clause` `PHP`
- [SPIP](https://www.spip.net/fr) - Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors. ([Source Code](https://git.spip.net/)) `GPL-3.0` `PHP`
- [Squidex](https://squidex.io) - Headless CMS, based on MongoDB, CQRS and Event Sourcing. ([Demo](https://cloud.squidex.io), [Source Code](https://github.com/Squidex/squidex)) `MIT` `.NET`
- [Strapi](https://strapi.io/) - The most advanced open-source Content Management Framework (headless-CMS) to build powerful API with no effort. ([Source Code](https://github.com/strapi/strapi)) `MIT` `Nodejs`
- [Textpattern](https://textpattern.com/) - Flexible, elegant and easy-to-use CMS. ([Demo](https://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern)) `GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - Author-friendly flat-file-cms with a visual markdown editor based on vue.js. ([Source Code](https://github.com/typemill/typemill)) `MIT` `PHP`
- [TYPO3](https://typo3.org/) - Powerful and advanced CMS with a large community. ([Source Code](https://github.com/TYPO3/typo3)) `GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - The friendly CMS. Free and open source with an amazing community. ([Source Code](https://github.com/umbraco/Umbraco-CMS)) `MIT` `.NET`
- [Wagtail](https://wagtail.io/) - Django content management system focused on flexibility and user experience. ([Source Code](https://github.com/wagtail/wagtail)) `BSD-3-Clause` `Python`
- [WinterCMS](https://wintercms.com/) - Speedy and secure content management system built on the Laravel PHP framework. ([Source Code](https://github.com/wintercms/winter)) `MIT` `PHP`
- [WonderCMS](https://www.wondercms.com) - WonderCMS is the smallest flat file CMS since 2008. ([Demo](https://www.wondercms.com/demo), [Source Code](https://github.com/WonderCMS/wondercms)) `MIT` `PHP`
- [WordPress](https://wordpress.org/) - World's most-used blogging and CMS engine. ([Source Code](https://github.com/WordPress/WordPress)) `GPL-2.0` `PHP`


### Database Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Web interfaces for [database](https://en.wikipedia.org/wiki/Database) management. Includes tools for database analytics and visualization.

_Related: [Analytics](#analytics), [Automation](#automation)_

_See also: [dbdb.io - Database of Databases](https://dbdb.io/)_

- [Adminer](https://www.adminer.org/) - Database management in a single PHP file. Available for MySQL, MariaDB, PostgreSQL, SQLite, MS SQL, Oracle, Elasticsearch, MongoDB and others. ([Source Code](https://github.com/vrana/adminer/)) `Apache-2.0/GPL-2.0` `PHP`
- [Baserow](https://baserow.io/) - Open source online database tool and Airtable alternative. Create your own database without technical experience. ([Source Code](https://gitlab.com/bramw/baserow)) `MIT` `Python/Nodejs`
- [Bytebase](https://www.bytebase.com/) - Safe database schema change and version control for DevOps teams, supports MySQL, PostgreSQL, TiDB, ClickHouse, and Snowflake. ([Demo](https://demo.bytebase.com), [Source Code](https://github.com/bytebase/bytebase)) `MIT` `Docker/Go`
- [Chartbrew](https://chartbrew.com) - Web application that can connect directly to databases and APIs and use the data to create beautiful charts. ([Demo](https://app.chartbrew.com/live-demo), [Source Code](https://github.com/chartbrew/chartbrew)) `MIT` `Nodejs`
- [CloudBeaver](https://cloudbeaver.io/) - Self-hosted management of databases, supports PostgreSQL, MySQL, SQLite and more. A web/hosted version of DBeaver. ([Source Code](https://github.com/dbeaver/cloudbeaver)) `Apache-2.0` `Nodejs`
- [Databunker](https://databunker.org/) - Network-based, self-hosted, GDPR compliant, secure database for personal data or PII. ([Source Code](https://github.com/securitybunker/databunker)) `MIT` `Go`
- [Datasette](https://datasette.io/) - An open source multi-tool for exploring and publishing data, easy import and export and database management. ([Demo](https://global-power-plants.datasettes.com/global-power-plants/global-power-plants), [Source Code](https://github.com/simonw/datasette)) `Apache-2.0` `Python`
- [Directus](https://directus.io/) - An Instant App & API for your SQL Database. Directus wraps your new or existing SQL database with a realtime GraphQL+REST API for developers, and an intuitive admin app for non-technical users. ([Source Code](https://github.com/directus/directus)) `GPL-3.0` `Nodejs`
- [Evidence](https://evidence.dev) - Evidence is a code-based BI tool. Write reports using SQL and markdown and they render as a website. ([Source Code](https://github.com/evidence-dev/evidence)) `MIT` `Nodejs`
- [Limbas](https://www.limbas.com/en/) - Limbas is a database framework for creating database-driven business applications. As a graphical database frontend, it enables the efficient processing of data stocks and the flexible development of comfortable database applications. ([Source Code](https://github.com/limbas/limbas)) `GPL-2.0` `PHP`
- [Mathesar](https://mathesar.org/) - An intuitive UI for managing data collaboratively, for users of all technical skill levels. Built on Postgres – connect an existing DB or set up a new one. ([Demo](https://demo.mathesar.org/), [Source Code](https://github.com/centerofci/mathesar)) `GPL-3.0` `Docker`
- [MindsDB](https://github.com/mindsdb/mindsdb) - MindsDB is an open source self hosted AI layer for existing databases that allows you to effortlessly develop, train and deploy state-of-the-art machine learning models using standard queries. `GPL-3.0` `Python`
- [NocoDB](https://www.nocodb.com/) - No-code platform that turns any database into a smart spreadsheet. It can be considered as an Airtable or Smartsheet alternative. ([Source Code](https://github.com/nocodb/nocodb)) `GPL-3.0` `Nodejs`


### DNS

**[`^        back to top        ^`](#awesome-selfhosted)**

[DNS](https://en.wikipedia.org/wiki/Domain_Name_System) servers and management tools with advertisement blocking funtionality, primarly aimed at home or small networks.

_See also: [awesome-sysadmin/DNS - Servers](https://github.com/awesome-foss/awesome-sysadmin#dns---servers), [awesome-sysadmin/DNS - Control Panels & Domain Management](https://github.com/awesome-foss/awesome-sysadmin#dns---control-panels--domain-management)_

- [blocky](https://github.com/0xERR0R/blocky) - Fast and lightweight DNS proxy (like Pi-hole) as ad-blocker for local network with many features. `Apache-2.0` `Go`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - Local ad blocker. Like Pi-hole but local and using your operating system. ([Source Code](https://github.com/tanrax/maza-ad-blocking)) `Apache-2.0` `Bash`
- [Pi-hole](https://pi-hole.net/) - A blackhole for Internet qdvertisements with a GUI for management and monitoring. ([Source Code](https://github.com/pi-hole/pi-hole)) `EUPL-1.2` `Shell/PHP`
- [Technitium DNS Server](https://technitium.com/dns/) - Authoritative/recursive DNS server with ad blocking functionality. ([Source Code](https://github.com/TechnitiumSoftware/DnsServer)) `GPL-3.0` `Docker/C#`


### Document Management

**[`^        back to top        ^`](#awesome-selfhosted)**

A [document management system](https://en.wikipedia.org/wiki/Document_management_system) (DMS) is a system used to receive, track, manage and store documents and reduce paper.

- [DOCAT](https://github.com/docat-org/docat) - Host your docs. Simple. Versioned. Fancy. `MIT` `Python/Docker`
- [Docspell](https://docspell.org) - Auto-tagging document organizer and archive. ([Source Code](https://github.com/eikek/docspell)) `GPL-3.0` `Scala/Java`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core) - A simple Document Management System for private use with basic functionality to organize your documents digitally. `GPL-3.0` `Ruby`
- [I, Librarian](https://i-librarian.net) - I, Librarian can organize PDF papers and office documents. It provides a lot of extra features for students and research groups both in industry and academia. ([Demo](https://i-librarian.net/demo/), [Source Code](https://github.com/mkucej/i-librarian-free)) `GPL-3.0` `PHP`
- [Mayan EDMS](https://www.mayan-edms.com) - Free Open Source Electronic Document Management System. An electronic vault for your documents with preview generation, OCR, and automatic categorization among other features. ([Source Code](https://gitlab.com/mayan-edms/mayan-edms)) `Apache-2.0` `Python`
- [Paperless-ngx](https://docs.paperless-ngx.com/) - A fork of paperless, adding a new interface and many other changes under the hood. Scan, index, and archive all of your paper documents. ([Demo](https://demo.paperless-ngx.com/), [Source Code](https://github.com/paperless-ngx/paperless-ngx)) `GPL-3.0` `Python`
- [Papermerge](https://papermerge.com) - Open Source Document Management System focused on scanned documents (electronic archives). Features file browsing in similar way to dropbox/google drive. OCR, full text search, text overlay/selection. ([Source Code](https://github.com/ciur/papermerge)) `Apache-2.0` `Python`
- [paper{s}pace](https://dedicatedcode.com/projects.html) - Small web application to manage all your offline documents. Provides a searchable storage for your documents and reminds you of upcoming tasks. ([Source Code](https://gitlab.com/dedicatedcode/paperspace)) `MIT` `Java`
- [Stirling-PDF](https://github.com/Frooodle/Stirling-PDF) - Local hosted web application that allows you to perform various operations on PDF files, such as merging, splitting, file conversions and OCR. `Apache-2.0` `Docker/Java`
- [Teedy](https://teedy.io/) - Lightweight document management system packed with all the features you can expect from big expensive solutions (Ex SismicsDocs). ([Demo](https://demo.teedy.io/), [Source Code](https://github.com/sismics/docs)) `GPL-2.0` `Docker/Java`


### Document Management - E-books

**[`^        back to top        ^`](#awesome-selfhosted)**

[Ebook](https://en.wikipedia.org/wiki/Ebook) library management software.

- [Calibre Web](https://github.com/janeczku/calibre-web) - Web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database. `GPL-3.0` `Python`
- [Calibre](https://calibre-ebook.com/) - E-book library manager that can view, convert, and catalog e-books in most of the major e-book formats and provides a built-in Web server for remote clients. ([Demo](https://calibre-ebook.com/demo), [Source Code](https://launchpad.net/calibre)) `GPL-3.0` `Python`
- [Kavita](https://www.kavitareader.com/) - Cross-platform e-book/manga/comic/pdf server and web reader with user management, ratings and reviews, and metatdata support. ([Demo](https://wiki.kavitareader.com/en/kavita-demo), [Source Code](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET Core/Docker`
- [Komga](https://komga.org) - Media server for comics/mangas/BDs with API and OPDS support, a modern web interface for exploring your libraries, as well as a web reader. ([Source Code](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [Mango](https://github.com/getmango/Mango) - Manga server and web reader with a built-in MangaDex downloader. `MIT` `Crystal`
- [pyShelf](https://github.com/th3r00t/pyShelf) - Lightweight Ebook Server. `GPL-3.0` `Python`
- [Stump](https://www.stumpapp.dev) - A fast, free and open source comics, manga and digital book server with OPDS support. ([Source Code](https://github.com/stumpapp/stump)) `MIT` `Rust`
- [Tanoshi](https://github.com/faldez/tanoshi) - Selfhosted web manga reader with extensions. `MIT` `Rust`
- [The Epube](https://tt-rss.org/the-epube) - Self-hosted web EPUB reader using EPUB.js, Bootstrap, and Calibre. ([Source Code](https://git.tt-rss.org/fox/the-epube)) `GPL-3.0` `PHP`


### Document Management - Institutional Repository and Digital Library Software

**[`^        back to top        ^`](#awesome-selfhosted)**

[Institutional repository](https://en.wikipedia.org/wiki/Institutional_repository) and [digital library](https://en.wikipedia.org/wiki/Digital_library) management software.

- [DSpace](https://duraspace.org/dspace/) - Turnkey repository application providing durable access to digital resources. ([Source Code](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - Digital document management system with a flexible metadata and workflow model primarily aimed at academic institutions. ([Demo](http://tryme.demo.eprints-hosting.org/), [Source Code](https://github.com/eprints/eprints)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://wiki.lyrasis.org/display/FF/Fedora+Repository+Home) - Robust and modular repository system for the management and dissemination of digital content especially suited for digital libraries and archives, both for access and preservation. ([Source Code](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [InvenioRDM](https://inveniordm.docs.cern.ch/) - Highly scalable turn-key research data management platform with a beautiful user experience. ([Demo](https://inveniordm.web.cern.ch/), [Source Code](https://github.com/inveniosoftware/), [Clients](https://inveniosoftware.org/products/rdm/)) `MIT` `Python`
- [Islandora](https://www.islandora.ca/) - Drupal module for browsing and managing Fedora-based digital repositories. ([Demo](https://sandbox.islandora.ca/), [Source Code](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Front-end for the Samvera framework, which itself is a Ruby on Rails application for browsing and managing Fedora-based digital repositories. ([Source Code](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`


### Document Management - Integrated Library Systems (ILS)

**[`^        back to top        ^`](#awesome-selfhosted)**

An [integrated library system](https://en.wikipedia.org/wiki/Integrated_library_system) is an enterprise resource planning system for a library, used to track items owned, orders made, bills paid, and patrons who have borrowed.

_Related: [Content Management Systems (CMS)](#content-management-systems-cms), [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_

- [Evergreen](https://evergreen-ils.org) - Highly-scalable software for libraries that helps library patrons find library materials, and helps libraries manage, catalog, and circulate those materials. ([Source Code](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PL/pgSQL`
- [Koha](https://koha-community.org/) - Enterprise-class ILS with modules for acquisitions, circulation, cataloging, label printing, offline circulation for when Internet access is not available, and much more. ([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - Large-scale ILS that can be run as a service with consortial features, intended primarily for library networks. Includes most standard modules (circulation, acquisitions, cataloging,...) and a web-based public and professional interface. ([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Other`


### E-commerce

**[`^        back to top        ^`](#awesome-selfhosted)**

[E-commerce](https://en.wikipedia.org/wiki/E-commerce) software.

_Related: [Community-Supported Agriculture (CSA)](#community-supported-agriculture-csa)_

- [Aimeos](https://aimeos.org/) - Ultra fast, Open Source e-commerce framework for building custom online shops, market places and complex B2B applications scaling to billions of items with Laravel. ([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Attendize](https://www.attendize.com/) - Ticket selling and event management platform. ([Source Code](https://github.com/attendize/attendize)) `AAL` `Docker/PHP`
- [Bagisto](https://bagisto.com/en/) - Leading Laravel open source e-commerce framework with multi-inventory sources, taxation, localization, dropshipping and more exciting features. ([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - CoreShop is a e-commerce plugin for Pimcore. ([Source Code](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - Drupal Commerce is a popular e-commerce module for Drupal CMS, with support for dozens of payment, shipping, and shopping related modules. ([Source Code](https://git.drupalcode.org/project/commerce)) `GPL-2.0` `PHP`
- [Magento Open Source](https://github.com/magento/magento2) - Leading provider of open omnichannel innovation. `OSL-3.0` `PHP`
- [Mailchimp Open Commerce](https://mailchimp.com/developer/open-commerce/) - Customizable, real-time reactive, Javascript commerce platform (formerly Reaction Commerce). ([Source Code](https://github.com/reactioncommerce/reaction)) `GPL-3.0` `Nodejs`
- [MedusaJs](https://medusajs.com/) - Medusa is an open-source headless commerce engine that enables developers to create amazing digital commerce experiences. ([Demo](https://demo.medusajs.com/a/orders?offset=0&limit=15), [Source Code](https://github.com/medusajs/medusa)) `MIT` `Nodejs`
- [Microweber](https://microweber.com/) - Drag and Drop CMS and online shop. ([Demo](https://demo.microweber.org/), [Source Code](https://github.com/microweber/microweber)) `Apache-2.0` `PHP`
- [Open Source POS](https://github.com/opensourcepos/opensourcepos) - Open Source Point of Sale is a web based point of sale system. `MIT` `PHP`
- [OpenCart](https://www.opencart.com) - Free open source shopping cart solution. ([Source Code](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [OXID eShop](https://oxidforge.org/en/) - OXID eShop is a flexible open source e-commerce software with a wide range of functionalities. ([Source Code](https://github.com/OXID-eSales/oxideshop_ce)) `GPL-3.0` `PHP`
- [PrestaShop](https://www.prestashop.com/) - PrestaShop offers a free, open-source and fully scalable e-commerce solution. ([Demo](https://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - Django based ticket sales platform for events. ([Source Code](https://github.com/pretix)) `Apache-2.0` `Python`
- [s-cart](https://s-cart.org/) - S-Cart is a free e-commerce website project for individuals and businesses, built on top of Laravel Framework. ([Demo](https://demo.s-cart.org/), [Source Code](https://github.com/s-cart/s-cart)) `MIT` `PHP`
- [Saleor](https://saleor.io) - Django based open-sourced e-commerce storefront. ([Demo](https://demo.saleor.io/), [Source Code](https://github.com/mirumee/saleor)) `BSD-3-Clause` `Python`
- [Shopware Community Edition](https://www.shopware.com/community/) - PHP based open source e-commerce software made in Germany. ([Demo](https://www.shopware.com/en/test-demo/), [Source Code](https://github.com/shopware/platform)) `MIT` `PHP`
- [Solidus](https://solidus.io/) - A free, open-source ecommerce platform that gives you complete control over your store. ([Demo](http://demo.solidus.io/), [Source Code](https://github.com/solidusio/solidus)) `BSD-3-Clause` `Ruby`
- [Spree Commerce](https://spreecommerce.org) - Spree is a complete, modular & API-driven open source e-commerce solution for Ruby on Rails. ([Demo](https://new-ux.spreecommerce.org/), [Source Code](https://github.com/spree/spree)) `BSD-3-Clause` `Ruby`
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

- [Bubo Reader](https://github.com/georgemandis/bubo-rss) - Open source, "irrationally minimal" RSS feed reader. ([Demo](https://bubo-rss-demo.netlify.app/)) `MIT` `Nodejs`
- [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader. ([Source Code](https://github.com/Athou/commafeed)) `Apache-2.0` `Java`
- [Feedpushr](https://github.com/ncarlier/feedpushr) - Powerful RSS aggregator, able to transform and send articles to many outputs. Single binary, extensible with plugins. `GPL-3.0` `Go`
- [FreshRSS](https://freshrss.org/) - Self-hostable RSS feed aggregator. ([Demo](https://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS), [Clients](https://github.com/Alkarex/EasyRSS)) `AGPL-3.0` `PHP`
- [Goeland](https://github.com/slurdge/goeland) - Reads RSS/Atom feeds and filter/digest them to create beautiful emails. `MIT` `Go`
- [JARR](https://1pxsolidblack.pl/jarr-en.html) - JARR (Just Another RSS Reader) is a web-based news aggregator and reader (fork of Newspipe). ([Demo](https://www.jarr.info/), [Source Code](https://github.com/jaesivsm/JARR)) `AGPL-3.0` `Python`
- [Kriss Feed](https://github.com/tontof/kriss_feed) - Simple and smart (or stupid) feed reader. `CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - Leed (for Light Feed) is a Free and minimalist RSS aggregator. `AGPL-3.0` `PHP`
- [Miniflux](https://miniflux.app/) - Miniflux is a minimalist and open source news reader, written in Go and PostgreSQL. ([Source Code](https://github.com/miniflux/v2)) `Apache-2.0` `Go`
- [NewsBlur](https://www.newsblur.com/) - NewsBlur is a personal news reader that brings people together to talk about the world. A new sound of an old instrument. ([Source Code](https://github.com/samuelclay/NewsBlur)) `MIT` `Python`
- [newsdash](https://github.com/buzz/newsdash) - A news dashboard inspired by iGoogle and Netvibes. `AGPL-3.0` `Nodejs`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - Newspipe is a web news reader. ([Demo](https://www.newspipe.org/signup)) `AGPL-3.0` `Python`
- [PolitePol](https://github.com/taroved/pol) - Online tool for creation of RSS feeds for any web page. ([Demo](https://politepol.com)) `MIT` `Python`
- [reader](https://github.com/lemon24/reader) - A Python feed reader web app and library (so you can use it to build your own), with only standard library and pure-Python dependencies. `BSD-3-Clause` `Python`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - Generate RSS/ATOM feeds for websites which don't have one. `Unlicense` `PHP`
- [RSS Fulltext Proxy](https://github.com/Kombustor/rss-fulltext-proxy) - Mirrors RSS feeds to return the full content of the items, extracted from the website. `MIT` `Nodejs`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - RSS Monster is an easy to use web-based RSS aggregator and reader compatible with the Fever API, created as an alternative for Google Reader. `MIT` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - Fetches RSS/Atom-feeds and pushes new Content to any email-receiver, supports OPML. `GPL-2.0` `Python`
- [Selfoss](https://selfoss.aditu.de/) - New multipurpose rss reader, live stream, mashup, aggregation web application. ([Source Code](https://github.com/fossar/selfoss)) `GPL-3.0` `PHP`
- [Sismics Reader](https://www.sismics.com/reader/) - Free and open source feeds reader, including all major Google Reader features. ([Demo](https://www.sismics.com/reader/#!/demo), [Source Code](https://github.com/sismics/reader)) `GPL-2.0` `Java`
- [Stringer](https://github.com/stringer-rss/stringer) - Work-in-progress self-hosted, anti-social RSS reader. `MIT` `Ruby`
- [Temboz](https://github.com/fazalmajid/temboz) - Two-column feed reader emphasizing filtering capabilities to manage information overload. `MIT` `Python`
- [Tiny Tiny RSS](https://tt-rss.org) - Open source web-based news feed (RSS/Atom) reader and aggregator. ([Demo](https://srv.tt-rss.org/tt-rss/), [Source Code](https://git.tt-rss.org/fox/tt-rss)) `GPL-3.0` `Docker/PHP`
- [Yarr](https://github.com/nkanaev/yarr) - Yarr (yet another rss reader) is a web-based feed aggregator which can be used both as a desktop application and a personal self-hosted server. `MIT` `Go`

### File Transfer & Synchronization

**[`^        back to top        ^`](#awesome-selfhosted)**

[File transfer](https://en.wikipedia.org/wiki/File_transfer), [sharing](https://en.wikipedia.org/wiki/File_sharing) and [synchronization software](https://en.wikipedia.org/wiki/File_synchronization) software.

_Related: [Groupware](#groupware)_

- [Git Annex](https://git-annex.branchable.com/) - File synchronization between computers, servers, external drives. ([Source Code](https://git.joeyh.name/index.cgi/git-annex.git/)) `GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - Kinto is a minimalist JSON storage service with synchronisation and sharing abilities. ([Source Code](https://github.com/Kinto)) `Apache-2.0` `Python`
- [Nextcloud](https://nextcloud.com/) - Access and share your files, calendars, contacts, mail and [more](https://apps.nextcloud.com/) from any device, on your terms. ([Demo](https://try.nextcloud.com/), [Source Code](https://github.com/nextcloud/server)) `AGPL-3.0` `PHP`
- [OpenSSH SFTP server](https://www.openssh.com/) - Secure File Transfer Program. ([Source Code](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh/)) `BSD-2-Clause` `C`
- [ownCloud](https://owncloud.org/) - All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP`
- [Peergos](https://peergos.org) - Secure and private space online where you can store, share and view your photos, videos, music and documents. Also includes a calendar, news feed, task lists, chat and email client. ([Source Code](https://github.com/Peergos)) `AGPL-3.0` `Java`
- [Pydio](https://pydio.com/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Demo](https://pydio.com/en/demo), [Source Code](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - Samba is the standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol. ([Source Code](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. ([Source Code](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [Syncthing](https://syncthing.net/) - Syncthing is an open source peer-to-peer file synchronisation tool. ([Source Code](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - Unison is a file-synchronization tool for OSX, Unix, and Windows. ([Source Code](https://github.com/bcpierce00/unison)) `GPL-3.0` `OCaml`


### File Transfer - Distributed Filesystems

**[`^        back to top        ^`](#awesome-selfhosted)**

Network distributed filesystems.

**Please visit [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems)**



### File Transfer - Object Storage & File Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

[Object storage](https://en.wikipedia.org/wiki/Object_storage) is a computer data storage that manages data as objects, as opposed to other storage architectures like file systems which manages data as a file hierarchy, and block storage which manages data as blocks within sectors and tracks.

- [GarageHQ](https://garagehq.deuxfleurs.fr/) - An open-source geo-distributed storage service you can self-host to fulfill many needs - S3 compatible. ([Source Code](https://git.deuxfleurs.fr/Deuxfleurs/garage)) `AGPL-3.0` `Rust`
- [Minio](https://min.io/) - Minio is an open source object storage server compatible with Amazon S3 APIs. ([Source Code](https://github.com/minio/minio)) `AGPL-3.0` `Go`
- [SeaweedFS](https://github.com/seaweedfs/seaweedfs) - SeaweedFS is an open source distributed file system supporting WebDAV, S3 API, FUSE mount, HDFS, etc, optimized for lots of small files, and easy to add capacity. `Apache-2.0` `Go`
- [SFTPGo](https://github.com/drakkan/sftpgo) - Flexible, fully featured and highly configurable SFTP server with optional FTP/S and WebDAV support. `AGPL-3.0` `Go`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Zenko CloudServer, an open-source implementation of a server handling the Amazon S3 protocol. ([Source Code](https://github.com/scality/cloudserver)) `Apache-2.0` `Nodejs`


### File Transfer - Peer-to-peer Filesharing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Peer-to-peer file sharing](https://en.wikipedia.org/wiki/Peer-to-peer_file_sharing) is the distribution and [sharing](https://en.wikipedia.org/wiki/File_sharing) of digital media using [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) (P2P) networking technology.

- [bittorrent-tracker](https://webtorrent.io/) - Simple, robust, BitTorrent tracker (client and server) implementation. ([Source Code](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [Dat Project](https://dat-ecosystem.org/) - Powerful decentralized file sharing applications built from a large ecosystem of modules. ([Source Code](https://github.com/datproject)) `MIT` `Nodejs`
- [exatorrent](https://github.com/varbhat/exatorrent) - BitTorrent client written in Go that can be run locally or hosted on a remote server, and supports streaming via HTTP. `GPL-3.0` `Go`
- [instant.io](https://github.com/webtorrent/instant.io) - Streaming file transfer over WebTorrent. ([Demo](https://instant.io)) `MIT` `Nodejs`
- [qBittorrent](https://www.qbittorrent.org/) - Free cross-platform bittorrent client with a feature rich Web UI for remote access. ([Source Code](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [Send](https://github.com/timvisee/send) - Simple, private, end to end encrypted temporary file sharing, originally built by Mozilla. ([Clients](https://github.com/timvisee/send#clients)) `MPL-2.0` `Nodejs`
- [Transmission](https://transmissionbt.com/) - Fast, easy, Free Bittorrent client. ([Source Code](https://github.com/transmission/transmission)) `GPL-3.0` `C`


### File Transfer - Single-click & Drag-n-drop Upload

**[`^        back to top        ^`](#awesome-selfhosted)**

Simplified file servers for sharing of one-time/short-lived/temporary files, providing single-click or [drag-and-drop](https://en.wikipedia.org/wiki/Drag_and_drop) updload functionality.

- [ass](https://github.com/tycrek/ass) - The superior self-hosted ShareX server. For use with clients such as ShareX (Windows), Flameshot (Linux), & MagicCap (Linux, macOS). `ISC` `Nodejs`
- [elixire](https://elixi.re) - Simple yet advanced screenshot uploading and link shortening service. ([Source Code](https://gitlab.com/elixire/elixire), [Clients](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [Files Sharing](https://github.com/axeloz/filesharing) - Open Source and self-hosted files sharing application based on unique and temporary links. `GPL-3.0` `PHP`
- [FileShelter](https://github.com/epoupon/fileshelter) - FileShelter is a self-hosted software that allows you to easily share files over the Internet. `GPL-3.0` `C++`
- [Gokapi](https://github.com/Forceu/gokapi) - Lightweight server to share files, which expire after a set amount of downloads or days. Similar to the discontinued Firefox Send, with the difference that only the admin is allowed to upload files. `GPL-3.0` `Go`
- [goploader](https://github.com/Depado/goploader) - Easy file sharing with server-side encryption, curl/httpie/wget compliant. `MIT` `Go`
- [GoSƐ](https://github.com/stv0g/gose) - GoSƐ is a modern file-uploader focusing on scalability and simplicity. It only depends on a S3 storage backend and hence scales horizontally without the need for additional databases or caches. ([Demo](https://gose.0l.de)) `Apache-2.0` `Go`
- [Jirafeau](https://gitlab.com/mojo42/Jirafeau) - Jirafeau is a web site permitting to upload a file in a simple way and give an unique link to it. ([Demo](https://jirafeau.net/)) `AGPL-3.0` `PHP`
- [Kleeja](https://kleeja.net/) - File Upload/sharing application, used by thousands of webmasters since 2007. ([Source Code](https://github.com/kleeja-official/kleeja)) `GPL-2.0` `PHP`
- [lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - Let's Upload that FIle, client-side encrypted. ([Demo](https://demo.lufi.io), [Source Code](https://framagit.org/fiat-tux/hat-softwares/lufi/tree/master)) `AGPL-3.0` `Perl`
- [OnionShare](https://github.com/onionshare/onionshare) - Securely and anonymously share a file of any size. `GPL-2.0` `Python`
- [Pairdrop](https://github.com/schlagmichdoch/pairdrop) - Local file sharing in your browser. Inspired by Apple's AirDrop. Fork of Snapdrop. `GPL-3.0` `Docker`
- [PicoShare](https://pico.rocks) - A minimalist, easy-to-host service for sharing images and other files. ([Demo](https://demo.pico.rocks), [Source Code](https://github.com/mtlynch/picoshare)) `AGPL-3.0` `Go`
- [Picsur](https://github.com/CaramelFur/Picsur) - A simple imaging hosting playtfom that allows you to easily host, edit, and share images. `GPL-3.0` `Docker`
- [PictShare](https://www.pictshare.net/) - PictShare is a multi lingual, open source image hosting service with a simple resizing and upload API. ([Source Code](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP`
- [Pingvin Share](https://github.com/stonith404/pingvin-share) - A self-hosted file sharing platform that combines lightness and beauty, perfect for seamless and efficient file sharing. ([Demo](https://pingvin-share.dev.eliasschneider.com)) `BSD-2-Clause` `Docker/Nodejs`
- [Plik](https://github.com/root-gg/plik) - Plik is a scalable and friendly temporary file upload system. ([Demo](https://plik.root.gg/)) `MIT` `Go`
- [Pomf](https://github.com/Pomf/Pomf) - Pomf is a simple file uploading and sharing platform. `MIT` `PHP`
- [ProjectSend](https://www.projectsend.org/) - Upload files and assign them to specific clients you create. Give access to those files to your clients. ([Source Code](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - Simple open source self-hosted file sharing solution with robust up-/download-resume and password protection. `BSD-2-Clause` `Nodejs`
- [QuickShare](https://github.com/ihexxa/quickshare) - Quick and simple file sharing between different devices. `LGPL-3.0` `Go`
- [Share](https://github.com/MrDemonWolf/share) - Simple yet advanced uploader - upload files, images and text with moderation tools for admins. Can be used for friends and family or just for you. Integration with ShareX and more. `MIT` `Nodejs`
- [Sharry](https://github.com/eikek/sharry) - Share files easily over the internet between authenticated and anonymous users (both ways) with resumable up- and downloads. `GPL-3.0` `Scala/Java`
- [Shifter](https://github.com/TobySuch/Shifter) - A simple, self-hosted file-sharing web app, powered by Django. `MIT` `Docker`
- [transfer.sh](https://transfer.sh) - Easy file sharing from the command line. ([Source Code](https://github.com/dutchcoders/transfer.sh)) `MIT` `Go`
- [Uguu](https://uguu.se/) - Stores files and deletes after X amount of time. ([Source Code](https://github.com/nokonoko/uguu)) `MIT` `PHP`
- [Uploady](https://github.com/farisc0de/Uploady) - Uploady is a simple file uploader script with multi file upload support. `MIT` `PHP`
- [Void](https://github.com/AlphaNecron/Void) - Lightweight, fast and elegant file hosting service for ShareX with Web UI and REST API. ([Source Code](https://github.com/AlphaNecron/Void/)) `MIT` `Nodejs`
- [XBackBone](https://xbackbone.app/) - A simple, fast and lightweight file manager with instant sharing tools integration, like ShareX (a free and open-source screenshot utility for Windows). ([Source Code](https://github.com/SergiX44/XBackBone)) `AGPL-3.0` `PHP`
- [Zipline](https://github.com/diced/zipline) - A lightweight, fast and reliable file sharing server that is commonly used with ShareX, offering a react-based Web UI and fast API. `MIT` `Nodejs`


### File Transfer - Web-based File Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

Web-based [file managers](https://en.wikipedia.org/wiki/File_manager).

_Related: [Groupware](#groupware)_

- [Apaxy](https://oupala.github.io/apaxy/) - Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing. ([Source Code](https://github.com/oupala/apaxy)) `GPL-3.0` `HTML`
- [copyparty](https://github.com/9001/copyparty) - Portable file server with accelerated resumable uploads, deduplication, WebDAV, FTP, zeroconf, media indexer, video thumbnails, audio transcoding, and write-only folders, in a single file with no mandatory dependencies. ([Demo](https://a.ocv.me/pub/demo/)) `MIT` `Python`
- [DirectoryLister](https://www.directorylister.com/) - Simple PHP based directory lister that lists a directory and all its sub-directories and allows you to navigate there within. ([Source Code](https://github.com/DirectoryLister/DirectoryLister)) `MIT` `PHP`
- [filebrowser](https://filebrowser.org/) - Web File Browser with a Material Design web interface. ([Source Code](https://github.com/filebrowser/filebrowser)) `Apache-2.0` `Go`
- [FileGator](https://filegator.io/) - FileGator is a powerful multi-user file manager with a single page front-end. ([Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator)) `MIT` `PHP`
- [Filestash](https://www.filestash.app/) - A web file manager that lets you manage your data anywhere it is located: FTP, SFTP, WebDAV, Git, S3, Minio, Dropbox, or Google Drive . ([Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash)) `AGPL-3.0` `Go`
- [Gossa](https://github.com/pldubouilh/gossa) - Gossa is a light and simple webserver for your files. `MIT` `Go`
- [IFM](https://github.com/misterunknown/ifm) - Single script file manager. `MIT` `PHP`
- [miniserve](https://github.com/svenstaro/miniserve) - CLI tool to serve files and dirs over HTTP. `MIT` `Rust`
- [ResourceSpace](https://www.resourcespace.com) - ResourceSpace open source digital asset management software is the simple, fast, and free way to organise your digital assets. ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn)) `BSD-4-Clause` `PHP`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - Simple static file server with webui to manage files. `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - TagSpaces is an offline, cross-platform file manager and organiser that also can function as a note taking app. The WebDAV version of the application can be installed on top of a WebDAV servers such as Nextcloud or ownCloud. ([Demo](https://demo.tagspaces.com), [Source Code](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Nodejs`


### Games

**[`^        back to top        ^`](#awesome-selfhosted)**

Multiplayer game servers and [browser games](https://en.wikipedia.org/wiki/Browser_game).

- [0 A.D.](https://play0ad.com/) - A free, open-source game of ancient warfare. ([Source Code](https://github.com/0ad/0ad)) `MIT/GPL-2.0/Zlib` `C++/C`
- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - Minimalist text adventure game for your browser. ([Demo](https://adarkroom.doublespeakgames.com/)) `MPL-2.0` `HTML5`
- [EmuLinkerSF](https://emulinker.org) - EmuLinkerSF is an open source Kaillera server. Kaillera is a client/server system that any emulator can implement to enable netplay over the Internet. ([Source Code](https://github.com/God-Weapon/EmuLinkerSF)) `GPL-2.0` `Java`
- [Hextris](https://github.com/Hextris/hextris) - Fast paced HTML5 puzzle game inspired by Tetris. `GPL-3.0` `HTML5`
- [Lila](https://lichess.org/) - The forever free, adless and open source chess server powering lichess.org, with official iOS and Android client apps. ([Source Code](https://github.com/lichess-org/lila)) `AGPL-3.0` `Scala`
- [Mindustry](https://mindustrygame.github.io/) - Factorio-like tower defense game. Build production chains to gather more resources, and build complex facilities. ([Source Code](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [Minetest](https://www.minetest.net/) - An open source voxel game engine. Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server. ([Source Code](https://github.com/minetest/minetest)) `LGPL-2.1/MIT/Zlib` `C++`
- [MTA:SA](https://multitheftauto.com/) `⚠` - Multi Theft Auto (MTA) is a software project that adds network play functionality to Rockstar North's Grand Theft Auto game series, in which this functionality is not originally found. ([Source Code](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [piqueserver](https://github.com/piqueserver/piqueserver) - Server for openspades, the first-person shooter in a destructible voxel world. ([Clients](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [Posio](https://github.com/abrenaut/posio) - Geography multiplayer game. `MIT` `Python`
- [QuakeJS](https://github.com/begleysm/quakejs) - QuakeJS is a port of ioquake3 to Javascript that can be played in a browser. `MIT` `Nodejs`
- [Quizmaster](https://github.com/nymanjens/quizmaster) - A web-app for conducting a quiz, including a page for players to enter their answers. `Apache-2.0` `Scala`
- [Red Eclipse 2](https://redeclipse.net) - A FOSS Arena First-Person Shooter Similar to Unreal Tournament. ([Source Code](https://github.com/redeclipse/base)) `Zlib/MIT/CC-BY-SA-4.0` `C/C++`
- [Romm](https://github.com/zurdi15/romm) `⚠` - RomM (Rom Manager) is a web based retro roms manager integrated with IGDB. `GPL-3.0` `Docker`
- [Teeworlds](https://www.teeworlds.com) - Open source 2D retro multiplayer shooter. ([Source Code](https://github.com/teeworlds/teeworlds)) `Zlib` `C++`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - The Battle for Wesnoth is an Open Source, turn-based tactical strategy game with a high fantasy theme, featuring both singleplayer and online/hotseat multiplayer combat. `GPL-2.0` `C++`
- [Veloren](https://veloren.net/) - Multiplayer RPG. Open-source game inspired by Cube World, Legend of Zelda, Dwarf Fortress and Minecraft. ([Source Code](https://gitlab.com/veloren/veloren)) `GPL-3.0` `Rust`
- [Word Mastermind](https://github.com/clupasq/word-mastermind) - Wordle clone. A Mastermind-like game, but instead of colors you need to guess words. ([Demo](https://word-mastermind.glitch.me/)) `MIT` `Nodejs`
- [Wordle](https://reactle.vercel.app/) - An Open Source Wordle game. Guess the Wordle in six tries. Each guess must be a valid five-letter word. ([Source Code](https://github.com/cwackerfuss/react-wordle)) `MIT` `Nodejs`
- [Zero-K](https://zero-k.info/) - Open Source on Springrts engine. Zero-K is a traditional real time strategy game with a focus on player creativity through terrain manipulation, physics, and a large roster of unique units - all while being balanced to support competitive play. ([Source Code](https://github.com/ZeroK-RTS/Zero-K)) `GPL-2.0` `Lua`


### Games - Administrative Utilities & Control Panels

**[`^        back to top        ^`](#awesome-selfhosted)**

Utilities for managing game servers.

- [ARRCON](https://github.com/radj307/ARRCON) - Terminal-based RCON client compatible with any game servers using the Source RCON Protocol. `GPL-3.0` `C++`
- [EasyWI](https://easy-wi.com) - Easy-Wi is a Web-interface that allows you to manage server daemons like gameservers. In addition it provides you with a CMS which includes a fully automated game- and voiceserver lending service. ([Source Code](https://github.com/easy-wi/developer/)) `GPL-3.0` `PHP/Bash`
- [Kubek](https://kubek.seeroycloud.tk) - Web management panel for Minecraft servers. ([Source Code](https://github.com/seeroy/kubek-minecraft-dashboard)) `GPL-3.0` `Nodejs`
- [Lancache](https://lancache.net) `⚠` - LAN Party game caching made easy. ([Source Code](https://github.com/lancachenet/monolithic)) `MIT` `Docker/Shell`
- [LinuxGSM](https://linuxgsm.com/) - CLI tool for deployment and management of dedicated game servers on Linux: more than 120 games are supported. ([Source Code](https://github.com/GameServerManagers/LinuxGSM)) `MIT` `Shell`
- [Lodestone](https://github.com/Lodestone-Team/lodestone) - A free, open source server hosting tool for Minecraft and other multiplayers. `AGPL-3.0` `Docker/Rust`
- [Pterodactyl](https://pterodactyl.io/) - Management panel for game servers, with an intuitive UI for end users. ([Source Code](https://github.com/pterodactyl/panel)) `MIT` `PHP`
- [PufferPanel](https://www.pufferpanel.com/) - PufferPanel is an open source game server management panel, designed for both small networks and game server providers. ([Source Code](https://github.com/pufferpanel/pufferpanel)) `Apache-2.0` `Go`
- [RconCli](https://github.com/gorcon/rcon-cli) - CLI for executing queries on a remote Valve Source dedicated server using the RCON Protocol. `MIT` `Go`
- [SourceBans++](https://sbpp.github.io/) - Admin, ban, and communication management system for games running on the Source engine. ([Source Code](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`


### Genealogy

**[`^        back to top        ^`](#awesome-selfhosted)**

[Genealogy software](https://en.wikipedia.org/wiki/Genealogy_software) used to record, organize, and publish genealogical data.

- [Genea.app](https://www.genea.app/) - Genea is a privacy by design and open source tool anyone can use to author or edit their family tree. Data is stored in the GEDCOM format and all processing is done in the browser. ([Source Code](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - GeneWeb is an open source genealogy software written in OCaml. It comes with a Web interface and can be used off-line or as a Web service. ([Demo](https://demo.geneweb.tuxfamily.org/gw7/), [Source Code](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [Gramps Web](https://gramps-project.github.io/web/) - Web app for collaborative genealogy, based on and interoperable with Gramps, the open source genealogy desktop application. ([Demo](https://gramps-project.github.io/web/), [Source Code](https://github.com/gramps-project/gramps-webapi)). `AGPL-3.0` `Docker`
- [webtrees](https://www.webtrees.net) - Webtrees is the web's leading on-line collaborative genealogy application. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`


### Groupware

**[`^        back to top        ^`](#awesome-selfhosted)**

Collaborative software or [groupware](https://en.wikipedia.org/wiki/Collaborative_software) is designed to help people working on a common task to attain their goals. Groupware often regroups multiple services such as file sharing, calendar/events management, address books... in a single, integrated application.

- [BlueMind](https://www.bluemind.net/en/) - Groupware with email, calendar, addressbooks, exchange active sync, exchange MAPI protocol support. ([Source Code](https://forge.bluemind.net/stash/projects/BM/repos/bluemind-public/browse)) `AGPL-3.0` `Java`
- [Citadel](https://www.citadel.org/) - Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more. ([Source Code](https://www.citadel.org/source.html)) `GPL-3.0` `C`
- [Corteza](https://cortezaproject.org) - CRM including a unified workspace, enterprise messaging and a low code environment for rapidly and securely delivering records-based management solutions. ([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza)) `Apache-2.0` `Go`
- [Cozy Cloud](https://cozy.io/) - Personal cloud where you can manage and sync your contact, files and calendars, and manage your budget with an app store full of community contributions. ([Source Code](https://github.com/cozy/)) `GPL-3.0` `Nodejs`
- [egroupware](https://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS. ([Source Code](https://github.com/EGroupware/egroupware)) `GPL-2.0` `PHP`
- [EspoCRM](https://www.espocrm.com/) - CRM with a frontend designed as a single page application, and a REST API. ([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm)) `GPL-3.0` `PHP`
- [Group Office](https://www.group-office.com) - Group-Office is an enterprise CRM and groupware tool. Share projects, calendars, files and e-mail online with co-workers and clients. ([Source Code](https://github.com/Intermesh/groupoffice/)) `AGPL-3.0` `PHP`
- [Horde](https://www.horde.org/) - The Horde Project is about creating high quality Open Source applications and libraries, based on PHP and the Horde Framework. ([Demo](http://demo.horde.org/login.php), [Source Code](https://github.com/horde/base)) `GPL-2.0` `PHP`
- [HRCloud2](https://github.com/zelon88/HRCloud2) - Full-featured home hosted Cloud Drive, Personal Assistant, App Launcher, File Converter, Streamer, Share Tool and more. `GPL-3.0` `PHP`
- [Kolab](https://kolab.org/) - Kolab community is a unified communication and collaboration system. ([Source Code](https://git.kolab.org/)) `GPL-2.0/LGPL-2.1/GPL-3.0` `C++/Python/PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Openmeetings provides video conferencing, instant messaging, white board, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming. ([Source Code](https://openmeetings.apache.org/scm.html)) `Apache-2.0` `Java`
- [SOGo](https://www.sogo.nu/) - SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and Web interface. ([Demo](https://demo.sogo.nu/SOGo/), [Source Code](https://github.com/Alinto/sogo)) `LGPL-2.1` `Objective-C`
- [SuiteCRM](https://suitecrm.com) - The award-winning, enterprise-class open source CRM. ([Source Code](https://github.com/salesagility/SuiteCRM)) `AGPL-3.0` `PHP`
- [tine - Community Edition](https://github.com/tine20/tine20) - Contacts, Calendar, Tasks, WebDAV, ActiveSync, VoIP, Mail-Client, CRM, Sales, Projects, Timetracker. `AGPL-3.0` `PHP`
- [Tracim](https://github.com/tracim/tracim) - Collaborative Platform for team collaboration: file,threads,notes,agenda,etc. `AGPL-3.0/LGPL-3.0/MIT` `Python`
- [Zimbra Collaboration](https://www.zimbra.com/) - Email, calendar, collaboration server with Web interface and lots of integrations. ([Source Code](https://github.com/zimbra)) `GPL-2.0/CPAL-1.0` `Java`


### Human Resources Management (HRM)

**[`^        back to top        ^`](#awesome-selfhosted)**

A [human resources management system](https://en.wikipedia.org/wiki/Human_resource_management_system) combines a number of systems and processes to ensure the easy management of [human resources](https://en.wikipedia.org/wiki/Human_resources), business processes and data.

- [admidio](https://www.admidio.org/) - Admidio is a free open source user management system for websites of organizations and groups. The system has a flexible role model so that it’s possible to reflect the structure and permissions of your organization. ([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP`
- [IceHrm](https://icehrm.com/) - IceHrm employee management system allows companies to centralize confidential employee information. ([Demo](https://icehrm.com/demo.php), [Source Code](https://github.com/gamonoid/icehrm)) `Apache-2.0` `PHP`
- [OrangeHRM](https://www.orangehrm.com/) - OrangeHRM is a comprehensive HRM system that captures all the essential functionalities required for any enterprise. ([Demo](https://opensource-demo.orangehrmlive.com/), [Source Code](https://github.com/orangehrm/orangehrm)) `GPL-2.0` `PHP`
- [TimeOff.Management](https://timeoff.management) - Simple yet powerful absence management software for small and medium size business. ([Demo](https://app.timeoff.management), [Source Code](https://github.com/timeoff-management/timeoff-management-application)) `MIT` `Nodejs`


### Internet of Things (IoT)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Internet of Things](https://en.wikipedia.org/wiki/Internet_of_things) describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices over the Internet.

- [DeviceHive](https://www.devicehive.com/) - Open Source IoT Platform with a wide range of integration options. ([Demo](https://playground.devicehive.com/), [Source Code](https://github.com/devicehive/devicehive-java-server)) `Apache-2.0` `Java`
- [Domoticz](https://www.domoticz.com/) - Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. ([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++`
- [EMQX](https://www.emqx.io/) - An ultra-scalable open-source MQTT broker. Connect 100M+ IoT devices in one single cluster, move and process real-time IoT data with 1M msg/s throughput at 1ms latency. ([Demo](https://www.emqx.com/en/mqtt/public-mqtt5-broker), [Source Code](https://github.com/emqx/emqx)) `Apache-2.0` `Docker/Erlang`
- [FHEM](https://fhem.de/fhem.html) - FHEM is used to automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly. ([Source Code](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [Gladys](https://gladysassistant.com/) - Gladys is a privacy-first, open-source home assistant. ([Source Code](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs`
- [Home Assistant](https://home-assistant.io/) - Open-source home automation platform. ([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core)) `Apache-2.0` `Python`
- [ioBroker](https://www.iobroker.net/) - Integration platform for the Internet of Things, focused on building automation, smart metering, ambient assisted living, process automation, visualization and data logging. ([Source Code](https://github.com/ioBroker/ioBroker)) `MIT` `Nodejs`
- [Node RED](https://nodered.org/) - Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. ([Source Code](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs`
- [openHAB](https://www.openhab.org) - Vendor and technology agnostic open source software for home automation. ([Source Code](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - Open-Source IoT Platform - IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. ([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/openremote)) `AGPL-3.0` `Java`
- [SIP Irrigation Control](https://dan-in-ca.github.io/SIP/) - Open source software for sprinkler/irrigation control. ([Source Code](https://github.com/Dan-in-CA/SIP)) `GPL-3.0` `Python`
- [Thingsboard](https://thingsboard.io/) - Open-source IoT Platform - Device management, data collection, processing and visualization. ([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java`
- [WebThings Gateway](https://webthings.io/gateway/) - WebThings is an open source implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework. ([Source Code](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`


### Inventory Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Inventory management software](https://en.wikipedia.org/wiki/Inventory_management_software).

_Related: [Money, Budgeting & Management](#money-budgeting--management), [Resource Planning](#resource-planning), [Resource Planning - Enterprise Resource Planning](#resource-planning---enterprise-resource-planning)_

_See also: [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)_

- [Inventaire](https://inventaire.io/welcome) - Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs. ([Source Code](https://github.com/inventaire/inventaire)) `AGPL-3.0` `Nodejs`
- [Inventree](https://inventree.readthedocs.io/en/latest/) - InvenTree is an open-source inventory management system which provides intuitive parts management and stock control. ([Demo](https://inventree.org/demo), [Source Code](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [PartKeepr](https://www.partkeepr.org) - PartKeepr is an electronic part inventory management software. It helps you to keep track of your available parts and assist you with re-ordering parts. ([Demo](https://demo.partkeepr.org/), [Source Code](https://github.com/partkeepr/PartKeepr)) `GPL-3.0` `PHP`


### Knowledge Management Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

[Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management) is the collection of methods relating to creating, sharing, using and managing the knowledge and information.

_Related: [Note-taking & Editors](#note-taking--editors), [Wikis](#wikis), [Database Management](#database-management)_

- [Atomic Server](https://github.com/atomicdata-dev/atomic-server) - Knowledge graph database with documents (similar to Notion), tables, search, and a powerful linked data API. Lightweight, very fast and no runtime dependencies. ([Demo](https://atomicdata.dev/)) `MIT` `Docker/Rust`
- [Mindmaps](https://github.com/drichard/mindmaps) - Open source, offline capable, mind mapping application. ([Demo](https://www.mindmaps.app)) `AGPL-3.0` `HTML5`
- [My Mind](https://github.com/ondras/my-mind) - Web application for creating and managing mind maps. ([Demo](https://my-mind.github.io/?url=examples%2Ffeatures.mymind)) `MIT` `Javascript`
- [TeamMapper](https://github.com/b310-digital/teammapper) - Host and create your own mindmaps. Share your mindmap sessions with your team and collaborate live on mindmaps. ([Demo](https://map.kits.blog)) `MIT` `Docker/Nodejs`


### Learning and Courses

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software to help with education and learning.

- [Canvas LMS](https://www.instructure.com/canvas/) - Canvas is the trusted, open-source learning management system (LMS) that is revolutionizing the way we educate. ([Demo](https://canvas.instructure.com/register), [Source Code](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - Chamilo LMS allows you to create a virtual campus for the provision of online or semi-online training. ([Source Code](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [Dalton Plan](https://daltonplan.com) - Dalton Plan is a modern adoption of a free teaching method developed by Helen Parkhurst in the 20th century. ([Source Code](https://git.io/daltonplan)) `AGPL-3.0` `PHP`
- [edX](https://www.edx.org/) - The Open edX platform is open-source code that powers edX.org. ([Source Code](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://gibbonedu.org/) - The flexible, open source school management platform designed to make life better for teachers, students, parents and leaders. ([Source Code](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [ILIAS](https://www.ilias.de) - ILIAS is the Learning Management System that can cope with anything you throw at it. ([Demo](https://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [Mahara](https://mahara.org/) - Open Source fully featured web application to build students electronic portfolio. ([Source Code](https://github.com/MaharaProject/mahara)) `GPL-3.0` `PHP`
- [Moodle](https://moodle.org/) - Moodle is a learning and courses platform with one of the largest open source communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](https://www.openeclass.org/) - Open eClass is an advanced e-learning solution that can enhance the teaching and learning process. ([Demo](https://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass)) `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - OpenOLAT is a web-based learning management system for teaching, education, assessment and communication. ([Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT)) `Apache-2.0` `Java`
- [RELATE](https://documen.tician.de/relate/) - RELATE is a web-based courseware package, includes features such as: flexible rules, statistics, multi-course support, class calendar. ([Source Code](https://github.com/inducer/relate)) `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - RosarioSIS, free Student Information System for school management. ([Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/)) `GPL-2.0` `PHP`


### Maps and Global Positioning System (GPS)

**[`^        back to top        ^`](#awesome-selfhosted)**

[Maps](https://en.wikipedia.org/wiki/Map), [cartography](https://en.wikipedia.org/wiki/Cartography), [GIS](https://en.wikipedia.org/wiki/Geographic_information_system) and [GPS](https://en.wikipedia.org/wiki/Global_Positioning_System) software.

_See also: [awesome-openstreetmap](https://github.com/osmlab/awesome-openstreetmap), [awesome-gis](https://github.com/sshuair/awesome-gis)_

- [Bicimon](https://github.com/knrdl/bicimon) - Bike Speedometer as Progressive Web App. ([Demo](https://knrdl.github.io/bicimon/)) `MIT` `HTML5`
- [Geo2tz](https://github.com/noandrea/geo2tz) - Get the timezone from geo coordinates (lat, lon). `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - Fast routing library and server using OpenStreetMap. ([Source Code](https://github.com/graphhopper/graphhopper)) `Apache-2.0` `Java`
- [H3 Viewer](https://github.com/clupasq/h3-viewer) - View/search Uber H3 (Hexagonal Hierarchical Spatial Index) cells on a map. ([Demo](https://wolf-h3-viewer.glitch.me/)) `Apache-2.0` `HTML5`
- [Hauk](https://github.com/bilde2910/Hauk) - Easy to setup location sharing platform that lets you temporarily share your location with anyone in real-time. ([Demo](https://github.com/bilde2910/Hauk#demo-server)) `Apache-2.0` `PHP`
- [MapBBCodeShare](https://github.com/MapBBCode/share.mapbbcode.org) - Tool for sharing custom OSM maps. Support for annotated markers, polygons, lines, multi-format import/export, multiple layers, shortlinks. ([Demo](http://share.mapbbcode.org/)) `WTFPL` `PHP`
- [Nominatim](https://nominatim.org/) - Server application for reverse geocoding (address -> coordinates) on OpenStreetMap data. ([Source Code](https://github.com/osm-search/Nominatim)) `GPL-2.0` `C`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - High performance routing engine designed to run on OpenStreetMap data and offering an HTTP API, C++ library interface, and Nodejs wrapper. ([Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend)) `BSD-2-Clause` `C++`
- [OpenGTS](http://www.opengts.org/) - Entry-level fleet tracking system. Supports variety of tracking devices and protocols. Comes with rich web-interface and reporting features. ([Demo](http://track.opengts.org/track/Track), [Source Code](https://sourceforge.net/projects/opengts/files/server-base/)) `Apache-2.0` `Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative project to create a free editable map of the world. ([Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software)) `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - Multimodal trip planning software based on OpenStreetMap data and consuming published GTFS-formatted data to suggest routes using local public transit systems. ([Source Code](https://github.com/opentripplanner/OpenTripPlanner)) `LGPL-3.0` `Java/Javascript`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `⚠` - Store and access data published by [OwnTracks](https://owntracks.org/) location tracking apps. `GPL-2.0` `C/Lua`
- [TileServer GL](https://tileserver.readthedocs.io/) - Vector and raster maps with GL styles. Server side rendering by Mapbox GL Native. Map tile server for Mapbox GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc. ([Source Code](https://github.com/maptiler/tileserver-gl)) `BSD-2-Clause` `Nodejs`
- [TileServer PHP](https://www.maptiler.com/server/) - Serve map tiles from any PHP hosting. ([Source Code](https://github.com/maptiler/tileserver-php)) `BSD-2-Clause` `PHP`
- [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](https://demo.traccar.org/), [Source Code](https://github.com/traccar)) `Apache-2.0` `Java`
- [μlogger](https://github.com/bfabiszewski/ulogger-server) - Collect geolocation from users in real-time and display their GPS tracks on a website. ([Demo](http://ulogger.fabiszewski.net/)) `GPL-3.0` `PHP`


### Media Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Streaming media](https://en.wikipedia.org/wiki/Streaming_media) is multimedia that is delivered and consumed in a continuous manner from a source, with little or no intermediate storage in network elements.

**Please visit [Media streaming - Audio Streaming](#media-streaming---audio-streaming), [Media streaming - Multimedia Streaming](#media-streaming---multimedia-streaming), [Media streaming - Video Streaming](#media-streaming---video-streaming)**

_See also: [List of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [Comparison of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)_



### Media Streaming - Audio Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Audio](https://en.wikipedia.org/wiki/Audio) streaming tools and software.

- [Airsonic Advanced](https://github.com/airsonic-advanced/airsonic-advanced) - Open-source web-based media streamer and jukebox based on Airsonic, with several key performance and feature enhancements. `GPL-3.0` `Java`
- [Ampache](https://ampache.org/) - Web based audio/video streaming application. ([Demo](https://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)) `AGPL-3.0` `PHP`
- [Audiobookshelf](https://www.audiobookshelf.org/) - Fully open-source self-hosted audiobook and podcast server. It streams all audio formats, keeps and syncs progress across devices. Comes with open-source apps for Android and iOS. ([Source Code](https://github.com/advplyr/audiobookshelf), [Clients](https://github.com/advplyr/audiobookshelf-app)) `GPL-3.0` `Docker/Nodejs`
- [Audioserve](https://github.com/izderadicka/audioserve) - Simple personal server to serve audio files from directories (audiobooks, music, podcasts...). Focused on simplicity and supports sync of play position between clients. `MIT` `Rust`
- [AzuraCast](https://www.azuracast.com/) - A modern and accessible self-hosted web radio management suite. ([Source Code](https://github.com/AzuraCast/AzuraCast)) `Apache-2.0` `PHP`
- [Beets](https://beets.io/) - Music library manager and MusicBrainz tagger (command-line and Web interface). ([Source Code](https://github.com/beetbox/beets)) `MIT` `Python`
- [Black Candy](https://github.com/blackcandy-org/black_candy) - Music streaming server built with Rails and Stimulus. `MIT` `Ruby`
- [Bsimp](https://github.com/akrylysov/bsimp) - Minimalistic S3-backed audio library. `Apache-2.0` `Go`
- [euterpe](https://listen-to-euterpe.eu) - Self-hosted music streaming server with RESTful API and Web interface. ([Demo](https://listen-to-euterpe.eu/demo), [Source Code](https://github.com/ironsmile/euterpe)) `GPL-3.0` `Go`
- [Funkwhale](https://dev.funkwhale.audio/funkwhale) - Modern, web-based, convivial, multi-user and free music server. `BSD-3-Clause` `Python/Django`
- [GNU FM](https://gnu.io/fm/) - Running music community websites, alternative to last.fm. ([Source Code](https://git.savannah.gnu.org/cgit/librefm.git/)) `AGPL-3.0` `PHP`
- [gonic](https://github.com/sentriz/gonic) - Lightweight music streaming server. Subsonic compatible. `GPL-3.0` `Go`
- [koel](https://koel.dev/) - Personal music streaming server that works. ([Demo](https://demo.koel.dev/), [Source Code](https://github.com/koel/koel)) `MIT` `PHP`
- [LibreTime](https://libretime.org) - Simple, open source platform that lets you broadcast streaming radio on the web (fork of [Airtime](https://github.com/sourcefabric/Airtime)). ([Source Code](https://github.com/LibreTime/libretime)) `AGPL-3.0` `PHP`
- [LMS](https://github.com/epoupon/lms) - Access your self-hosted music using a web interface. `GPL-3.0` `C++`
- [Maloja](https://github.com/krateng/maloja) - Self-hosted music scrobble database, alternative to Last.fm. ([Demo](https://maloja.krateng.ch/)) `GPL-3.0` `Python/Docker`
- [moOde Audio](https://moodeaudio.org/) - Audiophile-quality music playback for the wonderful Raspberry Pi family of single board computers. ([Source Code](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](https://docs.mopidy.com/) - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source Code](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python`
- [mpd](https://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
- [mStream](https://mstream.io/) - Music streaming server with GUI management tools. Runs on Mac, Windows, and Linux. ([Source Code](https://github.com/IrosTheBeggar/mStream)) `GPL-2.0` `Nodejs`
- [musikcube](https://musikcube.com/) - Streaming audio server with Linux/macOS/Windows/Android clients. ([Source Code](https://github.com/clangen/musikcube)) `BSD-3-Clause` `C++`
- [Navidrome Music Server](https://www.navidrome.org) - Modern Music Server and Streamer, compatible with Subsonic/Airsonic. ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Docker/Go`
- [Polaris](https://github.com/agersant/polaris) - Music browsing and streaming application optimized for large music collections, ease of use and high performance. `MIT` `Rust`
- [Raveberry](https://github.com/raveberry/raveberry) - A multi-user music server with a focus on participation. ([Demo](https://demo.raveberry.party/)) `LGPL-3.0` `Python`
- [Snapcast](https://github.com/badaix/snapcast) - Synchronous multiroom audio server. `GPL-3.0` `C++`
- [Stretto](https://github.com/benkaiser/stretto) - Music player with Youtube/Soundcloud import and iTunes/Spotify discovery. ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Supysonic](https://github.com/spl0k/supysonic) - Python implementation of the Subsonic server API. `AGPL-3.0` `Python`
- [SwingMusic](https://swingmusic.vercel.app/) - Swing Music is a beautiful, self-hosted music player and streaming server for your local audio files. Like a cooler Spotify ... but bring your own music. ([Source Code](https://github.com/swing-opensource/swingmusic)) `MIT` `Python`
- [vod2pod-rss](https://github.com/madiele/vod2pod-rss) `⚠` - Convert YouTube and Twitch channels to podcasts, no storage required. Transcodes VoDs to MP3 192k on the fly, generates an RSS feed to use in podcast clients. `MIT` `Docker`
- [Volumio](https://volumio.com/) - A free and open source linux distribution, designed and fine-tuned exclusively for music playback. ([Source Code](https://github.com/volumio/Volumio2)) `GPL-3.0` `Nodejs`


### Media Streaming - Multimedia Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Multimedia](https://en.wikipedia.org/wiki/Multimedia) streaming tools and software.

- [Dim](https://github.com/Dusk-Labs/dim) - Dim is a self-hosted media manager fueled by dark forces. With minimal setup, Dim will organize and beautify your media collections, letting you access and play them anytime from anywhere. `GPL-2.0` `Rust`
- [Gerbera](https://gerbera.io/) - Gerbera is an UPnP Media Server. It allows you to stream your digital media throughout your home network and listen to/watch it on a variety of UPnP compatible devices. ([Source Code](https://github.com/gerbera/gerbera)) `GPL-2.0` `C++`
- [homehost](https://github.com/ridhwaans/homehost) `⚠` - Self-hosted React + Redux app that streams your media collection (music, movies, books, podcasts, comics etc). `MIT` `Nodejs`
- [Icecast 2](https://icecast.org) - Streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://gitlab.xiph.org/xiph/icecast-server), [Clients](https://icecast.org/apps/)) `GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - Media server for audio, video, books, comics, and photos with a sleek interface and robust transcoding capabilities. Almost all modern platforms have clients, including Roku, Android TV, iOS, and Kodi. ([Demo](https://demo.jellyfin.org/stable), [Source Code](https://github.com/jellyfin/jellyfin)) `GPL-2.0` `C#`
- [Karaoke Eternal](https://www.karaoke-eternal.com) - Host awesome karaoke parties where everyone can easily find and queue songs from their phone's browser. The player is also fully browser-based with support for MP3+G, MP4 and WebGL visualizations. ([Source Code](https://www.karaoke-eternal.com/repo)) `ISC` `Nodejs`
- [Kodi](https://kodi.tv/) - Multimedia/Entertainment center, formerly known as XBMC. Runs on Android, BSD, Linux, macOS, iOS and Windows. ([Source Code](https://github.com/xbmc/xbmc)) `GPL-2.0` `C++`
- [LBRY](https://lbry.com/) - Is a secure, open, and community-run digital marketplace that aims to replace Youtube and Amazon. ([Demo](https://lbry.tv/), [Source Code](https://github.com/lbryio/lbry.com), [Clients](https://github.com/lbryio/lbry-desktop)) `MIT` `PHP`
- [MistServer](https://mistserver.org/) - Streaming media server that works well in any streaming environment. ([Source Code](https://github.com/DDVTECH/mistserver)) `AGPL-3.0` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - NymphCast is a Chromecast alternative which turns your choice of Linux-capable hardware into an audio and video source for a television or powered speakers. ([Source Code](https://github.com/MayaPosch/NymphCast)) `BSD-3-Clause` `C++`
- [Podify](https://www.podify.org/) - Allows you to download videos and audio from any source supported by youtube-dl and subscribe to and watch these downloads using your favorite podcast app. ([Source Code](https://github.com/podify-org/podify/)) `GPL-3.0` `Ruby`
- [ReadyMedia](https://sourceforge.net/projects/minidlna/) - Simple media server software, with the aim of being fully compliant with DLNA/UPnP-AV clients. Formerly known as MiniDLNA. ([Source Code](https://sourceforge.net/p/minidlna/git/ci/master/tree/)) `GPL-2.0` `C`
- [Rygel](https://wiki.gnome.org/action/show/Projects/Rygel) - Rygel is a UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller. ([Source Code](https://gitlab.gnome.org/GNOME/rygel/)) `GPL-3.0` `C`
- [SheetAble](https://sheetable.net) - Self-hosted music sheet organizing software for all music enthusiasts. Upload and organize your sheets for any kind of instrument. ([Source Code](https://github.com/SheetAble/SheetAble)) `AGPL-3.0` `Go`
- [Stash](https://stashapp.cc) - A web-based library organizer and player for your adult media stash, with auto-tagging and metadata scraping support. ([Source Code](https://github.com/stashapp/stash)) `AGPL-3.0` `Go`
- [µStreamer](https://github.com/pikvm/ustreamer) - Lightweight and very quick server to stream MJPEG video from any V4L2 device to the net. `GPL-3.0` `C`
- [üWave](https://u-wave.net/) `⚠` - Self-hosted collaborative listening platform. Users take turns playing media—songs, talks, gameplay videos, or anything else—from a variety of media sources like YouTube and SoundCloud. ([Demo](https://wlk.yt/), [Source Code](https://github.com/u-wave)) `MIT` `Nodejs`


### Media Streaming - Video Streaming

**[`^        back to top        ^`](#awesome-selfhosted)**

[Video](https://en.wikipedia.org/wiki/Video) streaming tools and software.

- [Bluecherry](https://www.bluecherrydvr.com/) - Closed-circuit television (CCTV) software application which supports IP and Analog cameras. ([Source Code](https://github.com/bluecherrydvr/bluecherry-apps)) `GPL-2.0` `PHP`
- [cmyflix](https://github.com/farfalleflickan/cmyflix) `⚠` - Self-hosted, super lightweight Netflix alternative. `AGPL-3.0` `C`
- [CyTube](https://github.com/calzoneman/sync) - CyTube is a web application providing media synchronization, chat, and more for an arbitrary number of channels. ([Demo](https://cytu.be)) `MIT` `Nodejs`
- [Frigate](https://frigate.video/) - Monitor your security cameras with locally processed AI. ([Source Code](https://github.com/blakeblackshear/frigate)) `MIT` `Docker/Python/Nodejs`
- [Invidious](https://github.com/iv-org/invidious) `⚠` - Invidious is an alternative front-end to YouTube. ([Demo](https://docs.invidious.io/instances/)) `AGPL-3.0` `Crystal`
- [Kerberos.io](https://kerberos.io) - Kerberos.io is a video surveillance solution, which works with any camera and on every Linux based machine (Raspberry Pi, Docker, Kubernetes cluster). ([Demo](https://demo.kerberos.io/), [Source Code](https://github.com/kerberos-io/agent)) `MIT` `Docker`
- [MediaCMS](https://mediacms.io) - MediaCMS is a modern, fully featured open source video and media CMS, written in Python/Django/React, featuring a REST API. ([Source Code](https://github.com/mediacms-io/mediacms)) `AGPL-3.0` `Python/Docker`
- [Oblecto](https://github.com/robinp7720/Oblecto) `⚠` - Media server for Movies and TV Shows with a responsive Vue.js frontend. It has robust transcoding support as well as federation capabilities to share your library with your friends. `AGPL-3.0` `Nodejs`
- [Oddworks](https://gitlab.com/oddnetworks/oddworks/core) - Oddworks is an open source video distribution platform built to destroy the barriers to streaming television with SDKs for Roku, Apple iOS/tvOS, Google Android, and Amazon FireTV. `MIT` `Nodejs`
- [Olaris](https://gitlab.com/olaris/olaris-server) - Olaris is an open-source, community driven, media manager and transcoding server. `GPL-3.0` `Go`
- [Open Streaming Platform](https://openstreamingplatform.com) - Self-Hosted alternative to Twitch and Youtube Live for live and on-demand video streaming. ([Source Code](https://gitlab.com/Deamos/flask-nginx-rtmp-manager)) `MIT` `Python`
- [OvenMediaEngine](https://ovenmediaengine.com) - OvenMediaEngine is a selfhostable Open-Source Streaming Server with Sub-Second Latency. ([Demo](https://demo.ovenplayer.com), [Source Code](https://github.com/AirenSoft/OvenMediaEngine)) `GPL-3.0` `C++`
- [Owncast](https://github.com/owncast/owncast) - Owncast is an open source, self-hosted, decentralized, single user live video streaming and chat server for running your own live streams similar in style to the large mainstream options. `MIT` `Go`
- [PeerTube](https://joinpeertube.org/en/) - Decentralized video streaming platform using P2P (BitTorrent) directly in the web browser. ([Source Code](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Radium](https://github.com/Zibbp/Radium) - Synced stream and video playback with VOD capabilities utilizing HLS. Developed for movie nights but has many use cases. `MIT` `Nodejs/Docker`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - Self-hosted torrent videostreaming service/torrent client that allows searching and playing videos from torrents in the browser or from a Chromecast/AppleTV/Smart TV. `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - Restreamer allows you to do h.264 real-time video streaming on your website without a streaming provider. ([Source Code](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [ShinobiCE](https://gitlab.com/Shinobi-Systems/ShinobiCE) - Open Source CCTV software written in Node with both IP and local camera support. `AGPL-3.0/GPL-3.0` `Nodejs`
- [SRS](https://ossrs.io/) - A simple, high efficiency and real-time video server, supports RTMP, WebRTC, HLS, HTTP-FLV and SRT. ([Source Code](https://github.com/ossrs/srs)) `MIT` `Docker/C++`
- [Streama](https://github.com/streamaserver/streama) - Self hosted streaming media server. `MIT` `Java`
- [SyncTube](https://github.com/RblSb/SyncTube) - Lightweight and very simple to setup CyTube alternative to watch videos with friends and chat. `MIT` `Nodejs/Haxe`
- [Tube](https://git.mills.io/prologic/tube) - Youtube-like (_without censorship and features you don't need!_) Video Sharing App written in Go which also supports automatic transcoding to MP4 H.265 AAC, multiple collections and RSS feed. ([Demo](https://tube.mills.io)) `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - Cross-platform multimedia player client and server supporting most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. ([Source Code](https://github.com/videolan/vlc)) `GPL-2.0` `C`
- [Zoneminder](https://www.zoneminder.com/) - Closed-circuit television (CCTV) software application which supports IP, USB and Analog cameras. ([Source Code](https://github.com/ZoneMinder/ZoneMinder)) `GPL-2.0` `PHP`


### Miscellaneous

**[`^        back to top        ^`](#awesome-selfhosted)**

Software that does not fit in another section.

- [2FAuth](https://github.com/Bubka/2FAuth) - A web app to manage your Two-Factor Authentication (2FA) accounts and generate their security codes. ([Demo](https://demo.2fauth.app/)) `AGPL-3.0` `PHP`
- [AlertHub](https://github.com/Ardakilic/alerthub) `⚠` - AlertHub is a simple tool to get alerted from GitHub releases. `MIT` `Nodejs`
- [Anchr](https://anchr.io) - Anchr is a toolbox for tiny tasks on the internet, including bookmark collections, URL shortening and (encrypted) image uploads. ([Source Code](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Apache Solr](https://lucene.apache.org/solr/) - Solr is the popular, blazing-fast, open source enterprise search platform built on Apache Lucene. ([Source Code](https://lucene.apache.org/solr/downloads.html)) `Apache-2.0` `Java`
- [asciiflow](https://asciiflow.com/) - Flow Diagram Drawing Tool. ([Source Code](https://github.com/lewish/asciiflow)) `MIT` `Nodejs`
- [asciinema](https://github.com/asciinema/asciinema-server) - Web app for hosting asciicasts. ([Demo](https://asciinema.org/)) `Apache-2.0` `Elixir/Docker`
- [CapRover](https://caprover.com/) - Build your own PaaS in a few minutes. ([Demo](https://captain.server.demo.caprover.com/#/login), [Source Code](https://github.com/caprover/caprover)) `Apache-2.0` `Docker/Nodejs`
- [changedetection.io](https://github.com/dgtlmoon/changedetection.io) - Self-hosted tool for staying up-to-date with web-site content changes. `Apache-2.0` `Python/Docker`
- [Cloudlog](https://magicbug.co.uk/cloudlog/) - Cloudlog is a self-hosted PHP application that allows you to log your amateur radio contacts anywhere. ([Source Code](https://github.com/magicbug/cloudlog)) `MIT` `PHP`
- [CUPS](https://www.cups.org/) - The Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers. ([Source Code](https://github.com/apple/cups)) `GPL-2.0` `C`
- [CyberChef](https://github.com/gchq/CyberChef) - Perform all manner of operations within a web browser such as AES, DES and Blowfish encryption and decryption, creating hexdumps, calculating hashes, and much more. ([Demo](https://gchq.github.io/CyberChef)) `Apache-2.0` `Javascript`
- [DailyTxT](https://github.com/PhiTux/DailyTxT) - Encrypted Diary Web-App to save your personal memories of each day. Includes a search-function and encrypted file-upload. `MIT` `Python`
- [DomainMOD](https://domainmod.org) - Application to manage your domains and other internet assets in a central location. DomainMOD includes a Data Warehouse framework that allows you to import your WHM/cPanel web server data so that you can view, export, and report on your data. ([Demo](https://demo.domainmod.org), [Source Code](https://github.com/domainmod/domainmod)) `GPL-3.0` `PHP`
- [DOMJudge](https://www.domjudge.org/) - A system for running a programming contest, like the ICPC regional and world championship programming contests. ([Demo](https://www.domjudge.org/demo), [Source Code](https://github.com/DOMjudge/domjudge)) `GPL-2.0/BSD-3-Clause/MIT` `PHP`
- [F-Droid](https://f-droid.org) - Server tools for maintaining an F-Droid repository system. ([Source Code](https://gitlab.com/fdroid/fdroidserver)) `AGPL-3.0` `Python/Docker`
- [Flagsmith](https://flagsmith.com) - Flagsmith provides a dashboard, API and SDKs for adding Feature Flags to your applications. Alternative to LaunchDarkly. ([Source Code](https://github.com/flagsmith/flagsmith)) `BSD-3-Clause` `Docker`
- [GO Feature Flag](https://gofeatureflag.org) - Simple, complete, and lightweight feature flag solution. Alternative to LaunchDarkly. ([Source Code](https://github.com/thomaspoignant/go-feature-flag)) `MIT` `Go`
- [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) `⚠` - Hassle-Free Way to Self-Host Google Fonts. Get eot, ttf, svg, woff and woff2 files + CSS snippets. ([Demo](https://gwfh.mranftl.com/fonts)) `MIT` `Nodejs`
- [Gophish](https://getgophish.com/) - Gophish is a powerful, open-source phishing framework that makes it easy to test your organization's exposure to phishing. ([Source Code](https://github.com/gophish/gophish)) `MIT` `Go/Docker`
- [graph-vl](https://github.com/verifid/graph-vl) - Identity document verification using Machine Learning and GraphQL. `MIT` `Python`
- [IconCaptcha](https://www.fabianwennink.nl/projects/IconCaptcha/) - IconCaptcha is a self-hosted, fast, simple and user-friendly captcha for PHP. ([Source Code](https://github.com/fabianwennink/IconCaptcha-Plugin-jQuery-PHP)) `MIT` `PHP`
- [Jellyseerr](https://github.com/Fallenbagel/jellyseerr) - A free and open source software application for managing requests for your media library. It is a a fork of Overseerr built to bring support for Jellyfin & Emby media servers. `MIT` `Docker`
- [Journal](https://github.com/inoda/journal) - Simple journaling with encrypted entries and sharing capabilities. `MIT` `Ruby`
- [King Phisher](https://github.com/rsmusllp/king-phisher) - King Phisher is a tool for testing and promoting user awareness by simulating real world phishing attacks. `BSD-3-Clause` `Python`
- [Koillection](https://koillection.github.io/) - Koillection is a service allowing users to manage any kind of collections. ([Source Code](https://github.com/benjaminjonard/koillection)) `MIT` `PHP`
- [Lama-Cleaner](https://github.com/Sanster/lama-cleaner) `⚠` - A free and open-source inpainting tool powered by SOTA AI model. `Apache-2.0` `Python/Docker`
- [Libre Translate](https://libretranslate.com/) - Free and Open Source Machine Translation API, entirely self-hosted. ([Source Code](https://github.com/LibreTranslate/LibreTranslate)) `AGPL-3.0` `Docker/Python`
- [MailyGo](https://codeberg.org/jlelse/MailyGo) - MailyGo is a small tool written in Go that allows to send HTML forms, for example from static websites without a dynamic backend, via email. `MIT` `Go`
- [Mere Medical](https://meremedical.co/) `⚠` - With Mere Medical, you can finally manage all of your medical records from Epic MyChart, Cerner, and OnPatient patient portals in one place. Privacy-focused, self-hosted, and offline-first. ([Demo](https://demo.meremedical.co), [Source Code](https://github.com/cfu288/mere-medical)) `GPL-3.0` `Docker/Nodejs`
- [Monica](https://monicahq.com/) - Personal relationship manager, and a new kind of CRM to organize interactions with your friends and family. ([Source Code](https://github.com/monicahq/monica)) `AGPL-3.0` `PHP`
- [mosparo](https://mosparo.io/) - The modern spam protection tool. It replaces other captcha methods with a simple and easy to use spam protection solution. ([Source Code](https://github.com/mosparo/mosparo)) `MIT` `PHP`
- [Musical Artifacts](https://musical-artifacts.com/) - Helping to catalog, preserve and free the artifacts you need to produce music. ([Source Code](https://github.com/lfzawacki/musical-artifacts)) `MIT` `Ruby`
- [MyPaas](https://github.com/almarklein/mypaas) - Run your own PaaS using Docker, Traefik, and great monitoring. `BSD-2-Clause` `Python/Docker`
- [NATS](https://nats.io/) - Publish/Subscribe event bus, durable queues, key-value store, object store, and more. Native multi-tenancy, multiple authentication and authorization mechanisms. Easy to self-host and federate. ([Source Code](https://github.com/nats-io/nats-server), [Clients](https://github.com/nats-io)) `Apache-2.0` `Go`
- [Neko](https://neko.m1k1o.net) - A self hosted virtual browser (rabb.it clone) that runs in Docker. ([Source Code](https://github.com/m1k1o/neko)) `Apache-2.0` `Docker/Go`
- [Noisedash](https://github.com/kaythomas0/noisedash) - Self-hostable web tool for generating ambient noises/sounds using audio tools and user-uploadable samples. `AGPL-3.0` `Nodejs`
- [Notica](https://notica.us) - Lets you send browser notifications from your terminal to your desktop or phone. No installation or registration is required. ([Source Code](https://github.com/tannercollin/Notica)) `MIT` `Nodejs`
- [Octave Online](https://octave-online.net/) - Infrastracture behind a web UI for GNU Octave, the libre alternative to MATLAB. ([Source Code](https://github.com/octave-online/octave-online-server)) `AGPL-3.0` `Docker/Nodejs`
- [Ombi](https://ombi.io/) - A content request system for Plex/Emby, connects to SickRage, CouchPotato, Sonarr, with a growing feature set. ([Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi)) `GPL-2.0` `C#`
- [OpenZiti](https://openziti.github.io/) - Fully-featured, self-hostable, zero trust, full mesh overlay network. Includes a 2FA support out of the box, clients for all major desktop/mobile OS'es. ([Source Code](https://github.com/openziti/ziti)) `Apache-2.0` `Go`
- [OS.js](https://www.os-js.org/) - Desktop implementation for your browser with a fully-fledged window manager, Application APIs, GUI toolkits and filesystem abstraction. ([Demo](https://demo.os-js.org/), [Source Code](https://github.com/os-js/OS.js)) `BSD-2-Clause` `Nodejs`
- [OTS-Share](https://github.com/rpgeeganage/ots-share-app) - A self-hosting app to share secrets with file support upto 1MB. `MIT` `Docker`
- [Overseerr](https://overseerr.dev/) `⚠` - Overseerr is a free and open source software application for managing requests for your media library. It integrates with your existing services, such as Sonarr, Radarr, and Plex!. ([Source Code](https://github.com/sct/overseerr)) `MIT` `Docker`
- [PassCheck](https://passcheck.anhur.xyz/) - A web application featuring some handy password tools, including a password generator, strength checker and HaveIBeenPwned breach checker. ([Source Code](https://github.com/AtentumZero/PassCheck)) `MIT` `Javascript`
- [penpot](https://penpot.app/) - A web based design and prototyping platform meant for cross-domain teams. ([Source Code](https://github.com/penpot/penpot)) `MPL-2.0` `Docker`
- [POMjs](https://password.oppetmoln.se/) - Random Password Generator. ([Source Code](https://github.com/joho1968/POMjs)) `GPL-2.0` `Javascript`
- [Reactive Resume](https://rxresu.me/) - A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. ([Demo](https://rxresu.me/app/dashboard/), [Source Code](https://github.com/AmruthPillai/Reactive-Resume)) `MIT` `Docker/Nodejs`
- [Readflow](https://readflow.app) - Lightweight news reader with modern interface and features: full-text search, automatic categorization, archiving, offline support, notifications... ([Source Code](https://github.com/ncarlier/readflow)) `MIT` `Go`
- [ReleaseBell](https://releasebell.com/) - Send release notifications for starred Github repos. ([Source Code](https://git.cloudron.io/cloudron/releasebell)) `MIT` `Nodejs`
- [revealjs](https://revealjs.com) - Framework for easily creating beautiful presentations using HTML. ([Demo](https://revealjs.com/), [Source Code](https://github.com/hakimel/reveal.js)) `MIT` `Javascript`
- [Revive Adserver](https://www.revive-adserver.com/) - World's most popular free, open source ad serving system. Formerly known as OpenX Adserver and phpAdsNew. ([Source Code](https://github.com/revive-adserver/revive-adserver)) `GPL-2.0` `PHP`
- [SANE Network Scanning](http://sane-project.org/) - Allow remote clients to access image acquisition devices (scanners) available on the local host. ([Source Code](http://www.sane-project.org/cvs.html)) `GPL-2.0` `C`
- [Speed Test by OpenSpeedTest™](https://openspeedtest.com/) - Free & Open-Source HTML5 Network Performance Estimation Tool. ([Source Code](https://github.com/openspeedtest/Speed-Test)) `MIT` `Docker`
- [string.is](https://string.is/) - An open-source, privacy-friendly online string toolkit for developers. ([Source Code](https://github.com/recurser/string-is)) `AGPL-3.0` `Nodejs`
- [Teleport](https://goteleport.com/) - Certificate authority and access plane for SSH, Kubernetes, web applications, and databases. ([Source Code](https://github.com/gravitational/teleport)) `Apache-2.0` `Go`
- [TeslaMate](https://github.com/adriankumpf/teslamate) - A powerful data logger for Tesla vehicles. `MIT` `Elixir`
- [tmate](https://tmate.io/) - Instant terminal sharing. ([Source Code](https://github.com/tmate-io/tmate)) `ISC` `C`
- [Upsnap](https://github.com/seriousm4x/UpSnap) - A simple Wake on LAN (WOL) dashboard app. Wake up devices on your network and see current status. `MIT` `Svelte/Go/Docker`
- [VanDAM](https://github.com/Floppy/van_dam) - Digital asset manager for 3d print files; STL, OBJ, 3MF and more. `MIT` `Ruby/Docker`
- [ViMbAdmin](https://www.vimbadmin.net/) - Provides a web based virtual mailbox administration system to allow mail administrators to easily manage domains, mailboxes and aliases. ([Source Code](https://github.com/opensolutions/ViMbAdmin)) `GPL-3.0` `PHP`
- [Wallabag](https://www.wallabag.org) - Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability. ([Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`
- [WeeWX](https://weewx.com/) - Open source software for your weather station. ([Demo](https://weewx.com/showcase.html), [Source Code](https://github.com/weewx/weewx)) `GPL-3.0` `Python`
- [WeTTY](https://butlerx.github.io/wetty/#/) - Terminal in browser over http/https. ([Source Code](https://github.com/butlerx/wetty)) `MIT` `Docker/Nodejs`


### Money, Budgeting & Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[Money management](https://en.wikipedia.org/wiki/Money_management) and budgeting sofware.

_Related: [Inventory Management](#inventory-management), [Resource Planning - Enterprise Resource Planning](#resource-planning---enterprise-resource-planning)_

- [Actual](https://actualbudget.github.io/docs/) - Actual is a local-first personal finance tool based on zero-sum budgeting. It support synchronization across devices, custom rules, manual transaction importing (from QIF, OFX, and QFX files), and optional automatic synchronization with many banks. ([Source Code](https://github.com/actualbudget/actual-server)) `MIT` `Nodejs`
- [Akaunting](https://akaunting.com/) - Akaunting is a free, online and open source accounting software designed for small businesses and freelancers. ([Source Code](https://github.com/akaunting/akaunting)) `GPL-3.0` `PHP`
- [Bigcapital](https://bigcapital.ly) - A self-hosted financial accounting and inventory management software for small to medium businesses. ([Source Code](https://github.com/bigcapitalhq/bigcapital)) `AGPL-3.0` `Docker`
- [Bitcart](https://bitcart.ai) - A self-hosted cryptocurrencies payment processor and development platform. ([Demo](https://admin.bitcart.ai), [Source Code](https://github.com/bitcart)) `MIT` `Docker/Python/Nodejs`
- [BTCPay Server](https://btcpayserver.org/) - A self-hosted Bitcoin and other cryptocurrencies payment processor. ([Demo](https://mainnet.demo.btcpayserver.org/), [Source Code](https://github.com/btcpayserver/)) `MIT` `C#`
- [Budget Zen](https://budgetzen.net) - End-to-end encrypted and simple expense manager. ([Demo](https://app.budgetzen.net), [Source Code](https://github.com/BrunoBernardino/budgetzen-web)) `AGPL-3.0` `Deno`
- [budgetzero](https://github.com/budgetzero/budgetzero) - Free, self-hosted, open-source, envelope-budgeting web and desktop app. ([Demo](https://app.budgetzero.io/budget)) `AGPL-3.0` `Nodejs`
- [Crater](https://github.com/crater-invoice/crater) - Free & Open Source Invoice App for Freelancers & Small Businesses. ([Demo](https://demo.craterapp.com/)) `AAL` `PHP`
- [DePay](https://depay.com) - Accept Web3 Payments directly into your wallet. Peer-to-peer, free, self-hosted & open-source. ([Demo](https://depay.com/products/payments), [Source Code](https://github.com/depayfi/widgets)) `MIT` `Nodejs`
- [Family Accounting Tool](https://github.com/nymanjens/facto) - Web-based finance management tool for partners with partially shared expenses. `Apache-2.0` `Scala`
- [Fava](https://beancount.github.io/fava/) - Fava is the web frontend of Beancount, a text based double-entry accounting system. ([Demo](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [Source Code](https://github.com/beancount/fava)) `MIT` `Python`
- [Firefly III](https://firefly-iii.org/) - Firefly III is a modern financial manager. It helps you to keep track of your money and make budget forecasts. It supports credit cards, has an advanced rule engine and can import data from many banks. ([Demo](https://demo.firefly-iii.org/), [Source Code](https://github.com/firefly-iii/firefly-iii)) `AGPL-3.0` `PHP`
- [Galette](https://galette.eu/dc/) - Galette is a membership management web application towards non profit organizations. ([Source Code](https://git.tuxfamily.org/galette/galette.git/)) `GPL-3.0` `PHP`
- [Ghostfolio](https://ghostfol.io/) - Wealth management software to keep track of stocks, ETFs and cryptocurrencies. ([Source Code](https://github.com/ghostfolio/ghostfolio)) `AGPL-3.0` `Docker/Nodejs`
- [GRR](https://grr.devome.com/?lang=en) - Assets management and booking for small/medium companies. ([Source Code](https://github.com/JeromeDevome/GRR)) `GPL-2.0` `PHP`
- [Hub20](https://hub20.io/) - A self-hosted payment processor for Ethereum and ERC20 Tokens. ([Source Code](https://gitlab.com/mushroomlabs/hub20/)) `AGPL-3.0` `Docker/Python`
- [HyperSwitch](https://hyperswitch.io/) `⚠` - HyperSwitch is an Open Source Financial Switch to make payments Fast, Reliable and Affordable. It lets you connect with multiple payment processors and route traffic effortlessly, all with a single API integration. ([Source Code](https://github.com/juspay/hyperswitch)) `Apache-2.0` `Docker/Rust`
- [IHateMoney](https://ihatemoney.org/) - Manage your shared expenses, easily. ([Demo](https://ihatemoney.org/demo/), [Source Code](https://github.com/spiral-project/ihatemoney)) `BSD-3-Clause` `Docker/Python`
- [Invoice Ninja](https://www.invoiceninja.org/) - Powerful tool to invoice clients online. ([Demo](https://app.invoiceninja.com/invoices/create), [Source Code](https://github.com/invoiceninja/invoiceninja)) `AAL` `PHP`
- [InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) - Manage quotes, invoices, payments and customers for your small business. `MIT` `PHP`
- [Kill Bill](https://killbill.io/) - Open-Source Subscription Billing & Payments Platform. Have access to real-time analytics and financial reports. ([Source Code](https://github.com/killbill/killbill)) `Apache-2.0` `Java/Docker`
- [Kresus](https://kresus.org/) - Open source personal finance manager. ([Demo](https://kresus.org/en/demo.html), [Source Code](https://github.com/kresusapp/kresus)) `MIT` `Nodejs`
- [Lago](https://www.getlago.com/) - Open-source metering and usage-based billing. ([Source Code](https://github.com/getlago/lago)) `AGPL-3.0` `Docker`
- [OctoBot](https://www.octobot.online/) - Open-source cryptocurrency trading bot. ([Source Code](https://github.com/Drakkar-Software/OctoBot)) `GPL-3.0` `Python/Docker`
- [OnTrack](https://github.com/inoda/ontrack) - A simple app to track spend and set goals. `MIT` `Ruby/React`
- [OpenBudgeteer](https://github.com/TheAxelander/OpenBudgeteer) - A budgeting app based on the Bucket Budgeting Principle. `MIT` `Docker/C#`
- [REI3](https://rei3.de/home_en/) - Open source, expandable Business Management Software. Manage tasks, time, assets and much more. ([Demo](https://rei3.de/demo_en/), [Source Code](https://github.com/r3-team/r3)) `MIT` `Go`
- [SilverStrike](https://silverstrike.org/) - Personal finance management made easy. ([Demo](https://demo.silverstrike.org/), [Source Code](https://github.com/agstrike/silverstrike)) `MIT` `Python/Django`
- [SolidInvoice](https://solidinvoice.co) - Open source invoicing and quote application. ([Source Code](https://github.com/SolidInvoice/SolidInvoice)) `MIT` `PHP`


### Monitoring

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for [monitoring](https://en.wikipedia.org/wiki/Monitoring#Computing) systems, networks, applications and websites. 

**Please visit [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring), [awesome-sysadmin/Metrics and Metric Collection](https://github.com/awesome-foss/awesome-sysadmin#metrics--metric-collection)**



### Note-taking & Editors

**[`^        back to top        ^`](#awesome-selfhosted)**

[Note taking](https://en.wikipedia.org/wiki/Note-taking) editors.

_Related: [Wikis](#wikis)_

- [Benotes](https://benotes.org/) - An open source self hosted notes and bookmarks taking web app. ([Source Code](https://github.com/fr0tt/benotes)) `MIT` `PHP`
- [DailyNotes](https://github.com/m0ngr31/DailyNotes) - App for taking notes and tracking tasks on a daily basis in Markdown. `MIT` `Python`
- [dillinger](https://dillinger.io/) - The last Markdown editor, ever. ([Source Code](https://github.com/joemccann/dillinger)) `MIT` `Nodejs`
- [Dnote](https://www.getdnote.com) - A simple command line notebook with multi-device sync and web interface. ([Source Code](https://github.com/dnote/dnote)) `AGPL-3.0` `Go`
- [DocPHT](https://docpht.org/) - With DocPHT you can take notes and quickly document anything and without the use of any database. ([Demo](https://demo.docpht.org/), [Source Code](https://github.com/docpht/docpht)) `MIT` `PHP`
- [draw.io](https://draw.io) - Diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams. ([Source Code](https://github.com/jgraph/drawio)) `Apache-2.0` `Javascript`
- [flatnotes](https://github.com/dullage/flatnotes) - A self-hosted, database-less note-taking web app that utilises a flat folder of markdown files for storage. ([Demo](https://demo.flatnotes.io)) `MIT` `Docker`
- [HedgeDoc](https://demo.hedgedoc.org/) - Realtime collaborative markdown notes on all platforms, formerly known as CodiMD and HackMD CE. ([Source Code](https://github.com/hedgedoc/hedgedoc)) `AGPL-3.0` `Docker/Nodejs`
- [Joplin](https://joplinapp.org/) - Joplin is a note taking application with Markdown editor and encryption support for mobile and desktop platforms. Runs client-side and syncs through self hosted Nextcloud or similar. Consider it like open source alternative to Evernote. ([Source Code](https://github.com/laurent22/joplin)) `MIT` `Nodejs`
- [kiwix-serve](https://www.kiwix.org/en/downloads/kiwix-serve/) - HTTP daemon for serving wikis from ZIM files. ([Source Code](https://github.com/kiwix/kiwix-tools)) `GPL-3.0` `C++`
- [Livebook](https://livebook.dev) - Realtime collaborative notebook app based on Markdown that supports running Elixir codesnippets, TeX and Mermaid Diagrams. Easily deployed using Docker or Elixir. ([Source Code](https://github.com/livebook-dev/livebook)) `Apache-2.0` `Elixir`
- [Markdown Edit](https://github.com/georgeOsdDev/markdown-edit/) - Online markdown editor/viewer. `MIT` `HTML5`
- [Meemo](https://meemo.minimal-space.de/) - Personal notes stream with Markdown support. ([Source Code](https://github.com/cloudron-io/meemo)) `MIT` `Nodejs`
- [Memos](https://usememos.com/) - An open source, self-hosted knowledge base that works with a SQLite db file. ([Source Code](https://github.com/usememos/memos)) `MIT` `Docker/Go`
- [minimalist-web-notepad](https://github.com/pereorga/minimalist-web-notepad) - Minimalist notepad.cc clone. ([Demo](https://notes.orga.cat/)) `Apache-2.0` `PHP`
- [MiniNote](https://github.com/muety/mininote) - Simple Markdown note-taking app with persistence. `MIT` `Nodejs`
- [Notes'n'Todos](https://github.com/larspontoppidan/notesntodos) - Write notes and todos online in markdown with tag filtering and date sorting. ([Demo](https://lpss.dk/nnt-playground/)) `MIT` `Python`
- [Oddmuse](https://oddmuse.org/) - A simple wiki engine written in Perl. No database required. ([Source Code](https://github.com/kensanata/oddmuse)) `GPL-3.0` `Perl`
- [Overleaf](https://www.overleaf.com/) - Web-based collaborative LaTeX editor. ([Source Code](https://github.com/overleaf/overleaf)) `AGPL-3.0` `Ruby`
- [Plainpad](https://alextselegidis.com/get/plainpad/) - A modern note taking application for the cloud, utilizing the best features of progressive web apps technology. ([Demo](https://alextselegidis.com/try/plainpad/), [Source Code](https://github.com/alextselegidis/plainpad)) `GPL-3.0` `PHP`
- [savepad](https://github.com/shelltr/textpad) - Minimalist notepad based on notepad.cc. `MIT` `PHP`
- [Standard Notes](https://docs.standardnotes.com/self-hosting/getting-started) - Simple and private notes app. Protect your privacy while getting more done. That's Standard Notes. ([Demo](https://app.standardnotes.org/), [Source Code](https://github.com/standardnotes/app)) `GPL-3.0` `Ruby`
- [Trilium Notes](https://github.com/zadam/trilium) - Trilium Notes is a hierarchical note taking application with focus on building large personal knowledge bases. `AGPL-3.0` `Nodejs`
- [turndown](https://mixmark-io.github.io/turndown/) - HTML to Markdown converter written in Javascript. ([Source Code](https://github.com/mixmark-io/turndown)) `MIT` `Javascript`
- [Turtl](https://turtl.it/) - Totally private personal database and note taking app. ([Source Code](https://github.com/turtl)) `GPL-3.0` `CommonLisp`
- [Wreeto](https://wreeto.com) - Wreeto is an open source note-taking, knowledge management and wiki system built on top of Ruby on Rails framework. ([Source Code](https://github.com/chrisvel/wreeto_official)) `AGPL-3.0` `Ruby`
- [Writing](https://josephernest.github.io/writing/) - Lightweight distraction-free text editor, in the browser (Markdown and LaTeX supported). No lag when writing. ([Source Code](https://github.com/josephernest/writing)) `MIT` `Javascript`


### Office Suites

**[`^        back to top        ^`](#awesome-selfhosted)**

An [office suite](https://en.wikipedia.org/wiki/List_of_office_suites) is a collection of productivity software usually containing at least a word processor, spreadsheet and a presentation program.

- [Collabora Online Development Edition](https://www.collaboraoffice.com/code) - Collabora Online Development Edition (CODE) is a powerful LibreOffice-based online office that supports all major document, spreadsheet and presentation file formats, which you can integrate in your own infrastructure. ([Source Code](https://cgit.freedesktop.org/libreoffice/online/)) `MPL-2.0` `C++`
- [CryptPad](https://cryptpad.org) - CryptPad is a collaboration suite that is end-to-end-encrypted and open-source. It is built to enable collaboration, synchronizing changes to documents in real time. ([Source Code](https://github.com/cryptpad/cryptpad)) `AGPL-3.0` `Nodejs`
- [Etherpad](https://etherpad.org/) - Etherpad is a highly customizable Open Source online editor providing collaborative editing in really real-time. ([Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad-lite)) `Apache-2.0` `Nodejs`
- [Grist](https://getgrist.com/) - Grist is a next-generation spreadsheet with relational structure, formula-based access control, and a portable, self-contained format. Alternative to Airtable. ([Demo](https://docs.getgrist.com), [Source Code](https://github.com/gristlabs/grist-core)) `Apache-2.0` `Nodejs/Python`
- [Infinoted](https://github.com/gobby/gobby/wiki/Dedicated%20Server) - Server for [Gobby](https://github.com/gobby/gobby/wiki), a multi-platform collaborative text editor. ([Source Code](https://github.com/gobby/gobby)) `MIT` `C++`
- [ONLYOFFICE](https://helpcenter.onlyoffice.com/faq/server-opensource.aspx) - Office suite that enables you to manage documents, projects, team and customer relations in one place. ([Source Code](https://github.com/ONLYOFFICE/DocumentServer)) `AGPL-3.0` `Nodejs`
- [PHPOffice](https://github.com/PHPOffice) - PHPOffice contains libraries which permits to write and read files from most office suites. `LGPL-3.0` `PHP`
- [Rustpad](https://rustpad.io/) - Efficient and minimal collaborative code editor, self-hosted, no database required. ([Source Code](https://github.com/ekzhang/rustpad)) `MIT` `Rust`


### Password Managers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [password manager](https://en.wikipedia.org/wiki/Password_manager) allows users to store, generate, and manage their passwords for local applications and online services.

- [Bitwarden](https://bitwarden.com/) `⚠` - Password manager with webapp, browser extension, and mobile app. ([Source Code](https://github.com/bitwarden/server)) `AGPL-3.0` `C#`
- [keeweb](https://keeweb.info/) - This webapp is a browser and desktop password manager compatible with KeePass databases. ([Source Code](https://github.com/keeweb/keeweb)) `MIT` `HTML5`
- [Padloc](https://padloc.app/) - A modern, open source password manager for individuals and teams. ([Source Code](https://github.com/padloc/padloc)) `GPL-3.0` `Nodejs`
- [Passbolt](https://www.passbolt.com/) - Password manager dedicated for managing passwords in a collaborative way on any Web server, using a MySQL database backend. ([Source Code](https://github.com/passbolt/passbolt_api)) `AGPL-3.0` `PHP`
- [PassIt](https://passit.io/) - Simple password manage with sharing features by group and user, but no administration interface. ([Demo](https://app.passit.io/), [Source Code](https://gitlab.com/passit)) `AGPL-3.0` `Python`
- [Passky](https://passky.org) - Simple, modern and open source password manager with website, browser extension, android and desktop application. ([Demo](https://vault.passky.org), [Source Code](https://github.com/Rabbit-Company/Passky-Server)) `GPL-3.0` `PHP`
- [PassWall](https://github.com/passwall/passwall-server) - Open source password manager. `AGPL-3.0` `Go`
- [Psono](https://psono.com/) - A promising password managers fully featured for teams. ([Demo](https://www.psono.pw), [Source Code](https://gitlab.com/psono)) `Apache-2.0` `Python`
- [sysPass](https://www.syspass.org/) - Multiuser password management system. ([Demo](https://demo.syspass.org/), [Source Code](https://github.com/nuxsmin/sysPass)) `GPL-3.0` `PHP`
- [Teampass](https://teampass.net/) - Password manager dedicated for managing passwords in a collaborative way. One symmetric key is used to encrypt all shared/team passwords and stored server side in a file and the database. works on any server Apache, MySQL and PHP. ([Source Code](https://github.com/nilsteampassnet/TeamPass)) `GPL-3.0` `PHP`
- [vaults](https://github.com/IcyDrae/vaults) - Password manager featuring client side AES-256 encryption, PBKDF2 hashing, vaults, password generation & more. `GPL-3.0` `PHP`
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Lightweight Bitwarden server API implementation written in Rust. `GPL-3.0` `Rust`


### Pastebins

**[`^        back to top        ^`](#awesome-selfhosted)**

A [pastebin](https://en.wikipedia.org/wiki/Pastebin) is a type of online content-hosting service used for sharing and storing code and text.

- [bepasty](https://bepasty-server.readthedocs.io/en/latest/) - A pastebin for all kinds of files. ([Source Code](https://github.com/bepasty/bepasty-server)) `BSD-2-Clause` `Python`
- [bin](https://github.com/w4/bin) - A paste bin that's actually minimalist. `WTFPL/0BSD` `Rust`
- [dpaste](https://dpaste.org/) - Simple pastebin with multiple text and code option, with short url result easy to remember. ([Source Code](https://github.com/DarrenOfficial/dpaste)) `MIT` `Docker`
- [Drift](https://github.com/MaxLeiter/drift) - Self-hosted Github Gist clone. ([Demo](https://drift.maxleiter.com/)) `MIT` `Nodejs`
- [EdPaste](https://github.com/ptnr/EdPaste) - Self-hosted pastebin written in Laravel (PHP Framework). `MIT` `PHP`
- [ExBin](https://github.com/m1dnight/exbin) - A pastebin with public/private snippets and netcat server. `MIT` `Elixir`
- [fiche](https://github.com/solusipse/fiche) - Command line pastebin, all you need is netcat. ([Demo](https://termbin.com/)) `MIT` `C`
- [filite](https://github.com/raftario/filite) - A simple, light and standalone pastebin, URL shortener and file-sharing service. `MIT` `Rust`
- [FlashPaper](https://github.com/AndrewPaglusch/FlashPaper) - A one-time encrypted zero-knowledge password/secret sharing application focused on simplicity and security. No database or complicated set-up required. ([Demo](https://flashpaper.io)) `MIT` `PHP`
- [Hasty Paste](https://enchantedcode.co.uk/hasty-paste/) - A place to quickly paste some text and share it. Mostly used for sharing debug logs and such to help developers provide tech support. The project aims to be both fast and minimal. ([Source Code](https://github.com/enchant97/hasty-paste)) `AGPL-3.0` `Docker/Python`
- [Lenpaste](https://git.lcomrade.su/root/lenpaste) - Web service that allows you to share notes anonymously, an alternative to pastebin. ([Demo](https://paste.lcomrade.su/)) `AGPL-3.0` `Docker/Go`
- [LogPaste](https://github.com/mtlynch/logpaste) - Minimal pastebin web app that's easy to self-host and persists data to any S3-compatible backend. ([Demo](https://logpaste.com/)) `MIT` `Go`
- [MicroBin](https://github.com/szabodanika/microbin) - Simple, performant, configurable, entirely self-contained pastebin and URL shortener. `BSD-3-Clause` `Rust`
- [mojopaste](https://metacpan.org/dist/App-mojopaste) - Perl based pastebin. ([Demo](https://p.thorsen.pm/), [Source Code](https://github.com/jhthorsen/app-mojopaste)) `Artistic-2.0` `Perl`
- [MokinToken](https://github.com/nexus-uw/mokintoken) - Clientside encrypted pastebin using tweetnacl. `Unlicense` `PHP`
- [Opengist](https://github.com/thomiceli/opengist) - Self-hosted pastebin powered by Git. ([Demo](https://opengist.thomice.li)) `AGPL-3.0` `Docker/Go/Nodejs`
- [paaster](https://paaster.io) - Paaster is a secure by default end-to-end encrypted pastebin built with the objective of simplicity. ([Source Code](https://github.com/WardPearce/paaster)) `GPL-3.0` `Docker`
- [pacebin](https://paste.swurl.xyz/) - A dead-simple, self-hostable, filesystem-backed pastebin, written in C using Mongoose. ([Source Code](https://git.swurl.xyz/swirl/pacebin)) `AGPL-3.0` `C`
- [Password Pusher](https://pwpush.com) - A dead-simple application to securely communicate passwords (or text) over the web. Passwords automatically expire after a certain number of views and/or time has passed. ([Source Code](https://github.com/pglombardo/PasswordPusher)) `GPL-3.0` `Docker`
- [Pastefy](https://pastefy.app/) - Beautiful, simple and easy to deploy Pastebin with optional Client-Encryption, Multitab-Pastes, an API, a highlighted Editor and more. ([Source Code](https://github.com/interaapps/pastefy), [Clients](https://github.com/topics/pastefy-addon)) `MIT` `Java`
- [Pastila](https://pastila.nl/) - Minimalistic paste service. Single page, zero click experience. ([Source Code](https://github.com/ClickHouse/pastila)) `Apache-2.0` `SQL`
- [pasty](https://github.com/lus/pasty) - Pasty is a fast and lightweight code pasting server. ([Demo](https://pasty.lus.pm/)) `MIT` `Go`
- [PrivateBin](https://privatebin.info/) - PrivateBin is a minimalist, opensource online pastebin/discussion board where the server has zero knowledge of hosted data. ([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
- [prologic pastebin](https://git.mills.io/prologic/pastebin) - Simple pastebin service with convenient api and CLI. ([Demo](https://paste.mills.io)) `MIT` `Go`
- [PurritoBin](https://github.com/PurritoBin/PurritoBin) - Ultra fast, minimalistic, encrypted command line paste-bin, where the server has no knowledge of the paste data. `ISC` `C++`
- [rustypaste](https://github.com/orhun/rustypaste) - A minimal file upload/pastebin service. `MIT` `Rust`
- [SnyPy](https://snypy.com) - Open source on-prem code snippet manager. ([Demo](https://app.snypy.com), [Source Code](https://github.com/snypy)) `MIT` `Docker`
- [Spacebin](https://spaceb.in/) - Text-sharing for the final frontier — Reliable Pastebin server in Golang and Fiber. ([Source Code](https://github.com/orca-group/spirit)) `Apache-2.0` `Go`
- [Sup3rS3cretMes5age](https://github.com/algolia/sup3rS3cretMes5age) - Very simple (to deploy and to use) secret message service using Hashicorp Vault as a secrets storage. `MIT` `Go`
- [wantguns/bin](https://github.com/wantguns/bin) - Minimal pastebin for both textual and binary files shipped in a single statically linked binary. ([Demo](https://basedbin.fly.dev)) `GPL-3.0` `Rust`
- [Wastebin](https://github.com/matze/wastebin) - Lightweight, minimal and fast pastebin with an SQLite backend. ([Demo](https://bin.bloerg.net)) `MIT` `Rust`
- [YABin](https://github.com/Yureien/YABin) - A pastebin that contains plentiful features while remaining simple. Supports optional E2E encryption, a client-side CLI app, syntax highlighting, minimalistic UI, APIs, keyboard shortcuts, and more. It can even be run in serverless environments. ([Demo](https://bin.sohamsen.me/)) `MIT` `Nodejs`

### Personal Dashboards

**[`^        back to top        ^`](#awesome-selfhosted)**

Dashboards for accessing information and applications.

_Related: [Monitoring](#monitoring), [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)_

- [Baby Buddy](https://github.com/babybuddy/babybuddy) - Helps caregivers track baby sleep, feedings, diaper changes, and tummy time. ([Demo](https://demo.baby-buddy.net/login/?next=/)) `BSD-2-Clause` `Python`
- [Dashboard](https://github.com/phntxx/dashboard) - Minimalist homepage for organizing your web applications and bookmarks using JSON-files. `MIT` `Nodejs/Docker`
- [Dashy](https://github.com/lissy93/dashy) - Feature-rich homepage for your homelab, with easy YAML configuration. ([Demo](https://demo.dashy.to/)) `MIT` `Nodejs/Docker`
- [envlinks](https://github.com/maxhollmann/envlinks) - A minimalist link dashboard showing links from environment variables. ([Demo](https://envlinks-demo.vercel.app/)) `MIT` `Docker`
- [Fenrus](https://github.com/revenz/fenrus) - A self hosted personal home page that allows for multiple users, guest access and multiple dashboards for each user. It also has "Smart Apps" which display live data for those apps. `GPL-3.0` `Nodejs`
- [Habitica](https://habitica.com/) - Habit tracker app which treats your goals like a Role Playing Game. Previously called HabitRPG. ([Source Code](https://github.com/HabitRPG/habitica)) `GPL-3.0/CC-BY-SA-3.0` `Nodejs`
- [Heimdall](https://heimdall.site/) - Heimdall is an elegant solution to organise all your web applications. ([Source Code](https://github.com/linuxserver/Heimdall)) `MIT` `PHP`
- [Hiccup](https://designedbyashw.in/test/hiccup/) - A beautiful static homepage to get to your links and services quickly. It has built-in search, editing, PWA support and localstorage caching to easily organize your start page. ([Source Code](https://github.com/ashwin-pc/hiccup)) `MIT` `HTML5`
- [Homepage by benphelps](https://github.com/benphelps/homepage) - A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations. `GPL-3.0` `Docker/Nodejs`
- [Homepage by tomershvueli](https://github.com/tomershvueli/homepage) - Simple, standalone, self-hosted PHP page that is your window to your server and the web. `MIT` `PHP`
- [Homarr](https://homarr.dev) - Sleek, modern dashboard with many integrations and web-based config. ([Demo](https://demo.homarr.dev), [Source Code](https://github.com/ajnart/homarr)) `MIT` `Docker/Nodejs`
- [Homer](https://github.com/bastienwirtz/homer) - A dead simple static homepage to expose your server services, with an easy yaml configuration and connectivity check. `Apache-2.0` `HTML5`
- [Hubleys](https://github.com/knrdl/hubleys-dashboard) - Self-hosted personal dashboards to organize links for multiple users via a central yaml config. `MIT` `Docker`
- [Jump](https://github.com/daledavies/jump) - Yet another self-hosted startpage for your server designed to be simple, stylish, fast and secure. `MIT` `PHP`
- [LinkStack](https://linkstack.org/) - Open-source, customizable, self-hosted alternative to services like Linktree and Manylink with an intuitive, easy to use user/admin interface. LinkStack allows you to link all your social media platforms easily accessible on one page. ([Demo](https://linksta.cc/), [Source Code](https://github.com/LinkStackOrg/LinkStack)) `AGPL-3.0` `PHP`
- [Organizr](https://github.com/causefx/Organizr) - Organizr aims to be your one stop shop for your Servers Frontend. `GPL-3.0` `PHP`
- [Smashing](https://smashing.github.io/) - Smashing, the spiritual successor to Dashing, is a Sinatra based framework that lets you build excellent dashboards. It looks especially great on TVs. ([Source Code](https://github.com/Smashing/smashing)) `MIT` `Ruby`
- [Starbase 80](https://github.com/notclickable-jordan/starbase-80) - A simple homepage with an iPad-style application grid, for mobile and desktop. One JSON configuration file. `MIT` `Docker`
- [Web-Portal](https://github.com/enchant97/web-portal) - A python web app designed to allow a easy way to manage the links to all of your web services. `AGPL-3.0` `Docker/Python`
- [wger](https://wger.de/) - Web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger)) `AGPL-3.0` `Python`
- [Your Spotify](https://github.com/Yooooomi/your_spotify) `⚠` - Allows you to record your Spotify listening activity and have statistics about them served through a Web application. `MIT` `Nodejs/Docker`


### Photo and Video Galleries

**[`^        back to top        ^`](#awesome-selfhosted)**

A [gallery](https://en.wikipedia.org/wiki/Gallery_Software) is software that helps the user publish or share photos, pictures, videos or other digital media.

- [Chevereto](https://github.com/chevereto/chevereto) - Ultimate image sharing software. Create your very own personal image hosting website in just minutes. ([Source Code](https://github.com/chevereto/chevereto)) `AGPL-3.0` `PHP`
- [Coppermine](https://coppermine-gallery.net/) - Multilingual photo gallery that integrates with various bulletin boards. Includes upload approval and password protected albums. ([Demo](https://coppermine-gallery.net/demo/cpg15x/), [Source Code](https://github.com/coppermine-gallery/cpg1.6.x)) `GPL-3.0` `PHP`
- [Damselfly](https://damselfly.info) - Fast server-based photo management system for large collections of images. Includes face detection, face & object recognition, powerful search, and EXIF Keyword tagging. Runs on Linux, MacOS and Windows. `GPL-3.0` `C#/.NET`
- [Fussel](https://github.com/cbenning/fussel) - Self-hosted, no-backend static photo gallery. Face tag recognition, albums and more. ([Demo](https://benninger.ca/fussel-demo/)) `MIT` `Python/Docker`
- [HomeGallery](https://home-gallery.org) - Self-hosted open-source web gallery to browse personal photos and videos featuring tagging, mobile-friendly, and AI powered image discovery. ([Demo](https://demo.home-gallery.org), [Source Code](https://github.com/xemle/home-gallery)) `MIT` `Nodejs`
- [Immich](https://immich.app/) - Self-hosted photo and video backup solution directly from your mobile phone. ([Source Code](https://github.com/immich-app/immich)) `MIT` `Docker`
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Self hosted wannabe Google Photos clone, with a slight focus on cool graphs. `MIT` `Python`
- [Lychee](https://lycheeorg.github.io/) - Open source grid and album based photo-management-system. ([Source Code](https://github.com/LycheeOrg/Lychee)) `MIT` `PHP`
- [Mediagoblin](https://mediagoblin.org) - Free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc. ([Source Code](https://savannah.gnu.org/projects/mediagoblin)) `AGPL-3.0` `Python`
- [MediaHut](https://github.com/Fortyseven/MediaHut/) - A truly single-file, no-database, drop-in PHP media gallery. ([Demo](https://media.Network47.org/)) `MIT` `PHP`
- [Mejiro](https://github.com/dmpop/mejiro) - An easy-to-use PHP web application for instant photo publishing. `GPL-3.0` `PHP`
- [Nextcloud Memories](https://memories.gallery/) - Fast, modern and advanced photo management suite. Runs as a Nextcloud app. ([Demo](https://demo.memories.gallery/apps/memories/), [Source Code](https://github.com/pulsejet/memories)) `AGPL-3.0` `PHP`
- [Photo Stream](https://github.com/waschinski/photo-stream) - Minimalist self-hosted photo stream. ([Demo](https://floremotion.de/)) `MIT` `Ruby`
- [PhotoPrism](https://photoprism.org) - Personal photo management powered by Go and Google TensorFlow.  Browse, organize, and share your personal photo collection, using the latest technologies to automatically tag and find pictures. ([Demo](https://demo.photoprism.app/library/browse), [Source Code](https://github.com/photoprism/photoprism)) `AGPL-3.0` `Go`
- [Photoview](https://photoview.github.io/) - A simple and user-friendly Photo Gallery for personal servers. It is made for photographers and aims to provide an easy and fast way to navigate directories, with thousands of high resolution photos. ([Source Code](https://github.com/photoview/photoview)) `GPL-3.0` `Go`
- [PiGallery 2](https://bpatrik.github.io/pigallery2/) - A directory-first photo gallery website, with a rich UI, optimised for running on low resource servers. ([Source Code](https://github.com/bpatrik/pigallery2)) `MIT` `Docker/Nodejs`
- [Piwigo](https://piwigo.org/) - Photo gallery software for the web, built by an active community of users and developers. ([Source Code](https://github.com/Piwigo/Piwigo)) `GPL-2.0` `PHP`
- [Quru Image Server](https://quruimageserver.com/) - High performance dynamically resizing image server offering directory based access control cropping, rotation, color management and other tools. ([Demo](https://quruimageserver.com), [Source Code](https://github.com/quru/qis)) `AGPL-3.0` `Python`
- [sigal](https://github.com/saimn/sigal) - Yet another simple static gallery generator. `MIT` `Python`
- [SPIS](https://github.com/gbbirkisson/spis) - A simple, lightweight and fast media server with decent mobile support. `GPL-3.0` `Rust`
- [This week in past](https://github.com/RouHim/this-week-in-past) - Aggregates images taken this week, from previous years and presents them on a web page with a simple slideshow. ([Demo](http://152.70.175.46:80)) `MIT` `Docker/Rust`
- [Thumbor](http://thumbor.org/) - A smart imaging service and enables on-demand cropping, resizing, applying filters and optimizing images. ([Source Code](https://github.com/thumbor/thumbor)) `MIT` `Python/Docker`
- [UberGallery](https://www.ubergallery.net) - UberGallery is an easy to use, simple to manage, web photo gallery. UberGallery does not require a database and supports JPEG, GIF and PNG file types. Simply upload your images and UberGallery will automatically generate thumbnails and output HTML. ([Source Code](https://github.com/UberGallery/UberGallery)) `MIT` `PHP`
- [Zenphoto](https://www.zenphoto.org/) - Open-source gallery and CMS project. ([Source Code](https://github.com/zenphoto/zenphoto)) `GPL-2.0` `PHP`


### Polls and Events

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for organising [polls](https://en.wikipedia.org/wiki/Opinion_poll) and [events](https://en.wikipedia.org/wiki/Event).

_Related: [Booking and Scheduling](#booking-and-scheduling)_

- [Bitpoll](https://github.com/fsinfuhh/Bitpoll) - A web application for scheduling meetings and general polling. ([Demo](https://bitpoll.de/)) `GPL-3.0` `Python`
- [Calagator](https://calagator.org/) - Event aggregator. ([Source Code](https://github.com/calagator/calagator)) `MIT` `Ruby`
- [Christmas Community](https://github.com/Wingysam/Christmas-Community) - Create a simple place for your entire family to use to find gifts that people want, and to avoid double-gifting. `AGPL-3.0` `Docker/Nodejs`
- [Claper](https://claper.co/) - The ultimate tool to interact with your audience. An open-source alternative to Slido, AhaSlides and Mentimeter. ([Source Code](https://github.com/ClaperCo/Claper)) `GPL-3.0` `Elixir/Docker`
- [ClearFlask](https://clearflask.com) - Community-feedback tool for managing incoming feedback and prioritizing a public roadmap. Alternative to Canny, UserVoice, Upvoty. ([Demo](https://product.clearflask.com), [Source Code](https://github.com/clearflask/clearflask)) `AGPL-3.0` `Docker`
- [docassemble](https://docassemble.org/) - A free, open-source expert system for guided interviews and document assembly, based on Python, YAML, and Markdown. ([Demo](https://demo.docassemble.org/run/legal), [Source Code](https://github.com/jhpyle/docassemble)) `MIT` `Docker`
- [dudle](http://primelife.ercim.eu/results/opensource/63-dudle) - Online scheduling application. ([Demo](https://dudle.inf.tu-dresden.de/), [Source Code](https://github.com/kellerben/dudle)) `AGPL-3.0` `Ruby`
- [Feedka](https://github.com/drabkirn/feedka) `⚠` - Open-source web application that can serve as a platform to get authentic, kindful, and constructive feedback from your friends, family, and co-workers. `AGPL-3.0` `Ruby`
- [Fider](https://fider.io) - Open source alternative to UserVoice for customer feedback. ([Demo](https://demo.fider.io), [Source Code](https://github.com/getfider/fider)) `MIT` `Go`
- [Framadate](https://framadate.org/abc/) - Online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision. ([Demo](https://framadate.org/aqg259dth55iuhwm), [Source Code](https://framagit.org/framasoft/framadate?)) `CECILL-B` `PHP`
- [Gancio](https://gancio.org/) - A shared agenda for local communities. ([Source Code](https://framagit.org/les/gancio)) `AGPL-3.0` `Nodejs`
- [hitobito](https://hitobito.com/en) - A web application to manage complex group hierarchies with members, events and a lot more. ([Demo](https://demo.hitobito.com/en/users/sign_in), [Source Code](https://github.com/hitobito/hitobito)) `AGPL-3.0` `Ruby`
- [Input](https://getinput.co) - A privacy-focused, no-code, open-source form builder designed for simplicity and brand consistency. ([Source Code](https://github.com/deck9/input)) `AGPL-3.0` `PHP/Nodejs/Docker`
- [LimeSurvey](https://www.limesurvey.org) - Feature-rich Open Source web based polling software. Supports extensive survey logic. ([Demo](https://demo.limesurvey.org), [Source Code](https://github.com/LimeSurvey/LimeSurvey)) `GPL-2.0` `PHP`
- [Meetable](https://events.indieweb.org) - A minimal events aggregator. ([Source Code](https://github.com/aaronpk/Meetable)) `MIT` `PHP`
- [Mobilizon](https://mobilizon.org) - A federated tool that helps you find, create and organise events and groups. ([Demo](https://demo.mobilizon.org/), [Source Code](https://framagit.org/framasoft/mobilizon/)) `GPL-3.0` `Elixir`
- [OhMyForms](https://ohmyform.com/) - An open source alternative to TypeForm that can create stunning mobile-ready forms, surveys and questionnaires. ([Source Code](https://github.com/ohmyform/ohmyform)) `AGPL-3.0` `Docker`
- [Open Event Server](https://github.com/fossasia/open-event-server) - Enables organizers to manage events from concerts to conferences and meet-ups. `GPL-3.0` `Python`


### Proxy

**[`^        back to top        ^`](#awesome-selfhosted)**

A [proxy](https://en.wikipedia.org/wiki/Proxy_server) is a server application that acts as an intermediary between a client requesting a resource and the server providing that resource.

_Related: [Web Servers](#web-servers)_

- [imgproxy](https://imgproxy.net/) - Fast and secure standalone server for resizing and converting remote images. It works great when you need to resize multiple images on the fly without preparing a ton of cached resized images or re-doing it every time the design changes. ([Source Code](https://github.com/imgproxy/imgproxy)) `MIT` `Go/Docker`
- [inlets](https://inlets.dev/) - Expose your local endpoints to the Internet - with a Kubernetes integration, Docker image and CLI available. `MIT` `Go/Docker`
- [iodine](https://code.kryo.se/iodine/) - IPv4 over DNS tunnel solution, enabling you to start up a socks5 proxy listener. ([Source Code](https://github.com/yarrick/iodine)) `ISC` `C`
- [Koblas](https://github.com/ynuwenhof/koblas) - Lightweight SOCKS5 proxy server. `MIT` `Rust/Docker`
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Nginx Proxy Manager is an easy way to accomplish reverse proxying hosts with SSL termination. ([Source Code](https://github.com/NginxProxyManager/nginx-proxy-manager)) `MIT` `Nodejs/Docker`
- [Outline Server](https://getoutline.org/) - A proxy server that runs a Shadowsocks instance for each access key and a REST API to manage the access keys. ([Source Code](https://github.com/Jigsaw-Code/outline-server)) `Apache-2.0` `Docker/Nodejs`
- [Pomerium](https://www.pomerium.io) - An identity-aware reverse proxy, successor to now obsolete oauth_proxy. It inserts an OAuth step before proxying your request to the backend, so that you can safely expose your self-hosted websites to public Internet. ([Source Code](https://github.com/pomerium/pomerium)) `Apache-2.0` `Go`
- [Privoxy](https://www.privoxy.org) - Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk. `GPL-2.0` `C`
- [sish](https://github.com/antoniomika/sish) - Open source serveo/ngrok alternative providing HTTP(S)/WS(S)/TCP tunnels to localhost using only SSH. `MIT` `Go`
- [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) - SOCKS5 proxy server with built-in authentication and Telegram-bot for user management and user statistics on data spent (handy when you pay per GB of data). It is dockerised and simple to install. `Apache-2.0` `Nodejs`
- [Squid](http://www.squid-cache.org/) - Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. ([Source Code](https://code.launchpad.net/squid)) `GPL-2.0` `C`
- [SWAG (Secure Web Application Gateway)](https://github.com/linuxserver/docker-swag) - Nginx webserver and reverse proxy with PHP support, built-in Certbot (Let's Encrypt) client and fail2ban integration. `GPL-3.0` `Docker`
- [Tinyproxy](https://tinyproxy.github.io/) - Light-weight HTTP/HTTPS proxy daemon. ([Source Code](https://github.com/tinyproxy/tinyproxy)) `GPL-2.0` `C`


### Recipe Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Software and tools for managing [recipes](https://en.wikipedia.org/wiki/Recipe).

- [Bar Assistant](https://github.com/karlomikus/bar-assistant) - Bar assistant is a self hosted application for managing your home bar. It allows you to add your ingredients, search for cocktails and create custom cocktail recipes. ([Demo](https://bar.karlomikus.com/)) `MIT` `PHP/Docker`
- [Chowdown.io](https://chowdown.io/) - Simple recipes in Markdown format. ([Source Code](https://github.com/clarklab/chowdown)) `Unlicense` `Ruby`
- [Groceri.es](https://groceri.es/) - Web-based application to manage your recipes and plan your meals ahead. groceri.es keeps track of your menu plans and generates a groceries list for you. ([Source Code](https://github.com/juriansluiman/groceri.es)) `MIT` `Docker/Python`
- [kcal](https://github.com/kcal-app/kcal) - Track nutritional information about foods and recipes, set goals, and record a food journal to help along the way. Kcal is a personal system that focuses on direct control of inputs and a minimal, easy to use recipe presentation for preparing meals. `MPL-2.0` `PHP`
- [KitchenOwl](https://tombursch.github.io/kitchenowl/) - A cross-platform shopping list, recipe storage, expense tracker, and meal planner following the material design language. ([Source Code](https://github.com/TomBursch/kitchenowl)) `AGPL-3.0` `Docker`
- [Mealie](https://hay-kot.github.io/mealie/) - Material design inspired recipe manager with category and tag management, shopping-lists, meal-planner, and site customizations. Mealie is focused on simple user interactions to keep the whole family using the app. ([Source Code](https://github.com/hay-kot/mealie)) `MIT` `Python`
- [Recepturer](https://recepturer.com/) `⚠` - Let Recepturer help you organize all your recipes in one place. You can add, edit and delete recipes, and create meal plans. Simply type your recipe and all ingredients will be listed as you go. Data is stored on Dropbox. ([Source Code](https://github.com/sjoerdvanderhoorn/recepturer)) `MIT` `Javascript`
- [RecipeSage](https://github.com/julianpoy/recipesage) - A recipe keeper, meal plan organizer, and shopping list manager that can import recipes directly from any URL. ([Demo](https://recipesage.com)) `AGPL-3.0` `Nodejs`
- [reciphpes!](https://github.com/nanawel/reciphpes) - A lightweight, Symfony-based recipes indexing software supporting search and tags, using a SQLite database. `MIT` `Docker`
- [Tandoor Recipes](https://docs.tandoor.dev/) - Django application to manage, tag and search recipes using either built-in models or external storage providers hosting PDFs, Images or other files. ([Demo](https://app.tandoor.dev/accounts/login/?demo), [Source Code](https://github.com/vabene1111/recipes/)) `MIT` `Python`


### Remote Access

**[`^        back to top        ^`](#awesome-selfhosted)**

[Remote desktop](https://en.wikipedia.org/wiki/Remote_desktop_software) and [SSH](https://en.wikipedia.org/wiki/Secure_Shell) servers and web interfaces for remote management of computer systems.

- [Firezone](https://www.firezone.dev/) - Self-hosted secure remote access gateway that supports the WireGuard protocol. It offers a Web GUI, 1-line install script, multi-factor auth (MFA), and SSO. ([Source Code](https://github.com/firezone/firezone)) `Apache-2.0` `Elixir`
- [Guacamole](https://guacamole.apache.org) - Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC and RDP. ([Source Code](https://github.com/glyptodon/)) `Apache-2.0` `Java/C`
- [httprd](https://github.com/bitrate16/httprd) - Single-script remote desktop via web browser. `GPL-3.0` `Python`
- [MeshCentral](https://meshcentral.com/) - A full computer management website. With MeshCentral, you can run your own web server to remotely manage and control computers on a local network or anywhere on the internet. ([Source Code](https://github.com/Ylianst/MeshCentral)) `Apache-2.0` `Nodejs`
- [RustDesk](https://rustdesk.com/) - An open source TeamViewer alternative, works out of the box, no configuration required. ([Source Code](https://github.com/rustdesk/rustdesk-server)) `AGPL-3.0` `Rust/Docker`
- [RPort](https://rport.io) - Self-hosted open source remote management solution for Windows, macOS & Linux. ([Source Code](https://github.com/realvnc-labs/rport)) `MIT` `Go`
- [ShellHub](https://www.shellhub.io) - ShellHub is a modern SSH server for remotely accessing linux devices via command line (using any SSH client) or web-based user interface, designed as an alternative to sshd. ([Source Code](https://github.com/shellhub-io/shellhub)) `Apache-2.0` `Go/Other`
- [Sshwifty](https://github.com/nirui/sshwifty) - Sshwifty is a SSH and Telnet connector made for the Web. `AGPL-3.0` `Go/Docker`
- [Warpgate](https://github.com/warp-tech/warpgate) - Smart SSH and HTTPS bastion that works with any SSH client. `Apache-2.0` `Rust/Docker`


### Resource Planning

**[`^        back to top        ^`](#awesome-selfhosted)**

Software and tools to help with [resource and supply planning](https://en.wikipedia.org/wiki/Resource_planning).

- [farmOS](https://farmos.org/) - Web-based farm record keeping application. ([Demo](https://farmos-demo.rootedsolutions.io/), [Source Code](https://github.com/farmOS/farmOS)) `GPL-2.0` `PHP`
- [grocy](https://grocy.info/) - ERP beyond your fridge - grocy is a web-based self-hosted groceries & household management solution for your home. ([Demo](https://en.demo.grocy.info/), [Source Code](https://github.com/grocy/grocy)) `MIT` `PHP`
- [Tania](https://usetania.org/) - Tania is a free and open source farming management system for everyone. You can manage your areas, reservoirs, farm tasks, inventories, and the crop growing progress. ([Source Code](https://github.com/usetania/tania-core)) `Apache-2.0` `Go`


### Resource Planning - Enterprise Resource Planning

**[`^        back to top        ^`](#awesome-selfhosted)**

Software and tools to help with [enterprise resource and supply planning](https://en.wikipedia.org/wiki/Enterprise_resource_planning).

- [Dolibarr](https://www.dolibarr.org/) - Dolibarr ERP CRM is a modern software package to manage your company or foundation activity (contacts, suppliers, invoices, orders, stocks, agenda, accounting, ...). ([Demo](https://www.dolibarr.org/onlinedemo.php), [Source Code](https://github.com/Dolibarr/dolibarr)) `GPL-3.0` `PHP`
- [ERPNext](https://erpnext.com) - Free open source ERP system. ([Source Code](https://github.com/frappe/erpnext)) `GPL-3.0` `Python`
- [LedgerSMB](https://ledgersmb.org/) - Integrated accounting and ERP system for small and midsize businesses, with double entry accounting, budgeting, invoicing, quotations, projects, orders and inventory management, shipping and more. ([Demo](https://demo.cloud.efficito.com/erp/1.5/login.pl), [Source Code](https://github.com/ledgersmb/LedgerSMB)) `GPL-2.0` `Perl`
- [Odoo](https://www.odoo.com) - Free open source ERP system. ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo)) `LGPL-3.0` `Python`
- [OFBiz](https://ofbiz.apache.org/) - FOSS enterprise resource planning system with a suite of business applications flexible enough to be used across any industry. ([Source Code](https://svn.apache.org/viewvc/ofbiz/)) `Apache-2.0` `Java`
- [Tryton](https://www.tryton.org/) - Free open source business solution. ([Demo](https://www.tryton.org/download.html), [Source Code](https://hg.tryton.org/)) `GPL-3.0` `Python`


### Search Engines

**[`^        back to top        ^`](#awesome-selfhosted)**

A [search engine](https://en.wikipedia.org/wiki/Search_engine_(computing)) is an [information retrieval system](https://en.wikipedia.org/wiki/Information_retrieval) designed to help find information stored on a computer system. This includes [Web search engines](https://en.wikipedia.org/wiki/Web_search_engine).

- [Fess](https://fess.codelibs.org/) - Fess is a very powerful and easily deployable Enterprise Search Server. ([Demo](https://search.n2sm.co.jp/), [Source Code](https://github.com/codelibs/fess)) `Apache-2.0` `Java/Docker`
- [Gigablast](https://github.com/gigablast/open-source-search-engine) - Open-source search engine. `Apache-2.0` `C++`
- [Hound](https://github.com/hound-search/hound) - Lightning fast code searching made easy. `MIT` `Go/Docker`
- [Jina](https://github.com/jina-ai/jina/) - Cloud-native neural search framework for any kind of data. `Apache-2.0` `Python`
- [librengine](https://github.com/liameno/librengine) - Private web search engine. `GPL-3.0` `C++`
- [LibreX](https://github.com/hnhx/librex) `⚠` - Framework and javascript free privacy respecting meta search engine. `AGPL-3.0` `PHP/Docker`
- [Manticore Search](https://github.com/manticoresoftware/manticoresearch/) - Much faster alternative to Elasticsearch for full-text search and data analytics. Provides much lower response time for small, medium and big data. `GPL-2.0` `Docker/C++`
- [MeiliSearch](https://www.meilisearch.com) - Ultra relevant, instant and typo-tolerant full-text search API. ([Source Code](https://github.com/meilisearch/MeiliSearch)) `MIT` `Rust`
- [OpenSearch](https://opensearch.org) - Open source distributed and RESTful search engine. ([Source Code](https://github.com/opensearch-project/OpenSearch)) `Apache-2.0` `Java`
- [Searx](https://searx.github.io/searx/) `⚠` - Privacy-respecting, hackable metasearch engine. ([Demo](https://searx.space/), [Source Code](https://github.com/searx/searx)) `AGPL-3.0` `Python`
- [sist2](https://github.com/simon987/sist2) - Lightning-fast file system indexer and search tool. `GPL-3.0` `C`
- [Typesense](https://typesense.org) - Blazing fast, typo-tolerant open source search engine optimized for developer happiness and ease of use. ([Source Code](https://github.com/typesense/typesense)) `GPL-3.0` `C++`
- [Whoogle](https://github.com/benbusby/whoogle-search) `⚠` - A self-hosted, ad-free, privacy-respecting metasearch engine. `MIT` `Python`
- [Yacy](https://yacy.net/en/index.html) - Peer based, decentralized search engine server. ([Source Code](https://github.com/yacy/yacy_search_server)) `GPL-2.0` `Java`
- [ZincSearch](https://zincsearch.com) - A lightweight alternative to elasticsearch that requires minimal resources, written in Go. ([Demo](https://github.com/zinclabs/zinc#playground-server), [Source Code](https://github.com/zincsearch/zincsearch)) `Apache-2.0` `Go`


### Self-hosting Solutions

**[`^        back to top        ^`](#awesome-selfhosted)**

Software for easy installation, management and configuration of self-hosted services and applications.

- [Ansible-NAS](https://github.com/DaveStephens/ansible-nas) - Build a full-featured home server with this playbook and an Ubuntu box. `MIT` `YAML/Docker`
- [Bitsii Bridge](https://gitlab.com/bitsii/Bitsii/-/wikis/home) `⚠` - Easy to install self-hosting platform for Windows, MacOS, and Linux. Depends on a dynamic DNS provider and Let's Encrypt. ([Source Code](https://gitlab.com/bitsii/BBridge)) `MPL-2.0` `Java/Other`
- [CasaOS](https://www.casaos.io/) - A simple, easy-to-use, elegant open-source Home Cloud system. ([Source Code](https://github.com/IceWhaleTech/CasaOS)) `Apache-2.0` `Go/Docker`
- [Cloudbox](https://cloudbox.works) - Ansible-based solution for rapidly deploying a Docker containerized cloud media server. ([Source Code](https://github.com/Cloudbox/Cloudbox)) `GPL-3.0` `Shell/Ansible`
- [DietPi](https://dietpi.com/) - Minimal Debian OS optimized for single-board computers, which allows you to easily install and manage several services for selfhosting at home. ([Source Code](https://github.com/MichaIng/DietPi)) `GPL-2.0` `Shell`
- [DockSTARTer](https://dockstarter.com/) - DockSTARTer helps you get started with home server apps running in Docker. ([Source Code](https://github.com/GhostWriters/DockSTARTer)) `MIT` `Shell`
- [FLAP](https://www.flap.cloud) - Low maintenance framework to manage self-hosted services. ([Source Code](https://gitlab.com/flap-box/flap)) `AGPL-3.0` `Docker/Shell`
- [FreedomBox](https://freedomboxfoundation.org/) - Community project to develop, design and promote personal servers running free software for private, personal, communications. ([Source Code](https://salsa.debian.org/freedombox-team/freedombox)) `AGPL-3.0` `Python/Other`
- [HomelabOS](https://homelabos.com) - Your very own offline-first privacy-centric open-source data-center. Deploy over 100 services with a few commands. ([Source Code](https://gitlab.com/NickBusey/HomelabOS)) `MIT` `Docker`
- [LibreServer](https://libreserver.org/) - Home server configuration based on Debian. ([Source Code](https://github.com/bashrc2/libreserver)) `AGPL-3.0` `Shell`
- [Mars Server](https://github.com/borjapazr/mars-server) - Managed home server with Docker, Docker Compose, Make and Bash. `MIT` `Docker`
- [Mistborn](https://gitlab.com/cyber5k/mistborn) - Mistborn is your own virtual private cloud platform and WebUI that manages self hosted services. `MIT` `Bash/Docker` 
- [NextCloudPi](https://github.com/nextcloud/nextcloudpi) - Nextcloud preinstalled and preconfigured, with a text and web management interface and all the tools needed to self host private data. With installation images for Raspberry Pi, Odroid, Rock64, Docker, and a curl installer for Armbian/Debian. `GPL-2.0` `Bash/PHP`
- [OpenMediaVault](https://www.openmediavault.org/) - OpenMediaVault is the next generation network attached storage (NAS) solution based on Debian Linux. It contains services like SSH, (S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many more. ([Source Code](https://github.com/openmediavault/openmediavault)) `GPL-3.0` `PHP`
- [Sandstorm](https://sandstorm.io/) - Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm)) `Apache-2.0` `C++/Other`
- [Syncloud](https://syncloud.org/) - Your own online file storage, social network or email server. ([Source Code](https://github.com/syncloud/platform)) `GPL-3.0` `Python/Other`
- [Tipi](https://runtipi.io/) - Homeserver manager. One command setup, one click installs for your favorites self-hosted apps. ([Demo](https://demo.runtipi.io), [Source Code](https://github.com/meienberger/runtipi)) `GPL-3.0` `Shell`
- [UBOS](https://ubos.net/) - Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., and other features. `GPL-3.0` `Perl/Other`
- [WikiSuite](https://wikisuite.org) - The most comprehensive and integrated Free / Libre / Open Source enterprise software suite. ([Source Code](https://wikisuite.org/Source-Code)) `GPL-3.0/LGPL-2.1/Apache-2.0/MPL-2.0/MPL-1.1/MIT/AGPL-3.0` `ClearOS`
- [xsrv](https://xsrv.readthedocs.io/) - Install and manage self-hosted services/applications, on your own server(s). ([Source Code](https://github.com/nodiscc/xsrv)) `GPL-3.0` `Shell/Ansible`
- [YunoHost](https://yunohost.org/) - Server operating system aiming to make self-hosting accessible to everyone. ([Demo](https://yunohost.org/#/try), [Source Code](https://github.com/YunoHost)) `AGPL-3.0` `Python/Other`


### Software Development

**[`^        back to top        ^`](#awesome-selfhosted)**

[Software development](https://en.wikipedia.org/wiki/Software_development) is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.

**Please visit [Software Development - API Management](#software-development---api-management), [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment), [Software Development - FaaS & Serverless](#software-development---faas--serverless), [Software Development - IDE & Tools](#software-development---ide--tools), [Software Development - Localization](#software-development---localization), [Software Development - Low Code](#software-development---low-code), [Software Development - Project Management](#software-development---project-management), [Software Development - Testing](#software-development---testing)**

### Software Development - API Management

**[`^        back to top        ^`](#awesome-selfhosted)**

[API management](https://en.wikipedia.org/wiki/API_management) is the process of creating and publishing [application programming interfaces (APIs)](https://en.wikipedia.org/wiki/API), enforcing their usage policies, controlling access, nurturing the subscriber community, collecting and analyzing usage statistics, and reporting on performance. 

- [DreamFactory](https://www.dreamfactory.com/) - Turns any SQL/NoSQL/Structured data into Restful API. ([Source Code](https://github.com/dreamfactorysoftware/dreamfactory)) `Apache-2.0` `PHP`
- [form.io](https://form.io) - A REST API building platform that utilizes a drag & drop form builder, and is application framework agnostic. Contains open source and enterprise version. ([Demo](https://portal.form.io), [Source Code](https://github.com/formio)) `MIT` `Nodejs`
- [Fusio](https://www.fusio-project.org/) - Open-source API management platform which helps to build and manage REST APIs. ([Demo](https://fusio-project.org/demo), [Source Code](https://github.com/apioo/fusio)) `AGPL-3.0` `PHP`
- [Hasura](https://hasura.io) - Fast, instant realtime GraphQL APIs on Postgres with fine grained access control, also trigger webhooks on database events. ([Source Code](https://github.com/hasura/graphql-engine)) `Apache-2.0` `Haskell`
- [Hoppscotch](https://hoppscotch.io) - A free, fast and beautiful API request builder. ([Source Code](https://github.com/hoppscotch/hoppscotch)) `MIT` `Nodejs/Vue/Nuxt`
- [Kong](https://konghq.com/kong/) - The World’s Most Popular Open Source Microservice API Gateway and Platform. ([Source Code](https://github.com/Kong/kong)) `Apache-2.0` `Lua`
- [Lura](https://luraproject.org/) - Open source High-Performance API Gateway. ([Source Code](https://github.com/luraproject/lura)) `Apache-2.0` `Go`
- [Para](https://paraio.org) - Flexible and modular backend framework/server for object persistence, API development and authentication. ([Source Code](https://github.com/erudika/para)) `Apache-2.0` `Java`
- [Svix](https://svix.com) - Open-source webhooks as a service that makes it super easy for API providers to send webhooks. ([Source Code](https://github.com/svix/svix-webhooks)) `MIT` `Docker/Rust`
- [Tyk](https://tyk.io) - Fast and scalable open source API Gateway. Out of the box, Tyk offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard. ([Source Code](https://github.com/TykTechnologies/tyk)) `MPL-2.0` `Go`
- [Yaade](https://docs.yaade.io/) - Yaade is an open-source, self-hosted, collaborative API development environment. ([Source Code](https://github.com/EsperoTech/yaade)) `MIT` `Docker`


### Software Development - Continuous Integration & Deployment

**[`^        back to top        ^`](#awesome-selfhosted)**

[Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) and [Continuous deployment](https://en.wikipedia.org/wiki/Continuous_deployment) software and tools.

_Related: [Automation](#automation)_

**Please visit [awesome-sysadmin/Continuous Integration & Continuous Deployment](https://github.com/awesome-foss/awesome-sysadmin#continuous-integration--continuous-deployment)**



### Software Development - FaaS & Serverless

**[`^        back to top        ^`](#awesome-selfhosted)**

[Serverless computing - Wikipedia](https://en.wikipedia.org/wiki/Serverless_computing).

- [Appwrite](https://appwrite.io) - End to end backend server for web, native, and mobile developers 🚀. ([Source Code](https://github.com/appwrite/appwrite)) `BSD-3-Clause` `PHP`
- [Coolify](https://coolify.io/) - An open-source & self-hostable Heroku / Netlify alternative (and even more). ([Demo](https://demo.coolify.io/), [Source Code](https://github.com/coollabsio/coolify)) `Apache-2.0` `Docker`
- [Dokku](https://dokku.com/) - An open source PAAS alternative to Heroku. ([Source Code](https://github.com/dokku/dokku)) `MIT` `Docker/Shell/Go`
- [fx](https://github.com/metrue/fx) - A tool to help you do Function as a Service with painless on your own servers. `MIT` `Go`
- [Kubero](https://www.kubero.dev/) - A self-hosted Heroku PaaS alternative for Kubernetes that implements GitOps. ([Demo](https://demo.kubero.dev/), [Source Code](https://github.com/kubero-dev/kubero)) `GPL-3.0` `K8S/Nodejs/Go`
- [LocalStack](https://localstack.cloud/) - LocalStack is a fully functional local AWS cloud stack. This includes Lambda for serverless computation. ([Source Code](https://github.com/localstack/localstack)) `Apache-2.0` `Python/Other`
- [Nhost](https://nhost.io/) - The Open Source Firebase Alternative with GraphQL. Get a database and backend configured and ready in minutes. ([Source Code](https://github.com/nhost/nhost)) `MIT` `Docker/Nodejs/Go`
- [OpenFaaS](https://www.openfaas.com/) - Serverless Functions Made Simple for Docker & Kubernetes. ([Source Code](https://github.com/openfaas/faas)) `MIT` `Go`
- [Trusted-CGI](https://github.com/reddec/trusted-cgi) - Lightweight self-hosted lambda/applications/cgi/serverless-functions platform. `MIT` `Go`


### Software Development - IDE & Tools

**[`^        back to top        ^`](#awesome-selfhosted)**

An [integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment) is a software application that provides comprehensive facilities to computer programmers for software development.

_Related: [Software Development - Low Code](#software-development---low-code)_

- [Atheos](https://www.atheos.io) - Web-based IDE framework with a small footprint and minimal requirements, continued from Codiad. ([Source Code](https://github.com/Atheos/Atheos)) `MIT` `PHP`
- [code-server](https://github.com/coder/code-server) - VS Code in the browser, hosted on a remote server. `MIT` `Nodejs/Docker`
- [Coder](https://coder.com/) - Remote development machines on your own infrastructure. ([Source Code](https://github.com/coder/coder)) `AGPL-3.0` `Go`
- [Eclipse Che](https://www.eclipse.org/che/) - Open source workspace server and cloud IDE. ([Source Code](https://github.com/eclipse/che)) `EPL-1.0` `Docker/Java`
- [Hakatime](https://github.com/mujx/hakatime) - WakaTime server implementation with analytics dashboard. `Unlicense` `Haskell`
- [HttPlaceholder](https://github.com/dukeofharen/httplaceholder) - Quickly mock away any webservice using HttPlaceholder. HttPlaceholder lets you specify what the request should look like and what response needs to be returned. `MIT` `C#`
- [ICEcoder](https://icecoder.net/) - ICEcoder is a web IDE / browser based code editor, which allows you to develop websites directly within the web browser. ([Demo](http://demo.icecoder.net/ICEcoder/), [Source Code](https://github.com/icecoder/ICEcoder)) `MIT` `PHP`
- [Judge0 CE](https://judge0.com) - Open source API to compile and run source code. ([Source Code](https://github.com/judge0/judge0)) `GPL-3.0` `Ruby`
- [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/) - Web-based environment for interactive and reproducible computing. ([Demo](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [Source Code](https://github.com/jupyterlab/jupyterlab/)) `BSD-3-Clause` `Python/Docker`
- [Lowdefy](https://www.lowdefy.com/) - Build internal tools, BI dashboards, admin panels, CRUD apps and workflows in minutes using YAML / JSON on an self-hosted, open-source platform. Connect to your data sources, host via Serverless, Netlify or Docker. ([Source Code](https://github.com/lowdefy/lowdefy)) `Apache-2.0` `Nodejs`
- [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - Web browser based IDE for R. ([Source Code](https://github.com/rstudio/rstudio)) `AGPL-3.0` `Java/C++`
- [sourcegraph](https://sourcegraph.com) - Sourcegraph is a fast, open-source, fully-featured code search and navigation engine written in Go. ([Source Code](https://github.com/sourcegraph/sourcegraph)) `Apache-2.0` `Go`
- [Wakapi](https://wakapi.dev/) - Tracking tool for coding statistics, compatible with WakaTime. ([Source Code](https://github.com/muety/wakapi)) `GPL-3.0` `Go`


### Software Development - Localization

**[`^        back to top        ^`](#awesome-selfhosted)**

[Localization](https://en.wikipedia.org/wiki/Internationalization_and_localization) is the proccess of adapting code and software to other languages.

- [Accent](https://www.accent.reviews/) - Open-source, self-hosted, developer-oriented translation tool. ([Source Code](https://github.com/mirego/accent)) `BSD-3-Clause` `Elixir`
- [Pootle](https://pootle.translatehouse.org) - Online translation and localization tool. ([Source Code](https://github.com/translate/pootle)) `GPL-3.0` `Python`
- [Tolgee](https://tolgee.io) - Developer & translator friendly web-based localization platform enabling users to translate directly in the app they develop. ([Source Code](https://github.com/tolgee/tolgee-platform)) `Apache-2.0` `Docker/Java`
- [Traduora](https://traduora.co) - Translation management platform for teams. ([Source Code](https://github.com/ever-co/ever-traduora)) `AGPL-3.0` `Docker/Nodejs`
- [Weblate](https://weblate.org) - Web-based translation tool with tight version control integration. ([Demo](https://demo.weblate.org), [Source Code](https://github.com/WeblateOrg/weblate)) `GPL-3.0` `Python`


### Software Development - Low Code

**[`^        back to top        ^`](#awesome-selfhosted)**

A [low-code](https://en.wikipedia.org/wiki/Low-code_development_platform) development platform (LCDP) provides a development environment used to create application software through a graphical user interface.

_Related: [Software Development - IDE & Tools](#software-development---ide--tools)_

- [Appsmith](https://www.appsmith.com/) - Cloud or self-hosted open-source platform to build admin panels, CRUD apps and workflows. Build everything you need, 10x faster. ([Source Code](https://github.com/appsmithorg/appsmith)) `Apache-2.0` `Java/Docker`
- [Budibase](https://www.budibase.com) - Build and automate internal tools, admin panels, dashboards, CRUD apps, and more, in minutes. Budibase is the open source alternative to Outsystems, Retool, Mendix, Appian. ([Source Code](https://github.com/Budibase/budibase)) `GPL-3.0` `Nodejs`
- [Hadmean](https://hadmean.com) - Don't build in hours but generate in seconds your fully functional admin apps without any technical knowledge with just a single command `npx hadmean`. ([Demo](http://demo.hadmean.com), [Source Code](https://github.com/hadmean/hadmean)) `AGPL-3.0` `Nodejs`
- [Motor Admin](https://www.getmotoradmin.com/) - No-code admin panel and business intelligence software - search, create, update, and delete data entries, create custom actions, and build reports. ([Source Code](https://github.com/motor-admin/motor-admin)) `AGPL-3.0` `Ruby`
- [PocketBase](https://pocketbase.io/) - Open Source backend for your next SaaS and Mobile app in 1 file. ([Source Code](https://github.com/pocketbase/pocketbase)) `MIT` `Go/Docker`
- [ToolJet](https://tooljet.io/) - ToolJet is the open-source low-code framework alternative to Retool & Mendix to build & deploy internal tools with minimal engineering effort. ([Source Code](https://github.com/ToolJet/ToolJet)) `GPL-3.0` `Nodejs`


### Software Development - Project Management

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software for [software project management](https://en.wikipedia.org/wiki/Software_project_management).

_Related: [Ticketing](#ticketing), [Task Management & To-do Lists](#task-management--to-do-lists)_

- [Cgit](https://git.zx2c4.com/cgit/about/) - A fast lightweight web interface for git repositories. ([Source Code](https://git.zx2c4.com/cgit/tree/)) `GPL-2.0` `C`
- [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Distributed version control system featuring wiki and bug tracker. `BSD-2-Clause-FreeBSD` `C`
- [Gerrit](https://www.gerritcodereview.com/) - A code review and project management tool for Git based projects. ([Source Code](https://github.com/GerritCodeReview/gerrit)) `Apache-2.0` `Java/Docker`
- [Gitblit](https://www.gitblit.com/) - Pure Java stack for managing, viewing, and serving Git repositories. ([Source Code](https://github.com/gitblit-org/gitblit)) `Apache-2.0` `Java`
- [gitbucket](https://gitbucket.github.io/gitbucket-news/) - Easily installable GitHub clone powered by Scala. ([Source Code](https://github.com/gitbucket/gitbucket)) `Apache-2.0` `Scala/Java`
- [Gitea](https://gitea.io) - Community managed fork of Gogs, lightweight code hosting solution. ([Demo](https://try.gitea.io), [Source Code](https://github.com/go-gitea/gitea)) `MIT` `Go`
- [GitLab](https://about.gitlab.com) - Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis. ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby`
- [Gitlist](https://gitlist.org/) - Web-based git repository browser - GitList allows you to browse repositories using your favorite browser, viewing files under different revisions, commit history and diffs. ([Source Code](https://github.com/klaussilveira/gitlist)) `BSD-3-Clause` `PHP`
- [Gitolite](https://gitolite.com/gitolite/index.html) - Gitolite allows you to setup git hosting on a central server, with fine-grained access control and many more powerful features. ([Source Code](https://github.com/sitaramc/gitolite)) `GPL-2.0` `Perl`
- [GitPrep](https://github.com/yuki-kimoto/gitprep) - Portable Github clone. ([Demo](https://perlcodesample.sakura.ne.jp/gitprep/gitprep.cgi)) `Artistic-2.0` `Perl`
- [Gogs](https://gogs.io/) - Painless self-hosted Git Service written in Go. ([Demo](https://try.gogs.io/), [Source Code](https://github.com/gogs/gogs)) `MIT` `Go`
- [Kallithea](https://kallithea-scm.org/) - Source code management system that supports two leading version control systems, Mercurial and Git, with a web interface. ([Source Code](https://kallithea-scm.org/repos/kallithea)) `GPL-3.0` `Python`
- [Klaus](https://github.com/jonashaag/klaus) - Simple, easy-to-set-up Git web viewer that Just Works. `ISC` `Python`
- [Lavagna](https://lavagna.io) - Lavagna is an open-source issue/project management tool designed for small teams. Lightweight, pure Java, easy to install, easy to use. ([Source Code](https://github.com/digitalfondue/lavagna)) `GPL-3.0` `Java`
- [Lazylead](https://lazylead.org) `⚠` - Eliminate the annoying work within ticketing systems (Jira, GitHub, Trello). Allows to automate daily actions like tickets fields verification, email notifications by JQL/GQL, meeting requests to your (or teammates) calendar. ([Source Code](https://github.com/dgroup/lazylead)) `MIT` `Ruby`
- [Leantime](https://leantime.io) - Leantime is a lean project management system for small teams and startups helping to manage projects from ideation through delivery. ([Source Code](https://github.com/leantime/leantime)) `GPL-2.0` `PHP`
- [Mindwendel](https://www.mindwendel.com/) - Brainstorm and upvote ideas and thoughts within your team. ([Demo](https://www.mindwendel.com), [Source Code](https://github.com/b310-digital/mindwendel)) `AGPL-3.0` `Docker/Elixir`
- [Octobox](https://octobox.io/) `⚠` - Take back control of your GitHub Notifications. ([Source Code](https://github.com/octobox/octobox)) `AGPL-3.0` `Ruby`
- [OneDev](https://onedev.io/) - All-In-One DevOps Platform. With Git Management, Issue Tracking, and CI/CD. Simple yet Powerful. ([Source Code](https://code.onedev.io/projects/160)) `MIT` `Java`
- [OpenProject](https://www.openproject.org) - OpenProject is a web-based project management system. ([Source Code](https://github.com/opf/openproject)) `GPL-3.0` `Ruby`
- [Pagure](https://pagure.io/pagure) - A lightweight, powerful, and flexible git-centric forge with features laying the foundation for federated and decentralized development. ([Demo](https://pagure.io/)) `GPL-2.0` `Python`
- [Party Poker](https://github.com/kksoftwareag/partypoker) - Agile / Scrum Planning Poker WebApp. Estimate User Stories in real time. ([Demo](https://planningpoker.party)) `MIT` `C#`
- [Phorge](https://we.phorge.it/) - Phorge is an open source, community driven platform for collaborating, managing, organizing and reviewing software development projects. ([Source Code](https://we.phorge.it/source/phorge/)) `Apache-2.0` `PHP`
- [Phproject](https://www.phproject.org/) - High performance full-featured project management system. ([Source Code](https://github.com/Alanaktion/phproject)) `GPL-3.0` `PHP`
- [Plane](https://plane.so) - Open Source JIRA, Linear and Height Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible. ([Demo](https://app.plane.so), [Source Code](https://github.com/makeplane/plane)) `Apache-2.0` `Docker`
- [ProjeQtOr](https://www.projeqtor.org/) - A complete, mature, multi-user project management system with extensive functionality for all phases of a project. ([Demo](https://demo.projeqtor.org/), [Source Code](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/)) `AGPL-3.0` `PHP`
- [Redmine](https://www.redmine.org/) - Redmine is a flexible project management web application. ([Source Code](https://svn.redmine.org/redmine/)) `GPL-2.0` `Ruby`
- [RhodeCode](https://rhodecode.com/) - RhodeCode is an open source platform for software development teams. It unifies and simplifies repository management for Git, Subversion, and Mercurial. ([Source Code](https://code.rhodecode.com/)) `AGPL-3.0` `Python`
- [Rukovoditel](https://www.rukovoditel.net/) - Configurable open source project management, web-based application. ([Source Code](https://www.rukovoditel.net/download.php)) `GPL-2.0` `PHP`
- [SCM Manager](https://www.scm-manager.org/) - The easiest way to share and manage your Git, Mercurial and Subversion repositories over http. ([Source Code](https://github.com/scm-manager/scm-manager)) `BSD-3-Clause` `Java`
- [Sourcehut](https://sourcehut.org/) - A full web git interface with no javascript. ([Demo](https://sr.ht/), [Source Code](https://git.sr.ht/~sircmpwn/git.sr.ht/tree)) `GPL-2.0` `Go`
- [Taiga](https://www.taiga.io/) - Agile Project Management Tool based on the Kanban and Scrum methods. ([Source Code](https://github.com/kaleidos-ventures)) `MPL-2.0` `Docker/Python/Nodejs`
- [Titra](https://titra.io/) - Time-tracking solution for freelancers and small teams. ([Source Code](https://github.com/kromitgmbh/titra)) `GPL-3.0` `Javascript`
- [Trac](https://trac.edgewall.org/) - Trac is an enhanced wiki and issue tracking system for software development projects. `BSD-3-Clause` `Python`
- [Traq](https://traq.io/) - Project management and issue tracking system written in PHP. ([Source Code](https://github.com/nirix/traq)) `GPL-3.0` `PHP/Nodejs`
- [Tuleap](https://www.tuleap.org/) - Tuleap is a libre suite to plan, track, code and collaborate on software projects. ([Source Code](https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree)) `GPL-2.0` `PHP`
- [UVDesk](https://www.uvdesk.com/) - UVDesk community is a service oriented, event driven extensible opensource helpdesk system that can be used by your organization to provide efficient support to your clients effortlessly whichever way you imagine. ([Demo](https://demo.uvdesk.com/), [Source Code](https://github.com/uvdesk/community-skeleton)) `MIT` `PHP`
- [ZenTao](https://www.zentao.pm/) - An agile(scrum) project management system/tool. ([Demo](https://demo15.zentao.pm/), [Source Code](https://github.com/easysoft/zentaopms)) `AGPL-3.0` `PHP`


### Software Development - Testing

**[`^        back to top        ^`](#awesome-selfhosted)**

Tools and software for [software testing](https://en.wikipedia.org/wiki/Software_testing).

- [Bencher](https://bencher.dev/) - Bencher is a suite of continuous benchmarking tools designed to catch performance regressions in CI. ([Source Code](https://github.com/bencherdev/bencher)) `MIT/Apache-2.0` `Rust`
- [DeepfakeHTTP](https://github.com/xnbox/DeepfakeHTTP) - A web server that uses HTTP dumps as a source for responses. `MIT` `Java`
- [Selenoid](https://aerokube.com/selenoid/latest/) - Lightweight Selenium hub implementation launching browsers within Docker containers. ([Source Code](https://github.com/aerokube/selenoid)) `Apache-2.0` `Go`
- [Sorry Cypress](https://sorry-cypress.dev) - Alternative open-source dashboard for the Cypress browser automation framework, featuring unlimited parallelization, recording and debugging of tests. ([Source Code](https://github.com/sorry-cypress/sorry-cypress)) `MIT` `Typescript`
- [Touca](https://touca.io) - Continuous regression testing for engineering teams. Get feedback when you write code that could break your software. ([Source Code](https://github.com/trytouca/trytouca)) `Apache-2.0` `Docker/Nodejs`


### Static Site Generators

**[`^        back to top        ^`](#awesome-selfhosted)**

[Static site generators](https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators) generate full static HTML websites based on raw data, plain text files and a set of templates. 

**Please visit [staticsitegenerators.net](https://staticsitegenerators.net), [staticgen.com](https://www.staticgen.com)**


### Status / Uptime pages

**[`^        back to top        ^`](#awesome-selfhosted)**

[Uptime](https://en.wikipedia.org/wiki/Uptime) is a measure of system reliability, expressed as the percentage of time a machine, typically a computer, has been working and available. 

_Related: [Monitoring](#monitoring)_

- [cState](https://cstate.netlify.app/) - Static status page for hyperfast Hugo. Clean design, minimal JS, super light HTML/CSS, high customization, optional admin panel, read-only API, IE8+. Best used with Netlify, Docker. ([Demo](https://cstate.mnts.lt/), [Source Code](https://github.com/cstate/cstate)) `MIT` `Go`
- [StatPing.ng](https://statping-ng.github.io/) - An easy to use Status Page for your websites and applications. Statping will automatically fetch the application and render a beautiful status page with tons of features for you to build an even better status page. ([Source Code](https://github.com/statping-ng/statping-ng)) `GPL-3.0` `Docker/Go`
- [Gatus](https://github.com/TwiN/gatus) - Automated service health dashboard. ([Demo](https://status.twin.sh)) `Apache-2.0` `Docker`
- [Uptime Kuma](https://github.com/louislam/uptime-kuma) - Self-hosted website monitoring tool like "Uptime Robot". ([Demo](https://demo.uptime.kuma.pet)) `MIT` `Nodejs`
- [Vigil](https://crates.io/crates/vigil-server) - Microservices Status Page. Monitors a distributed infrastructure and sends alerts (Slack, SMS, etc.). ([Demo](https://status.crisp.chat/), [Source Code](https://github.com/valeriansaliou/vigil)) `MPL-2.0` `Rust/Docker`


### Task Management & To-do Lists

**[`^        back to top        ^`](#awesome-selfhosted)**

[Task management](https://en.wikipedia.org/wiki/Task_management#Task_management_software) software.

_Related: [Software Development - Project Management](#software-development---project-management), [Ticketing](#ticketing)_

- [Focalboard](https://www.focalboard.com/) - An open source, self-hosted alternative to Trello, Notion, and Asana. It helps define, organize, track and manage work across individuals and teams. ([Source Code](https://github.com/mattermost/focalboard), [Clients](https://www.focalboard.com/download/personal-edition/desktop/)) `MIT/AGPL-3.0/Apache-2.0` `Nodejs/Go`
- [Kanbana](https://github.com/SrGMC/kanbana) - Create boards to track users and projects from flat markdown files. Forked from Crepido. `MIT` `Nodejs`
- [Kanboard](https://kanboard.org/) - Simple and open source visual task board. ([Source Code](https://github.com/kanboard/kanboard)) `MIT` `PHP`
- [Minimalist Online Markdown Editor](http://markdown.pioul.fr) - The simplest and slickest online Markdown editor. ([Source Code](https://github.com/pioul/Minimalist-Online-Markdown-Editor)) `MIT` `Nodejs`
- [myTinyTodo](https://www.mytinytodo.net/) - Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. ([Demo](https://www.mytinytodo.net/demo/), [Source Code](https://github.com/maxpozdeev/mytinytodo/)) `GPL-2.0` `PHP`
- [Nullboard](https://github.com/apankrat/nullboard) - Single-page minimalist kanban board; compact, highly readable and quick to use. `BSD-2-Clause` `Javascript`
- [Our Shopping List](https://github.com/nanawel/our-shopping-list) - Simple shared list application. Typical uses include shopping lists of course, and any other small todo-list that needs to be used collaboratively. ([Demo](https://osl.lanterne-rouge.info/)) `AGPL-3.0` `Docker`
- [Planka](https://planka.app/) - Open source Trello alternative. ([Demo](https://plankanban.github.io/planka/#/), [Source Code](https://github.com/plankanban/planka)) `AGPL-3.0` `Nodejs`
- [Restyaboard](https://github.com/RestyaPlatform/board/) - Open source Trello-like kanban board. `OSL-3.0` `PHP`
- [Task Keeper](https://github.com/nymanjens/piga) - List editor for power users, backed by a self-hosted server. `Apache-2.0` `Scala`
- [Tasks.md](https://github.com/BaldissaraMatheus/Tasks.md) - A self-hosted, file based task management board that supports Markdown syntax. `MIT` `Docker`
- [Taskwarrior](https://taskwarrior.org/) - Taskwarrior is Free and Open Source Software that manages your TODO list from your command line. It is flexible, fast, efficient, and unobtrusive. It does its job then gets out of your way. ([Source Code](https://taskwarrior.org/download/#git)) `MIT` `C++`
- [todo](https://git.mills.io/prologic/todo) - Simple todo list manager. ([Demo](https://todo.mills.io)) `MIT` `Go`
- [Tracks](https://www.getontracks.org/) - Web-based application to help you implement David Allen’s [Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done) methodology. ([Source Code](https://github.com/TracksApp/tracks)) `GPL-2.0` `Ruby`
- [Vikunja](https://vikunja.io/) - The to-do app to organize your life. ([Demo](https://try.vikunja.io/login), [Source Code](https://kolaente.dev/vikunja/)) `GPL-3.0` `Go`
- [Wekan](https://wekan.github.io/) - Open-source Trello-like kanban. ([Source Code](https://github.com/wekan/wekan)) `MIT` `Nodejs`


### Ticketing

**[`^        back to top        ^`](#awesome-selfhosted)**

[Helpdesk](https://en.wikipedia.org/wiki/Help_desk_software), [bug](https://en.wikipedia.org/wiki/Bug_tracking_system) and [issue](https://en.wikipedia.org/wiki/Issue_tracking_system) tracking software to help the tracking of user requests, bugs and missing features.

_Related: [Task Management & To-do Lists](#task-management--to-do-lists), [Software Development - Project Management](#software-development---project-management)_

- [Bugzilla](https://www.bugzilla.org/) - General-purpose bugtracker and testing tool originally developed and used by the Mozilla project. `MPL-2.0` `Perl`
- [django-todo](http://django-todo.org/) - Pluggable, multi-user, multi-group, multi-list todo and ticketing system - a reusable app designed to be dropped into any existing Django project. ([Source Code](https://github.com/shacker/django-todo)) `BSD-3-Clause` `Python/Django`
- [Erxes](https://erxes.io/install/) - Marketing, sales, and customer service platform designed to help businesses attract more engaged customers. ([Demo](https://demo.erxes.io/), [Source Code](https://github.com/erxes/erxes)) `GPL-3.0` `Javascript`
- [FreeScout](https://github.com/freescout-helpdesk/freescout) - Open source clone of Help Scout: email-based customer support application, help desk and shared mailbox. `AGPL-3.0` `PHP`
- [GlitchTip](https://glitchtip.com) - Open source error-tracking app. GlitchTip collects errors reported by your app. ([Source Code](https://gitlab.com/glitchtip/glitchtip)) `MIT` `Python`
- [Iguana](https://github.com/iguana-project/iguana) - Iguana is an open source issue management system with a kanban board. `CC-BY-SA-4.0` `Python/Docker`
- [ITFlow](https://itflow.org) - Client IT Documentation, Ticketing, Invoicing and Accounting Web Application for MSPs (Managed Service Providers). ([Demo](https://demo.itflow.org), [Source Code](https://github.com/itflow-org/itflow)) `GPL-3.0` `PHP`
- [MantisBT](https://www.mantisbt.org/) - Self hosted bug tracker, fits best for software development. ([Demo](https://www.mantisbt.org/bugs/my_view_page.php), [Source Code](https://github.com/mantisbt/mantisbt)) `GPL-2.0` `PHP`
- [osTicket](https://osticket.com/) - Manage, organize and archive all your support requests and responses in one place. ([Source Code](https://github.com/osTicket/osTicket)) `GPL-2.0` `PHP`
- [OTOBO](https://otobo.de/en/) - Flexible web-based ticketing system used for Customer Service, Help Desk, IT Service Management. ([Demo](https://otobo.de/en/open-source-ticketing-system/#demos), [Source Code](https://github.com/RotherOSS/otobo)) `GPL-3.0` `Perl`
- [Pachno](https://pach.no/) - Bring your team together to design, build and deliver your project with a tool that works with you and your team, and adapts when you need to. ([Source Code](https://github.com/pachno/pachno)) `MPL-2.0` `PHP`
- [Peppermint](https://peppermint.sh/) - A simple ticket management tool with support for logs and multi-deployment. ([Source Code](https://github.com/Peppermint-Lab/peppermint)) `AGPL-3.0` `Docker`
- [Request Tracker](https://www.bestpractical.com/rt/) - An enterprise-grade issue tracking system. ([Source Code](https://github.com/bestpractical/rt)) `GPL-2.0` `Perl`
- [Roundup Issue Tracker](https://www.roundup-tracker.org/) - A simple-to-use and -install issue-tracking system with command-line, web, REST, XML-RPC, and e-mail interfaces. Designed with flexibility in mind - not just another bug tracker. ([Source Code](https://www.roundup-tracker.org/code.html)) `MIT/ZPL-2.0` `Python`
- [Trudesk](https://trudesk.io/) - Trudesk is an open-source help desk/ticketing solution. ([Source Code](https://github.com/polonel/trudesk)) `Apache-2.0` `Nodejs`
- [Zammad](https://zammad.org/) - Easy to use but powerful open-source support and ticketing system. ([Source Code](https://github.com/zammad/zammad)) `AGPL-3.0` `Ruby`


### Time Tracking

**[`^        back to top        ^`](#awesome-selfhosted)**

[Time-tracking software](https://en.wikipedia.org/wiki/Time-tracking_software) is a category of computer software that allows its users to record time spent on tasks or projects.

- [ActivityWatch](https://activitywatch.net) - An app that automatically tracks how you spend time on your devices. ([Source Code](https://github.com/ActivityWatch/activitywatch)) `MPL-2.0` `Python`
- [Kimai](https://www.kimai.org/) - Kimai is a free & open source timetracker. It tracks work time and prints out a summary of your activities on demand. ([Demo](https://www.kimai.org/demo/), [Source Code](https://github.com/kevinpapst/kimai2/)) `MIT` `PHP`
- [TimeTagger](https://timetagger.app) - An open source time-tracker based on an interactive timeline and powerful reporting. ([Demo](https://timetagger.app/app/demo), [Source Code](https://github.com/almarklein/timetagger)) `GPL-3.0` `Python`
- [Traggo](https://traggo.net/) - Traggo is a tag-based time tracking tool. In Traggo there are no tasks, only tagged time spans. ([Source Code](https://github.com/traggo/server)) `GPL-3.0` `Docker/Go`


### URL Shorteners

**[`^        back to top        ^`](#awesome-selfhosted)**

[URL shortening](https://en.wikipedia.org/wiki/URL_shortening) is the action of shortening a [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) to make it substantially shorter and still direct to the required page.

Before hosting one, please see [shortcomings](https://en.wikipedia.org/wiki/URL_shortening#Shortcomings) of URL shorteners.

- [Blink](https://docs.blink.rest) - Easy-to-host, SSO-integrated, CDN-powered link shortener (+decoupled analytics) for teams. ([Source Code](https://github.com/JaneJeon/blink)) `AGPL-3.0` `Nodejs`
- [Easyshortener](https://github.com/easypanel-community/easyshortener) - A simple URL shortener. `MIT` `PHP/Nodejs/Docker`
- [goshorly](https://gitea.hackmi.ch/Phil/goshorly) - An easy self-hosted Link shortener in Golang. `MIT` `Go`
- [Just Short It!](https://github.com/miawinter98/just-short-it) - A KISS, single-user URL shortener that runs in just one container. `MIT` `Docker`
- [Kutt](https://kutt.it) - A modern URL shortener with support for custom domains. ([Source Code](https://github.com/thedevs-network/kutt)) `MIT` `Nodejs`
- [liteshort](https://git.ikl.sh/132ikl/liteshort) - User-friendly, actually lightweight, and configurable URL shortener. `MIT` `Python`
- [Lstu](https://github.com/ldidry/lstu) - Lightweight URL shortener. `WTFPL` `Perl`
- [Lynx](https://getlynx.dev) - URL shortener with many functions such as multiple accounts, ShareX support and an attractive but simple interface. ([Demo](https://demo.jck.cx), [Source Code](https://github.com/Lynx-Shortener/Lynx)) `MIT` `Nodejs/Docker`
- [Pastr](https://github.com/hossainalhaidari/pastr) - Super-minimal URL shortener and paste tool that uses a flat-file storage and has no dependencies. ([Demo](https://alhai.de)) `MIT` `Go` 
- [ReducePy](https://github.com/abdullahselek/ReducePy) - URL shortener service using Tornado and Redis runs on Docker and Kubernetes. `MIT` `Python`
- [schort](https://github.com/sqozz/schort) - No login, no javascript, just short links. `CC0-1.0` `Python`
- [Shlink](https://shlink.io) - URL shortener with REST API and command line interface. Includes official progressive web application and docker images. ([Source Code](https://github.com/shlinkio/shlink), [Clients](https://shlink.io/apps)) `MIT` `PHP`
- [Short{Paste}](https://github.com/adyanth/shortpaste) - A Go based URL shortener, pastebin and file uploader. `MIT` `Docker`
- [shorturl](https://git.mills.io/prologic/shorturl) - Simple URL shortener with very tiny URLs. ([Demo](https://url.mills.io)) `MIT` `Go`
- [Simple-URL-Shortener](https://github.com/azlux/Simple-URL-Shortener) - KISS URL shortener, public or private (with account). Minimalist and lightweight. No dependencies. ([Demo](https://u.azlux.fr)) `MIT` `PHP`
- [Simply Shorten](https://gitlab.com/draganczukp/simply-shorten) - A simple URL shortener that just shortens links. `MIT` `Java`
- [YOURLS](https://yourls.org/) - YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp. ([Source Code](https://github.com/YOURLS/YOURLS)) `MIT` `PHP`


### VPN

**[`^        back to top        ^`](#awesome-selfhosted)**

A [virtual private network (VPN)](https://en.wikipedia.org/wiki/Virtual_private_network) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.

**Please visit [awesome-sysadmin/VPN](https://github.com/awesome-foss/awesome-sysadmin#vpn)**



### Web Servers

**[`^        back to top        ^`](#awesome-selfhosted)**

A [web server](https://en.wikipedia.org/wiki/Web_server) is a piece of software and underlying hardware that accepts requests via [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (the network protocol created to distribute web content) or its secure variant [HTTPS](https://en.wikipedia.org/wiki/HTTPS). 

**Please visit [awesome-sysadmin/Web](https://github.com/awesome-foss/awesome-sysadmin#web)**



### Wikis

**[`^        back to top        ^`](#awesome-selfhosted)**

A [wiki](https://en.wikipedia.org/wiki/Wiki) is a publication collaboratively edited and managed by its own audience directly using a web browser.

_Related: [Static Site Generators](#static-site-generators)_

_See also: [Wikimatrix](https://www.wikimatrix.org/), [Wiki Engines - WikiIndex](https://wikiindex.org/Category:Wiki_Engine), [List of wiki software - Wikipedia](https://en.wikipedia.org/wiki/List_of_wiki_software), [Comparison of wiki software - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_wiki_software)_

- [AmuseWiki](https://amusewiki.org/) - Amusewiki is based on the Emacs Muse markup, remaining mostly compatible with the original implementation. It can work as a read-only site, as a moderated wiki, or as a fully open wiki or even as a private site. ([Demo](https://sandbox.amusewiki.org), [Source Code](https://github.com/melmothx/amusewiki)) `GPL-1.0` `Perl/Docker`
- [BookStack](https://www.bookstackapp.com/) - BookStack is a simple, self-hosted, easy-to-use platform for organizing and storing information. It allows for documentation to be stored in a book like fashion. ([Demo](https://www.bookstackapp.com/#demo), [Source Code](https://github.com/BookStackApp/BookStack)) `MIT` `PHP`
- [django-wiki](https://github.com/django-wiki/django-wiki) - Wiki system with complex functionality for simple integration and a superb interface. Store your knowledge with style: Use django models. ([Demo](https://demo.django-wiki.org/)) `GPL-3.0` `Python`
- [Documize](https://documize.com) - Modern Docs + Wiki software with built-in workflow, single binary executable, just bring MySQL/Percona. ([Source Code](https://github.com/documize/community)) `AGPL-3.0` `Go`
- [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - Easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain text files, therefore no database is required. ([Source Code](https://github.com/dokuwiki/dokuwiki)) `GPL-2.0` `PHP`
- [Gitit](https://github.com/jgm/gitit) - Wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface. `GPL-2.0` `Haskell`
- [Gollum](https://github.com/gollum/gollum) - Simple, Git-powered wiki with a sweet API and local frontend. `MIT` `Ruby`
- [Instiki](https://golem.ph.utexas.edu/wiki/instiki/show/HomePage) - Instiki is a wiki clone so pretty and easy to set up, you'll wonder if it’s really a wiki. Runs on Rails and focuses on portability and stability. ([Source Code](https://github.com/parasew/instiki)) `Ruby` `Ruby`
- [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - MediaWiki is a free and open-source wiki software package written in PHP. It serves as the platform for Wikipedia and the other Wikimedia projects, used by hundreds of millions of people each month. ([Demo](https://en.wikipedia.org/wiki/Main_Page), [Source Code](https://phabricator.wikimedia.org/diffusion/MW/)) `GPL-2.0` `PHP`
- [Mycorrhiza Wiki](https://mycorrhiza.wiki/) - Filesystem and git-based wiki engine written in Go using Mycomarkup as its primary markup language. ([Source Code](https://github.com/bouncepaw/mycorrhiza/)) `AGPL-3.0` `Go`
- [Outline](https://www.getoutline.com/) `⚠` - An open, extensible, wiki for your team. ([Source Code](https://github.com/outline/outline)) `BSD-3-Clause` `Nodejs`
- [Pepperminty Wiki](https://github.com/sbrl/Pepperminty-Wiki) - Complete markdown-powered wiki contained in a single PHP file. ([Demo](https://starbeamrainbowlabs.com/labs/peppermint/build/)) `MPL-2.0` `PHP`
- [PineDocs](https://github.com/xy2z/PineDocs) - Simple, fast, customizable and lightweight site for browsing files. `GPL-3.0` `PHP`
- [PmWiki](https://www.pmwiki.org) - Wiki-based system for collaborative creation and maintenance of websites. `GPL-3.0` `PHP`
- [PukiWiki](https://pukiwiki.osdn.jp/) - PukiWiki is a free, simple, open-source wiki management system. Minimalistic and simple design with many tools for collaborative work. Created in Japanese, so translator needed. ([Source Code](https://ja.osdn.net/projects/pukiwiki/scm/git/pukiwiki/)) `GPL-2.0` `PHP`
- [Raneto](https://raneto.com/) - Raneto is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase. ([Source Code](https://github.com/ryanlelek/Raneto)) `MIT` `Nodejs`
- [TiddlyWiki](https://tiddlywiki.com/) - Reusable non-linear personal web notebook. ([Source Code](https://github.com/Jermolene/TiddlyWiki5)) `BSD-3-Clause` `Nodejs`
- [Tiki](https://tiki.org/HomePage) - Wiki CMS Groupware with the most built-in features. ([Demo](https://tiki.org/Try-Tiki), [Source Code](https://sourceforge.net/p/tikiwiki/code/HEAD/tree/)) `LGPL-2.1` `PHP`
- [TWiki](https://twiki.org/) - TWiki is a Perl-based structured wiki application, typically used to run a collaboration platform, knowledge or document management system, a knowledge base, or team portal. ([Demo](https://twiki.org/cgi-bin/view/Sandbox/WebHome), [Source Code](http://svn.twiki.org/svn/twiki/)) `GPL-2.0` `Perl`
- [WackoWiki](https://wackowiki.org/) - WackoWiki is a light and easy to install multilingual Wiki-engine. ([Source Code](https://github.com/WackoWiki/wackowiki)) `BSD-3-Clause` `PHP`
- [Wiki.js](https://js.wiki/) - Modern, lightweight and powerful wiki app using Git and Markdown. ([Demo](https://docs.requarks.io), [Source Code](https://github.com/Requarks/wiki)) `AGPL-3.0` `Nodejs`
- [wiki](https://git.mills.io/prologic/wiki) - Simple Markdown based wiki engine. ([Demo](https://wiki.mills.io)) `MIT` `Go`
- [WiKiss](https://wikiss.tuxfamily.org/) - Wiki, simple to use and install. ([Source Code](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)) `GPL-2.0` `PHP`
- [Wikmd](https://github.com/Linbreux/wikmd) - Modern and simple file based wiki that uses Markdown and Git. `MIT` `Python`
- [XWiki](https://www.xwiki.org) - Second generation wiki that allows the user to extend its functionalities with a powerful extension-based architecture. ([Demo](https://playground.xwiki.org), [Source Code](https://github.com/xwiki/xwiki-platform)) `LGPL-2.1` `Java`
- [Zim](https://zim-wiki.org/) - Graphical text editor used to maintain a collection of wiki pages. Each page can contain links to other pages, simple formatting and images. ([Source Code](https://github.com/zim-desktop-wiki/zim-desktop-wiki)) `GPL-2.0` `Python`


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
- `LIL-1.0` - [The Lil License v1](https://www.lillicense.org/v1.html)
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

- [Awesome Big Data](https://github.com/0xnr/awesome-bigdata) - Curated list of awesome big data frameworks, resources and other awesomeness.
- [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) - List of high quality, topic-centric public data sources.
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin) - Curated list of amazingly awesome open source sysadmin resources.
- Lists of software aimed at privacy and decentralization in some form: [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](https://libreprojects.net/)
- [Easy Indie App](https://easyindie.app) - Apps that can be self-hosted in a few clicks.
- Dynamic Domain Name services: [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
- Communities/forums: [/r/selfhosted on reddit](https://old.reddit.com/r/selfhosted/), [r-selfhosted forum](https://forum.r-selfhosted.com/), [/r/selfhosed Matrix Channel](https://matrix.to/#/#selfhosted:selfhosted.chat), [/c/selfhosted on lemmy.ml](https://lemmy.ml/c/selfhost), [/c/selfhosted on lemmy.world](https://lemmy.world/c/selfhosted), [/m/selfhosted on kbin.social](https://kbin.social/m/selfhosted), [Homelab forum](https://homelabforum.com/), [/r/homelab on reddit](https://old.reddit.com/r/homelab/), [IndieWeb](https://indieweb.org/)
- Mirrors: [GitHub.com](https://github.com/awesome-selfhosted/awesome-selfhosted), [Gitlab.com](https://gitlab.com/awesome-selfhosted/awesome-selfhosted)
- [theme.park](https://theme-park.dev/) - A collection of themes/skins for 50 selfhosted apps! ([Source Code](https://github.com/GilbN/theme.park/)) `MIT` `CSS`
- [Track Awesome Selfhosted](https://www.trackawesomelist.com/awesome-selfhosted/awesome-selfhosted/) - Get the latest updates of awesome-selfhosted.

--------------------

## Contributing

Contributing guidelines can be found in [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md).

## Authors

The list of authors can be found in [AUTHORS.md](AUTHORS.md).

## License

This list is under the [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE) License.
