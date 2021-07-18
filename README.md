# Awesome-Selfhosted

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![](https://img.shields.io/travis/awesome-selfhosted/awesome-selfhosted/master?label=link%20checks)](https://github.com/awesome-selfhosted/awesome-selfhosted/issues/2266)

Self-hosting is the practice of locally hosting and managing applications instead of renting from [SaaSS](https://www.gnu.org/philosophy/who-does-that-server-really-serve.html) providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted locally. Non-Free software is listed on the [Non-Free](non-free.md) page.

See [Contributing](.github/CONTRIBUTING.md).

--------------------

## Table of contents

<!-- TOC -->

- [Table of contents](#table-of-contents)
- [Software](#software)
    - [Analytics](#analytics)
    - [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)
    - [Automation](#automation)
    - [Blogging Platforms](#blogging-platforms)
    - [Bookmarks and Link Sharing](#bookmarks-and-link-sharing)
    - [Calendar & Contacts](#calendar--contacts)
    - [Calendar & Contacts - CalDAV or CardDAV Servers](#calendar--contacts---caldav-or-carddav-servers)
    - [Calendar & Contacts - CalDAV or CardDAV Web-based Clients](#calendar--contacts---caldav-or-carddav-web-based-clients)
    - [Communication](#communication)
    - [Communication - Custom Communication Systems](#communication---custom-communication-systems)
    - [Communication - Email](#communication---email)
    - [Communication - Email - Complete Solutions](#communication---email---complete-solutions)
    - [Communication - Email - Mail Transfer Agents](#communication---email---mail-transfer-agents)
    - [Communication - Email - Mail Delivery Agents](#communication---email---mail-delivery-agents)
    - [Communication - Email - Mailing Lists and Newsletters](#communication---email---mailing-lists-and-newsletters)
    - [Communication - Email - Webmail Clients](#communication---email---webmail-clients)
    - [Communication - IRC](#communication---irc)
    - [Communication - SIP](#communication---sip)
    - [Communication - Social Networks and Forums](#communication---social-networks-and-forums)
    - [Communication - XMPP](#communication---xmpp)
    - [Communication - XMPP - Servers](#communication---xmpp---servers)
    - [Communication - XMPP - Web Clients](#communication---xmpp---web-clients)
    - [Conference Management](#conference-management)
    - [Content Management Systems (CMS)](#content-management-systems-cms)
    - [Recipe Management](#recipe-management)
    - [E-commerce](#e-commerce)
    - [DNS](#dns)
    - [Document Management](#document-management)
    - [Document Management - E-books](#document-management---e-books)
    - [Document Management - Integrated Library Systems (ILS)](#document-management---integrated-library-systems-ils)
    - [Document Management - Institutional Repository and Digital Library Software](#document-management---institutional-repository-and-digital-library-software)
    - [Federated Identity & Authentication](#federated-identity--authentication)
    - [Feed Readers](#feed-readers)
    - [Distributed Filesystems](#distributed-filesystems)
    - [File Transfer & Synchronization](#file-transfer--synchronization)
    - [File Transfer - Peer-to-peer Filesharing](#file-transfer---peer-to-peer-filesharing)
    - [File Transfer - Object Storage & File Servers](#file-transfer---object-storage--file-servers)
    - [File Transfer - Single-click & Drag-n-drop Upload](#file-transfer---single-click--drag-n-drop-upload)
    - [File Transfer - Command-line File Upload](#file-transfer---command-line-file-upload)
    - [File Transfer - Web-based File Managers](#file-transfer---web-based-file-managers)
    - [Games](#games)
    - [Gateways and Terminal Sharing](#gateways-and-terminal-sharing)
    - [Genealogy](#genealogy)
    - [Groupware](#groupware)
    - [Human Resources Management (HRM)](#human-resources-management-hrm)
    - [Internet of Things IoT](#internet-of-things-iot)
    - [Knowledge Management Tools](#knowledge-management-tools)
    - [Learning and Courses](#learning-and-courses)
    - [Maps and Global Positioning System (GPS)](#maps-and-global-positioning-system-gps)
    - [Media Streaming](#media-streaming)
    - [Media Streaming - Multimedia Streaming](#media-streaming---multimedia-streaming)
    - [Media Streaming - Audio Streaming](#media-streaming---audio-streaming)
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
    - [Booking and Scheduling](#booking-and-scheduling)
    - [Proxy](#proxy)
    - [Read-it-later Lists](#read-it-later-lists)
    - [Resource Planning](#resource-planning)
    - [Resource Planning - Enterprise Resource Planning](#resource-planning---enterprise-resource-planning)
    - [Search Engines](#search-engines)
    - [Software Development](#software-development)
    - [Software Development - Project Management](#software-development---project-management)
    - [Software Development - Bug Trackers](#software-development---bug-trackers)
    - [Software Development - IDE & Tools](#software-development---ide--tools)
    - [Software Development - Continuous Integration & Deployment](#software-development---continuous-integration--deployment)
    - [Software Development - UX Testing](#software-development---ux-testing)
    - [Software Development - FaaS & Serverless](#software-development---faas--serverless)
    - [Software Development - API Management](#software-development---api-management)
    - [Software Development - Documentation Generators](#software-development---documentation-generators)
    - [Software Development - Localization](#software-development---localization)
    - [Static Site Generators](#static-site-generators)
    - [Task Management & To-do Lists](#task-management--to-do-lists)
    - [Ticketing](#ticketing)
    - [URL Shorteners](#url-shorteners)
    - [VPN](#vpn)
    - [Web Servers](#web-servers)
    - [Wikis](#wikis)
    - [Self-hosting Solutions](#self-hosting-solutions)
- [List of Licenses](#list-of-licenses)
- [External Links](#external-links)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)

<!-- /TOC -->

--------------------

## Software

<!-- BEGIN SOFTWARE LIST -->

### Analytics

**[`^        back to top        ^`](#)**

**Please visit [Awesome Analytics](https://github.com/0xnr/awesome-analytics)**

_Related: [Personal Dashboards](#personal-dashboards)_


### Archiving and Digital Preservation (DP)

**[`^        back to top        ^`](#)**

_Some [Content Management System](#content-management-systems-cms) solutions also feature archiving and digital preservation._

- [Access to Memory (AtoM)](https://www.accesstomemory.org/) - Web-based, open source application for standards-based archival description and access in a multilingual, multi-repository environment. ([Demo](https://demo.accesstomemory.org/), [Source Code](https://github.com/artefactual/atom)) `AGPL-3.0-only` `PHP`
- [Archivematica](https://www.archivematica.org/) - Mature digital preservation system designed to maintain standards-based, long-term access to collections of digital objects. ([Demo](http://sandbox.archivematica.org/administration/accounts/login/), [Source Code](https://github.com/artefactual/archivematica)) `AGPL-3.0-only` `Python`
- [ArchiveBox](https://archivebox.io/) - Self-hosted _wayback machine_ that creates HTML & screenshot archives of sites from your bookmarks, browsing history, RSS feeds, or other sources. ([Source Code](https://github.com/ArchiveBox/ArchiveBox)) `MIT` `Python`
- [ArchivesSpace](https://archivesspace.org/) - Archives information management application for managing and providing Web access to archives, manuscripts and digital objects. ([Demo](https://archivesspace.org/application/demo/), [Source Code](https://github.com/archivesspace/archivesspace)) `ECL-2.0` `Ruby`
- [Collective Access - Providence](http://collectiveaccess.org/) - Highly configurable Web-based framework for management, description, and discovery of digital and physical collections supporting a variety of metadata standards, data types, and media formats. ([Source Code](https://github.com/collectiveaccess/providence)) `GPL-3.0-only` `PHP`
- [CKAN](https://ckan.org) - CKAN is a tool for making open data websites. ([Source Code](https://github.com/ckan/ckan)) `AGPL-3.0` `Python`
- [Horahora](https://github.com/horahoradev/horahora) - Video hosting website and video archival manager for Niconico, Bilibili, and Youtube. `MIT` `Go`

### Automation

**[`^        back to top        ^`](#)**

_Related: [Internet of Things (IoT)](#internet-of-things-iot)_

- [Accelerated Text](https://github.com/tokenmill/accelerated-text) - Automatically generate multiple natural language descriptions of your data varying in wording and structure. `Apache-2.0` `Java`
- [Actionsflow](https://github.com/actionsflow/actionsflow) `⚠` - The free Zapier/IFTTT alternative for developers to automate your workflows based on Github actions. `MIT` `Docker/Nodejs`
- [ActiveWorkflow](https://github.com/automaticmode/active_workflow) - An intelligent process and workflow automation platform based on software agents. `MIT` `Ruby`
- [Alltube](http://www.alltubedownload.net) - Web interface for [youtube-dl](https://github.com/ytdl-org/youtube-dl), a program to download videos and audio from [more than 100 websites](http://ytdl-org.github.io/youtube-dl/supportedsites.html). ([Source Code](https://github.com/Rudloff/alltube)) `GPL-3.0` `PHP`
- [AmIUnique](https://amiunique.org/) - Learn how identifiable you are on the Internet (browser fingerprinting tool). ([Source Code](https://github.com/DIVERSIFY-project/amiunique)) `MIT` `Java`
- [Baserow](https://baserow.io/) - Open source online database tool and Airtable alternative. Create your own database without technical experience. ([Source Code](https://gitlab.com/bramw/baserow)) `MIT` `Python/Nodejs`
- [Beehive](https://github.com/muesli/beehive) - Flexible event and agent system, which allows you to create your own agents that perform automated tasks triggered by events and filters. `AGPL-3.0` `Go`
- [betanin](https://github.com/sentriz/betanin/) - Music organization man-in-the-middle of your torrent client and music player. Based on beets.io, similar to Sonarr and Radarr. `GPL-3.0` `Python`
- [ChiefOnboarding](https://chiefonboarding.com) - Employee onboarding platform that allows you to provision user accounts and create sequences with todo items, resources, text/email/Slack messages, and more! Available as a web portal and Slack bot. ([Source Code](https://github.com/chiefonboarding/ChiefOnboarding)) `AGPL-3.0` `Python`
- [CouchPotato](https://couchpota.to/) - CouchPotato is an automatic Video Library Manager for Movies. Automatic torrent/nzb searching, downloading, and processing at the qualities you want. ([Source Code](https://github.com/CouchPotato/CouchPotatoServer)) `GPL-3.0` `Python`
- [Episodes](https://github.com/guptachetan1997/Episodes) `⚠` - Self Hosted TV show Episode tracker and recommender built using django, bootstrap4. `MIT` `Python`
- [feed2toot](https://feed2toot.readthedocs.io/) - Feed2toot parses a RSS feed, extracts the last entries and sends them to Mastodon. ([Source Code](https://gitlab.com/chaica/feed2toot)) `GPL-3.0` `Python`
- [feedmixer](https://github.com/cristoper/feedmixer) - FeedMixer is a WSGI (Python3) micro web service which takes a list of feed URLs and returns a new feed consisting of the most recent n entries from each given feed(Returns Atom, RSS, or JSON). ([Demo](https://mretc.net/feedmixer/json?f=http://hnrss.org/newest&f=http://americancynic.net/atom.xml&n=1)) `WTFPL` `Python`
- [Headphones](https://github.com/rembo10/headphones) - Automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole. `GPL-3.0` `Python`
- [Healthchecks](https://healthchecks.io/) - Django app which listens for pings and sends alerts when pings are late. ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD-3-Clause` `Python`
- [homebank-converter](https://github.com/Binnette/homebank-converter) - Web app to convert an export bank file to compatible Homebank csv. ([Demo](http://binnette.github.io/homebank-converter/)) `AGPL-3.0` `HTML5`
- [HRConvert2](https://github.com/zelon88/HRConvert2) - Drag-and-drop file conversion server with session based authentication, automatic temporary file maintenance, and logging capability. `GPL-3.0` `PHP`
- [Huginn](https://github.com/huginn/huginn) - Allows you to build agents that monitor and act on your behalf. `MIT` `Ruby`
- [Kibitzr](https://kibitzr.github.io) - Lightweight personal web assistant with powerful integrations. ([Source Code](https://github.com/kibitzr/kibitzr)) `MIT` `Python`
- [LazyLibrarian](https://gitlab.com/LazyLibrarian/LazyLibrarian) `⚠` - LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs. It uses a combination of Goodreads Librarything and optionally GoogleBooks as sources for author info and book info. `GPL-3.0` `Python`
- [Leon](https://getleon.ai) - Open-source personal assistant who can live on your server. ([Source Code](https://github.com/leon-ai/leon)) `MIT` `Nodejs`
- [Lidarr](https://lidarr.audio/) - Lidarr is a music collection manager for Usenet and BitTorrent users. ([Source Code](https://github.com/Lidarr/Lidarr)) `GPL-3.0` `C#`
- [Medusa](https://pymedusa.com/) - Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. ([Source Code](https://github.com/pymedusa/Medusa)) `GPL-3.0` `Python`
- [MeTube](https://github.com/alexta69/metube) - Web GUI for youtube-dl, with playlist support. Allows downloading videos from dozens of websites. `AGPL-3.0` `Python/Nodejs/Docker`
- [n8n](https://n8n.io/) - Free node based Workflow Automation Tool. Easily automate tasks across different services. ([Source Code](https://github.com/n8n-io/n8n)) `Apache-2.0` `Nodejs`
- [nefarious](https://github.com/lardbit/nefarious) - Web application that automates downloading Movies and TV Shows. `GPL-3.0` `Python`
- [OliveTin](https://github.com/OliveTin/OliveTin) - OliveTin is a web interface for running Linux shell commands. `AGPL-3.0` `Go`
- [Patrowl](https://github.com/Patrowl/PatrowlManager) - Open Source, Smart and Scalable Security Operations Orchestration Platform. `AGPL-3.0` `Python`
- [Podgrab](https://github.com/akhilrex/podgrab) - Lightweight podcast manager and automatic podcast episode downloader. It will monitor podcasts for your and download them automatically whenever a new episode goes live. `GPL-3.0` `Docker/Go`
- [pyLoad](https://pyload.net/) - Lightweight, customizable and remotely manageable downloader for 1-click-hosting sites like rapidshare.com or uploaded.to. ([Source Code](https://github.com/pyload/pyload)) `GPL-3.0` `Python`
- [Radarr](https://radarr.video/) - Radarr is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent, à la Couchpotato. ([Source Code](https://github.com/Radarr/Radarr)) `GPL-3.0` `C#`
- [StackStorm](https://stackstorm.com) - StackStorm (aka _IFTTT for Ops_) is event-driven automation for auto-remediation, security responses, troubleshooting, deployments, and more. Includes rules engine, workflow, 160 integration packs with 6000+ actions and ChatOps. ([Source Code](https://github.com/StackStorm/st2)) `Apache-2.0` `Python`
- [SickRage](http://sickrage.github.io/) - SickRage is an automatic Video Library Manager for TV Shows. Automatic torrent/nzb searching, downloading, and processing at the qualities you want. ([Source Code](https://github.com/SickRage/SickRage)) `GPL-3.0` `Python`
- [SiteInspector](https://www.getsiteinspector.com/) - Web-based tool for catching spelling errors, grammatical errors, broken links, and other errors on websites. ([Demo](https://demo.getsiteinspector.com/reports), [Source Code](https://github.com/siteinspector/siteinspector)) `AGPL-3.0` `Ruby`
- [Sonarr](https://sonarr.tv/) - Automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. ([Source Code](https://github.com/Sonarr/Sonarr)) `GPL-3.0` `C#`
- [µTask](https://github.com/ovh/utask) - µTask is an automation engine that models and executes business processes declared in yaml. `BSD-3-Clause` `Go`
- [WebUI-aria2](https://github.com/ziahamza/webui-aria2) - Interface to interact with the aria2 downloader. Very simple to use, just download and open index.html in any web browser. ([Demo](http://ziahamza.github.io/webui-aria2/)) `MIT` `HTML5`
- [ydl_api](https://github.com/Totonyus/ydl_api) - Simple youtube-dl REST API to launch downloads on a distant server. `Unlicense` `Python`
- [YoutubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) - Material Design inspired YouTube downloader, based on youtube-dl. Supports playlists, quality select, search, dark mode and much more, all with a clean and modern design. `MIT` `Nodejs`
- [Zenbot](https://github.com/DeviaVir/zenbot) - Zenbot is a lightweight, extendable, artificially intelligent trading bot for Bitcoin, Ether, Litecoin, and more. `MIT` `Nodejs`
- [ZeroQueue](https://github.com/thezeroqueue/zeroqueue) - A low-code queue management system that lets you run scheduled jobs for anything. `GPL-3.0` `Nodejs`

### Blogging Platforms

**[`^        back to top        ^`](#)**

_Related: [Static Site Generators](#static-site-generators), [Content Management Systems](#content-management-systems-cms)_

_See also: [WeblogMatrix](http://www.weblogmatrix.org/)_

- [Antville](https://antville.org) - Free, open source project aimed at the development of a high performance, feature rich weblog hosting software. ([Source Code](https://github.com/antville/antville)) `Apache-2.0` `Javascript`
- [Blog](https://github.com/m1k1o/blog) - Facebook-styled blog. Free, extremely lightweight, single-user and easy to install. ([Demo](https://blog.m1k1o.net/)) `GPL-3.0` `PHP`
- [Blogotext](https://github.com/BlogoText/blogotext) - Free blog-engine written in PHP and using SQLite. This offers you both an unmatched simplicity during installation and great performances. `MIT` `PHP`
- [Bludit](https://www.bludit.com/) `⚠` - Simple application to build a site or blog in seconds. Bludit uses flat-files (text files in JSON format) to store posts and pages. ([Demo](https://demo.bludit.com/), [Source Code](https://github.com/bludit/bludit)) `MIT` `PHP`
- [Cadmus](https://github.com/ldemafelix/cadmus) - Cadmus is an extremely lightweight, flat-file blogging platform powered by Markdown. `MIT` `PHP`
- [Canvas](https://trycanvas.app/) - A Laravel publishing platform. ([Source Code](https://github.com/austintoddj/canvas)) `MIT` `PHP`
- [Chyrp Lite](http://chyrplite.net) - Extra-awesome, extra-lightweight blog engine. ([Source Code](https://github.com/xenocrat/chyrp-lite)) `BSD-3-Clause` `PHP`
- [Dante Stories](https://dante-stories.herokuapp.com/) - Self hosted Medium platform built with Ruby on Rails. ([Source Code](https://github.com/michelson/dante-stories)) `MIT` `Ruby`
- [Dotclear](http://dotclear.org/) - Take control over your blog. ([Source Code](https://hg.dotclear.org/dotclear)) `GPL-2.0` `PHP`
- [Formtools](https://formtools.org/) - Powerful, flexible, free and open source PHP/MySQL script to manage your forms and data. ([Source Code](https://github.com/formtools)) `GPL-2.0` `PHP`
- [Ghost](https://ghost.org/) - Just a blogging platform. ([Source Code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
- [Hexo](https://hexo.io/) - Fast, simple and powerful blog framework. ([Source Code](https://github.com/hexojs/hexo)) `MIT` `Nodejs`
- [Hotglue](https://hotglue.me/) - Freehand CMS which allows to construct websites directly in a web-browser. It uses flat files for storage and provides an intuitive GUI. ([Demo](https://hotglue.me/demo/), [Source Code](https://github.com/k0a1a/hotglue2)) `GPL-3.0` `PHP`
- [htmly](https://www.htmly.com/) - Databaseless Blogging Platform (Flat-File Blog). ([Demo](https://demo.htmly.com/), [Source Code](https://github.com/danpros/htmly)) `GPL-2.0` `PHP`
- [Known](https://withknown.com/) - A collaborative social publishing platform. ([Source Code](https://github.com/idno/known)) `Apache-2.0` `PHP`
- [Plume](https://joinplu.me/) - Federated blogging engine, based on ActivityPub. ([Source Code](https://github.com/Plume-org/Plume)) `AGPL-3.0` `Rust`
- [PluXml](http://www.pluxml.org/) - XML-based blog/CMS platform. ([Source Code](https://github.com/pluxml/PluXml)) `GPL-1.0` `PHP`
- [Serendipity](https://docs.s9y.org/) - Serendipity (s9y) is a highly extensible and customizable PHP blog engine using Smarty templating. ([Source Code](https://github.com/s9y/serendipity)) `BSD-3-Clause` `PHP`


### Bookmarks and Link Sharing

**[`^        back to top        ^`](#)**

- [dyu bookmarks](https://github.com/dyu/bookmarks) - Single-threaded/process bookmark app powered by leveldb and uWebSockets. Supports importing from Delicious and Chrome. ([Demo](https://dyuproject.com/bookmarks/)) `Apache-2.0` `Java`
- [Espial](https://github.com/jonschoning/espial) - An open-source, web-based bookmarking server. `AGPL-3.0` `Haskell`
- [Firefox Account Server](https://mozilla-services.readthedocs.io/en/latest/howtos/run-fxa.html) - This allows you to host your own Firefox accounts server. ([Source Code](https://github.com/mozilla/fxa)) `MPL-2.0` `Nodejs, Java`
  - [Firefox Sync Server](https://github.com/mozilla-services/syncserver) - Sync Firefox bookmarks, passwords, history, tabs, preferences. `MPL-2.0` `Python`
- [Geekmarks](https://geekmarks.dmitryfrank.com/) - Personal bookmarking service focused on speed and organization using hierarchical tags. ([Source Code](https://github.com/dimonomid/geekmarks)) `BSD-2-Clause` `Go`
- [golinks](https://git.mills.io/prologic/golinks) - Web application that allows you to create smart bookmarks, commands and aliases by pointing your web browser's default search engine at a running instance. Similar to bunny1 or yubnub. ([Demo](https://search.mills.io)) `MIT` `Go`
- [Hackershare](https://github.com/hackershare/hackershare) - Social bookmarks website for hackers. ([Demo](https://hackershare.dev)) `MIT` `Ruby`
- [linkding](https://github.com/sissbruecker/linkding) - Minimal bookmark management with a fast and clean UI. Simple installation through Docker and can run on your Raspberry Pi. ([Demo](https://demo.linkding.link/)) `MIT` `Docker/Python/Nodejs`
- [LinkAce](https://www.linkace.org/) - A bookmark archive with automatic backups to the Internet Archive, link monitoring, and a full REST API. Installation is done via Docker, or as a simple PHP application. ([Demo](https://demo.linkace.org/), [Source Code](https://github.com/Kovah/LinkAce/)) `GPL-3.0` `PHP`
- [Lobsters](https://lobste.rs) - Run your own link aggregation site. ([Source Code](https://github.com/jcs/lobsters)) `BSD-3-Clause` `Ruby`
- [No Fuss Bookmarks](http://nofussbm.herokuapp.com/signup.html) - Very simple software and service to store bookmarks especially designed for hackers (that don't need fancy interfaces, but nice API). ([Source Code](https://github.com/mapio/nofussbm)) `GPL-3.0` `Python`
- [Pinry](http://getpinry.com/) - The tiling image board system for people who want to save, tag, and share images, videos, and webpages. ([Source Code](https://github.com/pinry/pinry)) `BSD-2-Clause` `Python`
- [Reminiscence](https://github.com/kanishka-linux/reminiscence) - Self-Hosted Bookmark And Archive Manager. `AGPL-3.0` `Python`
- [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing platform. ([Demo](https://demo.shaarli.org)) `Zlib` `PHP`
- [Shiori](https://github.com/go-shiori/shiori) - Simple bookmark manager built with Go. `MIT` `Go`
- [unmark](https://unmark.it/) - Open source to do app for links. ([Source Code](https://github.com/cdevroe/unmark)) `MIT` `PHP`
- [ubookmark](https://ungleich.ch/u/projects/ubookmark/) - LDAP enabled bookmarking service. ([Demo](https://ipv6.blog), [Source Code](https://code.ungleich.ch/ungleich-public/ubookmark/)) `GPL-2.0` `Python`
- [xBrowserSync](https://www.xbrowsersync.org) - Open source tool for syncing browser data between browsers and devices. ([Source Code](https://github.com/xBrowserSync)) `MIT` `Nodejs`

### Calendar & Contacts

**[`^        back to top        ^`](#)**

_Related: [Groupware](#groupware)_

_See also: [Comparison of CalDAV and CardDAV implementations - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_CalDAV_and_CardDAV_implementations)_


### Calendar & Contacts - CalDAV or CardDAV Servers

- [Baïkal](http://sabre.io/baikal/) - Lightweight CalDAV and CardDAV server based on sabre/dav. ([Source Code](https://github.com/sabre-io/Baikal)) `GPL-3.0` `PHP`
- [calypso](https://keithp.com/calypso/) - Python-based CalDAV and CardDAV server, forked from Radicale. ([Source Code](https://keithp.com/git/calypso.git)) `GPL-3.0` `Python`
- [DAViCal](https://www.davical.org/) - Server for calendar sharing (CalDAV) that uses a PostgreSQL database as a data store. ([Source Code](https://gitlab.com/davical-project/davical)) `GPL-2.0` `PHP`
- [Davis](https://github.com/tchapi/davis/) - A simple, dockerizable and fully translatable admin interface for sabre/dav based on Symfony 5 and Bootstrap 4, largely inspired by Baïkal. `MIT` `PHP`
- [DecSync CC](https://f-droid.org/packages/org.decsync.cc/) - Serverless contacts, calendar synchronization using your own file syncing method i.e Syncthing, Nextcloud etc. ([Source Code](https://github.com/39aldo39/DecSyncCC)) `GPL-3.0` `Kotlin`
- [Etebase (EteSync)](https://www.etebase.com/) - End-to-end encrypted and journaled personal information server supporting calendar and contact data, offering its own clients. ([Source Code](https://github.com/etesync/server)) `AGPL-3.0` `Python/Django`
- [Radicale](http://radicale.org/) - Simple calendar and contact server with extremely low administrative overhead. ([Source Code](https://github.com/Kozea/Radicale)) `GPL-3.0` `Python`
- [SabreDAV](http://sabre.io/) - Open source CardDAV, CalDAV, and WebDAV framework and server. ([Source Code](https://github.com/sabre-io/dav)) `MIT` `PHP`
- [Xandikos](https://www.xandikos.org/) - Open source CardDAV and CalDAV server with minimal administrative overhead, backed by a Git repository. ([Source Code](https://github.com/jelmer/xandikos)) `GPL-3.0` `Python`

### Calendar & Contacts - CalDAV or CardDAV Web-based Clients

- [AgenDAV](http://agendav.org/) - Multilanguage CalDAV web client with a rich AJAX interface and shared calendars support. ([Source Code](https://github.com/agendav/agendav)) `GPL-3.0` `PHP`
- [InfCloud](https://www.inf-it.com/open-source/clients/infcloud/) - Open source CalDAV/CardDAV web client implementation. ([Demo](https://www.inf-it.com/infcloud/), [Source Code](https://www.inf-it.com/InfCloud_0.13.1.zip)) `AGPL-3.0` `Javascript`
- [EteSync Web](https://www.etesync.com/faq/#web-client) - EteSync's official Web-based client (i.e., their Web app). ([Demo](https://client.etesync.com/), [Source Code](https://github.com/etesync/etesync-web)) `AGPL-3.0` `Javascript`

### Communication

**[`^        back to top        ^`](#)**

### Communication - Custom Communication Systems

- [BluetoothCommunicatorExample](https://github.com/niedev/BluetoothCommunicatorExample) - Bluetooth LE chat app to communicate between android devices with P2P architecture. ([Clients](https://github.com/niedev/RTranslator)) `Apache-2.0` `Java`
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Language-agnostic real-time messaging (Websocket or SockJS) server. ([Demo](https://github.com/centrifugal/centrifugo#demo)) `MIT` `Go`
- [Chaskiq](https://chaskiq.io) - Full featured livechat, helpcenter and CRM as an alternative to Intercom & Drift, Crisp and others. ([Source Code](https://github.com/chaskiq/chaskiq)) `AGPL-3.0` `Ruby`
- [Chatwoot](https://www.chatwoot.com) - Self-hosted customer communication platform, an alternative to Intercom & Zendesk. ([Source Code](https://github.com/chatwoot/chatwoot)) `MIT` `Ruby`
- [Cherry](https://github.com/rafael-santiago/cherry) - Tiny webchat server. `GPL-2.0` `Go`
- [Conduit](https://conduit.rs/) - A simple, fast, and reliable chat server powered by Matrix. ([Source Code](https://gitlab.com/famedly/conduit)) `Apache-2.0` `Rust`
- [Darkwire.io](https://github.com/darkwire/darkwire.io) - End-to-end encrypted instant web chat. `MIT` `Nodejs`
- [Freenet](https://freenetproject.org/index.html) - Anonymously share files, browse and publish _freesites_ (web sites accessible only through Freenet) and chat on forums. ([Source Code](https://github.com/freenet/fred)) `GPL-2.0` `Java`
- [GNUnet](https://gnunet.org/) - Free software framework for decentralized, peer-to-peer networking. ([Source Code](https://gnunet.org/git/)) `GPL-3.0` `C`
- [Gotify](https://gotify.net/) - Self-hosted notification server with Android and CLI clients, similar to PushBullet. ([Source Code](https://github.com/gotify/server), [Clients](https://github.com/gotify/android)) `MIT` `Go`
- [Hawkpost](https://hawkpost.co) - HawkPost is a web app that lets you create unique links that you can share with a person that desires to send you important information but doesn't know how to encrypt it. The message is encrypted in their browser and sent to your email address. ([Source Code](https://github.com/whitesmith/hawkpost)) `MIT` `Python`
- [Jami](https://jami.net/) - Free and universal communication platform which preserves the user's privacy and freedoms (formerly GNU Ring). ([Source Code](https://git.ring.cx/savoirfairelinux/ring-project)) `GPL-3.0` `C++`
- [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Meet is an OpenSource (MIT) WebRTC Javascript application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Source Code](https://github.com/jitsi/jitsi-meet)) `MIT` `Javascript`
- [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache-2.0` `Java`
- [KChat](https://github.com/php-kchat/kchat) - PHP Based Live Chat Application. `Apache-2.0` `PHP`
- [LeapChat](https://github.com/cryptag/leapchat) - Ephemeral, encrypted, in-browser chat rooms. `AGPL-3.0` `Javascript`
- [Lets-Chat](http://sdelements.github.io/lets-chat/) - Self hosted chat suite written in Node. ([Source Code](https://github.com/sdelements/lets-chat)) `MIT` `Nodejs`
- [LibreNews](https://librenews.io/) - Decentralized and secure breaking news notification system. ([Source Code](https://github.com/milesmcc/LibreNews-Server/)) `GPL-3.0` `Python`
- [Live Helper Chat](http://livehelperchat.com/) - Live Support chat for your website. ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache-2.0` `PHP`
- [Mattermost](http://www.mattermost.org/) - Open-source, on-prem Slack-alternative. It can be integrated with Gitlab. ([Source Code](https://github.com/mattermost/mattermost-server)) `AGPL-3.0/Apache-2.0` `Go`
- [MiAOU](https://miaou.dystroy.org/login) - Multi-room persistent chat server. ([Source Code](https://github.com/Canop/miaou)) `MIT` `Nodejs`
- [Mibew](https://mibew.org) - Mibew Messenger is an open-source live support application written in PHP and MySQL. It enables one-on-one chat assistance in real-time directly from your website. ([Demo](https://mibew.org/demo2), [Source Code](https://github.com/Mibew/mibew)) `Apache-2.0` `PHP`
- [Mumble](https://wiki.mumble.info/wiki/Main_Page) - Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble), [Clients](https://wiki.mumble.info/wiki/3rd_Party_Applications)) `BSD-3-Clause` `C++`
- [OTS](https://ots.fyi/) - One-Time-Secret sharing platform with a symmetric 256bit AES encryption in the browser. ([Source Code](https://github.com/Luzifer/ots)) `Apache-2.0` `Go`
- [Papercups](https://papercups.io/) - An open source live customer chat web app written in Elixir. ([Demo](https://app.papercups.io/demo), [Source Code](https://github.com/papercups-io/papercups)) `MIT` `Elixir`
- [PushBits](https://github.com/pushbits/server) - Self-hosted notification server for relaying push notifications via Matrix, similar to PushBullet and Gotify. `ISC` `Go`
- [Rallly](http://rallly.co) - Rallly is a free collaborative scheduling service. ([Source Code](https://github.com/lukevella/Rallly)) `CC-BY-SA-4.0` `Nodejs`
- [RetroShare](http://retroshare.org) - Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer. ([Source Code](https://github.com/RetroShare/RetroShare)) `GPL-2.0` `С++`
- [Rocket.Chat](https://rocket.chat/) - Teamchat solution similar to Gitter.im or Slack. ([Source Code](https://github.com/RocketChat/Rocket.Chat)) `MIT` `Nodejs`
- [Shhh](https://github.com/smallwat3r/shhh) - Keep secrets out of emails or chat logs, share them using secure links with passphrase and expiration dates. `MIT` `Python`
- [Spectrum 2](http://spectrum.im/) - Spectrum 2 is an open source instant messaging transport.  It allows users to chat together even when they are using different IM networks. ([Source Code](https://github.com/SpectrumIM/spectrum2)) `GPL-3.0` `C++`
- [Spreed](https://www.spreed.me/) - WebRTC audio/video calls, conferencing server, and web client. ([Source Code](https://github.com/strukturag/spreed-webrtc)) `AGPL-3.0` `Go`
- [Synapse](http://matrix.org/docs/projects/server/synapse.html) - Server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication. ([Source Code](https://github.com/matrix-org/synapse)) `Apache-2.0` `Python`
  - [Matrix Console Web](https://matrix.org/docs/projects/client/matrix-console-web) - Web client meant to be a showcase of Matrix capabilities, and reference implementation of the Matrix standard. ([Source Code](https://github.com/matrix-org/matrix-angular-sdk)) `Apache-2.0` `Javascript`
  - [Element](https://element.io) - Fully-featured Matrix client for Web, iOS & Android. ([Source Code](https://github.com/vector-im/element-web)) `Apache-2.0` `Javascript`
- [Syndie](https://syndie.de) - Syndie is a libre system for operating distributed forums. `CC0-1.0` `Java`
- [TextBelt](https://github.com/typpo/textbelt) `⚠` - Outgoing SMS API that uses carrier-specific gateways to deliver your text messages for free, and without ads. `MIT` `Javascript`
- [Tinode](https://github.com/tinode) - Instant messaging platform. Backend in Go. Clients: Swift iOS, Java Android, JS webapp, scriptable command line; chatbots. ([Demo](https://sandbox.tinode.co/), [Source Code](https://github.com/tinode/chat), [Clients](https://github.com/tinode/webapp)) `GPL-3.0` `Go`
- [Tuber](https://blog.trailofbits.com/2015/12/15/self-hosted-video-chat-with-tuber/) - Peer-to-peer video chat that works. ([Source Code](https://github.com/trailofbits/tubertc)) `MIT` `Javascript`
- [WBO](https://github.com/lovasoa/whitebophir#wbo) -  A web Whiteboard to collaborate in real-time on schemas, drawings, and notes. ([Demo](https://wbo.ophir.dev/)) `AGPL-3.0` `Nodejs/Docker`
- [ZeroNet](https://zeronet.io/) `⚠` - Open, free, and uncensorable websites, using Bitcoin cryptography and BitTorrent network. ([Source Code](https://github.com/HelloZeroNet/ZeroNet)) `GPL-2.0` `Python`
- [Zulip](https://zulip.org) - Zulip is a powerful, open source group chat application. ([Source Code](https://github.com/zulip/zulip)) `Apache-2.0/Other` `Python`

### Communication - Email

**[`^        back to top        ^`](#)**

### Communication - Email - Complete Solutions

_Simple deployment of a mail server, e.g. for inexperienced or impatient admins._

- [AnonAddy](https://anonaddy.com) - Open source email forwarding service for creating aliases. ([Source Code](https://github.com/anonaddy/anonaddy)) `MIT` `PHP`
- [DebOps](https://docs.debops.org/) - Your Debian-based data center in a box. A set of general-purpose Ansible roles that can be used to manage Debian or Ubuntu hosts. ([Source Code](https://github.com/debops/debops)) `GPL-3.0-only` `YAML/Ansible/Python`
- [docker-mailserver](https://docker-mailserver.github.io/docker-mailserver/edge/) - Fullstack but simple mail server (smtp, imap, antispam, antivirus, etc.). Only configuration files, no SQL database. Keep it simple and versioned. Easy to deploy and upgrade. ([Source Code](https://github.com/docker-mailserver/docker-mailserver)) `MIT` `Docker`
- [emailwiz](https://github.com/LukeSmithxyz/emailwiz) - Luke Smith's bash script to completely automate the setup of a Postfix/Dovecot/SpamAssassin/OpenDKIM server on debian. `GPL-3.0` `Bash`
- [Excision Mail](https://github.com/Excision-Mail/Excision-Mail) - Fullstack, security focused mailserver based on OpenSMTPD for OpenBSD using ansible. `ISC` `Shell/Ansible`
- [Inboxen](https://inboxen.org) - Inboxen is a service that provides you with an infinite number of unique inboxes. ([Source Code](https://github.com/Inboxen/Inboxen)) `GPL-3.0` `Python`
- [homebox](https://github.com/progmaticltd/homebox) - Suite of Ansible scripts to deploy a fully functional mail server on Debian. Unobtrusive and automatic as much as possible, focusing on stability and security. `GPL-3.0` `Shell`
- [iRedMail](http://www.iredmail.org/) - Full-featured mail server solution based on Postfix and Dovecot. ([Source Code](https://github.com/iredmail/iRedMail)) `GPL-3.0` `Shell`
- [Mailcow](https://mailcow.email/) - Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration. ([Source Code](https://github.com/mailcow/mailcow-dockerized)) `GPL-2.0` `Docker/PHP`
- [Mailu](https://mailu.io/) - Mailu is a simple yet full-featured mail server as a set of Docker images. ([Demo](https://github.com/Mailu/Mailu/wiki/Demo-server), [Source Code](https://github.com/Mailu/Mailu)) `MIT` `Docker/Python`
- [Mail-in-a-Box](https://mailinabox.email/) - Turns any Ubuntu server into a fully functional mail server with one command. ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0-1.0` `Shell`
- [Modoboa](http://modoboa.org/en/) - Modoboa is a mail hosting and management platform including a modern and simplified Web User Interface. ([Source Code](https://github.com/modoboa/modoboa)) `ISC` `Python`
- [Ptorx](https://github.com/xyfir/ptorx) - Email privacy. Anonymously send and receive with alias forwarding. `GPL-3.0` `Nodejs`
- [Qmailtoaster](http://www.qmailtoaster.com/) - Stable, full-featured, easy-to-install mail server based on qmail. ([Source Code](https://github.com/QMailToaster/)) `Multiple` `Linux`
- [SimpleLogin](https://simplelogin.io) - Open source email alias solution to protect your email address. Comes with browser extensions and mobile apps. ([Source Code](https://github.com/simple-login/app)) `MIT` `Docker/Python`
- [Simple NixOS Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - Complete mailserver solution leveraging the Nix Ecosystem. `GPL-3.0` `Nix`
- [wildduck](https://wildduck.email/) - Scalable no-SPOF IMAP/POP3 mail server. ([Source Code](https://github.com/nodemailer/wildduck)) `EUPL-1.2` `Nodejs`

### Communication - Email - Mail Transfer Agents

_MTAs / SMTP servers_

- [chasquid](https://blitiri.com.ar/p/chasquid/) - SMTP (email) server with a focus on simplicity, security, and ease of operation. ([Source Code](https://blitiri.com.ar/git/r/chasquid/)) `Apache-2.0` `Go`
- [Courier MTA](http://www.courier-mta.org/) - Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services. ([Source Code](http://www.courier-mta.org/repo.html)) `GPL-3.0` `C`
- [Exim](https://www.exim.org/) - Message transfer agent (MTA) developed at the University of Cambridge. ([Source Code](http://git.exim.org/exim.git)) `GPL-3.0` `C`
- [Haraka](http://haraka.github.io/) - High-performance, pluginable SMTP server written in Javascript. ([Source Code](https://github.com/haraka/Haraka)) `MIT` `Javascript`
- [MailCatcher](http://mailcatcher.me/) - Ruby gem that deploys a simply SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. ([Source Code](https://github.com/sj26/mailcatcher)) `MIT` `Ruby`
- [Maildrop](https://gitlab.com/markbeeson/maildrop) - Disposable email SMTP server, also useful for development. `MIT` `Scala`
- [MailHog](https://github.com/mailhog/MailHog) - Small Golang executable which runs an SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. `MIT` `Go`
- [OpenSMTPD](https://opensmtpd.org/) - Secure SMTP server implementation from the OpenBSD project. ([Source Code](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.sbin/smtpd/)) `ISC` `C`
- [Postfix](http://www.postfix.org/) - Fast, easy to administer, and secure Sendmail replacement. `IPL-1.0` `C`
- [Qmail](https://cr.yp.to/qmail.html) - Secure Sendmail replacement. ([Source Code](https://sources.debian.net/src/netqmail/1.06-5/)) `CC0-1.0` `C`
- [Sendmail](http://www.sendmail.com/sm/open_source/) - Message transfer agent (MTA). `Sendmail` `C`
- [Slimta](http://slimta.org) - Mail Transfer Library built on Python. ([Source Code](https://github.com/slimta/python-slimta)) `MIT` `Python`

### Communication - Email - Mail Delivery Agents

_MDAs - IMAP/POP3 software_

- [Cyrus IMAP](https://www.cyrusimap.org/) - Email (IMAP/POP3), contacts and calendar server. ([Source Code](https://github.com/cyrusimap/cyrus-imapd )) `BSD-3-Clause-Attribution` `C`
- [Dovecot](http://www.dovecot.org/) - IMAP and POP3 server written primarily with security in mind. ([Source Code](https://github.com/dovecot/core)) `MIT/LGPL-2.1` `C`
- [MailForm](https://github.com/Feuerhamster/mailform) - Lightweight self-hosted open source alternative to Formspree and SendGrid. `Apache-2.0` `Nodejs`
- [Piler](http://www.mailpiler.org/wiki/start) - feature-rich open source email archiving solution. ([Source Code](https://bitbucket.org/jsuto/piler)) `GPL-3.0` `C`

### Communication - Email - Mailing Lists and Newsletters

_Mailing lists servers and mass mailing software - one message to many recipients._

- [Dada Mail](http://dadamailproject.com/) - Web-based list management system that can be used for announcement lists and/or discussion lists. ([Source Code](https://github.com/justingit/dada-mail)) `GPL-2.0` `Perl`
- [Listmonk](https://listmonk.app/) - High performance, self-hosted newsletter and mailing list manager with a modern dashboard. ([Source Code](https://github.com/knadh/listmonk)) `AGPL-3.0` `Go`
- [Mailman](https://www.gnu.org/software/mailman/) - The Gnu mailing list server. `GPL-3.0` `Python`
- [Mailtrain](https://mailtrain.org/) - Self hosted newsletter application. ([Source Code](https://github.com/Mailtrain-org/mailtrain)) `GPL-3.0` `Nodejs`
- [MailyHerald](http://mailyherald.org/) - Self-hosted Mailchimp alternative that you can easily integrate with your site. Helps you send and manage your application mailings. It supports email marketing and conducting the daily stream of notifications you send to your users. ([Source Code](https://github.com/Sology/maily_herald)) `LGPL-3.0` `Ruby`
- [Mautic](https://www.mautic.org/) - Mautic is marketing automation software (email, social and more). ([Source Code](https://github.com/mautic/mautic)) `GPL-3.0` `PHP`
- [HyperKitty](https://wiki.list.org/HyperKitty) - Open source Django application to provide a web interface to access GNU Mailman v3 archives. ([Demo](https://lists.mailman3.org/), [Source Code](https://gitlab.com/mailman/hyperkitty)) `GPL-3.0` `Python`
- [phpList](https://phplist.org) - Newsletter and email marketing with advanced management of subscribers, bounces, and plugins. ([Source Code](https://github.com/phpList/)) `AGPL-3.0` `PHP`
- [Postal](https://postal.atech.media/) - Fully featured open source mail delivery platform for incoming and outgoing e-mail. ([Source Code](https://github.com/postalhq/postal)) `MIT` `Ruby`
- [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) - Web user interface to access GNU Mailman. ([Source Code](https://gitlab.com/mailman/postorius/)) `GPL-3.0` `Python`
- [Schleuder](https://schleuder.nadir.org/) - GPG-enabled mailing list manager with resending-capabilities. ([Source Code](https://0xacab.org/schleuder/schleuder/tree/master)) `GPL-3.0` `Ruby`
- [Sympa](https://www.sympa.org/) - Mailing list manager. `GPL-2.0` `Perl`

### Communication - Email - Webmail Clients

- [Afterlogic WebMail Lite](http://www.afterlogic.org/webmail-lite) - Fast and easy-to-use webmail front-end for your existing IMAP mail server, Plesk or cPanel. ([Demo](https://lite.afterlogic.com/), [Source Code](https://github.com/afterlogic/webmail-lite)) `AGPL-3.0` `PHP`
- [Cypht](http://cypht.org) - Feed reader for your email accounts. ([Source Code](https://github.com/jasonmunro/cypht)) `LGPL-2.1` `PHP`
- [IMP](https://www.horde.org/apps/imp/) - HORDE application that provides webmail access to IMAP and POP3 accounts. ([Demo](http://demo.horde.org/), [Source Code](https://www.horde.org/download/imp)) `GPL-2.0` `PHP`
- [Isotope Mail](https://blog.marcnuri.com/isotope-mail-client-introduction/) - Microservice based webmail client built with ReactJS and Spring. ([Source Code](https://github.com/manusa/isotope-mail)) `Apache-2.0` `Docker/Java`
- [MailCare](https://mailcare.io) - Open source disposable email address service. ([Source Code](https://github.com/mailcare/mailcare)) `MIT` `PHP`
- [Mailpile](https://www.mailpile.is/) - Webmail client with search, filtering, encryption features and more. ([Source Code](https://github.com/mailpile/Mailpile)) `AGPL-3.0` `Python`
- [RainLoop](http://www.rainloop.net/) - Simple, modern and fast webmail with IMAP/SMTP Support and multi accounting. ([Demo](http://demo.rainloop.net/), [Source Code](https://github.com/RainLoop/rainloop-webmail)). `AGPL-3.0` `PHP`
- [Roundcube](https://roundcube.net) - Browser-based IMAP client with an application-like user interface. ([Source Code](https://github.com/roundcube/roundcubemail)) `GPL-3.0` `PHP`
- [SquirrelMail](http://squirrelmail.org) - Another browser-based IMAP client. ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPL-2.0` `PHP`

### Communication - IRC

**[`^        back to top        ^`](#)**

_[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) communication software_

- [Convos](https://convos.chat/) - Always online web IRC client. ([Demo](https://convos.chat/#instant-demo), [Source Code](http://github.com/nordaaker/convos)) `Artistic-2.0` `Perl`
- [InspIRCd](https://www.inspircd.org/) - Modular IRC server written in C++ for Linux, BSD, Windows, and macOS. ([Source Code](https://github.com/inspircd/inspircd)) `GFDL-1.2-only` `C++`
- [Dispatch](https://github.com/khlieng/dispatch) - Self-hosted web IRC client written in Go. ([Demo](https://dispatch.khlieng.com/connect)) `MIT` `Go`
- [Kiwi IRC](https://kiwiirc.com/) - Responsive web IRC client with theming support. ([Demo](https://kiwiirc.com/nextclient/), [Source Code](https://github.com/kiwiirc/kiwiirc)) `Apache-2.0` `Nodejs`
- [ngircd](https://ngircd.barton.de/) - Free, portable and lightweight Internet Relay Chat server for small or private networks. ([Source Code](https://github.com/ngircd/ngircd)) `GPL-2.0` `C`
- [Ergo](https://ergo.chat/) - Modern IRCv3 server written in Go, combining the features of an ircd, a services framework, and a bouncer. ([Source Code](https://github.com/ergochat/ergo)) `MIT` `Go`
- [The Lounge](https://thelounge.chat/) - Self-hosted web IRC client. ([Demo](https://demo.thelounge.chat/), [Source Code](https://github.com/thelounge/thelounge)) `MIT` `Nodejs`
- [Quassel IRC](http://quassel-irc.org/) - distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. ([Source Code](https://github.com/quassel/quassel)) `GPL-2.0` `C++`
- [Robust IRC](https://robustirc.net/) - RobustIRC is IRC without netsplits. Distributed IRC server, based on RobustSession protocol. ([Source Code](https://github.com/robustirc/robustirc)) `BSD-3-Clause` `Go`
- [Tiny Tiny IRC](https://tt-rss.org/tt-irc/) - An open source AJAX-powered chat platform with support for IRC ([Source Code](https://git.tt-rss.org/fox/tt-irc)). `GPL-3.0` `PHP/Java`
- [Weechat](https://weechat.org/) - Fast, light and extensible chat client. `GPL-3.0` `C`
  - [Glowing Bear](https://github.com/glowing-bear/glowing-bear/) - A web frontend for WeeChat. ([Demo](https://www.glowing-bear.org)) `GPL-3.0` `Javascript`
- [ZNC](http://wiki.znc.in/ZNC) - Advanced IRC bouncer. ([Source Code](https://github.com/znc/znc)) `Apache-2.0` `C++`

### Communication - SIP

**[`^        back to top        ^`](#)**

_[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol)/[IPBX](https://en.wikipedia.org/wiki/IP_PBX) telephony software_

- [Asterisk](http://www.asterisk.org/) - Easy to use but advanced IP PBX system, VoIP gateway and conference server. `GPL-2.0` `C`
- [ASTPP](https://www.astppbilling.org/) - is an Open Source VoIP Billing Solution for Freeswitch. It supports prepaid and postpaid billing with call rating and credit control. It also provides many other features. ([Source Code](https://github.com/iNextrix/ASTPP)) `AGPL-3.0` `PHP`
- [Freepbx](http://www.freepbx.org) - Web-based open source GUI that controls and manages Asterisk. ([Source Code](http://git.freepbx.org/projects/FREEPBX)) `GPL-2.0` `PHP`
- [FreeSWITCH](https://freeswitch.org/) - Scalable open source cross-platform telephony platform. ([Source Code](https://freeswitch.org/stash/projects/FS/repos/freeswitch/browse)) `MPL-2.0` `C`
- [FusionPBX](https://www.fusionpbx.com/) - Open source project that provides a customizable and flexible web interface to the very powerful and highly scalable multi-platform voice switch called FreeSWITCH. ([Source Code](https://github.com/fusionpbx/fusionpbx)) `MPL-1.1` `PHP`
- [Kamailio](http://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc). ([Source Code](https://github.com/kamailio/kamailio)) `GPL-2.0` `C`
- [Kazoo](http://2600hz.org/) - KAZOO is an open-source, highly scalable software platform designed to provide carrier-grade VoIP switch functions and features. ([Source Code](https://github.com/2600hz/KAZOO)) `MPL-1.1` `Erlang`
- [Ostel](https://dev.guardianproject.info/projects/ostel/wiki/Server_Documentation) - Secure SIP telephony setup with ZRTP encryption. `GPL-3.0` `Ruby`
- [Routr](https://routr.io) - A lightweight sip proxy, location server, and registrar for a reliable and scalable SIP infrastructure. ([Source Code](https://github.com/fonoster/routr)) `MIT` `Javascript`
- [SipXcom](http://sipxcom.org/) - Open source unified communications system. ([Source Code](https://github.com/sipXcom/sipxecs)) `AGPL-3.0` `Java`
- [SIP3](https://sip3.io/) - VoIP troubleshooting and monitoring platform. ([Demo](https://demo.sip3.io), [Source Code](https://github.com/sip3io/)) `Apache-2.0` `Kotlin`
- [SIPCAPTURE Homer](https://www.sipcapture.org/) - Troubleshooting and monitoring VoIP calls. ([Source Code](https://github.com/sipcapture/homer)) `AGPL-3.0` `Angular/C`
- [Wazo](http://wazo-platform.org/) - Full-featured IPBX solution built atop Asterisk with integrated Web administration interface and REST-ful API. ([Source Code](https://github.com/wazo-platform)) `GPL-3.0` `Python`
- [Yeti-Switch](https://yeti-switch.org/) - Transit class4 softswitch(SBC) with integrated billing and routing engine and REST API. ([Demo](https://yeti-switch.org/demo.html), [Source Code](https://github.com/yeti-switch)) `GPL-2.0` `C++/Ruby`

### Communication - Social Networks and Forums

**[`^        back to top        ^`](#)**

- [Abilian SBE](https://github.com/abilian/abilian-sbe) - Open Source Collaboration and Social Networking framework and platform. `LGPL-2.1` `Python`
- [Anahita](https://www.getanahita.com/) - Open Source Social Networking Framework and Platform. ([Source Code](https://github.com/anahitasocial)) `GPL-3.0` `PHP`
- [AsmBB](https://board.asm32.info) - A fast, SQLite-powered forum engine written in ASM. ([Source Code](https://asm32.info/fossil/asmbb/index)) `EUPL-1.2` `Assembly`
- [bbPress](https://bbpress.org/) - bbPress is forum software with a twist from the creators of WordPress. Easily setup discussion forums inside your WordPress.org powered site. ([Source Code](https://bbpress.trac.wordpress.org/browser/trunk)) `GPL-2.0` `PHP`
- [Bootcamp](http://trybootcamp.vitorfs.com) - Enterprise social network. ([Source Code](https://github.com/vitorfs/bootcamp)) `MIT` `Python`
- [Buddycloud](http://buddycloud.com/) - Tools, libraries, services and a community to build user-to-user, group and social messaging into your app. Saves time. Scales up. Supports you. ([Source Code](https://github.com/buddycloud)) `Apache-2.0` `Java`
- [BuddyPress](https://buddypress.org/about/) - Powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more. ([Source Code](https://github.com/buddypress/BuddyPress)) `GPL-2.0` `PHP`
- [Cactus Comments](https://cactus.chat/) - Cactus Comments is a federated comment system for the open web built on Matrix. ([Demo](https://cactus.chat/demo/), [Source Code](https://gitlab.com/cactus-comments/)) `GPL-3.0` `Python`
- [cartulary](https://github.com/daveajones/cartulary) - RSS reader, readability tool, article archiver, microblogger, social graph manager and reading list manager. `CDDL-1.0` `PHP`
- [Commento](https://gitlab.com/commento/commento) - Commento is a discussion platform that you can embed on your blog, news articles, and any place where you want your readers to add comments. `MIT` `Go`
- [Coral](https://coralproject.net/) - A better commenting experience from Vox Media. ([Source Code](https://github.com/coralproject/talk)) `Apache-2.0` `Nodejs`
- [diaspora*](https://diasporafoundation.org/) - Distributed social networking server. ([Demo](https://podupti.me/go.php), [Source Code](https://github.com/diaspora/diaspora)) `AGPL-3.0` `Ruby`
- [Discourse](http://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS. ([Demo](https://try.discourse.org/), [Source Code](https://github.com/discourse/discourse)) `GPL-2.0` `Ruby`
- [dyu comments](https://github.com/dyu/comments) - Real-time, markdown-enabled comment engine powered by leveldb. ([Demo](https://dyu.github.io/comments/real-time/)) `Apache-2.0` `Java`
- [EpochTalk](https://github.com/epochtalk/epochtalk) - Next Generation Forum Software. `MIT` `Nodejs`
- [Elgg](https://elgg.org/) - Powerful open source social networking engine. ([Source Code](https://github.com/Elgg/Elgg)) `GPL-2.0` `PHP`
- [Flarum](http://flarum.org) - Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
- [FlaskBB](https://flaskbb.org/) - FlaskBB is forum software written in Python using the microframework Flask. You can easily create new topics, posts and send other users private messages. It also includes basic administration and moderation tools. ([Source Code](https://github.com/flaskbb/flaskbb)) `BSD-3-Clause` `Python`
- [FluxBB](https://fluxbb.org/) - Fast, light, user-friendly forum software for your website. ([Source Code](https://github.com/fluxbb/fluxbb)) `GPL-2.0` `PHP`
- [Friendica](https://friendi.ca/) - Social Communication Server. ([Source Code](https://github.com/friendica/friendica)) `AGPL-3.0` `PHP`
- [Glosa](https://github.com/glosa/glosa-server) - Open source commentary system easy to integrate with static pages. You can import from Disqus. `GPL-3.0` `Java`
- [GNU social](https://gnu.io/social/) - Social communication software for both public and private communications. ([Source Code](https://notabug.org/diogo/gnu-social)) `AGPL-3.0` `PHP`
- [Gosora](https://gosora-project.com/) - Gosora is an ultra-fast and secure forum software written in Go that balances usability with functionality. ([Source Code](https://github.com/Azareal/Gosora)) `GPL-3.0` `Go`
- [Hubzilla](https://hubzilla.org) - Decentralized identity, privacy, publishing, sharing, cloud storage, and communications/social platform. ([Source Code](https://framagit.org/hubzilla/core)) `MIT` `PHP`
- [HumHub](https://www.humhub.org/) - Flexible kit for private social networks. ([Source Code](https://github.com/humhub/humhub)) `AGPL-3.0` `PHP`
- [Isso](http://posativ.org/isso/) - Lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus. ([Source Code](https://github.com/posativ/isso)) `MIT` `Python`
- [Lemmy](https://join-lemmy.org/) - A link aggregator / reddit clone for the fediverse. Reddit alternative built in Rust. ([Source Code](https://github.com/LemmyNet/lemmy)) `AGPL-3.0` `Rust`
- [Libreddit](https://libredd.it/) `⚠` - Private front-end for Reddit written in Rust. ([Source Code](https://github.com/spikecodes/libreddit)) `AGPL-3.0` `Rust`
- [Loomio](https://www.loomio.org/) - Loomio is a collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them. ([Source Code](https://github.com/loomio/loomio)) `AGPL-3.0` `Ruby`
- [Mastodon](https://joinmastodon.org/) - Federated microblogging server, an alternative to GNU social. ([Source Code](https://github.com/tootsuite/mastodon)) `AGPL-3.0` `Ruby`
- [Misago](https://misago-project.org/) - Misago is fully featured modern forum application that is fast, scalable and responsive. ([Source Code](https://github.com/rafalp/Misago)) `GPL-2.0` `Python`
- [Misskey](https://misskey.io/) - Decentralized app-like microblogging server/SNS for the Fediverse, using the ActivityPub protocol like GNU social and Mastodon. ([Source Code](https://github.com/misskey-dev/misskey)) `AGPL-3.0` `Nodejs`
- [Movim](https://movim.eu/) - Modern, federated social network based on XMPP, with a fully featured group-chat, subscriptions and microblogging. ([Source Code](https://github.com/movim/movim)) `AGPL-3.0` `PHP`
- [MyBB](http://www.mybb.com/) - Free, extensible forum software package. ([Source Code](https://github.com/mybb/mybb)) `LGPL-3.0` `PHP`
- [NodeBB](https://nodebb.org/) - Forum software built for the modern web. ([Source Code](https://github.com/NodeBB/NodeBB)) `GPL-3.0` `Nodejs`
- [Nitter](https://nitter.net) `⚠` - A alternative front end to twitter. ([Source Code](https://github.com/zedeus/nitter)) `AGPL-3.0` `Nimble`
- [Orange Forum](http://www.goodoldweb.com/) - Orange Forum is an easy to deploy forum that has minimal dependencies and uses very little javascript. ([Source Code](https://github.com/s-gv/orangeforum)) `BSD-3-Clause` `Go`
- [OSSN](https://www.opensource-socialnetwork.org/) - Open Source Social Network (OSSN) is a social networking software written in PHP. It allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests. ([Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)) `GPL-2.0` `PHP`
- [phpBB](https://www.phpbb.com/) - Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website. ([Source Code](https://github.com/phpbb/phpbb)) `GPL-2.0` `PHP`
- [PixelFed](https://pixelfed.social) - Pixelfed is an open-source, federated platform alternate to Instagram. ([Source Code](http://github.com/pixelfed/pixelfed)) `AGPL-3.0` `PHP`
- [Pleroma](https://pleroma.social) - Federated microblogging server, Mastodon, GNU social, & ActivityPub compatible. ([Source Code](https://git.pleroma.social/pleroma/pleroma)) `AGPL-3.0` `Elixir`
- [Pump.io](http://pump.io/) - Stream server that does most of what people really want from a social network. ([Source Code](https://github.com/pump-io/pump.io)) `Apache-2.0` `Nodejs`
- [remark42](https://remark42.com/) - A lightweight and simple comment engine, which doesn't spy on users. It can be embedded into blogs, articles or any other place where readers add comments. ([Demo](https://remark42.com/demo/), [Source Code](https://github.com/umputun/remark42)) `MIT` `Go`
- [Satellity](https://satellity.org/) - Yet another open source forum written in Golang, React and PostgreSQL. ([Source Code](https://github.com/satellity/satellity)) `MIT` `Go`
- [Scoold](https://scoold.com) - Stack Overflow in a JAR. An enterprise-ready Q&A platform with full-text search, SAML, LDAP integration and social login support. ([Demo](https://live.scoold.com), [Source Code](https://github.com/Erudika/scoold)) `Apache-2.0` `Java`
- [Simple Machines Forum](https://www.simplemachines.org/) - Free, professional grade software package that allows you to set up your own online community within minutes. ([Source Code](https://github.com/SimpleMachines/SMF2.1)) `BSD-3-Clause` `PHP`
- [Socialhome](https://socialhome.network) - Federated and decentralized profile builder and social network engine. ([Demo](https://socialhome.network/), [Source Code](https://github.com/jaywink/socialhome)) `AGPL-3.0` `Python`
- [Talkyard](https://www.talkyard.io/) - Create a community, where your users can suggest ideas and get questions answered. And have friendly open-ended discussions and chat (Slack/StackOverflow/Discourse/Reddit/Disqus hybrid). ([Demo](https://www.talkyard.io/forum/latest), [Source Code](https://github.com/debiki/talkyard)) `AGPL-3.0` `Scala`
- [Teddit](https://teddit.net) `⚠` - Alternative Reddit front-end focused on privacy. ([Source Code](https://codeberg.org/teddit/teddit)) `AGPL-3.0` `Nodejs`
- [Tokumei](https://tokumei.co/) - Anonymous microblogging platform. ([Source Code](https://gitlab.com/tokumei/tokumei)) `ISC` `rc`
- [Thredded](https://github.com/thredded/thredded) - Forums, feature-rich and simple. `MIT` `Ruby`
- [twister](http://twister.net.co/) - Fully decentralized P2P microblogging platform leveraging the free software implementations of Bitcoin and BitTorrent protocols. ([Source Code](https://github.com/miguelfreitas/twister-core)) `MIT` `C++`
- [twtxt.net](https://twtxt.net) - a Self-Hosted, Twitter™-like Decentralised micro-logging platform. No ads, no tracking, your content, your data. ([Source Code](https://git.mills.io/yarnsocial/yarn)) `MIT` `Go`
  - [rss2twtxt](https://github.com/jointwt/rss2twtxt) - An RSS/Atom feed aggregator command-line tool and web service that consumes RSS/Atom and produces twtxt.net feeds for consumption by twtxt clients. ([Demo](https://feeds.twtxt.net)) `MIT` `Go`
- [Vanilla Forums](https://vanillaforums.org/) - Simple and flexible forum software. ([Source Code](https://github.com/vanilla/vanilla)) `GPL-2.0` `PHP`
- [Zusam](https://zusam.org) - Free and open-source way to self-host private forums for groups of friends or family. ([Demo](https://demo.zusam.org), [Source Code](https://github.com/zusam/zusam)) `AGPL-3.0` `PHP`

### Communication - XMPP

**[`^        back to top        ^`](#)**

_[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) software_

### Communication - XMPP - Servers

- [ejabberd](https://www.ejabberd.im/) - XMPP instant messaging server. ([Source Code](https://github.com/processone/ejabberd)) `GPL-2.0` `Erlang`
- [jackal](https://github.com/ortuman/jackal) - XMPP server with focus on stability, simple configuration and low resource consumption. `Apache-2.0` `Go`
- [Kontalk](http://kontalk.org/) - Kontalk is an Open Source Messenger, similar to WhatsApp (app for android only currently), including end-to-end encryption, server is based on Tigase XMPP Server. ([Source Code](https://github.com/kontalk)) `GPL-3.0` `Java`
- [Metronome IM](https://metronome.im/) - Fork of Prosody IM. ([Source Code](https://github.com/maranda/metronome)) `MIT` `Lua`
- [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - Mobile messaging platform with a focus on performance and scalability. ([Source Code](https://github.com/esl/MongooseIM)) `GPL-2.0` `Erlang`
- [Openfire](http://www.igniterealtime.org/projects/openfire/) - Real time collaboration (RTC) server. ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache-2.0` `Java`
- [Prosody IM](http://prosody.im/) - Feature-rich and easy to configure XMPP server. ([Source Code](http://hg.prosody.im/)) `MIT` `Lua`
- [Snikket](https://snikket.org/) - All-in-one Dockerized easy XMPP solution, including web admin and clients. ([Source Code](https://github.com/snikket-im/snikket-server), [Clients](https://snikket.org/app/)) `Apache-2.0` `Lua/Python`
- [Tigase](http://www.tigase.net/content/tigase-xmpp-server) - XMPP server implementation in Java. `GPL-3.0` `Java`

### Communication - XMPP - Web Clients

- [Candy](http://candy-chat.github.io/candy/) - Multi user XMPP client written in Javascript. ([Source Code](https://github.com/candy-chat/candy)) `MIT` `Javascript`
- [Converse.js](https://conversejs.org/) - Free and open-source XMPP chat client in your browser. ([Source Code](https://github.com/conversejs/converse.js)) `MPL-2.0` `Javascript`
- [JSXC](https://jsxc.org) - Real-time XMPP web chat application with video calls, file transfer and encrypted communication. There are also versions for Nextcloud/Owncloud and SOGo. ([Source Code](https://github.com/jsxc/jsxc)) `MIT` `Javascript`
- [Salut à Toi](http://www.salut-a-toi.org/) - Multipurpose, multi frontend, libre and decentralized communication tool. ([Source Code](http://repos.goffi.org/sat)) `AGPL-3.0` `Python`
  - [Libervia](http://wiki.goffi.org/wiki/Libervia/en) - Web frontend from Salut à Toi. ([Source Code](http://repos.goffi.org/libervia)) `AGPL-3.0` `Python`

### Conference Management

**[`^        back to top        ^`](#)**

- [BigBlueButton](https://bigbluebutton.org/) - Supports real-time sharing of audio, video, slides (with whiteboard controls), chat, and the screen. Instructors can engage remote students with polling, emojis, and breakout rooms. ([Demo](https://demo.bigbluebutton.org/gl), [Source Code](https://github.com/bigbluebutton/bigbluebutton)) `LGPL-3.0` `Java`
- [Conference Organizing Distribution (COD)](http://usecod.com/) - Create conference and event websites built on top of Drupal. ([Source Code](http://cgit.drupalcode.org/cod)) `GPL-1.0` `PHP`
- [frab](https://frab.github.io/frab/) - web-based conference planning and management system. It helps to collect submissions, to manage talks and speakers and to create a schedule. ([Source Code](https://github.com/frab/frab)) `MIT` `Ruby`
- [indico](https://getindico.io/) - A feature-rich event management system, made @ CERN, the place where the Web was born. ([Demo](https://sandbox.getindico.io/), [Source Code](https://github.com/indico/indico)) `MIT` `Python`
- [Open Conference Systems (OCS)](https://pkp.sfu.ca/ocs/) - is a free Web publishing tool that will create a complete Web presence for your scholarly conference. ([Demo](https://pkp.sfu.ca/ocs/ocs_demo/), [Source Code](https://github.com/pkp/ocs)) `GPL-1.0` `PHP`
- [OpenCFP](https://github.com/opencfp/opencfp) - OpenCFP is a PHP-based conference talk submission system. `MIT` `PHP`
- [osem](http://osem.io/) - Event management tailored to free Software conferences. ([Demo](http://demo.osem.io/), [Source Code](https://github.com/openSUSE/osem)) `MIT` `Ruby`
- [pretalx](https://pretalx.org) - Web-based event management, including running a Call for Papers, reviewing submissions, and scheduling talks. Exports and imports for various related tools. ([Source Code](https://github.com/pretalx/pretalx)) `Apache-2.0` `Python`

### Content Management Systems (CMS)

**[`^        back to top        ^`](#)**

_CMS are a practical way to setup a website with many features. CMS often come with third party plugins, themes and functionality that is easy to add and customize to your needs._

_Related: [Blogging Platforms](#blogging-platforms), [Static Site Generators](#static-site-generators)_

- [Alfresco Community Edition](https://www.alfresco.com/products/community/download) - The open source Enterprise Content Management software that handles any type of content, allowing users to easily share and collaborate on content. ([Source Code](https://hub.alfresco.com/t5/alfresco-content-services-hub/project-overview-repository/ba-p/290502)) `LGPL-3.0` `Java`
- [Apostrophe](http://apostrophecms.org/) - CMS with a focus on extensible in-context editing tools. ([Demo](http://demo.apostrophecms.org/), [Source Code](https://github.com/apostrophecms/apostrophe)) `MIT` `Nodejs`
- [b2evolution CMS](https://b2evolution.net/) - The most integrated CMS ever: b2evolution includes everything you need to build websites for publishing, sharing and interacting with your community. ([Source Code](https://github.com/b2evolution/b2evolution)) `GPL-2.0` `PHP`
- [Backdrop CMS](https://backdropcms.org/) - Comprehensive CMS for small to medium sized businesses and non-profits. ([Source Code](https://github.com/backdrop/backdrop)) `GPL-2.0` `PHP`
- [BigTree CMS](https://www.bigtreecms.org/) - Straightforward, well documented, and capable written with PHP and MySQL. ([Source Code](https://github.com/bigtreecms/BigTree-CMS)) `LGPL-2.1` `PHP`
- [Bolt CMS](https://bolt.cm/) - Open source Content Management Tool, which strives to be as simple and straightforward as possible. ([Demo](https://try.bolt.cm/), [Source Code](https://github.com/bolt/bolt)) `MIT` `PHP`
- [CMS Made Simple](http://www.cmsmadesimple.org/) - Open source content management system, faster and easier management of website contents, scalable for small businesses to large corporations. ([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL-1.0` `PHP`
- [Cockpit](http://getcockpit.com) - Simple Content Platform to manage any structured content. ([Source Code](https://github.com/agentejo/cockpit)) `MIT` `PHP`
- [Concrete 5 CMS](http://www.concrete5.org/) - Open source content management system. ([Source Code](https://github.com/concrete5/concrete5)) `MIT` `PHP`
- [Contao](https://contao.org/) - Contao is a powerful open source CMS that allows you to create professional websites and scalable web applications. ([Source Code](https://github.com/contao/contao/)) `LGPL-3.0` `PHP`
- [CouchCMS](http://www.couchcms.com/) - Simple Open-Source CMS for designers. ([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPAL-1.0` `PHP`
- [Directus](http://getdirectus.com/) - Directus is a powerful and intuitive headless CMS for managing SQL databases with custom architectures. Built around a robust and extensible API, this decoupled content management framework is perfect for websites, apps, or multi-client projects. ([Source Code](https://github.com/directus/directus)) `GPL-3.0` `PHP`
- [Drupal](https://www.drupal.org/) - Advanced open source content management platform. ([Source Code](http://cgit.drupalcode.org/drupal)) `GPL-2.0` `PHP`
- [eLabFTW](http://www.elabftw.net) - Online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPL-3.0` `PHP`
- [Expressa](https://github.com/thomas4019/expressa) - Content Management System for powering database driven websites using JSON schemas. Provides permission management and automatic REST APIs. `MIT` `Nodejs`
- [Flextype](https://flextype.org/) - Flextype is an open-source Hybrid Content Management System with the freedom of a headless CMS and with the full functionality of a traditional CMS. ([Demo](https://demo.flextype.org/), [Source Code](https://github.com/flextype/flextype)) `MIT` `PHP`
- [GetSimple CMS](http://get-simple.info/) - The Simplest Content Management System. Ever. ([Source Code](https://github.com/GetSimpleCMS/GetSimpleCMS)) `GPL-3.0` `PHP`
- [Joomla!](https://www.joomla.org/) - Advanced Content Management System (CMS). ([Source Code](https://github.com/joomla/joomla-cms)) `GPL-2.0` `PHP`
- [KeystoneJS](http://keystonejs.com/) - CMS and Web Application Platform. ([Demo](http://demo.keystonejs.com/), [Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
- [MODX](http://modx.com/) - MODX is an advanced content management and publishing platform. The current version is called 'Revolution'. ([Source Code](https://github.com/modxcms/revolution)) `GPL-2.0` `PHP`
- [Neos](https://www.neos.io) - Neos or TYPO3 Neos (for version 1) is a modern, open source CMS. ([Source Code](https://git.typo3.org/Packages/TYPO3.Neos.git)) `GPL-3.0` `PHP`
- [Noosfero](https://gitlab.com/noosfero/noosfero) - Noosfero is a web platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective intelligence for solidarity economy in the same system. `AGPL-3.0` `Ruby`
- [october](http://octobercms.com/) - Free, open-source, self-hosted CMS platform. ([Source Code](https://github.com/octobercms/october)) `MIT` `PHP`
- [Omeka](http://omeka.org) - Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](http://omeka.org/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPL-3.0` `PHP`
- [Pagekit](https://pagekit.com/) - New modern CMS to create and share. ([Source Code](https://github.com/pagekit/pagekit)) `MIT` `PHP`
- [Pico](http://picocms.org/) - Stupidly simple, blazing fast, flat file CMS. ([Source Code](https://github.com/picocms/Pico)) `MIT` `PHP`
- [Pimcore](https://www.pimcore.org/) - Multi-Channel Experience and Engagement Management Platform. ([Source Code](https://github.com/pimcore/pimcore)) `GPL-3.0-or-later` `PHP`
- [Plone](https://plone.org/) - Powerful open-source CMS system. ([Source Code](https://github.com/plone)) `ZPL-2.0` `Python`
- [ProcessWire](https://processwire.com/) - ProcessWire is an open source content management system (CMS) and web application framework aimed at the needs of designers, developers and their clients. ([Source Code](https://github.com/ryancramerdesign/ProcessWire)) `MPL-2.0` `PHP`
- [PropertyWebBuilder](http://propertywebbuilder.com) - Ultimate Ruby on Rails engine for creating real estate websites. ([Demo](https://propertywebbuilder.herokuapp.com), [Source Code](https://github.com/etewiah/property_web_builder)) `MIT` `Ruby`
- [Publify](https://publify.github.io/) - Simple but full featured web publishing software. ([Source Code](https://github.com/publify/publify)) `MIT` `Ruby`
- [REDAXO](https://www.redaxo.org) - Simple, flexible and useful content management system (documentation only available in German). ([Source Code](https://github.com/redaxo/redaxo)) `MIT` `PHP`
- [Redaxscript](https://redaxscript.com) - Ultra lightweight CMS for MySQL, SQLite and PostgreSQL. ([Demo](https://demo.redaxscript.com/login), [Source Code](https://github.com/redaxscript/redaxscript)) `GPL-3.0` `PHP`
- [Roadiz](https://www.roadiz.io/) -  Modern CMS based on a node system which can handle many types of services. ([Source Code](https://github.com/roadiz/roadiz)) `MIT` `PHP`
- [SilverStripe](https://www.silverstripe.org) - Easy to use CMS with powerful MVC framework underlying. ([Demo](http://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe)) `BSD-3-Clause` `PHP`
- [SPIP](http://www.spip.net/fr) - Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors. ([Source Code](https://git.spip.net/)) `GPL-3.0` `PHP`
- [Squidex](http://squidex.io) - Headless CMS, based on MongoDB, CQRS and Event Sourcing. ([Demo](http://cloud.squidex.io), [Source Code](https://github.com/Squidex/squidex)) `MIT` `.NET`
- [Strapi](https://strapi.io/) - The most advanced open-source Content Management Framework (headless-CMS) to build powerful API with no effort. ([Source Code](https://github.com/strapi/strapi)) `MIT` `Nodejs`
- [Textpattern](http://textpattern.com/) - Flexible, elegant and easy-to-use CMS. ([Demo](http://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern)) `GPL-2.0` `PHP`
- [Typemill](https://typemill.net/) - Author-friendly flat-file-cms with a visual markdown editor based on vue.js. ([Source Code](https://github.com/typemill/typemill)) `MIT` `PHP`
- [TYPO3](https://typo3.org/) - Powerful and advanced CMS with a large community. ([Source Code](https://github.com/TYPO3/TYPO3.CMS)) `GPL-2.0` `PHP`
- [Umbraco](https://umbraco.com/) - The friendly CMS. Free and open source with an amazing community. ([Source Code](https://github.com/umbraco/Umbraco-CMS)) `MIT` `.NET`
- [Wagtail](https://wagtail.io/) - Django content management system focused on flexibility and user experience. ([Source Code](https://github.com/wagtail/wagtail)) `BSD-3-Clause` `Python`
- [WonderCMS](http://www.wondercms.com) - WonderCMS is the smallest flat file CMS since 2008. ([Demo](https://www.wondercms.com/demo), [Source Code](https://github.com/robiso/wondercms)) `MIT` `PHP`
- [WordPress](https://wordpress.org/) - World's most-used blogging and CMS engine. ([Source Code](https://github.com/WordPress/WordPress)) `GPL-2.0` `PHP`
- [WriteFreely](https://writefreely.org) - Writing software for starting a minimalist, federated blog — or an entire community. ([Source Code](https://github.com/writefreely/writefreely)) `AGPL-3.0` `Go`

### Recipe Management

- [Mealie](https://hay-kot.github.io/mealie/) - Material design inspired recipe manager with category and tag management, shopping-lists, meal-planner, and site customizations. Mealie is focused on simple user interactions to keep the whole family using the app. ([Source Code](https://github.com/hay-kot/mealie)) `MIT` `Python`
- [kcal](https://github.com/kcal-app/kcal) - Track nutritional information about foods and recipes, set goals, and record a food journal to help along the way. Kcal is a personal system that focuses on direct control of inputs and a minimal, easy to use recipe presentation for preparing meals. ([Demo](http://demo.kcal.cooking/login)) `MPL-2.0` `PHP`
- [OpenEats](https://github.com/open-eats/OpenEats) - Recipe management site that allows users to create, store, share and rate recipes, create grocery lists, and more. ([Demo](https://open-eats.github.io/)) `MIT` `Python`
- [RecipeSage](https://github.com/julianpoy/recipesage) - A recipe keeper, meal plan organizer, and shopping list manager that can import recipes directly from any URL. ([Demo](https://recipesage.com)) `AGPL-3.0` `Nodejs`
- [Tandoor Recipes](https://docs.tandoor.dev/) - Django application to manage, tag and search recipes using either built-in models or external storage providers hosting PDFs, Images or other files. ([Demo](https://app.tandoor.dev/), [Source Code](https://github.com/vabene1111/recipes/)) `MIT` `Python`

### E-commerce

- [Aimeos](https://aimeos.org/) - Ultra fast, Open Source e-commerce framework for building custom online shops, market places and complex B2B applications scaling to billions of items with Laravel. ([Demo](https://demo.aimeos.org/), [Source Code](https://github.com/aimeos)) `LGPL-3.0/MIT` `PHP`
- [Attendize](https://www.attendize.com/) - Ticket selling and event management platform. ([Source Code](https://github.com/attendize/attendize)) `AAL` `PHP`
- [Bagisto](https://bagisto.com/en/) - Leading Laravel open source e-commerce framework with multi-inventory sources, taxation, localization, dropshipping and more exciting features. ([Demo](https://demo.bagisto.com/), [Source Code](https://github.com/bagisto/bagisto)) `MIT` `PHP`
- [CoreShop](https://www.coreshop.org) - CoreShop is a e-commerce plugin for Pimcore. ([Source Code](https://github.com/coreshop/CoreShop)) `GPL-3.0` `PHP`
- [Drupal Commerce](https://drupalcommerce.org) - Drupal Commerce is a popular e-commerce module for Drupal CMS, with support for dozens of payment, shipping, and shopping related modules. ([Source Code](https://github.com/drupalcommerce/commerce)) `GPL-2.0` `PHP`
- [Magento](https://magento.com/) - Leading provider of open omnichannel innovation. ([Demo](https://magento.com/schedule-a-demo), [Source Code](https://github.com/magento/magento2)) `OSL-3.0` `PHP`
- [Microweber](https://microweber.com/) - Drag and Drop CMS and online shop. ([Demo](http://demo.microweber.org/), [Source Code](https://github.com/microweber/microweber)) `Apache-2.0` `PHP`
- [OpenBazaar](https://www.openbazaar.org) - Decentralized marketplace using cryptocurrency. ([Source Code](https://github.com/openbazaar/openbazaar-go)) `MIT` `Go`
- [OpenCart](https://www.opencart.com) - Free open source shopping cart solution. ([Source Code](https://github.com/opencart/opencart)) `GPL-3.0` `PHP`
- [Yclas](https://yclas.com/) - Free open-source, self-hosted CMS for classifieds sites. ([Source Code](https://github.com/yclas/yclas)) `GPL-3.0` `PHP`
- [Open Source POS](https://www.opensourcepos.org/) - Open Source Point of Sale is a web based point of sale system. ([Source Code](https://github.com/opensourcepos/opensourcepos)) `MIT` `PHP`
- [OXID eShop](http://oxidforge.org) - OXID eShop is a flexible open source e-commerce software with a wide range of functionalities. ([Demo](http://demoshop.oxid-esales.com/community-edition/), [Source Code](https://github.com/OXID-eSales/oxideshop_ce)) `GPL-3.0` `PHP`
- [Open Food Network](https://openfoodnetwork.org/) - Online marketplace for local food. It enables a network of independent online food stores that connect farmers and food hubs with individuals and local businesses. ([Source Code](https://github.com/openfoodfoundation/openfoodnetwork)) `AGPL-3.0` `Ruby`
- [PrestaShop](https://www.prestashop.com/) - PrestaShop offers a free, open-source and fully scalable e-commerce solution. ([Demo](http://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSL-3.0` `PHP`
- [Pretix](https://pretix.eu/) - Django based ticket sales platform for events. ([Source Code](https://github.com/pretix)) `Apache-2.0` `Python`
- [Reaction Commerce](https://reactioncommerce.com/) - Customizable, real-time reactive, Javascript commerce platform. ([Source Code](https://github.com/reactioncommerce/reaction)) `GPL-3.0` `Nodejs`
- [Saleor](http://getsaleor.com/) - Django based open-sourced e-commerce storefront. ([Demo](https://demo.getsaleor.com/), [Source Code](https://github.com/mirumee/saleor)) `BSD-3-Clause` `Python`
- [Shuup](https://www.shuup.com/) - Django powered fully customizable open source e-commerce framework for small and large sites. ([Source Code](https://github.com/shuup/shuup)) `AGPL-3.0` `Python`
- [Shopware Community Edition](https://shopware.com/community/) - PHP based open source e-commerce software made in Germany. ([Demo](https://www.shopware.com/en/test-demo/), [Source Code](https://github.com/shopware/platform)) `MIT` `PHP`
- [Solidus](https://solidus.io/) - A free, open-source ecommerce platform that gives you complete control over your store. ([Demo](http://demo.solidus.io/), [Source Code](https://github.com/solidusio/solidus)) `BSD-3-Clause` `Ruby`
- [Spree Commerce](https://spreecommerce.org) - Spree is a complete, modular & API-driven open source e-commerce solution for Ruby on Rails. ([Demo](http://new-ux.spreecommerce.org/), [Source Code](https://github.com/spree/spree)) `BSD-3-Clause` `Ruby`
- [Sylius](http://sylius.org/) - Symfony2 powered open source full-stack platform for eCommerce. ([Demo](http://sylius.org/demo), [Source Code](https://github.com/Sylius/Sylius)) `MIT` `PHP`
- [Thelia](http://thelia.net/) - Thelia is an open source and flexible e-commerce solution. ([Demo](http://demo.thelia.net/), [Source Code](https://github.com/thelia/thelia)) `LGPL-3.0` `PHP`
- [WooCommerce](https://woocommerce.com/) - WordPress based e-commerce solution. ([Source Code](https://github.com/woocommerce/woocommerce)) `GPL-3.0` `PHP`


### DNS

**[`^        back to top        ^`](#)**

_See also: [awesome-sysadmin/DNS](https://github.com/awesome-foss/awesome-sysadmin#dns)_

- [blocky](https://github.com/0xERR0R/blocky) - Fast and lightweight DNS proxy (like Pi-hole) as ad-blocker for local network with many features. `Apache-2.0` `Go`
- [CoreDNS](https://coredns.io/) - Plugin driven DNS Server with support for proxying to Google's DNS-over-HTTPS. ([Source Code](https://github.com/coredns/coredns)) `Apache-2.0` `Go`
- [Maza ad blocking](https://maza-ad-blocking.andros.dev/) - Local ad blocker. Like Pi-hole but local and using your operating system. ([Source Code](https://github.com/tanrax/maza-ad-blocking)) `Apache-2.0` `Bash`
- [nsupdate.info](https://www.nsupdate.info/) - nsupdate.info is a dynamic DNS service. ([Demo](https://www.nsupdate.info/account/register/), [Source Code](https://github.com/nsupdate-info/nsupdate.info)) `BSD-3-Clause` `Python`
- [SPF Toolbox](http://spftoolbox.com) - Application to look up DNS records such as SPF, MX, Whois, and more. ([Source Code](https://github.com/charlesabarnes/SPFtoolbox)) `MIT` `PHP`


### Document Management

**[`^        back to top        ^`](#)**

- [DOCAT](https://github.com/randombenj/docat) - Host your docs. Simple. Versioned. Fancy. `MIT` `Python/Docker`
- [Docspell](https://docspell.org) - Auto-tagging document organizer and archive. ([Source Code](https://github.com/eikek/docspell)) `GPL-3.0` `Scala/Java`
- [EveryDocs](https://github.com/jonashellmann/everydocs-core/) - A simple Document Management System for private use with basic functionality to organize your documents digitally. `GPL-3.0` `Ruby`
- [I, Librarian](https://i-librarian.net) - I, Librarian can organize PDF papers and office documents. It provides a lot of extra features for students and research groups both in industry and academia. ([Demo](https://i-librarian.net/demo/), [Source Code](https://github.com/mkucej/i-librarian-free)) `GPL-3.0` `PHP`
- [Mayan EDMS](http://www.mayan-edms.com) - Free Open Source Electronic Document Management System. An electronic vault for your documents with preview generation, OCR, and automatic categorization among other features. ([Source Code](https://gitlab.com/mayan-edms/mayan-edms)) `Apache-2.0` `Python`
- [Papermerge](https://www.papermerge.com) - Open Source Document Management System focused on scanned documents (electronic archives). Features file browsing in similar way to dropbox/google drive. OCR, full text search, text overlay/selection. ([Source Code](https://github.com/ciur/papermerge)) `Apache-2.0` `Python`
- [Paperless-ng](https://github.com/jonaswinkler/paperless-ng) - A fork of paperless, adding a new interface and many other changes under the hood. Scan, index, and archive all of your paper documents. `GPL-3.0` `Python`
- [paper{s}pace](https://dedicatedcode.com/projects/) - a small web application to manage all your offline documents. Provides a searchable storage for your documents and reminds you of upcoming tasks. ([Source Code](https://gitlab.com/dedicatedcode/paperspace)) `MIT` `Java`
- [Teedy](https://teedy.io/) - (Ex SismicsDocs) Lightweight document management system packed with all the features you can expect from big expensive solutions. ([Source Code](https://github.com/sismics/docs)) `GPL-2.0` `Java`


### Document Management - E-books

- [Calibre](https://calibre-ebook.com/) - E-book library manager that can view, convert, and catalog e-books in most of the major e-book formats and provides a built-in Web server for remote clients. ([Demo](https://calibre-ebook.com/demo), [Source Code](https://launchpad.net/calibre)) `GPL-3.0` `Python`
  - [BicBucStriim](http://projekte.textmulch.de/bicbucstriim/) - Provides web-based access to your Calibre Library's e-book collection. ([Source Code](https://github.com/rvolz/BicBucStriim)) `MIT` `PHP`
  - [Calibre Web](https://github.com/janeczku/calibre-web) - Web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database. `GPL-3.0` `Python`
  - [COPS](https://blog.slucas.fr/en/oss/calibre-opds-php-server) - Lightweight e-book server alternative to Calibre content server or Calibre2OPDS. ([Demo](http://cops-demo.slucas.fr/index.php), [Source Code](https://github.com/seblucas/cops)) `GPL-2.0` `PHP`
  - [The Epube](https://tt-rss.org/the-epube) - Self-hosted web EPUB reader using EPUB.js, Bootstrap, and Calibre. ([Source Code](https://git.tt-rss.org/fox/the-epube)) `GPL-3.0` `PHP`
- [Kavita](https://kareadita.github.io/) - Cross-platform manga server and web reader with user management, ratings and reviews, and metatdata support. ([Source Code](https://github.com/Kareadita/Kavita)) `GPL-3.0` `.NET Core`
- [Komga](https://komga.org) - Media server for comics/mangas/BDs with API and OPDS support, a modern web interface for exploring your libraries, as well as a web reader. ([Source Code](https://github.com/gotson/komga)) `MIT` `Java/Docker`
- [Mango](https://github.com/hkalexling/Mango) - Manga server and web reader with a built-in MangaDex downloader. `MIT` `Crystal`
- [pyShelf](https://github.com/th3r00t/pyShelf) - Lightweight Ebook Server. `GPL-3.0` `Python`


### Document Management - Integrated Library Systems (ILS)

_Related: [Content Management Systems (CMS)](#content-management-systems-cms), [Archiving and Digital Preservation (DP)](#archiving-and-digital-preservation-dp)_

- [Evergreen](https://evergreen-ils.org) - Highly-scalable software for libraries that helps library patrons find library materials, and helps libraries manage, catalog, and circulate those materials. ([Source Code](https://github.com/evergreen-library-system/Evergreen)) `GPL-2.0` `PL/pgSQL`
- [Koha](https://koha-community.org/) - Enterprise-class ILS with modules for acquisitions, circulation, cataloging, label printing, offline circulation for when Internet access is not available, and much more. ([Demo](https://koha-community.org/demo/), [Source Code](https://github.com/Koha-Community/Koha)) `GPL-3.0` `Perl`
- [RERO ILS](https://rero21.ch/) - Large-scale ILS that can be run as a service with consortial features, intended primarily for library networks. Includes most standard modules (circulation, acquisitions, cataloging,...) and a web-based public and professional interface. ([Demo](https://ils.test.rero.ch/), [Source Code](https://github.com/rero/rero-ils)) `AGPL-3.0` `Python/Other`

### Document Management - Institutional Repository and Digital Library Software

- [DSpace](http://dspace.org/) - Turnkey repository application providing durable access to digital resources. ([Source Code](https://github.com/DSpace/DSpace)) `BSD-3-Clause` `Java`
- [EPrints](https://www.eprints.org/) - Digital document management system with a flexible metadata and workflow model primarily aimed at academic institutions. ([Demo](http://demoprints.eprints.org/), [Source Code](https://github.com/eprints/eprints)) `GPL-3.0` `Perl`
- [Fedora Commons Repository](https://fedorarepository.org/) - Robust and modular repository system for the management and dissemination of digital content especially suited for digital libraries and archives, both for access and preservation. ([Source Code](https://github.com/fcrepo/fcrepo)) `Apache-2.0` `Java`
- [Islandora](https://islandora.ca/) - Drupal module for browsing and managing Fedora-based digital repositories. ([Source Code](https://github.com/Islandora/islandora)) `GPL-3.0` `PHP`
- [Samvera Hyrax](https://samvera.org/) - Front-end for the Samvera framework, which itself is a Ruby on Rails application for browsing and managing Fedora-based digital repositories. ([Source Code](https://github.com/samvera/hyrax)) `Apache-2.0` `Ruby`

### Federated Identity & Authentication

**[`^        back to top        ^`](#)**

**Please visit [awesome-sysadmin/Identity Management](https://github.com/awesome-foss/awesome-sysadmin#identity-management)**


### Feed Readers

**[`^        back to top        ^`](#)**

- [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader. ([Source Code](https://github.com/Athou/commafeed)) `Apache-2.0` `Java`
- [FeedHQ](https://feedhq.org/) - FeedHQ is a web-based feed reader. ([Source Code](https://github.com/feedhq/feedhq)) `BSD-3-Clause` `Python`
- [FreshRSS](http://freshrss.org/) - Self-hostable RSS feed aggregator. ([Demo](http://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS), [Clients](https://github.com/Alkarex/EasyRSS)) `AGPL-3.0` `PHP`
- [JARR](http://1pxsolidblack.pl/jarr-en.html) - JARR (Just Another RSS Reader) is a web-based news aggregator and reader (fork of Newspipe). ([Demo](https://jarr.info/login?next=%2F), [Source Code](https://github.com/jaesivsm/JARR)) `AGPL-3.0` `Python`
- [Kriss Feed](http://tontof.net/kriss/feed/) - Simple and smart (or stupid) feed reader. ([Demo](http://tontof.net/feed/), [Source Code](https://github.com/tontof/kriss_feed)) `CC0-1.0` `PHP`
- [Leed](https://github.com/LeedRSS/Leed) - Leed (for Light Feed) is a Free and minimalist RSS aggregator. `AGPL-3.0` `PHP`
- [Leselys](https://github.com/toxinu/leselys) - Your very elegant RSS reader. `AGPL-3.0` `Python`
- [Lite-Reader](https://github.com/cubny/lite-reader) - Read your feeds on your own machine with a simple and lite application. ([Demo](http://cubny.com/lite-reader/)) `BSD-3-Clause` `PHP`
- [Moonmoon](http://moonmoon.org/) - simple feed aggregator (planet like): it only aggregates feeds and spits them out in one single page. ([Source Code](https://github.com/moonmoon/moonmoon)) `BSD-3-Clause` `PHP`
- [Miniflux](https://miniflux.app/) - Miniflux is a minimalist and open source news reader, written in Go and PostgreSQL. ([Source Code](https://github.com/miniflux/v2)) `Apache-2.0` `Go`
- [NewsBlur](http://www.newsblur.com/) - NewsBlur is a personal news reader that brings people together to talk about the world. A new sound of an old instrument. ([Source Code](https://github.com/samuelclay/NewsBlur)) `MIT` `Python`
- [newsdash](https://github.com/buzz/newsdash) - A news dashboard inspired by iGoogle and Netvibes. `AGPL-3.0` `Nodejs`
- [Newspipe](https://git.sr.ht/~cedric/newspipe) - Newspipe is a web news reader. ([Demo](https://www.newspipe.org/signup)) `AGPL-3.0` `Python`
- [reader](https://github.com/lemon24/reader) - A Python feed reader web app and library (so you can use it to build your own), with only standard library and pure-Python dependencies. `BSD-3-Clause` `Python`
- [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - RSS Monster is an easy to use web-based RSS aggregator and reader compatible with the Fever API, created as an alternative for Google Reader. `MIT` `PHP`
- [Selfoss](http://selfoss.aditu.de/) - New multipurpose rss reader, live stream, mashup, aggregation web application. ([Source Code](https://github.com/fossar/selfoss)) `GPL-3.0` `PHP`
- [Sismics Reader](http://sismics.com/reader/) - Free and open source feeds reader, including all major Google Reader features. ([Demo](https://www.sismics.com/reader/#!/demo), [Source Code](https://github.com/sismics/reader)) `GPL-2.0` `Java`
- [Stringer](https://github.com/swanson/stringer) - Work-in-progress self-hosted, anti-social RSS reader. `MIT` `Ruby`
- [Temboz](https://github.com/fazalmajid/temboz) - Two-column feed reader emphasizing filtering capabilities to manage information overload. `MIT` `Python`
- [Tiny Tiny RSS](https://tt-rss.org) - Open source web-based news feed (RSS/Atom) reader and aggregator. ([Demo](http://framanews.org/), [Source Code](https://git.tt-rss.org/fox/tt-rss)) `GPL-3.0` `PHP`
  - [gritttt-rss](http://gritttt-rss.nicolashoening.de/) - More features for Tiny Tiny RSS. ([Source Code](https://github.com/nhoening/gritttt-rss)) `BSD-2-Clause` `Python`
  - [ttrss-mobile](https://github.com/mboinet/ttrss-mobile) - Mobile webapp for Tiny Tiny RSS. `AGPL-3.0` `Javascript`
  - [ttrss-reader](https://github.com/kucrut/ttrss-reader) - Light and responsive client for TTRSS. `GPL-2.0` `Javascript`
- [Winds](https://getstream.io/winds/) `⚠` - Open source and beautiful RSS reader built using React/Redux/Sails/Node and Stream. It showcases personalized feeds powered by the Stream API. ([Demo](https://winds.getstream.io/), [Source Code](https://github.com/GetStream/Winds)) `BSD-3-Clause` `Nodejs`

_RSS/Atom automation_

- [Feedpushr](https://github.com/ncarlier/feedpushr) - Powerful RSS aggregator, able to transform and send articles to many outputs. Single binary, extensible with plugins. `GPL-3.0` `Go`
- [Full-Text RSS](https://fivefilters.org/content-only) - Extract article content from news sites and blogs and convert RSS feeds that contain only extracts of stories to full-text feeds. Developed by FiveFilters.org. ([Source Code](https://bitbucket.org/fivefilters/full-text-rss)) `GPL-3.0` `PHP`
- [Goeland](https://github.com/slurdge/goeland) - Reads RSS/Atom feeds and filter/digest them to create beautiful emails. `MIT` `Go`
- [PolitePol](https://github.com/taroved/pol) - Online tool for creation of RSS feeds for any web page. ([Demo](http://politepol.com)) `MIT` `Python`
- [RSS Feed Aggregator](https://github.com/codemicro/rss) - Simple and easy to modify tool to generate email digests for a select set of RSS feeds. `MIT` `Python`
- [RSS Fulltext Proxy](https://github.com/Kombustor/rss-fulltext-proxy) - Mirrors RSS feeds to return the full content of the items, extracted from the website. `MIT` `Nodejs`
- [RSS Merger](https://github.com/taophp/rss-merger) - PHP script which will take multiple RSS / Atom feeds as input and merge them into a single RSS feed. `GPL-2.0` `PHP`
- [RSS-Bridge](https://github.com/RSS-Bridge/rss-bridge) - rss-bridge is a PHP project capable of generating ATOM feeds for websites which don't have one. `Unlicense` `PHP`
- [RSS2EMail](https://github.com/rss2email/rss2email) - Fetches RSS/Atom-feeds and pushes new Content to any email-receiver, supports OPML. `GPL-2.0` `Python`
- [Screaming Liquid Tiger](https://github.com/herrbischoff/screaming-liquid-tiger) - Simple script to automatically generate valid RSS and Atom feeds from a list of media files in the same folder. `MIT` `PHP`


### Distributed Filesystems

**[`^        back to top        ^`](#)**

**Please visit [awesome-sysadmin/Distributed Filesystems](https://github.com/awesome-foss/awesome-sysadmin#distributed-filesystems)**


### File Transfer & Synchronization

_Related: [Groupware](#groupware)_

- [Git Annex](https://git-annex.branchable.com/) - File synchronization between computers, servers, external drives. ([Source Code](https://git.joeyh.name/index.cgi/git-annex.git/)) `GPL-3.0` `Haskell`
- [Kinto](https://kinto.readthedocs.org) - Kinto is a minimalist JSON storage service with synchronisation and sharing abilities. ([Source Code](https://github.com/Kinto)) `Apache-2.0` `Python`
- [myDrive](https://github.com/subnub/myDrive) - Fully featured online storage solution, upload/download files, photo/video viewer, and more, all through the web client. ([Demo](https://mydrive-demo.herokuapp.com/)) `GPL-3.0` `Nodejs`
- [Nextcloud](https://nextcloud.com/) - Access and share your files, calendars, contacts, mail and [more](https://apps.nextcloud.com/) from any device, on your terms. ([Demo](https://demo.nextcloud.com/), [Source Code](https://github.com/nextcloud/server)) `AGPL-3.0` `PHP`
- [OpenSSH SFTP server](http://www.openssh.com/) - Secure File Transfer Program. ([Source Code](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh)) `BSD-2-Clause` `C`
- [ownCloud](https://owncloud.org/) - All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core), [Clients](https://github.com/owncloud/core/wiki/Apps)) `AGPL-3.0` `PHP`
- [Pydio](https://pydio.com/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Source Code](https://github.com/pydio/cells)) `AGPL-3.0` `Go`
- [Samba](https://www.samba.org/) - Samba is the standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol. ([Source Code](https://git.samba.org/samba.git/)) `GPL-3.0` `C`
- [Seafile](https://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. ([Source Code](https://github.com/haiwen/seafile)) `GPL-2.0/GPL-3.0/AGPL-3.0/Apache-2.0` `C`
- [SparkleShare](http://sparkleshare.org/) - Self hosted, instant, secure file sync. ([Source Code](https://github.com/hbons/SparkleShare)) `GPL-3.0` `C#`
- [Syncany](https://www.syncany.org/) - Secure file sync software for arbitrary storage backends, an open-source cloud storage and filesharing application. Securely synchronize your files to any kind of storage. `GPL-3.0` `Java`
- [Syncthing](https://syncthing.net/) - Syncthing is an open source peer-to-peer file synchronisation tool. ([Source Code](https://github.com/syncthing/syncthing)) `MPL-2.0` `Go`
- [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - Unison is a file-synchronization tool for OSX, Unix, and Windows. `GPL-3.0` `OCaml`
- [Z-Push](http://z-push.org/) - Implementation of Microsoft’s ActiveSync protocol. ([Source Code](https://stash.kopano.io/projects/ZHUB/repos/z-push)) `AGPL-3.0` `PHP`


### File Transfer - Peer-to-peer Filesharing

- [bittorrent-tracker](https://webtorrent.io/) - Simple, robust, BitTorrent tracker (client and server) implementation. ([Source Code](https://github.com/webtorrent/bittorrent-tracker)) `MIT` `Nodejs`
- [cloud-torrent](https://github.com/jpillora/cloud-torrent) - Torrent Web Client with HTTP retrievable or streamable downloaded files. `AGPL-3.0` `Go`
- [Dat Project](https://datproject.org) - Powerful decentralized file sharing applications built from a large ecosystem of modules. ([Source Code](https://github.com/datproject)) `MIT` `Nodejs`
- [FilePizza](http://file.pizza/) - Peer-to-peer file transfers in your browser. ([Source Code](https://github.com/kern/filepizza)) `BSD-3-Clause` `Nodejs`
- [instant.io](https://github.com/webtorrent/instant.io) - Streaming file transfer over WebTorrent. ([Demo](https://instant.io)) `MIT` `Nodejs`
- [Magnetico](https://github.com/boramalper/magnetico) - Magnetico is the first autonomous (self-hosted) BitTorrent DHT search engine suite that is designed for end-users. `AGPL-3.0` `Python`
- [Magnetissimo](https://github.com/sergiotapia/magnetissimo) - Search engine that indexes all popular torrent sites. `MIT` `Elixir`
- [Opentracker](http://erdgeist.org/arts/software/opentracker/) - Open and free bittorrent tracker. It aims for minimal resource usage and is intended to run at your wlan router. ([Source Code](http://erdgeist.org/gitweb/opentracker/)) `Beerware` `C`
- [peerflix-server](https://github.com/asapach/peerflix-server) - Downloads torrent files and provides a direct link download or a direct link stream. `MIT` `Nodejs`
- [qBittorrent](https://www.qbittorrent.org/) - Free cross-platform bittorrent client with a feature rich Web UI for remote access. ([Source Code](https://github.com/qbittorrent/qBittorrent)) `GPL-2.0` `C++`
- [rartracker](https://github.com/swetorrentking/rartracker) - Complete private bittorrent tracker. `WTFPL` `PHP`
- [Send](https://github.com/timvisee/send) - Simple, private, end to end encrypted temporary file sharing, originally built by Mozilla. ([Clients](https://github.com/timvisee/send#clients)) `MPL-2.0` `Nodejs`
- [Torrents.csv](https://codeberg.org/heretic/torrents-csv-server) - A self-hostable torrent search engine. `GPL-3.0` `Rust`
- [Transmission](https://transmissionbt.com/) - Fast, easy, Free Bittorrent client. ([Source Code](https://github.com/transmission/transmission)) `GPL-3.0` `C`


### File Transfer - Object Storage & File Servers

- [Minio](https://minio.io/) - Minio is an open source object storage server compatible with Amazon S3 APIs. ([Source Code](https://github.com/minio/minio)) `Apache-2.0` `Go`
- [SeaweedFS](https://github.com/chrislusf/seaweedfs) - SeaweedFS is an open source distributed file system supporting WebDAV, S3 API, FUSE mount, HDFS, etc, optimized for lots of small files, and easy to add capacity. `Apache-2.0` `Go`
- [SFTPGo](https://github.com/drakkan/sftpgo) - Flexible, fully featured and highly configurable SFTP server with optional FTP/S and WebDAV support. `AGPL-3.0` `Go`
- [Zenko CloudServer](https://www.zenko.io/cloudserver) - Zenko CloudServer, an open-source implementation of a server handling the Amazon S3 protocol. ([Source Code](https://github.com/scality/cloudserver)) `Apache-2.0` `Nodejs`


### File Transfer - Single-click & Drag-n-drop Upload

- [ass](https://github.com/tycrek/ass) - The superior self-hosted ShareX server. For use with clients such as ShareX (Windows), Flameshot (Linux), & MagicCap (Linux, macOS). `ISC` `Nodejs`
- [BoZoN](https://github.com/broncowdd/BoZoN) - Minimalist Drag and drop file sharing app. `AGPL-3.0` `PHP`
- [Chibisafe](https://lolisafe.moe/) - Blazing fast file uploader and awesome bunker written in node. ([Source Code](https://github.com/weebdev/chibisafe)) `MIT` `Nodejs`
- [Coquelicot](https://coquelicot.potager.org/) - Coquelicot is a “one-click” file sharing web application with a focus on protecting users’ privacy. ([Source Code](https://coquelicot.potager.org/dist/coquelicot-0.9.6.tar.gz)) `AGPL-3.0` `Ruby`
- [elixire](https://elixi.re) - Simple yet advanced screenshot uploading and link shortening service. ([Source Code](https://gitlab.com/elixire/elixire), [Clients](https://gitlab.com/elixire/elixiremanager)) `AGPL-3.0` `Python`
- [fibridge](https://github.com/anderspitman/fibridge-proxy-rs) - Stream huge files out of your browser without having to upload. `MIT` `Rust`
- [FireShare](https://github.com/rockmanvnx6/FireShare) - A full-stack, pub-sub, real-time secure file sharing system. ([Demo](https://auspham.dev/FireShare)) `MIT` `Nodejs`
- [FileShelter](https://github.com/epoupon/fileshelter) - FileShelter is a self-hosted software that allows you to easily share files over the Internet. ([Demo](http://fileshelter.demo.poupon.io/)) `GPL-3.0` `C++`
- [Files Sharing](https://github.com/axeloz/filesharing) - Open Source and self-hosted files sharing application based on unique and temporary links. `GPL-3.0` `PHP`
- [Gokapi](https://github.com/Forceu/gokapi) - Lightweight server to share files, which expire after a set amount of downloads or days. Similar to the discontinued Firefox Send, with the difference that only the admin is allowed to upload files. `GPL-3.0` `Go`
- [goploader](https://github.com/Depado/goploader) - Easy file sharing with server-side encryption, curl/httpie/wget compliant. `MIT` `Go`
- [image-uploader](https://github.com/daggy1234/image-uploader) - A shareX compatible image uploader built for speed with a web interface and REST API. `AGPL-3.0` `Rust`
- [imgpush](https://github.com/hauxir/imgpush) - imgpush is a self-hosted file upload service that can easily be integrated into other webapps. `MIT` `Python`
- [Jirafeau](https://gitlab.com/mojo42/Jirafeau) - Jirafeau is a web site permitting to upload a file in a simple way and give an unique link to it. ([Demo](http://jirafeau.net/)) `AGPL-3.0` `PHP`
- [Kleeja](https://kleeja.net/) - File Upload/sharing application, used by thousands of webmasters since 2007. ([Source Code](https://github.com/kleeja-official/kleeja)) `GPL-2.0` `PHP`
- [linx-server](https://github.com/ZizzyDizzyMC/linx-server) - Simple file sharing and pastebin with API, auto-expiry, deletion keys, and web seed support. ([Demo](https://put.icu/)) `GPL-3.0` `Go`
- [lufi](https://framagit.org/fiat-tux/hat-softwares/lufi) - Let's Upload that FIle, client-side encrypted. ([Demo](https://demo.lufi.io), [Source Code](https://framagit.org/fiat-tux/hat-softwares/lufi/tree/master)) `AGPL-3.0` `Perl`
- [lutim](https://github.com/ldidry/lutim) - Let's Upload That Image. `AGPL-3.0` `Perl`
- [OnionShare](https://github.com/micahflee/onionshare) - Securely and anonymously share a file of any size. `GPL-2.0` `Python`
- [PictShare](https://www.pictshare.net/) - PictShare is a multi lingual, open source image hosting service with a simple resizing and upload API. ([Source Code](https://github.com/HaschekSolutions/pictshare)) `Apache-2.0` `PHP`
- [Plik](https://github.com/root-gg/plik) - Plik is a scalable and friendly temporary file upload system. ([Demo](https://plik.root.gg/)) `MIT` `Go`
- [Pomf](https://github.com/Pomf/Pomf) - Simple file uploading and sharing, source for the now shut down site Pomf.se. `MIT` `PHP`
- [ProjectSend](http://www.projectsend.org/) - Upload files and assign them to specific clients you create. Give access to those files to your clients. ([Source Code](https://github.com/projectsend/projectsend)) `GPL-2.0` `PHP`
- [PsiTransfer](https://github.com/psi-4ward/psitransfer) - Simple open source self-hosted file sharing solution with robust up-/download-resume and password protection. `BSD-2-Clause` `Nodejs`
- [Pste](https://dev.pste.pw/) - Just a simple file hosting application inspired by the likes of pomf.se and teknik.io. ([Source Code](https://github.com/FoxDev/pste)) `GPL-3.0` `Python`
- [Share](https://github.com/MrDemonWolf/share) - Simple yet advanced uploader - upload files, images and text with moderation tools for admins. Can be used for friends and family or just for you. Integration with ShareX and more. `MIT` `Nodejs`
- [Sharry](https://github.com/eikek/sharry) - Share files easily over the internet between authenticated and anonymous users (both ways) with resumable up- and downloads. `GPL-3.0` `Scala/Java`
- [Uguu](https://uguu.se/) - Stores files and deletes after X amount of time. ([Source Code](https://github.com/nokonoko/uguu)) `MIT` `PHP`
- [Up1](https://github.com/Upload/Up1) - Client-side Encrypted Image Host. `MIT` `Nodejs`
- [Web-File-Uploader](https://v2.femto.pw/) - A simple tool to let people upload and share images and files. ([Source Code](https://github.com/femto-apps/web-file-uploader)) `MIT` `Nodejs`
- [XBackBone](https://github.com/SergiX44/XBackBone) - A simple, fast and lightweight file manager with instant sharing tools integration, like ShareX (a free and open-source screenshot utility for Windows). `AGPL-3.0` `PHP`
- [YouTransfer](http://www.youtransfer.io) - YouTransfer is a simple but elegant self-hosted file transfer and sharing solution. ([Source Code](https://github.com/YouTransfer/YouTransfer)) `Apache-2.0` `Nodejs`
- [Zipline](https://zipline.diced.me/) - A lightweight, fast and reliable file sharing server that is commonly used with ShareX, offering a react-based Web UI and fast API. ([Source Code](https://github.com/diced/zipline)) `MIT` `Nodejs`


### File Transfer - Command-line File Upload

- [transfer.sh](https://transfer.sh) - Easy file sharing from the command line. ([Source Code](https://github.com/dutchcoders/transfer.sh)) `MIT` `Go`


### File Transfer - Web-based File Managers

- [Apaxy](https://oupala.github.io/apaxy/) - Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing. ([Source Code](https://github.com/oupala/apaxy)) `GPL-3.0` `HTML`
- [DirectoryLister](http://www.directorylister.com/) - Simple PHP based directory lister that lists a directory and all its sub-directories and allows you to navigate there within. ([Source Code](https://github.com/DirectoryLister/DirectoryLister)) `MIT` `PHP`
- [explorer](https://soyuka.github.io/explorer/) - Highly-configurable directory listing. ([Source Code](https://github.com/soyuka/explorer)) `MIT` `Nodejs`
- [filebrowser](https://filebrowser.org/) - Web File Browser with a Material Design web interface. ([Source Code](https://github.com/filebrowser/filebrowser)) `Apache-2.0` `Go`
- [FileGator](https://filegator.io/) - FileGator is a powerful multi-user file manager with a single page front-end. ([Demo](https://demo.filegator.io), [Source Code](https://github.com/filegator/filegator)) `MIT` `PHP`
- [Filestash](https://www.filestash.app/) - A web file manager that lets you manage your data anywhere it is located: FTP, SFTP, WebDAV, Git, S3, Minio, Dropbox, or Google Drive . ([Demo](https://demo.filestash.app/), [Source Code](https://github.com/mickael-kerjean/filestash)) `AGPL-3.0` `Go`
- [goBrowser](https://github.com/xataz/gobrowser) - Simple http file browser. `GPL-3.0` `Go`
- [Gossa](https://github.com/pldubouilh/gossa) - Gossa is a light and simple webserver for your files. `MIT` `Go`
- [h5ai](https://larsjung.de/h5ai/) - Modern file indexer for HTTP web servers with focus on your files. Directories are displayed in a appealing way and browsing them is enhanced by different views, a breadcrumb and a tree overview. ([Demo](https://larsjung.de/h5ai/demo/), [Source Code](https://github.com/lrsjng/h5ai)) `MIT` `PHP`
- [IFM](https://github.com/misterunknown/ifm) - Single script file manager. `MIT` `PHP`
- [ResourceSpace](https://www.resourcespace.com) - ResourceSpace open source digital asset management software is the simple, fast, and free way to organise your digital assets. ([Demo](https://www.resourcespace.com/trial), [Source Code](https://www.resourcespace.com/svn)) `Other` `PHP`
- [s3server](https://github.com/jessfraz/s3server) - Simple HTTP interface to index and browse files in a public S3 or Google Cloud Storage bucket. `MIT` `Go`
- [Surfer](https://git.cloudron.io/cloudron/surfer) - Simple static file server with webui to manage files. `MIT` `Nodejs`
- [TagSpaces](https://www.tagspaces.org/) - TagSpaces is an offline, cross-platform file manager and organiser that also can function as a note taking app. The WebDAV version of the application can be installed on top of a WebDAV servers such as Nextcloud or ownCloud. ([Demo](http://demo.tagspaces.org), [Source Code](https://github.com/tagspaces/tagspaces)) `AGPL-3.0` `Javascript`


### Games

**[`^        back to top        ^`](#)**

_Games, game servers and control panels._

- [A Dark Room](https://github.com/doublespeakgames/adarkroom) - Minimalist text adventure game for your browser. ([Demo](http://adarkroom.doublespeakgames.com/)) `MPL-2.0` `HTML5`
- [elevatorsaga](http://play.elevatorsaga.com/) - The elevator programming game. ([Source Code](https://github.com/magwo/elevatorsaga)) `MIT` `Javascript`
- [Hextris](https://github.com/Hextris/hextris) - Fast paced HTML5 puzzle game inspired by Tetris. ([Demo](https://hextris.github.io/hextris)) `GPL-3.0` `HTML5`
- [Legend of the Green Dragon](https://github.com/lotgd/core) - Legend of the Green Dragon is a text-based RPG originally developed by Eric Stevens and JT Traub as a remake of and homage to the classic BBS Door game, Legend of the Red Dragon, by Seth Able Robinson. ([Demo](http://lotgd.net/)) `AGPL-3.0` `PHP`
- [Lila](https://lichess.org/) - The forever free, adless and open source chess server powering lichess.org, with official iOS and Android client apps. ([Source Code](https://github.com/ornicar/lila)) `AGPL-3.0` `Scala`
- [Mindustry](https://mindustrygame.github.io/) - Factorio-like tower defense game. Build production chains to gather more resources, and build complex facilities. ([Source Code](https://github.com/Anuken/Mindustry)) `GPL-3.0` `Java`
- [Minetest](https://www.minetest.net/) - An open source voxel game engine. Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server. ([Source Code](https://github.com/minetest/minetest)) `LGPL-2.1/CC-BY-SA-3.0/Other` `C++`
- [MTA:SA](https://mtasa.com/) `⚠` - Multi Theft Auto (MTA) is a software project that adds network play functionality to Rockstar North's Grand Theft Auto game series, in which this functionality is not originally found. ([Source Code](https://github.com/multitheftauto/mtasa-blue)) `GPL-3.0` `C++`
- [Net64+](https://net64-mod.github.io) `⚠` - Net64 aka SM64O allows playing Super Mario 64 in an online multiplayer mode. Net64+ is the official continuation of the program and features an integrated server list. ([Source Code](https://github.com/Tarnadas/net64plus-server/), [Clients](https://github.com/Tarnadas/net64plus/)) `MIT` `Nodejs`
- [node-virtual-gamepads](https://github.com/jehervy/node-virtual-gamepads) - Turn your smartphone into a game controller, keyboard, or touchpad for a remote Linux OS machine. `MIT` `Nodejs/CoffeScript`
- [Posio](https://github.com/abrenaut/posio) - Geography multiplayer game. `MIT` `Python`
- [piqueserver](https://github.com/piqueserver/piqueserver) - Server for openspades, the first-person shooter in a destructible voxel world. ([Clients](https://github.com/yvt/openspades)) `GPL-3.0` `Python/C++`
- [QuakeJS](https://github.com/begleysm/quakejs) - QuakeJS is a port of ioquake3 to Javascript that can be played in a browser. `MIT` `Nodejs`
- [Quizmaster](https://github.com/nymanjens/quizmaster) - A web-app for conducting a quiz, including a page for players to enter their answers. `Apache-2.0` `Scala`
- [RconCli](https://github.com/gorcon/rcon-cli) - CLI for executing queries on a remote Valve Source dedicated server using the RCON Protocol. `MIT` `Go`
- [SourceBans++](https://sbpp.github.io) - Admin, ban, and communication management system for games running on the Source engine. ([Source Code](https://github.com/sbpp/sourcebans-pp)) `CC-BY-SA-4.0` `PHP`
- [Teeworlds](https://www.teeworlds.com) - Open source 2D retro multiplayer shooter. ([Source Code](https://github.com/teeworlds/teeworlds)) `BSD-3-Clause/Other` `C++`
- [The Battle for Wesnoth](https://github.com/wesnoth/wesnoth) - The Battle for Wesnoth is an Open Source, turn-based tactical strategy game with a high fantasy theme, featuring both singleplayer and online/hotseat multiplayer combat. `GPL-2.0` `C++`
- [Zero-K](https://zero-k.info/) - Open Source on Springrts engine. Zero-K is a traditional real time strategy game with a focus on player creativity through terrain manipulation, physics, and a large roster of unique units - all while being balanced to support competitive play. ([Source Code](https://github.com/ZeroK-RTS/Zero-K)) `GPL-2.0` `Lua`


### Gateways and Terminal Sharing

**[`^        back to top        ^`](#)**

- [asciinema](https://github.com/asciinema/asciinema-server) - Web app for hosting asciicasts. ([Demo](https://asciinema.org/)) `Apache-2.0` `Elixir/Docker`
- [GateOne](http://liftoffsoftware.com/Products/GateOne) - Gate One is an HTML5 web-based terminal emulator and SSH client. ([Source Code](https://github.com/liftoff/GateOne)) `AGPL-3.0` `Python`
- [Guacamole](http://guac-dev.org/) - Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC and RDP. ([Source Code](https://github.com/glyptodon/)) `Apache-2.0` `Java/C`
- [Neko](https://github.com/nurdism/neko) - A self hosted virtual browser (rabb.it clone) that runs in Docker. `Apache-2.0` `Docker/Go`
- [oneye](https://oneye-project.org/) - Cloud software to access your data from everywhere with any browser. ([Demo](https://wiki.oneye-project.org/0.9:demo), [Source Code](https://github.com/oneye/oneye)) `AGPL-3.0` `PHP`
- [OS.js](https://www.os-js.org/) - Desktop implementation for your browser with a fully-fledged window manager, Application APIs, GUI toolkits and filesystem abstraction. ([Demo](https://demo.os-js.org/), [Source Code](https://github.com/os-js/OS.js)) `BSD-2-Clause` `Nodejs`
- [ShellHub](https://www.shellhub.io) - ShellHub is a modern SSH server for remotely accessing linux devices via command line (using any SSH client) or web-based user interface, designed as an alternative to sshd. Think ShellHub as centralized SSH for the the edge and cloud computing. ([Source Code](https://github.com/shellhub-io/shellhub)) `Apache-2.0` `Go/Other`
- [Sshwifty](https://github.com/nirui/sshwifty) - Sshwifty is a SSH and Telnet connector made for the Web. `AGPL-3.0` `Go/Docker`
- [tmate](https://tmate.io/) - Instant terminal sharing. ([Source Code](https://github.com/tmate-io/tmate)) `ISC` `C`


### Genealogy

**[`^        back to top        ^`](#)**

- [Genea.app](https://genea.app/) - Genea is a privacy by design and open source tool anyone can use to author or edit their family tree. Data is stored in the GEDCOM format and all processing is done in the browser. ([Source Code](https://github.com/genea-app/genea-app)) `MIT` `Javascript`
- [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - GeneWeb is an open source genealogy software written in OCaml. It comes with a Web interface and can be used off-line or as a Web service. ([Demo](https://demo.geneweb.tuxfamily.org/gw7/), [Source Code](https://github.com/geneweb/geneweb)) `GPL-2.0` `OCaml`
- [webtrees](https://www.webtrees.net) - Webtrees is the web's leading on-line collaborative genealogy application. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPL-3.0` `PHP`


### Groupware

**[`^        back to top        ^`](#)**

- [BlueMind](https://www.bluemind.net/en/) - Groupware with email, calendar, addressbooks, exchange active sync, exchange MAPI protocol support. ([Source Code](https://forge.bluemind.net/stash/projects/BM/repos/bluemind-public/browse)) `AGPL-3.0` `Java`
- [Citadel](http://www.citadel.org/doku.php) - Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more. ([Source Code](http://www.citadel.org/doku.php/installation:source)) `GPL-3.0` `C`
- [Corteza](https://cortezaproject.org) - CRM including a unified workspace, enterprise messaging and a low code environment for rapidly and securely delivering records-based management solutions. ([Demo](https://latest.cortezaproject.org), [Source Code](https://github.com/cortezaproject/corteza-server)) `Apache-2.0` `Go`
- [Cozy Cloud](https://cozy.io) - Personal cloud where you can manage and sync your contact, files and calendars, and manage your budget with an app store full of community contributions. ([Source Code](https://github.com/cozy)) `GPL-3.0` `Nodejs`
- [egroupware](http://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS. ([Source Code](https://github.com/EGroupware/egroupware)) `GPL-2.0` `PHP`
- [EspoCRM](https://www.espocrm.com/) - CRM with a frontend designed as a single page application, and a REST API. ([Demo](https://demo.espocrm.com/), [Source Code](https://github.com/espocrm/espocrm)) `GPL-3.0` `PHP`
- [Horde](http://www.horde.org/) - The Horde Project is about creating high quality Open Source applications and libraries, based on PHP and the Horde Framework. ([Demo](http://demo.horde.org/login.php), [Source Code](https://github.com/horde/horde)) `GPL-2.0` `PHP`
- [HRCloud2](https://github.com/zelon88/HRCloud2) - Full-featured home hosted Cloud Drive, Personal Assistant, App Launcher, File Converter, Streamer, Share Tool and more. `GPL-3.0` `PHP`
- [Kolab](https://kolab.org/) - Kolab community is a unified communication and collaboration system. ([Source Code](https://git.kolab.org/)) `GPL-2.0/LGPL-2.1/GPL-3.0` `C++/Python/PHP`
- [Kopano](https://kopano.com/) - Groupware suite including e-mail, calendars, tasks, todos and notes. Featuring a modern WebApp, DeskApp and mobile access over Z-Push/ActiveSync. ([Demo](http://demo.kopano.com), [Source Code](https://stash.kopano.io)) `AGPL-3.0` `C/Python/PHP`
- [Openmeetings](https://openmeetings.apache.org/index.html) - Openmeetings provides video conferencing, instant messaging, white board, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming. ([Source Code](https://openmeetings.apache.org/scm.html)) `Apache-2.0` `Java`
- [SOGo](https://sogo.nu/) - SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and Web interface. ([Demo](http://demo.sogo.nu/SOGo/), [Source Code](https://github.com/inverse-inc/sogo)) `LGPL-2.1` `Objective-C`
- [SuiteCRM](http://www.suitecrm.com/) - The award-winning, enterprise-class open source CRM. ([Source Code](https://github.com/salesagility/SuiteCRM)) `AGPL-3.0` `PHP`
- [Tine 2.0](https://www.tine20.org) - Contacts, Calendar, Tasks, WebDAV, ActiveSync, VOIP, Mail-Client, CRM, Sales, Projects, Timetracker. ([Demo](https://demo.tine20.net), [Source Code](https://packages.tine20.com/maintenance/source/)) `AGPL-3.0/Other` `PHP`
- [Zimbra Collaboration](https://www.zimbra.com/) - Email, calendar, collaboration server with Web interface and lots of integrations. ([Source Code](https://github.com/zimbra)) `GPL-2.0/CPAL-1.0` `Java`


### Human Resources Management (HRM)

**[`^        back to top        ^`](#)**

- [admidio](https://www.admidio.org/) - Admidio is a free open source user management system for websites of organizations and groups. The system has a flexible role model so that it’s possible to reflect the structure and permissions of your organization. ([Demo](https://www.admidio.org/demo/), [Source Code](https://github.com/Admidio/admidio)) `GPL-2.0` `PHP`
- [IceHrm](https://icehrm.com/) - IceHrm employee management system allows companies to centralize confidential employee information. ([Demo](https://icehrm.com/demo.php), [Source Code](https://github.com/gamonoid/icehrm)) `Apache-2.0` `PHP`
- [OrangeHRM](https://www.orangehrm.com/) - OrangeHRM is a comprehensive HRM system that captures all the essential functionalities required for any enterprise. ([Source Code](https://sourceforge.net/projects/orangehrm/)) `GPL-2.0` `PHP`
- [Sentrifugo](http://www.sentrifugo.com/) - Sentrifugo is a HRM system that can be easily configured to meet your organizational needs. ([Source Code](https://github.com/sapplica/sentrifugo)) `GPL-3.0` `PHP`
- [TimeOff.Management](https://timeoff.management) - Simple yet powerful absence management software for small and medium size business. ([Demo](https://app.timeoff.management), [Source Code](https://github.com/timeoff-management/timeoff-management-application)) `MIT` `Nodejs`


### Internet of Things (IoT)

**[`^        back to top        ^`](#)**

- [DeviceHive](https://www.devicehive.com/) - Open Source IoT Platform with a wide range of integration options. ([Demo](https://playground.devicehive.com/), [Source Code](https://github.com/devicehive/devicehive-java-server)) `Apache-2.0` `Java`
- [Domoticz](https://www.domoticz.com/) - Home Automation System that lets you monitor and configure various devices like: Lights, Switches, various sensors/meters like Temperature, Rain, Wind, UV, Electra, Gas, Water and much more. ([Source Code](https://github.com/domoticz/domoticz), [Clients](https://github.com/domoticz/domoticz-android)) `GPL-3.0` `C/C++`
- [FHEM](https://fhem.de/fhem.html) - FHEM is used to automate common tasks in the household like switching lamps and heating. It can also be used to log events like temperature or power consumption. You can control it via web or smartphone frontends, telnet or TCP/IP directly. ([Source Code](https://svn.fhem.de/trac)) `GPL-3.0` `Perl`
- [Gladys](https://gladysassistant.com/) - Gladys is a privacy-first, open-source home assistant. ([Source Code](https://github.com/GladysAssistant/Gladys)) `Apache-2.0` `Nodejs`
- [Home Assistant](https://home-assistant.io/) - Open-source home automation platform. ([Demo](https://home-assistant.io/demo/), [Source Code](https://github.com/home-assistant/core)) `Apache-2.0` `Python`
- [Node RED](http://nodered.org/) - Browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. ([Source Code](https://github.com/node-red/node-red)) `Apache-2.0` `Nodejs`
- [openHAB](http://www.openhab.org) - Vendor and technology agnostic open source software for home automation. ([Source Code](https://github.com/openhab/openhab-core)) `EPL-2.0` `Java`
- [OpenRemote](https://openremote.io) - 100% Open Source IoT Platform - IoT Asset management, Flow Rules and WHEN-THEN rules, Data visualization, Edge Gateway. ([Demo](https://demo.openremote.io/), [Source Code](https://github.com/openremote/openremote)) `AGPL-3.0` `Java`
- [Thingsboard](https://thingsboard.io/) - Open-source IoT Platform - Device management, data collection, processing and visualization. ([Demo](https://demo.thingsboard.io/signup), [Source Code](https://github.com/thingsboard/thingsboard)) `Apache-2.0` `Java`
- [Thingspeak](https://thingspeak.com/) - Open source “Internet of Things” application and API to store and retrieve data from things using HTTP. ([Demo](https://thingspeak.com/channels/public), [Source Code](https://github.com/iobridge/thingspeak)) `GPL-3.0` `Ruby`
- [WebThings Gateway](https://webthings.io/gateway/) - WebThings is an open source implementation of the Web of Things, including the WebThings Gateway and the WebThings Framework. ([Source Code](https://github.com/WebThingsIO/gateway)) `MPL-2.0` `Nodejs`


### Knowledge Management Tools

**[`^        back to top        ^`](#)**

- [Mindmaps](https://github.com/drichard/mindmaps) - Open source, offline capable, mind mapping application. ([Demo](http://drichard.org/mindmaps/)) `AGPL-3.0` `HTML5`
- [My Mind](https://github.com/ondras/my-mind) - Web application for creating and managing mind maps. ([Demo](https://my-mind.github.io/?url=examples%2Ffeatures.mymind)) `MIT` `Javascript`
- [Weaviate](https://github.com/semi-technologies/weaviate) - A cloud-native, realtime vector search engine integrating scalable machine learning models (GraphQL and RESTful APIs). ([Demo](https://www.semi.technology/documentation/weaviate/current/)) `BSD-3-Clause` `Go`


### Learning and Courses

**[`^        back to top        ^`](#)**

- [Canvas LMS](https://www.canvaslms.com/) - Canvas is the trusted, open-source learning management system (LMS) that is revolutionizing the way we educate. ([Demo](https://canvas.instructure.com/register), [Source Code](https://github.com/instructure/canvas-lms)) `AGPL-3.0` `Ruby`
- [Chamilo LMS](https://chamilo.org/) - Chamilo LMS allows you to create a virtual campus for the provision of online or semi-online training. ([Source Code](https://github.com/chamilo/chamilo-lms)) `GPL-3.0` `PHP`
- [edX](https://www.edx.org/) - The Open edX platform is open-source code that powers edX.org. ([Source Code](https://github.com/edx/)) `AGPL-3.0` `Python`
- [Gibbon](https://www.gibbonedu.org/) - The flexible, open source school management platform designed to make life better for teachers, students, parents and leaders. ([Source Code](https://github.com/GibbonEdu/core)) `GPL-3.0` `PHP`
- [ILIAS](http://www.ilias.de) - ILIAS is the Learning Management System that can cope with anything you throw at it. ([Demo](http://demo.ilias.de), [Source Code](https://github.com/ILIAS-eLearning/ILIAS)) `GPL-3.0` `PHP`
- [Mahara](https://mahara.org/) - Open Source fully featured web application to build students electronic portfolio. ([Source Code](https://github.com/MaharaProject/mahara)) `GPL-3.0` `PHP`
- [Moodle](https://moodle.org/) - Moodle is a learning and courses platform with one of the largest open source communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL-3.0` `PHP`
- [Open eClass](http://www.openeclass.org/) - Open eClass is an advanced e-learning solution that can enhance the teaching and learning process. ([Demo](http://demo.openeclass.org/), [Source Code](https://github.com/gunet/openeclass)) `GPL-2.0` `PHP`
- [OpenOLAT](https://www.openolat.com/?lang=en) - OpenOLAT is a web-based learning management system for teaching, education, assessment and communication. ([Demo](https://learn.olat.com), [Source Code](https://github.com/OpenOLAT/OpenOLAT)) `Apache-2.0` `Java`
- [RELATE](https://documen.tician.de/relate/) - RELATE is a web-based courseware package, includes features such as: flexible rules, statistics, multi-course support, class calendar. ([Source Code](https://github.com/inducer/relate)) `MIT` `Python`
- [RosarioSIS](https://www.rosariosis.org/) - RosarioSIS, free Student Information System for school management. ([Demo](https://www.rosariosis.org/demo/), [Source Code](https://gitlab.com/francoisjacquet/rosariosis/)) `GPL-2.0` `PHP`
- [Sakai](https://www.sakaiproject.org/) - The Sakai project provides a flexible and feature-rich environment for teaching, learning, research and other collaboration. ([Demo](https://www.sakaiproject.org/try-sakai), [Source Code](https://github.com/sakaiproject/sakai)) `ECL-2.0` `Java`


### Maps and Global Positioning System (GPS)

**[`^        back to top        ^`](#)**

_See also: [awesome-gis](https://github.com/sshuair/awesome-gis)._

- [Geo2tz](https://github.com/noandrea/geo2tz) - Get the timezone from geo coordinates (lat, lon). `MIT` `Go/Docker`
- [GraphHopper](https://graphhopper.com/) - Fast routing library and server using OpenStreetMap. ([Source Code](https://github.com/graphhopper/graphhopper)) `Apache-2.0` `Java`
- [Hauk](https://github.com/bilde2910/Hauk) - Easy to setup location sharing platform that lets you temporarily share your location with anyone in real-time. ([Demo](https://github.com/bilde2910/Hauk#demo-server)) `Apache-2.0` `PHP`
- [MapBBCodeShare](https://github.com/MapBBCode/share.mapbbcode.org) - Tool for sharing custom OSM maps. Support for annotated markers, polygons, lines, multi-format import/export, multiple layers, shortlinks. ([Demo](http://share.mapbbcode.org/)) `WTFPL/Other` `PHP`
- [Open Source Routing Machine (OSRM)](http://project-osrm.org/) - High performance routing engine designed to run on OpenStreetMap data and offering an HTTP API, C++ library interface, and Nodejs wrapper. ([Demo](https://map.project-osrm.org/), [Source Code](https://github.com/Project-OSRM/osrm-backend)) `BSD-2-Clause` `C++`
- [Nominatim](https://nominatim.org/) - Server application for reverse geocoding (address -> coordinates) on OpenStreetMap data. ([Source Code](https://github.com/osm-search/Nominatim)) `GPL-2.0` `C`
- [OpenGTS](http://www.opengts.org/) - Entry-level fleet tracking system. Supports variety of tracking devices and protocols. Comes with rich web-interface and reporting features. ([Demo](http://track.opengts.org/track/Track), [Source Code](https://sourceforge.net/projects/opengts/files/server-base/)) `Apache-2.0` `Java`
- [OpenStreetMap](https://www.openstreetmap.org/) - Collaborative project to create a free editable map of the world. ([Source Code](https://github.com/openstreetmap/openstreetmap-website), [Clients](https://wiki.openstreetmap.org/wiki/Software)) `GPL-2.0` `Ruby`
- [OpenTripPlanner](https://www.opentripplanner.org/) - Multimodal trip planning software based on OpenStreetMap data and consuming published GTFS-formatted data to suggest routes using local public transit systems. ([Source Code](https://github.com/opentripplanner/OpenTripPlanner)) `LGPL-3.0` `Java/Javascript`
- [Orion](https://github.com/LINKIWI/orion-web) - Powerful OwnTracks API-compliant location data visualization frontend for the web. ([Demo](https://linkiwi.github.io/orion-web/)) `MIT` `Python/Nodejs`
- [OwnTracks Recorder](https://github.com/owntracks/recorder) `⚠` - Store and access data published by [OwnTracks](http://owntracks.org/) location tracking apps. `GPL-2.0` `C/Lua`
- [TileServer GL](http://tileserver.readthedocs.io/) - Vector and raster maps with GL styles. Server side rendering by Mapbox GL Native. Map tile server for Mapbox GL JS, Android, iOS, Leaflet, OpenLayers, GIS via WMTS, etc. ([Source Code](https://github.com/maptiler/tileserver-gl)) `BSD-2-Clause` `Nodejs`
- [TileServer PHP](http://tileserver.maptiler.com/) - Serve map tiles from any PHP hosting. ([Source Code](https://github.com/maptiler/tileserver-php)) `BSD-2-Clause` `PHP`
- [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](http://demo.traccar.org/), [Source Code](https://github.com/traccar)) `Apache-2.0` `Java`
- [μlogger](https://github.com/bfabiszewski/ulogger-server) - Collect geolocation from users in real-time and display their GPS tracks on a website. ([Demo](http://ulogger.fabiszewski.net/)) `GPL-3.0` `PHP`
- [uMap](https://umap.openstreetmap.fr/en/) - Create maps with OpenStreetMap layers in a minute and embed them in your site. ([Source Code](https://github.com/umap-project/umap)) `WTFPL` `Python`


### Media Streaming

**[`^        back to top        ^`](#)**

_See also: [List of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/List_of_streaming_media_systems), [Comparison of streaming media systems - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems)_


### Media Streaming - Multimedia Streaming

- [Gerbera](https://gerbera.io/) - Gerbera is an UPnP Media Server. It allows you to stream your digital media throughout your home network and listen to/watch it on a variety of UPnP compatible devices. ([Source Code](https://github.com/gerbera/gerbera)) `GPL-2.0` `C++`
- [homehost](https://github.com/ridhwaans/homehost) `⚠` - Self-hosted React + Redux app that streams your media collection (music, movies, books, podcasts, comics etc). `MIT` `Nodejs`
- [Icecast 2](http://www.icecast.org/) - streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://gitlab.xiph.org/xiph/icecast-server), [Clients](http://www.icecast.org/apps/)) `GPL-2.0` `C`
- [Jellyfin](https://jellyfin.org) - Media server for audio, video, books, comics, and photos with a sleek interface and robust transcoding capabilities. Almost all modern platforms have clients, including Roku, Android TV, iOS, and Kodi. ([Demo](https://demo.jellyfin.org/stable), [Source Code](https://github.com/jellyfin/jellyfin)) `GPL-2.0` `C#`
- [Karaoke Forever](https://www.karaoke-forever.com) - Host awesome karaoke parties where everyone can easily find and queue songs from their phone's web browser. The player is also browser-based with support for MP3+G, MP4 and WebGL visualizations. ([Source Code](https://www.karaoke-forever.com/repo)) `ISC` `Nodejs`
- [LBRY](https://lbry.com/) - Is a secure, open, and community-run digital marketplace that aims to replace Youtube and Amazon. ([Demo](https://lbry.tv/), [Source Code](https://github.com/lbryio/lbry.com), [Clients](https://github.com/lbryio/lbry-desktop)) `MIT` `PHP`
- [MistServer](http://mistserver.org/) - Streaming media server that works well in any streaming environment. ([Source Code](https://github.com/DDVTECH/mistserver)) `AGPL-3.0` `C++`
- [NymphCast](http://nyanko.ws/nymphcast.php) - NymphCast is a Chromecast alternative which turns your choice of Linux-capable hardware into an audio and video source for a television or powered speakers. ([Source Code](https://github.com/MayaPosch/NymphCast)) `BSD-3-Clause` `C++`
- [Podify](https://www.podify.org/) - Allows you to download videos and audio from any source supported by youtube-dl and subscribe to and watch these downloads using your favorite podcast app. ([Source Code](https://github.com/podify-org/podify/)) `GPL-3.0` `Ruby`
- [ReadyMedia](http://sourceforge.net/projects/minidlna/) - Simple media server software, with the aim of being fully compliant with DLNA/UPnP-AV clients. Formerly known as MiniDLNA. ([Source Code](https://sourceforge.net/p/minidlna/git/ci/master/tree/)) `GPL-2.0` `C`
- [Rygel](https://wiki.gnome.org/action/show/Projects/Rygel) - Rygel is a UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller. ([Source Code](https://gitlab.gnome.org/GNOME/rygel/)) `GPL-3.0` `C`
- [üWave](http://u-wave.net/) `⚠` - üWave is a self-hosted collaborative listening platform. Users take turns playing media—songs, talks, gameplay videos, or anything else—from a variety of media sources like YouTube and SoundCloud. ([Demo](https://wlk.yt/), [Source Code](https://github.com/u-wave)) `MIT` `Nodejs`


### Media Streaming - Audio Streaming

- [Ampache](http://ampache.org/) - Web based audio/video streaming application. ([Demo](http://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)) `AGPL-3.0` `PHP`
- [Airsonic](https://airsonic.github.io/) - Open-source web-based media streamer and jukebox. A fork of Subsonic's last open-source release, before it switched licenses. ([Source Code](https://github.com/airsonic/airsonic), [Clients](https://airsonic.github.io/docs/apps/)) `GPL-3.0` `Java`
- [AzuraCast](https://www.azuracast.com/) - A modern and accessible self-hosted web radio management suite. ([Source Code](https://github.com/AzuraCast/AzuraCast)) `Apache-2.0` `PHP`
- [Audioserve](https://github.com/izderadicka/audioserve) - Simple personal server to serve audio files from directories (audiobooks, music, podcasts...). Focused on simplicity and supports sync of play position between clients. `MIT` `Rust`
- [Beets](http://beets.io/) - Music library manager and MusicBrainz tagger (command-line and Web interface). ([Source Code](https://github.com/beetbox/beets)) `MIT` `Python`
- [Black Candy](https://github.com/aidewoode/black_candy) - Music streaming server built with Rails and Stimulus. `MIT` `Ruby`
- [Compactd](https://github.com/compactd/compactd) - Remote music player that supports adding content. `MIT` `Nodejs`
- [FriendsRadio](https://github.com/xouabita/friends-radio) `⚠` - Share music with your friends from Youtube and Soundcloud. ([Demo](https://friends-radio.herokuapp.com/)) `MIT` `Nodejs`
- [Funkwhale](https://funkwhale.audio/) - Modern, web-based, convivial, multi-user and free music server. ([Demo](https://demo.funkwhale.audio/), [Source Code](https://code.eliotberriot.com/funkwhale/funkwhale)) `BSD-3-Clause` `Python/Django`
- [GNU FM](https://gnu.io/fm/) - Running music community websites, alternative to last.fm. ([Source Code](http://git.savannah.gnu.org/cgit/librefm.git/)) `AGPL-3.0` `PHP`
- [gonic](https://github.com/sentriz/gonic) - Lightweight music streaming server. Subsonic compatible. `GPL-3.0` `Go`
- [Groove Basin](https://github.com/andrewrk/groovebasin) - Music player server with a web-based user interface inspired by Amarok 1.4. `MIT` `Nodejs`
- [koel](https://koel.dev/) - Personal music streaming server that works. ([Source Code](https://github.com/koel/koel)) `MIT` `PHP`
- [KooZic](https://koozic.net/) - Music server with powerful playlist features and Subsonic compatibility. ([Demo](https://demo.koozic.net/public), [Source Code](https://github.com/DocMarty84/koozic)) `LGPL-3.0/MIT` `Python`
- [LibreTime](http://libretime.org) - Simple, open source platform that lets you broadcast streaming radio on the web (fork of [Airtime](https://github.com/sourcefabric/Airtime)). ([Source Code](https://github.com/LibreTime/libretime)) `AGPL-3.0` `PHP`
- [LMS](https://github.com/epoupon/lms) - Access your self-hosted music using a web interface. ([Demo](http://lms.demo.poupon.io/)) `GPL-3.0` `C++`
- [moOde Audio](https://moodeaudio.org/) - Audiophile-quality music playback for the wonderful Raspberry Pi family of single board computers. ([Source Code](https://github.com/moode-player/moode)) `GPL-3.0` `PHP`
- [Mopidy](http://mopidy.readthedocs.org/) - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source Code](https://github.com/mopidy/mopidy)) `Apache-2.0` `Python`
  - [Moped](https://github.com/martijnboland/moped) - Responsive HTML5 + Javascript client for the Mopidy music server. `MIT` `HTML5`
  - [Mopidy MusicBox](https://github.com/pimusicbox/mopidy-musicbox-webclient) - Web Client for Mopidy Music Server. `Apache-2.0` `HTML5`
  - [Mopidy-Party](https://github.com/Lesterpig/mopidy-party) - Mopidy web extension designed for party! Let your guests manage the sound. `Apache-2.0` `Python`
- [mpd](http://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. ([Source Code](https://github.com/MusicPlayerDaemon/MPD), [Clients](https://www.musicpd.org/clients/)) `GPL-2.0` `C++`
  - [ympd](http://www.ympd.org/) - Standalone MPD Web GUI written in C, utilizing Websockets and Bootstrap/JS. ([Source Code](https://github.com/notandy/ympd)) `GPL-2.0` `C`
- [mStream](http://mstream.io/) - Music streaming server with GUI management tools. Runs on Mac, Windows, and Linux. ([Source Code](https://github.com/IrosTheBeggar/mStream)) `GPL-2.0` `Nodejs`
- [musikcube](https://musikcube.com/) - Streaming audio server with Linux/macOS/Windows/Android clients. ([Source Code](https://github.com/clangen/musikcube)) `BSD-3-Clause` `C++`
- [Navidrome Music Server](https://www.navidrome.org) - Modern Music Server and Streamer, compatible with Subsonic/Airsonic. ([Demo](https://www.navidrome.org/demo), [Source Code](https://github.com/navidrome/navidrome), [Clients](https://www.navidrome.org/docs/overview/#apps)) `GPL-3.0` `Go/Javascript`
- [Polaris](https://github.com/agersant/polaris) - Music browsing and streaming application optimized for large music collections, ease of use and high performance. `MIT` `Rust`
- [Snapcast](https://github.com/badaix/snapcast) - Synchronous multiroom audio server. `GPL-3.0` `C++`
- [Stretto](https://github.com/benkaiser/stretto) - Music player with Youtube/Soundcloud import and iTunes/Spotify discovery. ([Demo](https://next.kaiserapps.com), [Clients](https://github.com/benkaiser/stretto-mobile-next)) `MIT` `Nodejs`
- [Volumio](https://volumio.org/) - A free and open source linux distribution, designed and fine-tuned exclusively for music playback. ([Source Code](https://github.com/volumio/Volumio2)) `GPL-3.0` `Nodejs`


### Media Streaming - Video Streaming

- [Bluecherry](https://www.bluecherrydvr.com/) - Closed-circuit television (CCTV) software application which supports IP and Analog cameras. ([Source Code](https://github.com/bluecherrydvr/bluecherry-apps)) `GPL-2.0` `PHP`
- [crtmpserver](https://packages.debian.org/stable/crtmpserver) - High performance RTMP/RTSP streaming server. `GPL-3.0` `C++`
- [CyTube](https://github.com/calzoneman/sync) - CyTube is a web application providing media synchronization, chat, and more for an arbitrary number of channels. ([Demo](http://cytu.be)) `MIT` `Nodejs`
- [Hellowlol HTPC Manager fork](https://github.com/Hellowlol/HTPC-Manager) - Fully responsive interface to manage all your favorite media on your HTPC. `MIT` `Python`
- [Invidious](https://github.com/iv-org/invidious) - `⚠` Invidious is an alternative front-end to YouTube. ([Demo](https://docs.invidious.io/Invidious-Instances.md)) `AGPL-3.0` `Crystal`
- [Kerberos.io](https://kerberos.io) - Kerberos.io is a video surveillance solution, which works with any camera and on every Linux based machine (Raspberry Pi, Docker, Kubernetes cluster). ([Demo](https://demo.kerberos.io/), [Source Code](https://github.com/kerberos-io/kerberos-docker)) `MIT` `C++`
- [MediaCMS](https://mediacms.io) - MediaCMS is a modern, fully featured open source video and media CMS, written in Python/Django/React, featuring a REST API. ([Source Code](https://github.com/mediacms-io/mediacms)) `AGPL-3.0` `Python/Docker`
- [Myflix](https://github.com/farfalleflickan/Myflix) `⚠` - Self-hosted, super lightweight Netflix alternative. `MIT` `Shell`
- [Oblecto](https://github.com/robinp7720/Oblecto) `⚠` - Media server for Movies and TV Shows with a responsive Vue.js frontend. It has robust transcoding support as well as federation capabilities to share your library with your friends. `AGPL-3.0` `Nodejs`
- [Oddworks](https://gitlab.com/oddnetworks/oddworks/core) - Oddworks is an open source video distribution platform built to destroy the barriers to streaming television with SDKs for Roku, Apple iOS/tvOS, Google Android, and Amazon FireTV. `MIT` `Nodejs`
- [Open Streaming Platform](https://openstreamingplatform.com) - Self-Hosted alternative to Twitch and Youtube Live for live and on-demand video streaming. ([Source Code](https://gitlab.com/Deamos/flask-nginx-rtmp-manager)) `MIT` `Python`
- [Olaris](https://gitlab.com/olaris/olaris-server) - Olaris is an open-source, community driven, media manager and transcoding server. `GPL-3.0` `Go`
- [PeerTube](https://joinpeertube.org/en/) - Decentralized video streaming platform using P2P (BitTorrent) directly in the web browser. ([Source Code](https://github.com/Chocobozzz/PeerTube)) `AGPL-3.0` `Nodejs`
- [Rapidbay](https://github.com/hauxir/rapidbay/) - Self-hosted torrent videostreaming service/torrent client that allows searching and playing videos from torrents in the browser or from a Chromecast/AppleTV/Smart TV. `MIT` `Python/Docker`
- [Restreamer](https://datarhei.github.io/restreamer/) - Restreamer allows you to do h.264 real-time video streaming on your website without a streaming provider. ([Source Code](https://github.com/datarhei/restreamer)) `Apache-2.0` `Nodejs/Docker`
- [Radium](https://github.com/Zibbp/Radium) - Synced stream and video playback with VOD capabilities utilizing HLS. Developed for movie nights but has many use cases. ([Demo](https://radium-demo.herokuapp.com)) `MIT` `Nodejs/Docker`
- [ShinobiCE](https://gitlab.com/Shinobi-Systems/ShinobiCE) - Open Source CCTV software written in Node with both IP and local camera support. `AGPL-3.0/GPL-3.0` `Nodejs`
- [Streama](https://github.com/streamaserver/streama) - Self hosted streaming media server. `MIT` `Java`
- [SyncTube](https://github.com/RblSb/SyncTube) - Lightweight and very simple to setup CyTube alternative to watch videos with friends and chat. ([Demo](http://synctube-example.herokuapp.com/)) `MIT` `Nodejs/Haxe`
- [Tube](https://prologic.github.io/tube) - a Youtube-like (_without censorship and features you don't need!_) Video Sharing App written in Go which also supports automatic transcoding to MP4 H.265 AAC, multiple collections and RSS feed. ([Demo](https://tube.mills.io), [Source Code](https://git.mills.io/prologic/tube)) `MIT` `Go`
- [VideoLAN Client (VLC)](https://www.videolan.org/) - Cross-platform multimedia player client and server supporting most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols. ([Source Code](https://github.com/videolan/vlc)) `Multiple` `C`
- [Zoneminder](https://www.zoneminder.com/) - Closed-circuit television (CCTV) software application which supports IP, USB and Analog cameras. ([Source Code](https://github.com/ZoneMinder/ZoneMinder)) `GPL-2.0` `PHP`


### Miscellaneous

**[`^        back to top        ^`](#)**

- [2FAuth](https://github.com/Bubka/2FAuth) - A web app to manage your Two-Factor Authentication (2FA) accounts and generate their security codes. ([Demo](https://demo.2fauth.app/)) `AGPL-3.0` `PHP`
- [411](https://github.com/etsy/411) - Alert Management Web Application. `MIT` `PHP`
- [AlertHub](https://github.com/Ardakilic/alerthub) `⚠` - AlertHub is a simple tool to get alerted from GitHub releases. `MIT` `Nodejs`
- [Anchr](https://anchr.io) - Anchr is a toolbox for tiny tasks on the internet, including bookmark collections, URL shortening and (encrypted) image uploads. ([Source Code](https://github.com/muety/anchr)) `GPL-3.0` `Nodejs`
- [Anuko](https://www.anuko.com/time_tracker/index.htm) - Anuko provides simple time and project tracking on a selfhosted basis. ([Demo](https://timetracker.anuko.com/), [Source Code](https://github.com/anuko/timetracker)) `Other` `PHP`
- [asciiflow](http://asciiflow.com/) - Flow Diagram Drawing Tool. ([Source Code](https://github.com/lewish/asciiflow)) `MIT` `Nodejs`
- [Databunker](https://databunker.org/) - Network-based, self-hosted, GDPR compliant, secure database for personal data or PII. ([Source Code](https://github.com/securitybunker/databunker)) `MIT` `Go`
- [blynk](https://blynk.io/) - Platform with iOS and Android apps to control Arduino, ESP8266, Raspberry Pi and similar microcontroller boards over the Internet. ([Source Code](https://github.com/blynkkk/blynk-server)) `AGPL-3.0` `Java`
- [Cachet](https://cachethq.io/) - An open source status page system for everyone. ([Demo](https://demo.cachethq.io/), [Source Code](https://github.com/CachetHQ/Cachet)) `BSD-3-Clause` `PHP`
- [CapRover](https://caprover.com/) - Build your own PaaS in a few minutes. ([Demo](https://captain.server.demo.caprover.com/#/login), [Source Code](https://github.com/caprover/caprover)) `Apache-2.0` `Docker/Nodejs`
- [changedetection.io](https://github.com/dgtlmoon/changedetection.io) - Self-hosted tool for staying up-to-date with web-site content changes. `Apache-2.0` `Python/Docker`
- [cState](https://github.com/cstate/cstate/) - Static status page for hyperfast Hugo. Clean design, minimal JS, super light HTML/CSS, high customization, optional admin panel, read-only API, IE8+. Best used with Netlify, Docker. ([Demo](https://cstate.mnts.lt/)) `MIT` `Go`
- [CUPS](https://www.cups.org/) - The Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers. ([Source Code](https://github.com/apple/cups)) `GPL-2.0` `C`
- [CyberChef](https://github.com/gchq/CyberChef) - Perform all manner of operations within a web browser such as AES, DES and Blowfish encryption and decryption, creating hexdumps, calculating hashes, and much more. ([Demo](https://gchq.github.io/CyberChef)) `Apache-2.0` `Javascript`
- [DailyTxT](https://github.com/PhiTux/DailyTxT) - Encrypted Diary Web-App to save your personal memories of each day. Includes a search-function and encrypted file-upload. `MIT` `Python`
- [Digital-Currency](https://github.com/Icesofty/Digital-Currency) - Create your own Self-Hosted Digital Currency. ([Demo](https://tonken.glitch.me/)) `GPL-3.0` `Nodejs`
- [DomainMOD](https://domainmod.org) - Application to manage your domains and other internet assets in a central location. DomainMOD includes a Data Warehouse framework that allows you to import your WHM/cPanel web server data so that you can view, export, and report on your data. ([Demo](https://demo.domainmod.org), [Source Code](https://github.com/domainmod/domainmod)) `GPL-3.0` `PHP`
- [Flox](https://github.com/devfake/flox) `⚠` - Self hosted movie, TV series and anime watch list with a 3-point rating system. Uses The Movie Database backend for information. ([Demo](https://flox-demo.pyxl.dev/)) `MIT` `PHP`
- [formspree](https://formspree.io/) `⚠` - Just send your form to our URL and we'll forward it to your email. No PHP, Javascript or sign up required. ([Demo](http://test.formspree.io/), [Source Code](https://github.com/formspree/formspree)) `AGPL-3.0` `Python`
- [graph-vl](https://github.com/verifid/graph-vl) - Identity document verification using Machine Learning and GraphQL. `MIT` `Python`
- [google-webfonts-helper](https://github.com/majodev/google-webfonts-helper) `⚠` - Hassle-Free Way to Self-Host Google Fonts. Get eot, ttf, svg, woff and woff2 files + CSS snippets. ([Demo](https://google-webfonts-helper.herokuapp.com/)) `MIT` `Nodejs`
- [ytdl-webserver](https://github.com/Algram/ytdl-webserver) - Docker-ready webserver for downloading youtube videos. `MIT` `Nodejs`
- [Journal](https://github.com/inoda/journal) - Simple journaling with encrypted entries and sharing capabilities. `MIT` `Ruby`
- [Kimai](https://www.kimai.org/) - Kimai is a free & open source timetracker. It tracks work time and prints out a summary of your activities on demand. ([Demo](https://www.kimai.org/demo/), [Source Code](https://github.com/kevinpapst/kimai2/)) `MIT` `PHP`
- [King Phisher](https://github.com/rsmusllp/king-phisher) - King Phisher is a tool for testing and promoting user awareness by simulating real world phishing attacks. `BSD-3-Clause` `Python`
- [Lancache](https://lancache.net) `⚠` - LAN Party game caching made easy. ([Source Code](https://github.com/lancachenet/monolithic)) `MIT` `Docker/Shell`
- [MailyGo](https://codeberg.org/jlelse/MailyGo) - MailyGo is a small tool written in Go that allows to send HTML forms, for example from static websites without a dynamic backend, via email. `MIT` `Go`
- [MindsDB](https://github.com/mindsdb/mindsdb) - MindsDB is an open source self hosted AI layer for existing databases that allows you to effortlessly develop, train and deploy state-of-the-art machine learning models using standard queries. `GPL-3.0` `Python`
- [MissionKontrol](https://www.missionkontrol.io) - Configurable admin panel allowing non-technical users to CRUD data on MySQL/PostGRES databases. ([Source Code](https://github.com/Mission-Kontrol/MissionKontrol-rails)) `AGPL-3.0` `Ruby`
- [Monica](https://monicahq.com/) - Personal relationship manager, and a new kind of CRM to organize interactions with your friends and family. ([Source Code](https://github.com/monicahq/monica)) `AGPL-3.0` `PHP`
- [Musical Artifacts](https://musical-artifacts.com/) - Helping to catalog, preserve and free the artifacts you need to produce music. ([Source Code](https://github.com/lfzawacki/musical-artifacts)) `MIT` `Ruby`
- [nnmm](https://github.com/Mechazawa/nnmm) - Super tiny pastebin/url minifier _microservice_. `Beerware` `PHP`
- [Notica](https://notica.us) - Lets you send browser notifications from your terminal to your desktop or phone. No installation or registration is required. ([Source Code](https://github.com/tannercollin/Notica)) `MIT` `Nodejs`
- [Ombi](https://ombi.io/) - A content request system for Plex/Emby, connects to SickRage, CouchPotato, Sonarr, with a growing feature set. ([Demo](https://app.ombi.io/), [Source Code](https://github.com/Ombi-app/Ombi)) `GPL-2.0` `C#`
- [Orchest](https://www.orchest.io/) - A new kind of IDE for Data Science. ([Demo](https://cloud.orchest.io), [Source Code](https://github.com/orchest/orchest)) `AGPL-3.0` `Docker`
- [oTranscribe](https://github.com/oTranscribe/oTranscribe) - Free web app to take the pain out of transcribing recorded interviews. ([Demo](https://otranscribe.com/)) `MIT` `Javascript`
- [PassCheck](https://apacketofsweets.github.io/PassCheck/) - A web application featuring some handy password tools, including a password generator, strength checker and HaveIBeenPwned breach checker. ([Source Code](https://github.com/apacketofsweets/PassCheck)) `MIT` `Javascript`
- [Reactive Resume](http://rxresu.me/) - A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, portable, open-source and free forever. ([Demo](https://rxresu.me/app/dashboard/), [Source Code](https://github.com/AmruthPillai/Reactive-Resume)) `MIT` `Docker/Nodejs`
- [ReleaseBell](https://releasebell.com/) - Send release notifications for starred Github repos. ([Source Code](https://git.cloudron.io/cloudron/releasebell)) `MIT` `Nodejs`
- [revealjs](https://revealjs.com) - Framework for easily creating beautiful presentations using HTML. ([Demo](https://revealjs.com/), [Source Code](https://github.com/hakimel/reveal.js)) `MIT` `Javascript`
- [Revive Adserver](https://www.revive-adserver.com/) - World's most popular free, open source ad serving system. Formerly known as OpenX Adserver and phpAdsNew. ([Source Code](https://github.com/revive-adserver/revive-adserver)) `GPL-2.0-or-later` `PHP`
- [SANE Network Scanning](http://sane-project.org/) - Allow remote clients to access image acquisition devices (scanners) available on the local host. ([Source Code](http://www.sane-project.org/cvs.html)) `GPL-2.0` `C`
- [TeslaMate](https://github.com/adriankumpf/teslamate) - A powerful data logger for Tesla vehicles. `MIT` `Elixir`
- [Trello Burndown](https://github.com/mtricht/trello-burndown) `⚠` - Easy to use SCRUM burndown chart for Trello boards. `MIT` `Go/Docker`
- [ViMbAdmin](http://www.vimbadmin.net/) - Provides a web based virtual mailbox administration system to allow mail administrators to easily manage domains, mailboxes and aliases. ([Demo](http://www.vimbadmin.net/demo/auth/login), [Source Code](https://github.com/opensolutions/ViMbAdmin)) `GPL-3.0` `PHP`
- [Web fonts repository](https://github.com/Finesse/web-fonts-repository) - Simple webfont hosting. Google Fonts alternative for your own fonts. `MIT` `PHP`


### Money, Budgeting & Management

**[`^        back to top        ^`](#)**

_See also: [awesome-sysadmin/IT Asset Management](https://github.com/awesome-foss/awesome-sysadmin#it-asset-management)_

- [Akaunting](https://akaunting.com/) - Akaunting is a free, online and open source accounting software designed for small businesses and freelancers. ([Source Code](https://github.com/akaunting/akaunting)) `GPL-3.0` `PHP`
- [BTCPay Server](https://btcpayserver.org/) - A self-hosted Bitcoin and other cryptocurrencies payment processor. ([Demo](https://mainnet.demo.btcpayserver.org/), [Source Code](https://github.com/btcpayserver/)) `MIT` `C#`
- [Boodle](https://github.com/manuel-uberti/boodle) - Simple accounting single-page application in Clojure and ClojureScript. `EPL-1.0` `Java`
- [Budget App](https://github.com/paukiatwee/budgetapp) - Budget App is an open source personal budgeting application. `Apache-2.0` `Java`
- [budgetzero](https://github.com/budgetzero/budgetzero) - Free, self-hosted, open-source, envelope-budgeting web and desktop app. ([Demo](https://app.budgetzero.io/budget)) `AGPL-3.0` `Nodejs`
- [Crater](https://github.com/bytefury/crater) - Free & Open Source Invoice App for Freelancers & Small Businesses. ([Demo](https://demo.craterapp.com/)) `AAL` `PHP`
- [Dot Ledger](https://www.dotledger.com/) - Web-based personal finance management tool. ([Demo](https://demo.dotledger.com/), [Source Code](https://github.com/dotledger/dotledger)) `Apache-2.0` `Ruby`
- [EasyQuickImport](https://github.com/karser/EasyQuickImport) `⚠` - A tool that helps you import transactions, invoices and bills into QuickBooks Desktop from Excel or CSV. `MIT` `PHP`
- [Economizzer](http://www.economizzer.org/) - An easy and secure system for you to manage your personal money and achieve your goals, and can be accessed by computer, tablet or smartphone. ([Demo](https://github.com/gugoan/economizzer#live-demo), [Source Code](https://github.com/gugoan/economizzer)) `MIT` `PHP`
- [ExMoney](https://github.com/gaynetdinov/ex_money) - Self-hosted personal finance app. `ISC` `Elixir`
- [Firefly III](https://firefly-iii.org/) - Firefly III is a modern financial manager. It helps you to keep track of your money and make budget forecasts. It supports credit cards, has an advanced rule engine and can import data from many banks. ([Demo](https://demo.firefly-iii.org/), [Source Code](https://github.com/firefly-iii/firefly-iii)) `AGPL-3.0` `PHP`
- [Family Accounting Tool](https://github.com/nymanjens/facto) - Web-based finance management tool for partners with partially shared expenses. `Apache-2.0` `Scala`
- [Fava](https://beancount.github.io/fava/) - Fava is the web frontend of Beancount, a text based double-entry accounting system. ([Demo](https://fava.pythonanywhere.com/example-with-budgets/income_statement/), [Source Code](https://github.com/beancount/fava)) `MIT` `Python`
- [Galette](http://galette.eu/dc/) - Galette is a membership management web application towards non profit organizations. ([Source Code](http://git.tuxfamily.org/galette/galette.git/)) `GPL-3.0` `PHP`
- [GRR](http://grr.devome.com/?lang=en) - Assets management and booking for small/medium companies. ([Source Code](https://github.com/JeromeDevome/GRR)) `GPL-2.0` `PHP`
- [Hospital Run](http://hospitalrun.io/) - Hospital Run is offline enabled hospital management software. ([Demo](http://hospitalrun.io/demo/), [Source Code](https://github.com/HospitalRun/hospitalrun-server)) `GPL-3.0` `Nodejs`
- [Inventaire](https://inventaire.io/welcome) - Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs. ([Source Code](https://github.com/inventaire/inventaire)) `AGPL-3.0` `Nodejs`
- [Inventree](https://inventree.readthedocs.io/en/latest/) - InvenTree is an open-source inventory management system which provides intuitive parts management and stock control. ([Source Code](https://github.com/inventree/InvenTree)) `MIT` `Python`
- [Invoice Ninja](https://www.invoiceninja.org/) - Powerful tool to invoice clients online. ([Demo](https://app.invoiceninja.com/invoices/create), [Source Code](https://github.com/invoiceninja/invoiceninja)) `AAL` `PHP`
- [InvoicePlane](https://github.com/InvoicePlane/InvoicePlane) - Manage quotes, invoices, payments and customers for your small business. `MIT` `PHP`
- [IHateMoney](http://ihatemoney.org/) - Manage your shared expenses, easily. ([Demo](https://ihatemoney.org/demo/), [Source Code](https://github.com/spiral-project/ihatemoney)) `BSD-3-Clause` `Python`
- [IHateToBudget](https://github.com/bminusl/ihatetobudget) - A simple web app to understand and control your expenses. `GPL-3.0` `Docker/Python`
- [Kresus](https://kresus.org/) - Open source personal finance manager. ([Demo](https://kresus.org/en/demo.html), [Source Code](https://github.com/kresusapp/kresus)) `MIT` `Nodejs`
- [OnTrack](https://github.com/inoda/ontrack) - A simple app to track spend and set goals. `MIT` `Ruby/React`
- [PartKeepr](https://www.partkeepr.org) - PartKeepr is an electronic part inventory management software. It helps you to keep track of your available parts and assist you with re-ordering parts. ([Demo](https://demo.partkeepr.org/), [Source Code](https://github.com/partkeepr/PartKeepr)) `GPL-3.0` `PHP`
- [SilverStrike](https://silverstrike.org/) - Personal finance management made easy. ([Demo](https://demo.silverstrike.org/), [Source Code](https://github.com/agstrike/silverstrike)) `MIT` `Python/Django`
- [StockazNG](https://dev.sigpipe.me/dashie/StockazNG) - Asset Management System. `MIT` `Python`
- [Tabby](https://github.com/bertvandepoel/tabby) - A tool to manage shared expenses across friends, such as restaurant costs or food delivery, without requiring everyone to create an account. Includes email reminders and tracks who has (re)paid what. `AGPL-3.0-only` `PHP`


### Monitoring

**[`^        back to top        ^`](#)**

**Please visit [awesome-sysadmin/Monitoring](https://github.com/awesome-foss/awesome-sysadmin#monitoring), [awesome-sysadmin/Metric and Metric Collection](https://github.com/awesome-foss/awesome-sysadmin#metric--metric-collection)**


### Note-taking & Editors

**[`^        back to top        ^`](#)**

_Related: [Wikis](#wikis)_

- [BulletNotes](https://bulletnotes.io/) - Workflowy / Dynalist clone with Kanban (Trello) and Calendar functionality. Organize everything. ([Source Code](https://gitlab.com/NickBusey/BulletNotes)) `MIT` `Nodejs`
- [Boostnote](https://boostnote.io/) - The note-taking app for programmers that focuses on markdown, snippets, and customizability. ([Source Code](https://github.com/BoostIO/Boostnote)) `GPL-3.0` `Javascript`
- [DailyNotes](https://github.com/m0ngr31/DailyNotes/) - App for taking notes and tracking tasks on a daily basis in Markdown. `MIT` `Python`
- [dillinger](http://dillinger.io/) - The last Markdown editor, ever. ([Source Code](https://github.com/joemccann/dillinger)) `MIT` `Nodejs`
- [Dnote](https://www.getdnote.com) - A simple command line notebook with multi-device sync and web interface. ([Source Code](https://github.com/dnote/dnote)) `AGPL-3.0` `Go`
- [DocPHT](https://docpht.org/) - With DocPHT you can take notes and quickly document anything and without the use of any database. ([Demo](https://demo.docpht.org/), [Source Code](https://github.com/docpht/docpht)) `MIT` `PHP`
- [draw.io](https://draw.io) - Diagram software for making flowcharts, process diagrams, org charts, UML, ER and network diagrams. ([Source Code](https://github.com/jgraph/drawio)) `Apache-2.0` `Javascript`
- [HedgeDoc](https://demo.hedgedoc.org/) - Realtime collaborative markdown notes on all platforms, formerly known as CodiMD and HackMD CE. ([Source Code](https://github.com/hedgedoc/hedgedoc)) `AGPL-3.0` `TypeScript`
- [Joplin](https://joplinapp.org/) - Joplin is a note taking application with Markdown editor and encryption support for mobile and desktop platforms. Runs client-side and syncs through self hosted Nextcloud or similar. Consider it like open source alternative to Evernote. ([Source Code](https://github.com/laurent22/joplin)) `MIT` `Nodejs`
- [Leanote](http://leanote.org/) - Leanote, Not Just A Notepad! Open source cloud notepad. ([Demo](https://leanote.com/note), [Source Code](https://github.com/leanote/leanote)) `GPL-2.0` `Go`
- [Markdown Edit](https://github.com/georgeOsdDev/markdown-edit/) - Online markdown editor/viewer. `MIT` `HTML5`
- [Meemo](https://meemo.minimal-space.de/) - Personal notes stream with Markdown support. ([Source Code](https://github.com/nebulade/meemo)) `MIT` `Nodejs`
- [minimalist-web-notepad](https://github.com/pereorga/minimalist-web-notepad) - Minimalist notepad.cc clone. ([Demo](https://notes.orga.cat/)) `Apache-2.0` `PHP`
- [MiniNote](https://github.com/muety/mininote) - Simple Markdown note-taking app with persistence. `MIT` `Nodejs`
- [Notea](https://cinwell.com/notea/) - Self-hosted note-taking app stored on S3-compatible storage. ([Source Code](https://github.com/QingWei-Li/notea)) `MIT` `Nodejs`
- [Notes'n'Todos](https://github.com/larspontoppidan/notesntodos) - Write notes and todos online in markdown with tag filtering and date sorting. ([Demo](https://lpss.dk/nnt-playground/)) `MIT` `Python`
- [Oddmuse](https://oddmuse.org/) - A simple wiki engine written in Perl. No database required. ([Source Code](https://github.com/kensanata/oddmuse)) `GPL-3.0` `Perl`
- [OpenNote](https://github.com/FoxUSA/OpenNote) - OpenNote was built to be an open web-based alternative to Microsoft OneNote (T) and EverNote. ([Demo](https://foxusa.github.io/OpenNote/OpenNote/#/folder)) `MIT` `HTML5`
- [Overleaf](https://www.overleaf.com/) - Web-based collaborative LaTeX editor. ([Source Code](https://github.com/overleaf/overleaf)) `AGPL-3.0` `Ruby`
- [Paperwork](https://paperwork.cloud) - OpenSource note-taking and archiving alternative to Evernote, Microsoft OneNote and Google Keep. ([Source Code](https://github.com/paperwork/paperwork)) `MIT` `PHP`
- [Plainpad](https://alextselegidis.com/get/plainpad/) - A modern note taking application for the cloud, utilizing the best features of progressive web apps technology. ([Demo](https://alextselegidis.com/try/plainpad/), [Source Code](https://github.com/alextselegidis/plainpad)) `GPL-3.0` `PHP`
- [savepad](https://github.com/shelltr/textpad) - Minimalist notepad based on notepad.cc. `MIT` `PHP`
- [Standard Notes](https://standardnotes.org) - Simple and private notes app. Protect your privacy while getting more done. That's Standard Notes. ([Demo](https://app.standardnotes.org/), [Source Code](https://github.com/standardnotes)) `GPL-3.0` `Ruby`
- [turndown](https://mixmark-io.github.io/turndown/) - HTML to Markdown converter written in Javascript. ([Source Code](https://github.com/mixmark-io/turndown)) `MIT` `Javascript`
- [Trilium Notes](https://github.com/zadam/trilium) - Trilium Notes is a hierarchical note taking application with focus on building large personal knowledge bases. `AGPL-3.0` `Nodejs`
- [Turtl](https://turtl.it/) - Totally private personal database and note taking app. ([Source Code](https://github.com/turtl)) `GPL-3.0` `CommonLisp`
- [Wreeto](https://wreeto.com) - Wreeto is an open source note-taking, knowledge management and wiki system built on top of Ruby on Rails framework. ([Source Code](https://github.com/chrisvel/wreeto_official)) `AGPL-3.0` `Ruby`
- [Writing](https://josephernest.github.io/writing/) - Lightweight distraction-free text editor, in the browser (Markdown and LaTeX supported). No lag when writing. ([Source Code](https://github.com/josephernest/writing)) `MIT` `Javascript`


### Office Suites

**[`^        back to top        ^`](#)**

- [Collabora Online Development Edition](https://www.collaboraoffice.com/code) - Collabora Online Development Edition (CODE) is a powerful LibreOffice-based online office that supports all major document, spreadsheet and presentation file formats, which you can integrate in your own infrastructure. ([Source Code](https://cgit.freedesktop.org/libreoffice/online/)) `MPL-2.0` `C++`
- [CryptPad](https://cryptpad.fr/) - CryptPad is the zero knowledge realtime collaborative editor (rich-text, files, source-code, ...). ([Source Code](https://github.com/xwiki-labs/cryptpad)) `AGPL-3.0` `Nodejs`
- [EtherCalc](https://ethercalc.net/) - Web spreadsheet. ([Source Code](https://github.com/audreyt/ethercalc)) `CPAL-1.0/Other` `Nodejs`
- [Etherpad](http://etherpad.org/) - Etherpad is a highly customizable Open Source online editor providing collaborative editing in really real-time. ([Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad-lite)) `Apache-2.0` `Nodejs`
- [Infinoted](https://github.com/gobby/gobby/wiki/Dedicated%20Server) - Server for [Gobby](https://github.com/gobby/gobby/wiki), a multi-platform collaborative text editor. ([Source Code](https://github.com/gobby/gobby)) `MIT` `C++`
- [ONLYOFFICE](https://helpcenter.onlyoffice.com/faq/server-opensource.aspx) - Office suite that enables you to manage documents, projects, team and customer relations in one place. ([Source Code](https://github.com/ONLYOFFICE/DocumentServer)) `AGPL-3.0` `Nodejs`
- [PHPOffice](https://github.com/PHPOffice) - PHPOffice contains libraries which permits to write and read files from most office suites. `LGPL-3.0` `PHP`
- [Rustpad](https://rustpad.io/) - Efficient and minimal collaborative code editor, self-hosted, no database required. ([Source Code](https://github.com/ekzhang/rustpad)) `MIT` `Rust`
- [WebODF](http://webodf.org/) - Tools and libraries to view and edit Open Document Format (ODF) files. ([Source Code](https://github.com/webodf/WebODF)) `AGPL-3.0` `HTML5`


### Password Managers

**[`^        back to top        ^`](#)**

- [Bitwarden](https://bitwarden.com/) `⚠` - Password manager with webapp, browser extension, and mobile app. ([Source Code](https://github.com/bitwarden/server)) `AGPL-3.0` `C#`
- [keeweb](https://keeweb.info/) - This webapp is a browser and desktop password manager compatible with KeePass databases. ([Source Code](https://github.com/keeweb/keeweb)) `MIT` `HTML5`
- [Padloc](https://padloc.app/) - A modern, open source password manager for individuals and teams. ([Source Code](https://github.com/padloc/padloc)) `GPL-3.0` `Nodejs`
- [Passbolt](https://www.passbolt.com/) - Password manager dedicated for managing passwords in a collaborative way on any Web server, using a MySQL database backend. ([Source Code](https://github.com/passbolt/passbolt_api)) `AGPL-3.0` `PHP`
- [PassIt](https://passit.io/) - Simple password manage with sharing features by group and user, but no administration interface. ([Demo](https://app.passit.io/), [Source Code](https://gitlab.com/passit)) `AGPL-3.0` `Python`
- [Passky](https://github.com/Rabbit-Company/Passky-Server) - Open source password manager with website, browser extension and desktop application. ([Demo](https://passky.org)) `GPL-3.0` `PHP`
- [PassWall](https://github.com/passwall/passwall-server) - Open source password manager. `AGPL-3.0` `Go`
- [Psono](https://psono.com/) - A promising password managers fully featured for teams. ([Demo](https://www.psono.pw), [Source Code](https://gitlab.com/psono)) `Apache-2.0` `Python`
- [Shaark](https://github.com/MarceauKa/shaark) - All in one platform for your links, stories, passwords and albums. Built with Laravel and Vue.js. `MIT` `PHP`
- [sysPass](http://www.syspass.org/) - Multiuser password management system. ([Demo](http://demo.syspass.org/), [Source Code](https://github.com/nuxsmin/sysPass)) `GPL-3.0` `PHP`
- [Teampass](http://teampass.net/) - Password manager dedicated for managing passwords in a collaborative way. One symmetric key is used to encrypt all shared/team passwords and stored server side in a file and the database. works on any server Apache, MySQL and PHP. ([Source Code](https://github.com/nilsteampassnet/TeamPass)) `GPL-3.0` `PHP`
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Lightweight Bitwarden server API implementation written in Rust. `GPL-3.0` `Rust`


### Pastebins

**[`^        back to top        ^`](#)**

- [0bin](https://github.com/Tygs/0bin) - Client side encrypted pastebin. ([Demo](https://0bin.net/)) `WTFPL` `Python`
- [bepasty](https://bepasty-server.readthedocs.io/en/latest/) - A pastebin for all kinds of files. ([Source Code](https://github.com/bepasty/bepasty-server)) `BSD-2-Clause` `Python`
- [bin](https://github.com/w4/bin) - a paste bin. `WTFPL/0BSD` `Rust`
- [cryptonote](https://cryptonote.me/) - Simple open source web application that lets users encrypt and share messages that can only be read once. ([Source Code](https://github.com/alainmeier/cryptonote)) `MIT` `Ruby`
- [dogbin](https://github.com/dogbin/dogbin) - The sexiest pastebin and URL shortener ever. `MIT` `Kotlin`
- [dpaste](https://dpaste.org/) - simple pastebin with multiple text and code option, with short url result easy to remember. ([Source Code](https://github.com/bartTC/dpaste)) `MIT` `Docker`
- [EdPaste](https://github.com/eahlys/EdPaste) - Self-hosted pastebin written in Laravel (PHP Framework). `MIT` `PHP`
- [ExBin](https://github.com/m1dnight/exbin) - A pastebin with public/private snippets and netcat server. ([Demo](https://exbin.call-cc.be)) `MIT` `Elixir`
- [fiche](https://github.com/solusipse/fiche) - Command line pastebin, all you need is netcat. ([Demo](http://termbin.com/)) `MIT` `C`
- [filite](https://github.com/raftario/filite) - A simple, light and standalone pastebin, URL shortener and file-sharing service. ([Demo](https://filite.raphaeltheriault.com)) `MIT` `Rust`
- [FlashPaper](https://github.com/AndrewPaglusch/FlashPaper) - A one-time encrypted zero-knowledge password/secret sharing application focused on simplicity and security. No database or complicated set-up required. ([Demo](https://flashpaper.io)) `MIT` `PHP`
- [Fugacious](https://fugacio.us) - Open source short-term secure messaging (OSSSM). ([Source Code](https://github.com/fugacious/fugacious)) `CC0-1.0` `Ruby`
- [Hastebin](https://haste.zneix.eu/about.md) - Open source pastebin. (This is a fork with extended maintenance). ([Demo](https://haste.zneix.eu), [Source Code](https://github.com/zneix/haste-server)) `MIT` `Nodejs`
- [LogPaste](https://github.com/mtlynch/logpaste) - Minimal pastebin web app that's easy to self-host and persists data to any S3-compatible backend. ([Demo](https://logpaste.com/)) `MIT` `Go`
- [mojopaste](http://search.cpan.org/dist/App-mojopaste/) - Perl based pastebin. ([Demo](http://p.thorsen.pm/), [Source Code](https://github.com/jhthorsen/app-mojopaste)) `Artistic-2.0` `Perl`
- [MokinToken](https://github.com/nexus-uw/mokintoken) - Clientside encrypted pastebin using tweetnacl. `Unlicense` `PHP`
- [NoteHub](https://github.com/chmllr/NoteHub) - Free and Hassle-free Pastebin for Markdown Pages. Simple, clean, password provided, generated-short link. `MIT` `Nodejs`
- [Paste](https://phpaste.sourceforge.io/) - Paste is forked from the original source pastebin.com used before it was bought. ([Source Code](https://github.com/jordansamuel/PASTE)) `GPL-3.0` `PHP`
- [prologic pastebin](https://git.mills.io/prologic/pastebin) - Simple pastebin service with convenient api and CLI. ([Demo](https://paste.mills.io)) `MIT` `Go`
- [mkaczanowski pastebin](https://github.com/mkaczanowski/pastebin) - Simple, fast, feature-rich, standalone pastebin service. `MIT` `Rust`
- [pasty](https://github.com/lus/pasty) - Pasty is a fast and lightweight code pasting server. ([Demo](https://pasty.lus.pm/)) `MIT` `Go`
- [pb](https://github.com/ptpb/pb) - Lightweight pastebin (and url shortener) built using flask. `GPL-3.0` `Python`
- [PrivateBin](https://privatebin.info/) - PrivateBin is a minimalist, opensource online pastebin/discussion board where the server has zero knowledge of hosted data. ([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
- [PurritoBin](https://github.com/PurritoBin/PurritoBin) - Ultra fast, minimalistic, encrypted command line paste-bin, where the server has no knowledge of the paste data. `ISC` `C++`
- [SharpPaste](https://github.com/phonicmouse/SharpPaste) - Cross-platform C# pastebin with client-side AES-256 encryption that just works. `MIT` `C#/NancyFX`
- [Snibox](https://snibox.github.io/) - Code snippets manager with attractive tag-oriented interface. ([Demo](https://snibox-demo.herokuapp.com/), [Source Code](https://github.com/snibox/snibox)) `MIT` `Ruby`
- [snipt](https://github.com/nicksergeant/snipt) - Long-term memory for coders. Share and store code snippets. `MIT` `Python`
- [SocksBin](https://github.com/magnumdingusedu/socksbin) - Simple and fast terminal based pastebin, with optional code highlighting. No specific client required, all you need is netcat. `GPL-3.0` `Python`
- [Spacebin](https://docs.spaceb.in) - Text-sharing for the final frontier — Reliable Pastebin server in Golang and Fiber. ([Demo](https://spaceb.in), [Source Code](https://github.com/spacebin-org/spirit)) `Apache-2.0` `Go`
- [Stikked](https://github.com/claudehohl/Stikked) - Advanced and beautiful pastebin. ([Demo](https://paste.scratchbook.ch/)) `GPL-3.0` `PHP`
- [Sup3rS3cretMes5age](https://github.com/algolia/sup3rS3cretMes5age) - Very simple (to deploy and to use) secret message service using Hashicorp Vault as a secrets storage. `MIT` `Go`


### Personal Dashboards

**[`^        back to top        ^`](#)**

_Related: [Monitoring](#monitoring)_

- [Baby Buddy](https://github.com/babybuddy/babybuddy) - Helps caregivers track baby sleep, feedings, diaper changes, and tummy time. ([Demo](https://babybuddy.herokuapp.com/)) `BSD-2-Clause` `Python`
- [Dashboard](https://github.com/phntxx/dashboard) - Minimalist homepage for organizing your web applications and bookmarks using JSON-files. `MIT` `Nodejs/Docker`
- [DashMachine](https://github.com/rmountjoy92/DashMachine) - Another web application bookmark dashboard, with fun features. `GPL-3.0` `Python`
- [Dashy](https://github.com/lissy93/dashy) - Feature-rich homepage for your homelab, with easy YAML configuration. ([Demo](https://dashy-demo-2.as93.net)) `MIT` `Nodejs/Docker`
- [Flame](https://github.com/pawelmalak/flame) - Flame is self-hosted startpage for your server. Easily manage your apps and bookmarks with built-in editors. `MIT` `Nodejs`
- [Habitica](https://habitica.com/) - Habit tracker app which treats your goals like a Role Playing Game. Previously called HabitRPG. ([Source Code](https://github.com/HabitRPG/habitica)) `GPL-3.0/CC-BY-NC-SA-3.0/CC-BY-SA-3.0` `Nodejs`
- [Heimdall](https://heimdall.site/) - Heimdall is an elegant solution to organise all your web applications. ([Source Code](https://github.com/linuxserver/Heimdall)) `MIT` `PHP`
- [Hiccup](https://designedbyashw.in/test/hiccup/) - A beautiful static homepage to get to your links and services quickly. It has built-in search, editing, PWA support and localstorage caching to easily organize your start page. ([Source Code](https://github.com/ashwin-pc/hiccup)) `MIT` `HTML5`
- [Homepage](https://github.com/tomershvueli/homepage) - Simple, standalone, self-hosted PHP page that is your window to your server and the web. `MIT` `PHP`
- [Homer](https://github.com/bastienwirtz/homer) - A dead simple static homepage to expose your server services, with an easy yaml configuration and connectivity check. `Apache-2.0` `HTML5`
- [Jmz HomeProxy](https://github.com/jmztaylor/homelab_proxy) - A simple and clean dashboard for self hosted services. `GPL-3.0` `PHP`
- [Organizr](https://github.com/causefx/Organizr) - Organizr aims to be your one stop shop for your Servers Frontend. `GPL-3.0` `PHP`
- [Personal management system](https://github.com/Volmarg/personal-management-system) - Central point for managing personal data (billings, payments, job holidays, notes etc.). ([Demo](http://personal-management-system.pl/)) `MIT` `PHP`
- [simple-dash](https://github.com/kutyla-philipp/simple-dash) - A simple, fully responsive Dashboard to forward to the services of your choice. ([Demo](https://kutyla-philipp.github.io/simple-dash/)) `MIT` `Javascript`
- [Smashing](https://smashing.github.io/) - Smashing, the spiritual successor to Dashing, is a Sinatra based framework that lets you build excellent dashboards. It looks especially great on TVs. ([Source Code](https://github.com/Smashing/smashing)) `MIT` `Ruby`
- [wger](http://wger.de/) - Web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de/en/dashboard), [Source Code](https://github.com/wger-project/wger)) `AGPL-3.0` `Python`
- [Your Spotify](https://github.com/Yooooomi/your_spotify) `⚠` - Allows you to record your Spotify listening activity and have statistics about them served through a Web application. `MIT` `Nodejs/Docker`


### Photo and Video Galleries

**[`^        back to top        ^`](#)**

- [Chevereto Free](https://chevereto.com/free) - Powerful and fast image hosting script that allows you to create your very own full featured image hosting website in just minutes. ([Source Code](https://github.com/Chevereto/Chevereto-Free)) `AGPL-3.0` `PHP`
- [Coppermine](http://coppermine-gallery.net/) - Multilingual photo gallery that integrates with various bulletin boards. Includes upload approval and password protected albums. ([Demo](http://coppermine-gallery.net/demo/cpg15x/), [Source Code](https://github.com/coppermine-gallery/cpg1.6.x)) `GPL-3.0` `PHP`
- [Damselfly](https://damselfly.info) - Server-based Digital Asset Management with workflow similar to Picasa. `GPL-3.0` `C#/.NET`
- [Fussel](https://github.com/cbenning/fussel) - Fussel is a static photo gallery generator. Easily generate a reactive gallery and host the optimized static folder of assets. `MIT` `Python`
- [Gallery CSS](https://benschwarz.github.io/gallery-css/) - Gallery.css is all CSS. Think: Simple, maintainable and understandable galleries without the use of Javascript. ([Source Code](https://github.com/benschwarz/gallery-css)) `MIT` `CSS`
- [HomeGallery](https://home-gallery.org) - Self-hosted open-source web gallery to browse personal photos and videos featuring tagging, mobile-friendly, and AI powered image discovery. ([Demo](https://demo.home-gallery.org), [Source Code](https://github.com/xemle/home-gallery)) `MIT` `Nodejs`
- [ImageStore](https://github.com/gregordr/ImageStore) - Self-hosted Google Photos alternative, with a very similar UI. ([Demo](https://gregordr.github.io/ImageStore/)) `Apache-2.0` `Nodejs/Docker`
- [LibrePhotos](https://github.com/LibrePhotos/librephotos) - Self hosted wannabe Google Photos clone, with a slight focus on cool graphs. `MIT` `Python`
- [Lychee](https://lycheeorg.github.io/) - Open source grid and album based photo-management-system. ([Source Code](https://github.com/LycheeOrg/Lychee)) `MIT` `PHP`
- [Mediagoblin](http://mediagoblin.org) - Free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc. ([Source Code](https://savannah.gnu.org/projects/mediagoblin)) `AGPL-3.0` `Python`
- [Photato](https://github.com/trebonius0/Photato) - Self-hosted photo gallery, accessible through a responsive WebUI. Directly uses and indexes a specific folder in the filesystem. `AGPL-3.0` `Java`
- [PhotoLight](https://github.com/thibaud-rohmer/PhotoLight) - The easiest photo gallery there is. `GPL-3.0` `PHP`
- [Photonix](https://photonix.org/) - A new web-based photo management application with object recognition, location awareness, color analysis and other ML algorithms. ([Demo](https://demo.photonix.org/), [Source Code](https://github.com/photonixapp/photonix)) `AGPL-3.0` `Python`
- [PhotoPrism](https://photoprism.org) - Personal photo management powered by Go and Google TensorFlow.  Browse, organize, and share your personal photo collection, using the latest technologies to automatically tag and find pictures. ([Source Code](https://github.com/photoprism/photoprism)) `MIT` `Go`
- [Photoview](https://photoview.github.io/) - A simple and user-friendly Photo Gallery for personal servers. It is made for photographers and aims to provide an easy and fast way to navigate directories, with thousands of high resolution photos. ([Demo](https://photos.qpqp.dk/), [Source Code](https://github.com/photoview/photoview)) `GPL-3.0` `Go`
- [Photo Stream](https://github.com/waschinski/photo-stream) - Minimalist self-hosted photo stream. ([Demo](https://floremotion.de/)) `MIT` `Ruby`
- [PiGallery 2](https://bpatrik.github.io/pigallery2/) - A directory-first photo gallery website, with a rich UI, optimised for running on low resource servers. ([Source Code](https://github.com/bpatrik/pigallery2)) `MIT` `Docker/Nodejs`
- [Piwigo](http://piwigo.org/) - Photo gallery software for the web, built by an active community of users and developers. ([Demo](http://piwigo.org/demo/), [Source Code](https://github.com/Piwigo/Piwigo)) `GPL-2.0` `PHP`
- [Plumi](http://plumi.org/) - Create your own sophisticated video-sharing site. ([Source Code](https://github.com/plumi/plumi.app)) `GPL-2.0` `Python`
- [Quru Image Server](https://quruimageserver.com/) - High performance dynamically resizing image server offering directory based access control cropping, rotation, color management and other tools. ([Demo](https://quruimageserver.com), [Source Code](https://github.com/quru/qis)) `AGPL-3.0` `Python`
- [sigal](https://github.com/saimn/sigal) - Yet another simple static gallery generator. `MIT` `Python`
- [UberGallery](http://www.ubergallery.net) - UberGallery is an easy to use, simple to manage, web photo gallery. UberGallery does not require a database and supports JPEG, GIF and PNG file types. Simply upload your images and UberGallery will automatically generate thumbnails and output HTML. ([Source Code](https://github.com/UberGallery/UberGallery)) `MIT` `PHP`
- [Zenphoto](http://www.zenphoto.org/) - Open-source gallery and CMS project. ([Source Code](https://github.com/zenphoto/zenphoto)) `GPL-2.0` `PHP`


### Polls and Events

**[`^        back to top        ^`](#)**

- [Calagator](http://calagator.org/) - Event aggregator. ([Source Code](https://github.com/calagator/calagator)) `MIT` `Ruby`
- [Clerk](https://github.com/AppMini/Clerk) - Simple event logger to keep track of periodic events, habits, etc. as they occur. `GPL-3.0` `PHP`
- [Croodle](https://github.com/jelhan/croodle) - Croodle is an end-to-end encrypted web application to schedule a date or to do a poll on any topic. `MIT` `Javascript`
- [dudle](http://primelife.ercim.eu/results/opensource/63-dudle) - Online scheduling application. ([Demo](https://dudle.inf.tu-dresden.de/), [Source Code](https://github.com/kellerben/dudle)) `AGPL-3.0` `Ruby`
- [Feedka](https://github.com/drabkirn/feedka) `⚠` - Open-source web application that can serve as a platform to get authentic, kindful, and constructive feedback from your friends, family, and co-workers. ([Demo](https://feedka.herokuapp.com)) `AGPL-3.0` `Ruby`
- [Fider](http://getfider.com) - Open source alternative to UserVoice for customer feedback. ([Demo](https://demo.fider.io), [Source Code](https://github.com/getfider/fider)) `MIT` `Go`
- [Framadate](https://framadate.org/) - Online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision. ([Demo](https://framadate.org/aqg259dth55iuhwm), [Source Code](https://git.framasoft.org/framasoft/framadate)) `CECILL-B` `PHP`
- [Gancio](https://gancio.org/) - A shared agenda for local communities. ([Demo](https://demo.gancio.org/), [Source Code](https://framagit.org/les/gancio)) `AGPL-3.0` `Nodejs`
- [hitobito](https://hitobito.com/en) - A web application to manage complex group hierarchies with members, events and a lot more. ([Demo](https://demo.hitobito.com/en/users/sign_in), [Source Code](https://github.com/hitobito/hitobito)) `AGPL-3.0` `Ruby`
- [JD Esurvey](https://www.jdsoft.com/jd-esurvey.html) - Open source enterprise survey web application. ([Source Code](https://github.com/JD-Software/JDeSurvey)) `AGPL-3.0` `Java`
- [Kyélà](http://kyela.net/) - Participation polls for group events. ([Demo](https://kyela.net/concert/), [Source Code](https://github.com/abienvenu/Kyela)) `AGPL-3.0` `PHP`
- [LimeSurvey](https://www.limesurvey.org) - Feature-rich Open Source web based polling software. Supports extensive survey logic. ([Demo](https://demo.limesurvey.org), [Source Code](https://github.com/LimeSurvey/LimeSurvey)) `GPL-2.0` `PHP`
- [Meetable](https://meetable.org) - Event aggregator. ([Demo](https://events.indieweb.org), [Source Code](https://github.com/aaronpk/Meetable)) `MIT` `PHP`
- [Mobilizon](https://mobilizon.org) - A federated tool that helps you find, create and organise events and groups. ([Demo](https://demo.mobilizon.org/), [Source Code](https://framagit.org/framasoft/mobilizon/)) `GPL-3.0` `Elixir`
- [Open Event Server](https://github.com/fossasia/open-event-server) - Enables organizers to manage events from concerts to conferences and meet-ups. `GPL-3.0` `Python`
- [PHPBack](http://www.phpback.org) - The open source feedback system. ([Demo](http://www.phpback.org/demo/), [Source Code](https://github.com/ivandiazwm/phpback)) `GPL-3.0` `PHP`


### Booking and Scheduling

- [Alf.io](https://alf.io/) - The open source ticket reservation system. ([Demo](https://demo.alf.io/authentication), [Source Code](https://github.com/alfio-event/alf.io)) `GPL-3.0` `Java`
- [Calendso](https://calendso.com/) - The open-source online appointment scheduling system. ([Demo](https://app.calendso.com/bailey), [Source Code](https://github.com/calendso/calendso)) `MIT` `Nodejs`
- [Easy!Appointments](http://easyappointments.org/) - A highly customizable web application that allows your customers to book appointments with you via the web. ([Demo](http://easyappointments.org/demo/), [Source Code](https://github.com/alextselegidis/easyappointments)) `GPL-3.0` `PHP`


### Proxy

**[`^        back to top        ^`](#)**

- [imgproxy](https://imgproxy.net/) - Fast and secure standalone server for resizing and converting remote images. It works great when you need to resize multiple images on the fly without preparing a ton of cached resized images or re-doing it every time the design changes. ([Source Code](https://github.com/imgproxy/imgproxy)) `MIT` `Go/Docker`
- [inlets](https://inlets.dev/) - Expose your local endpoints to the Internet - with a Kubernetes integration, Docker image and CLI available. `MIT` `Go/Docker`
- [iodine](http://code.kryo.se/iodine/) - IPv4 over DNS tunnel solution, enabling you to start up a socks5 proxy listener. ([Source Code](https://github.com/yarrick/iodine)) `ISC` `C`
- [microproxy](https://github.com/thekvs/microproxy) - lightweight non-caching HTTP/HTTPS proxy server. `MIT` `Go`
- [Nginx Proxy Manager](https://nginxproxymanager.com/) - Nginx Proxy Manager is an easy way to accomplish reverse proxying hosts with SSL termination. ([Source Code](https://github.com/jc21/nginx-proxy-manager)) `MIT` `Nodejs/Docker`
- [PHP-Proxy](https://www.php-proxy.com/) - Web proxy script built specifically to be fast, easy to modify and to support video sites such as YouTube. ([Demo](https://unblockvideos.com/), [Source Code](https://github.com/Athlon1600/php-proxy-app)) `MIT` `PHP`
- [Pomerium](https://pomerium.io) - An identity-aware reverse proxy, successor to now obsolete oauth_proxy. It inserts an OAuth step before proxying your request to the backend, so that you can safely expose your self-hosted websites to public Internet. ([Source Code](https://github.com/pomerium/pomerium)) `Apache-2.0` `Go`
- [Pound](http://www.apsis.ch/pound/) - Light-weight reverse proxy and load balancer for HTTP/HTTPS. `GPL-2.0` `C`
- [Privoxy](http://www.privoxy.org) - Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk. `GPL-2.0` `C`
- [Redbird](https://github.com/OptimalBits/redbird) - A modern reverse proxy for node that includes cluster, HTTP2, LetsEncrypt, and Docker support. `BSD-2-Clause` `Javascript`
- [sish](https://github.com/antoniomika/sish) - Open source serveo/ngrok alternative providing HTTP(S)/WS(S)/TCP tunnels to localhost using only SSH. `MIT` `Go`
- [socks5-proxy-server](https://github.com/nskondratev/socks5-proxy-server) - SOCKS5 proxy server with built-in authentication and Telegram-bot for user management and user statistics on data spent (handy when you pay per GB of data). It is dockerised and simple to install. `Apache-2.0` `Nodejs`
- [SOCKS5Engine](https://github.com/VeeSecurity/SOCKS5Engine) - Lightweight & resource-efficient SOCKS5 proxy server, optimized for high-load. `AGPL-3.0` `Go`
- [Squid](http://www.squid-cache.org/) - Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. ([Source Code](https://code.launchpad.net/squid)) `GPL-2.0` `C`
- [Swiperproxy](https://swiperproxy.github.io/) - Lightning-fast, open source web proxy that is easy for you to run and customize. ([Source Code](https://github.com/swiperproxy/swiperproxy)) `MIT` `Python`
- [Tinyproxy](https://tinyproxy.github.io/) - Light-weight HTTP/HTTPS proxy daemon. ([Source Code](https://github.com/tinyproxy/tinyproxy)) `GPL-2.0` `C`
- [Traefik](https://traefik.io/) - Træfɪk is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It supports several backends (Docker, Swarm, Mesos/Marathon, …) to manage its configuration automatically and dynamically. ([Source Code](https://github.com/traefik/traefik)) `MIT` `Go`


### Read-it-later Lists

**[`^        back to top        ^`](#)**

- [Readflow](https://readflow.app) - Lightweight news reader with modern interface and features: full-text search, automatic categorization, archiving, offline support, notifications... ([Source Code](https://github.com/ncarlier/readflow)) `MIT` `Go`
- [Wallabag](https://www.wallabag.org) - Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability. ([Demo](https://app.wallabag.it/register/), [Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`


### Resource Planning

**[`^        back to top        ^`](#)**

- [farmOS](http://farmos.org/) - Web-based farm record keeping application. ([Source Code](https://github.com/farmOS/farmOS)) `GPL-2.0` `PHP`
- [grocy](https://grocy.info/) - ERP beyond your fridge - grocy is a web-based self-hosted groceries & household management solution for your home. ([Demo](https://en.demo.grocy.info/), [Source Code](https://github.com/grocy/grocy)) `MIT` `PHP`
- [Tania](https://github.com/Tanibox/tania-core) - Tania is a free and open source farming management system for everyone. You can manage your areas, reservoirs, farm tasks, inventories, and the crop growing progress. `Apache-2.0` `Go`


### Resource Planning - Enterprise Resource Planning

**[`^        back to top        ^`](#)**

- [Dolibarr](https://www.dolibarr.org/) - Dolibarr ERP CRM is a modern software package to manage your company or foundation activity (contacts, suppliers, invoices, orders, stocks, agenda, accounting, ...). ([Demo](https://www.dolibarr.org/onlinedemo.php), [Source Code](https://github.com/Dolibarr/dolibarr)) `GPL-3.0-or-later` `PHP`
- [ERPNext](https://erpnext.com) - Free open source ERP system. ([Source Code](https://github.com/frappe/erpnext)) `GPL-3.0` `Python`
- [LedgerSMB](https://ledgersmb.org/) - Integrated accounting and ERP system for small and midsize businesses, with double entry accounting, budgeting, invoicing, quotations, projects, orders and inventory management, shipping and more. ([Demo](https://demo.cloud.efficito.com/erp/1.5/login.pl), [Source Code](https://github.com/ledgersmb/LedgerSMB)) `GPL-2.0` `Perl`
- [Odoo](http://odoo.com) - Free open source ERP system. ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo)) `LGPL-3.0` `Python`
- [OFBiz](https://ofbiz.apache.org/) - FOSS enterprise resource planning system with a suite of business applications flexible enough to be used across any industry. ([Source Code](https://svn.apache.org/viewvc/ofbiz/)) `Apache-2.0` `Java`
- [Tryton](http://www.tryton.org/) - Free open source business solution. ([Demo](http://www.tryton.org/download.html), [Source Code](https://hg.tryton.org/)) `GPL-3.0` `Python`


### Search Engines

**[`^        back to top        ^`](#)**

- [Ambar](https://ambar.cloud) - Document Search Engine (OCR, Store & Search). ([Demo](https://app.ambar.cloud/), [Source Code](https://github.com/RD17/ambar)) `MIT` `Nodejs/Python`
- [Gigablast](http://www.gigablast.com/) - open source search engine. ([Source Code](https://github.com/gigablast/open-source-search-engine)) `Apache-2.0` `C++`
- [Jina](https://github.com/jina-ai/jina/) - Cloud-native neural search framework for any kind of data. `MIT` `Python`
- [MeiliSearch](https://meilisearch.com) - Ultra relevant, instant and typo-tolerant full-text search API. ([Source Code](https://github.com/meilisearch/MeiliSearch)) `MIT` `Rust`
- [Searx](https://searx.github.io/searx/) - Privacy-respecting, hackable metasearch engine. ([Demo](https://searx.me/), [Source Code](https://github.com/searx/searx)) `AGPL-3.0` `Python`
- [sist2](https://github.com/simon987/sist2) - Lightning-fast file system indexer and search tool. ([Demo](https://sist2.simon987.net/)) `GPL-3.0` `C`
- [Typesense](https://typesense.org) - Blazing fast, typo-tolerant open source search engine optimized for developer happiness and ease of use. ([Source Code](https://github.com/typesense/typesense)) `GPL-3.0` `C++`
- [Yacy](http://yacy.net/en/index.html) - Peer based, decentralized search engine server. ([Demo](http://search.yacy.net/), [Source Code](https://github.com/yacy/yacy_search_server)) `GPL-2.0` `Java`


### Software Development

**[`^        back to top        ^`](#)**


### Software Development - Project Management

_Related: [Ticketing](#ticketing), [Task management & To-do lists](#task-management--to-do-lists)_

_See also: [awesome-sysadmin/Code Review](https://github.com/awesome-foss/awesome-sysadmin#code-review)_

- [Bonobo Git Server](https://bonobogitserver.com/) - Set up your own self hosted git server on IIS for Windows. Manage users and have full control over your repositories with a nice user friendly graphical interface. ([Source Code](https://github.com/jakubgarfield/Bonobo-Git-Server)) `MIT` `C#`
- [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Distributed version control system featuring wiki and bug tracker. `BSD-2-Clause-FreeBSD` `C`
- [Goodwork](https://usegood.work/) - Self hosted project management and collaboration tool powered by Laravel & VueJS. ([Demo](https://github.com/iluminar/goodwork#demo), [Source Code](https://github.com/iluminar/goodwork)) `MIT` `PHP`
- [Gitblit](http://gitblit.com/) - Pure Java stack for managing, viewing, and serving Git repositories. ([Source Code](https://github.com/gitblit/gitblit)) `Apache-2.0` `Java`
- [gitbucket](https://gitbucket.github.io/gitbucket-news/) - Easily installable GitHub clone powered by Scala. ([Source Code](https://github.com/gitbucket/gitbucket)) `Apache-2.0` `Scala/Java`
- [Gitea](https://gitea.io) - Community managed fork of Gogs, lightweight code hosting solution. ([Demo](https://try.gitea.io), [Source Code](https://github.com/go-gitea/gitea)) `MIT` `Go`
- [GitLab](http://gitlab.org/) - Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis. ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-foss)) `MIT` `Ruby`
- [Gitlist](http://gitlist.org/) - Web-based git repository browser - GitList allows you to browse repositories using your favorite browser, viewing files under different revisions, commit history and diffs. ([Source Code](https://github.com/klaussilveira/gitlist)) `BSD-3-Clause` `PHP`
- [Gitolite](http://gitolite.com/gitolite/index.html) - Gitolite allows you to setup git hosting on a central server, with fine-grained access control and many more powerful features. ([Source Code](https://github.com/sitaramc/gitolite)) `GPL-2.0` `Perl`
- [GitPrep](http://gitprep.yukikimoto.com/) - Portable Github clone. ([Demo](http://perlcodesample.sakura.ne.jp/gitprep/gitprep.cgi), [Source Code](https://github.com/yuki-kimoto/gitprep)) `Artistic-2.0` `Perl`
- [Git WebUI](https://github.com/alberthier/git-webui) - Standalone web based user interface for git repositories. `Apache-2.0` `Python`
- [Gogs](https://gogs.io/) - Painless self-hosted Git Service written in Go. ([Demo](https://try.gogs.io/), [Source Code](https://github.com/gogs/gogs)) `MIT` `Go`
- [Kallithea](https://kallithea-scm.org/) - Source code management system that supports two leading version control systems, Mercurial and Git, with a web interface. ([Source Code](https://kallithea-scm.org/repos/kallithea)) `GPL-3.0` `Python`
- [Klaus](https://github.com/jonashaag/klaus) - Simple, easy-to-set-up Git web viewer that Just Works. `ISC` `Python`
- [Lavagna](http://lavagna.io) - Lavagna is an open-source issue/project management tool designed for small teams. Lightweight, pure Java, easy to install, easy to use. ([Source Code](https://github.com/digitalfondue/lavagna)) `GPL-3.0` `Java`
- [Lazylead](https://lazylead.org) `⚠` - Eliminate the annoying work within ticketing systems (Jira, GitHub, Trello). Allows to automate daily actions like tickets fields verification, email notifications by JQL/GQL, meeting requests to your (or teammates) calendar. ([Source Code](https://github.com/dgroup/lazylead)) `MIT` `Ruby`
- [Leantime](https://leantime.io) - Leantime is a lean project management system for small teams and startups helping to manage projects from ideation through delivery. ([Source Code](https://github.com/leantime/leantime)) `GPL-2.0` `PHP`
- [Microgit](https://github.com/microgit-com/microgit) - Git hosting service made in Crystal and Lucky. `MIT` `Crystal`
- [Octobox](https://octobox.io/) `⚠` - Take back control of your GitHub Notifications. ([Source Code](https://github.com/octobox/octobox)) `AGPL-3.0` `Ruby`
- [OpenProject](https://www.openproject.org) - OpenProject is a web-based project management system. ([Source Code](https://github.com/opf/openproject)) `GPL-3.0` `Ruby`
- [Pagure](https://pagure.io/pagure) - A lightweight, powerful, and flexible git-centric forge with features laying the foundation for federated and decentralized development. ([Demo](https://pagure.io/)) `GPL-2.0` `Python`
- [Phabricator](http://phabricator.org/) - Collection of web applications that help build better software. ([Demo](https://secure.phabricator.com/), [Source Code](https://github.com/phacility/phabricator)) `Apache-2.0` `PHP`
- [Phproject](http://www.phproject.org/) - High performance full-featured project management system. ([Demo](http://demo.phproject.org/), [Source Code](https://github.com/Alanaktion/phproject)) `GPL-3.0` `PHP`
- [ProjeQtOr](https://www.projeqtor.org/) - A complete, mature, multi-user project management system with extensive functionality for all phases of a project. ([Demo](https://demo.projeqtor.org/), [Source Code](https://sourceforge.net/p/projectorria/code/HEAD/tree/branches/)) `AGPL-3.0` `PHP`
- [Re:Backlogs](https://github.com/kaishuu0123/rebacklogs) - Project management and collaboration tool powered by Ruby on Rails & VueJS. ([Demo](https://rebacklogs.saino.me/users/sign_up)) `MIT` `Ruby`
- [Redmine](http://www.redmine.org/) - Redmine is a flexible project management web application. ([Demo](http://demo.redmine.org/), [Source Code](https://svn.redmine.org/redmine/)) `GPL-2.0` `Ruby`
- [RhodeCode](https://rhodecode.com/) - RhodeCode is an open source platform for software development teams. It unifies and simplifies repository management for Git, Subversion, and Mercurial. ([Source Code](https://code.rhodecode.com/)) `AGPL-3.0` `Python`
- [SCM Manager](https://www.scm-manager.org/) - The easiest way to share and manage your Git, Mercurial and Subversion repositories over http. ([Source Code](https://github.com/scm-manager/scm-manager)) `BSD-3-Clause` `Java`
- [Taiga](https://taiga.io/) - Agile Project Management Tool based on the Kanban and Scrum methods. ([Source Code](https://github.com/taigaio)) `AGPL-3.0` `Python`
- [Titra](https://titra.io/en/free-time-tracking-online/) - Time-tracking solution for freelancers and small teams. ([Demo](https://app.titra.io/try), [Source Code](https://github.com/kromitgmbh/titra)) `GPL-3.0` `Javascript`
- [Trac](http://trac.edgewall.org/) - Trac is an enhanced wiki and issue tracking system for software development projects. `BSD-3-Clause` `Python`
- [Tuleap](https://www.tuleap.org/) - Tuleap is a libre suite to plan, track, code and collaborate on software projects. ([Source Code](https://tuleap.net/plugins/git/tuleap/tuleap/stable?p=tuleap%2Fstable.git&a=tree)) `GPL-2.0` `PHP`
- [UVDesk](https://www.uvdesk.com/) - UVDesk community is a service oriented, event driven extensible opensource helpdesk system that can be used by your organization to provide efficient support to your clients effortlessly whichever way you imagine. ([Demo](https://demo.uvdesk.com/), [Source Code](https://github.com/uvdesk/community-skeleton)) `MIT` `PHP`
- [ZenTao](http://www.zentao.pm/) - An agile(scrum) project management system/tool. ([Demo](http://demo.zentao.pm/user-login.html), [Source Code](https://github.com/easysoft/zentaopms)) `ZPL-1.2` `PHP`

### Software Development - Bug Trackers

**Please visit [Ticketing](#ticketing)**


### Software Development - IDE & Tools

- [Appsmith](https://www.appsmith.com/) - Cloud or self-hosted open-source platform to build admin panels, CRUD apps and workflows. Build everything you need, 10x faster. ([Source Code](https://github.com/appsmithorg/appsmith)) `Apache-2.0` `Java/Docker`
- [Atheos](https://www.atheos.io) - Web-based IDE framework with a small footprint and minimal requirements, continued from Codiad. ([Source Code](https://github.com/Atheos/Atheos)) `MIT` `PHP`
- [Babelfish](https://github.com/bblfsh/bblfshd) - Self-hosted server for source code parsing. It can parse any file, in any supported language, extract an Abstract Syntax Tree from it, and convert it to a Universal Abstract Syntax Tree which can enable further analysis and transformation. `GPL-3.0` `Go`
- [Code-Server](https://coder.com/) - Visual Studio Code in the browser, hosted on a remote server. ([Source Code](https://github.com/cdr/code-server)) `MIT` `Nodejs/Docker`
- [Eclipse Che](http://www.eclipse.org/che/) - Open source workspace server and cloud IDE. ([Source Code](https://github.com/eclipse/che)) `EPL-1.0` `Docker/Java`
- [Gitpod](https://gitpod.io/) - Online IDE for GitHub and GitLab. ([Demo](https://gitpod.io/#https://github.com/awesome-selfhosted/awesome-selfhosted), [Source Code](https://github.com/gitpod-io/self-hosted)) `EPL-2.0` `Go/Docker`
- [Hakatime](https://github.com/mujx/hakatime) - WakaTime server implementation with analytics dashboard. `Unlicense` `Haskell`
- [HttPlaceholder](https://github.com/dukeofharen/httplaceholder) - Quickly mock away any webservice using HttPlaceholder. HttPlaceholder lets you specify what the request should look like and what response needs to be returned. `MIT` `C#`
- [ICEcoder](https://icecoder.net/) - ICEcoder is a web IDE / browser based code editor, which allows you to develop websites directly within the web browser. ([Demo](http://demo.icecoder.net/ICEcoder/), [Source Code](https://github.com/icecoder/ICEcoder)) `MIT` `PHP`
- [JS Bin](http://jsbin.com/) - Open source collaborative web development debugging tool. ([Source Code](https://github.com/jsbin/jsbin)) `MIT` `Nodejs`
- [Judge0 CE](https://judge0.com) - Open source API to compile and run source code. ([Source Code](https://github.com/judge0/judge0)) `GPL-3.0` `Ruby`
- [JupyterLab](http://jupyterlab.github.io/jupyterlab/) - Web-based environment for interactive and reproducible computing. ([Demo](https://mybinder.org/v2/gh/jupyterlab/jupyterlab-demo/try.jupyter.org?urlpath=lab), [Source Code](https://github.com/jupyterlab/jupyterlab/)) `BSD-3-Clause` `Python/Docker`
- [Lowdefy](https://www.lowdefy.com/) - Build internal tools, BI dashboards, admin panels, CRUD apps and workflows in minutes using YAML / JSON on an self-hosted, open-source platform. Connect to your data sources, host via Serverless, Netlify or Docker. ([Source Code](https://github.com/lowdefy/lowdefy)) `Apache-2.0` `Nodejs`
- [ML Workspace](https://github.com/ml-tooling/ml-workspace) - All-in-one web-based IDE for machine learning and data science. `Apache-2.0` `Docker`
- [Regexr](http://regexr.com/) - RegExr is a HTML/JS based tool for creating, testing, and learning about Regular Expressions. ([Source Code](https://github.com/gskinner/regexr)) `MIT` `Nodejs`
- [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - Web browser based IDE for R. ([Source Code](https://github.com/rstudio/rstudio)) `AGPL-3.0` `Java/C++`
- [Slingcode](https://slingcode.net/) - Web app IDE and computing platform in a single static HTML file. ([Demo](https://slingcode.net/slingcode.html), [Source Code](https://github.com/chr15m/slingcode/)) `MIT` `HTML`
- [sourcegraph](https://sourcegraph.com) - Sourcegraph is a fast, open-source, fully-featured code search and navigation engine written in Go. ([Source Code](https://github.com/sourcegraph/sourcegraph)) `Apache-2.0` `Go`
- [Wakapi](https://wakapi.dev/) - Tracking tool for coding statistics, compatible with WakaTime. ([Source Code](https://github.com/muety/wakapi)) `GPL-3.0` `Go`

### Software Development - Continuous Integration & Deployment

**Please visit [awesome-sysadmin/Continuous Integration & Continuous Deployment](https://github.com/awesome-foss/awesome-sysadmin#continuous-integration--continuous-deployment)**


### Software Development - UX Testing

- [Uier](https://github.com/sjoerdvanderhoorn/Uier) - Codeless or low-code User Experience test editing and management using Selenium to perform testing or UI automation. Uier tends to be a free self hostable alternative to Applitools, Endtest, Ghost Inspector, Usetrace, Screenster and many others. `Apache-2.0` `Nodejs`
- [Selenoid](http://aerokube.com/selenoid/latest/) - Lightweight Selenium hub implementation launching browsers within Docker containers. ([Source Code](https://github.com/aerokube/selenoid)) `Apache-2.0` `Go`


### Software Development - FaaS & Serverless

_[Serverless computing - Wikipedia](https://en.wikipedia.org/wiki/Serverless_computing)_

- [Appwrite](https://appwrite.io) - End to end backend server for web, native, and mobile developers 🚀. ([Source Code](https://github.com/appwrite/appwrite)) `BSD-3-Clause` `PHP`
- [fx](https://github.com/metrue/fx) - fx is a tool to help you do Function as a Service with painless on your own servers. `MIT` `Go`
- [IronFunctions](https://github.com/iron-io/functions) - The serverless microservices platform by [iron.io](https://www.iron.io/). `Apache-2.0` `Go`
- [LocalStack](https://localstack.cloud/) - LocalStack is a fully functional local AWS cloud stack. This includes Lambda for serverless computation. ([Source Code](https://github.com/localstack/localstack)) `Apache-2.0` `Python/Other`
- [OpenFaaS](https://www.openfaas.com/) - Serverless Functions Made Simple for Docker & Kubernetes. ([Source Code](https://github.com/openfaas/faas)) `MIT` `Go`
- [Trusted-CGI](https://github.com/reddec/trusted-cgi) - Lightweight self-hosted lambda/applications/cgi/serverless-functions platform. `MIT` `Go`


### Software Development - API Management

- [DreamFactory](https://www.dreamfactory.com/) - Turns any SQL/NoSQL/Structured data into Restful API. ([Source Code](https://github.com/dreamfactorysoftware/dreamfactory)) `Apache-2.0` `PHP`
- [form.io](https://form.io) - A REST API building platform that utilizes a drag & drop form builder, and is application framework agnostic. Contains open source and enterprise version. ([Demo](https://portal.form.io), [Source Code](https://github.com/formio)) `MIT` `Nodejs`
- [Fusio](http://www.fusio-project.org/) - Open-source API management platform which helps to build and manage REST APIs. ([Demo](http://fusio-project.org/demo), [Source Code](https://github.com/apioo/fusio)) `AGPL-3.0` `PHP`
- [Hapttic](https://github.com/jsoendermann/hapttic) - Simple HTTP server that forwards all requests to a shell script to handle webhooks you receive. `Apache-2.0` `Go`
- [Hasura](https://hasura.io) - Fast, instant realtime GraphQL APIs on Postgres with fine grained access control, also trigger webhooks on database events. ([Source Code](https://github.com/hasura/graphql-engine)) `Apache-2.0` `Haskell`
- [Hoppscotch](https://hoppscotch.io) - A free, fast and beautiful API request builder. ([Source Code](https://github.com/hoppscotch/hoppscotch)) `MIT` `Nodejs/Vue/Nuxt`
- [Kong](https://konghq.com/kong/) - The World’s Most Popular Open Source Microservice API Gateway and Platform. ([Source Code](https://github.com/Kong/kong)) `Apache-2.0` `Lua`
- [Lura](https://luraproject.org/) - Open source High-Performance API Gateway. ([Source Code](https://github.com/luraproject/lura)) `Apache-2.0` `Go`
- [Para](http://www.paraio.org) - Flexible and modular backend framework/server for object persistence, API development and authentication. ([Source Code](https://github.com/erudika/para)) `Apache-2.0` `Java`
- [Pizzly](https://github.com/bearer/pizzly) - Open-source API Integrations Manager that provides everything a developer needs to interact with OAuth based APIs. `MIT` `Nodejs`
- [Tyk](https://tyk.io) - Fast and scalable open source API Gateway. Out of the box, Tyk offers an API Management Platform with an API Gateway, API Analytics, Developer Portal and API Management Dashboard. ([Source Code](https://github.com/TykTechnologies/tyk)) `MPL-2.0` `Go`


### Software Development - Documentation Generators

_Related: [Static site generators](#static-site-generators)_

- [Docstore](http://haldean.org/) - Static document hosting without any server-side processing, does not require you to recompile every time you change an article. Clone the repository and add articles in the text/ directory to get started. ([Source Code](https://github.com/haldean/docstore)) `BSD-3-Clause` `Javascript`
- [Flatdoc](http://ricostacruz.com/flatdoc/) - Small Javascript file that fetches Markdown files and renders them as full pages. `MIT` `Javascript`
- [markdown-tree](https://github.com/mil/markdown-tree) - Serve a hierarchy / tree directory of markdown files. Use intended for small sites built in markdown. `MIT` `Ruby`
- [Read the Docs](https://readthedocs.org/) - Host documentation, making it fully searchable and easy to find; import your docs using any major version control system, including Mercurial, Git, Subversion, and Bazaar. ([Demo](https://readthedocs.org/projects/), [Source Code](https://github.com/readthedocs/readthedocs.org)) `MIT` `Python`


### Software Development - Localization

- [Accent](https://www.accent.reviews/) - Open-source, self-hosted, developer-oriented translation tool. ([Source Code](https://github.com/mirego/accent)) `BSD-3-Clause` `Elixir`
- [Localizer](https://localizer.dev) - Free self-hosted open-source crowd-translating service for your product. ([Demo](https://localize.todorant.com), [Source Code](https://github.com/backmeupplz/localizer-backend)) `MIT` `Nodejs/Docker`
- [Pootle](http://pootle.translatehouse.org) - Online translation and localization tool. ([Source Code](https://github.com/translate/pootle)) `GPL-3.0` `Python`
- [Traduora](https://traduora.com) - Translation management platform for teams. ([Source Code](https://github.com/ever-co/ever-traduora)) `AGPL-3.0` `Docker/Nodejs`
- [Weblate](https://weblate.org) - Web-based translation tool with tight version control integration. ([Demo](https://demo.weblate.org), [Source Code](https://github.com/WeblateOrg/weblate)) `GPL-3.0` `Python`
- [Zanata](http://zanata.org) - Web-based translation platform for translators, content creators and developers to manage localisation projects. ([Source Code](https://github.com/zanata/zanata-platform)) `GPL-2.0` `Java`


### Static Site Generators

**[`^        back to top        ^`](#)**

**Please visit [staticsitegenerators.net](https://staticsitegenerators.net), [staticgen.com](https://www.staticgen.com)**


### Task Management & To-do Lists

**[`^        back to top        ^`](#)**

_Related: [Software Development - Project Management](#software-development---project-management), [Ticketing](#ticketing)._

- [Focalboard](https://www.focalboard.com/) - An open source, self-hosted alternative to Trello, Notion, and Asana. It helps define, organize, track and manage work across individuals and teams. ([Source Code](https://github.com/mattermost/focalboard), [Clients](https://www.focalboard.com/download/personal-edition/desktop/)) `MIT/AGPL-3.0/Apache-2.0` `Nodejs/Go`
- [Kanbana](https://github.com/SrGMC/kanbana) - Create boards to track users and projects from flat markdown files. Forked from Crepido. `MIT` `Nodejs`
- [Kanboard](http://kanboard.net/) - Simple and open source visual task board. ([Source Code](https://github.com/kanboard/kanboard)) `MIT` `PHP`
- [myTinyTodo](http://www.mytinytodo.net/) - Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. ([Demo](http://www.mytinytodo.net/demo/), [Source Code](https://github.com/maxpozdeev/mytinytodo/)) `GPL-2.0` `PHP`
- [Nullboard](https://github.com/apankrat/nullboard) - Single-page minimalist kanban board; compact, highly readable and quick to use. `BSD-2-Clause` `Javascript`
- [tasks.php](https://github.com/lgg/tasks.php) - Simple task/todo list that uses a JSON text file for the tasks. `MIT` `PHP`
- [Planka](https://planka.app/) - Open source Trello alternative. ([Demo](https://plankanban.github.io/planka/#/), [Source Code](https://github.com/plankanban/planka)) `MIT` `Nodejs`
- [Restyaboard](http://restya.com/board/) - Open source Trello-like kanban board. ([Demo](http://restya.com/board/demo.html), [Source Code](https://github.com/RestyaPlatform/board)) `OSL-3.0` `PHP`
- [Task Keeper](https://github.com/nymanjens/piga) - List editor for power users, backed by a self-hosted server. `Apache-2.0` `Scala`
- [TaskBoard](http://taskboard.matthewross.me/) - Kanban-inspired app for keeping track of things that need to get done. ([Demo](https://taskboard.matthewross.me/demo.html), [Source Code](https://github.com/kiswa/TaskBoard)) `MIT` `PHP`
- [Taskfreak](http://www.taskfreak.com/original) - Simple but efficient web based task manager written in PHP. `GPL-3.0` `PHP`
- [Tasks](https://github.com/m1guelpf/tasks) - Simple tasks and notes manager written in PHP, jQuery and Bootstrap using a custom flat file database. `MPL-2.0` `PHP`
- [thewhitetulip Tasks](https://github.com/thewhitetulip/Tasks) - Kanban based to-do list manager written in Go. `MIT` `Go`
- [Taskord](https://taskord.com) - Get things done socially with community of makers. ([Source Code](https://gitlab.com/yo/taskord)) `MIT` `PHP`
- [Taskwarrior](https://taskwarrior.org/) - Taskwarrior is Free and Open Source Software that manages your TODO list from your command line. It is flexible, fast, efficient, and unobtrusive. It does its job then gets out of your way. ([Source Code](https://taskwarrior.org/download/#git)) `MIT` `C++`
- [todo](https://git.mills.io/prologic/todo) - Simple todo list manager. ([Demo](https://todo.mills.io)) `MIT` `Go`
- [todoMini](https://www.todomini.app/) - Mobile friendly zero-feature TODO list web app. Unix philosophy. ([Demo](https://appmini.github.io/todoMini/?demo), [Source Code](https://github.com/appMini/todoMini)) `GPL-3.0` `PHP/Java`
- [Tracks](http://www.getontracks.org/) - Web-based application to help you implement David Allen’s [Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done) methodology. ([Source Code](https://github.com/TracksApp/tracks)) `GPL-2.0` `Ruby`
- [Vikunja](https://vikunja.io/) - The to-do app to organize your life. ([Demo](https://try.vikunja.io/login), [Source Code](https://kolaente.dev/vikunja/)) `GPL-3.0` `Go`
- [Wekan](https://wekan.github.io/) - Open-source Trello-like kanban. ([Source Code](https://github.com/wekan/wekan)) `MIT` `Nodejs`


### Ticketing

**[`^        back to top        ^`](#)**

_Related: [Task management & To-do lists](#task-management--to-do-lists), [Software Development - Project Management](#software-development---project-management)_

- [Bugzilla](https://www.bugzilla.org/) - General-purpose bugtracker and testing tool originally developed and used by the Mozilla project. `MPL-2.0` `Perl`
- [Bumpy Booby](http://bumpy-booby.derivoile.fr/) - Simple, responsive and highly customizable PHP bug tracking system. ([Source Code](https://github.com/piero-la-lune/Bumpy-Booby)) `MIT` `PHP`
- [django-todo](http://django-todo.org/) - django-todo is a pluggable, multi-user, multi-group, multi-list todo and ticketing system - a reusable app designed to be dropped into any existing Django project. ([Source Code](https://github.com/shacker/django-todo)) `BSD-3-Clause` `Python/Django`
- [Erxes](https://erxes.io/install/) - Marketing, sales, and customer service platform designed to help businesses attract more engaged customers. ([Demo](https://demo.erxes.io/), [Source Code](https://github.com/erxes/erxes)) `GPL-3.0` `Javascript`
- [Flyspray](http://www.flyspray.org/) - Uncomplicated, web-based bug tracking system. ([Source Code](https://github.com/Flyspray/flyspray)) `GPL-2.0` `PHP`
- [FreeScout](https://github.com/freescout-helpdesk/freescout) - Open source clone of Help Scout: email-based customer support application, help desk and shared mailbox. `AGPL-3.0` `PHP`
- [Helpy](https://helpy.io) - Helpy is a modern, open source helpdesk customer support application. Features include knowledgebase, community discussions and support tickets integrated with email. ([Demo](https://demo.helpy.io), [Source Code](https://github.com/helpyio/helpy)) `MIT` `Ruby`
- [HuBoard](https://github.com/huboard/huboard) `⚠` - Instant project management for your GitHub issues (Connects directly GitHub API). `MIT` `Ruby`
- [MantisBT](https://www.mantisbt.org/) - Self hosted bug tracker, fits best for software development. ([Demo](https://www.mantisbt.org/bugs/my_view_page.php), [Source Code](https://github.com/mantisbt/mantisbt)) `GPL-2.0` `PHP`
- [OpenSupports](https://www.opensupports.com/) - Multi language ticket system with FAQ, role management, metrics and canned response features. ([Demo](https://www.opensupports.com/demo/), [Source Code](https://github.com/opensupports/opensupports)) `GPL-3.0` `PHP`
- [osTicket](http://osticket.com/) - Manage, organize and archive all your support requests and responses in one place. ([Source Code](https://github.com/osTicket/osTicket)) `GPL-2.0` `PHP`
- [Request Tracker](https://www.bestpractical.com/rt/) - An enterprise-grade issue tracking system. ([Source Code](https://github.com/bestpractical/rt)) `GPL-2.0` `Perl`
- [Sentry On-Premise](https://github.com/getsentry/onpremise) - A powerful error tracking platform with wide language support and a robust API. ([Source Code](https://github.com/getsentry/sentry)) `BSD-3-Clause` `Python/Django`
- [SIT](https://sit.fyi/) - SCM-agnostic, file-based, offline-first, immutable issue tracker. ([Source Code](https://github.com/sit-fyi/sit)) `MIT` `Apache-2.0` `Rust`
- [TheBugGenie](http://www.thebuggenie.org) - friendly project management and issue tracking tool, with extensive user rights system. ([Source Code](https://github.com/thebuggenie/thebuggenie)) `MPL-2.0` `PHP`
- [Zammad](https://zammad.org/) - Easy to use but powerful open-source support and ticketing system. ([Source Code](https://github.com/zammad/zammad)) `AGPL-3.0` `Ruby`


### URL Shorteners

_Before hosting one, please see [shortcomings](https://en.wikipedia.org/wiki/URL_shortening#Shortcomings) of URL shorteners._

**[`^        back to top        ^`](#)**

- [gShort](https://github.com/someone-stole-my-name/gShort) - Privacy-friendly self-hosted URL shortener. ([Demo](http://gshort.christiansegundo.com/)) `GPL-3.0` `Go`
- [Kutt](https://kutt.it) - A modern URL shortener with support for custom domains. ([Source Code](https://github.com/thedevs-network/kutt)) `MIT` `Nodejs`
- [Link](https://fsh.ee) - A minimal, SQLite-backed URL shortener. ([Demo](https://demo.fsh.ee), [Source Code](https://git.fsh.ee/i/link)) `GPL-3.0` `Go`
- [Link-shortener-bot](https://github.com/tommyku/link-shortener-front-end) `⚠` - URL shortener using a Telegram Bot. ([Demo](http://t.me/GiveMeShortLinkBot)) `MIT` `Ruby`
- [liteshort](https://github.com/132ikl/liteshort) - User-friendly, actually lightweight, and configurable URL shortener. ([Demo](https://ls.ikl.sh)) `MIT` `Python`
- [Lstu](https://github.com/ldidry/lstu) - _Let's SHorten That Url_ - Lightweight URL shortener. `WTFPL` `Perl`
- [Polr](https://project.polr.me/) - Modern, minimalist, modular, and lightweight URL shortener. ([Source Code](https://github.com/Cydrobolt/polr)) `GPL-2.0` `PHP`
- [reduc.io](https://github.com/ziyasal/reducio) - URL shortener service written in Scala, using Akka-Http and Redis. `MIT` `Scala`
- [ReducePy](https://github.com/abdullahselek/ReducePy) - URL shortener service using Tornado and Redis runs on Docker and Kubernetes. `MIT` `Python`
- [schort](https://github.com/sqozz/schort) - No login, no javascript, just short links. ([Demo](https://s.wx0.de)) `CC0-1.0` `Python`
- [Shlink](https://shlink.io) - URL shortener with REST API and command line interface. Includes official progressive web application and docker images. ([Source Code](https://github.com/shlinkio/shlink), [Clients](https://shlink.io/apps)) `MIT` `PHP`
- [shorturl](https://git.mills.io/prologic/shorturl) - Simple URL shortener with very tiny URLs. ([Demo](https://url.mills.io)) `MIT` `Go`
- [Simple-URL-Shortener](https://github.com/azlux/Simple-URL-Shortener) - KISS URL shortener, public or private (with account). Minimalist and lightweight. No dependencies. ([Demo](https://u.azlux.fr)) `MIT` `PHP`
- [Simply Shorten](https://gitlab.com/draganczukp/simply-shorten) - A simple URL shortener that just shortens links. `MIT` `Java`
- [url-shortener](https://github.com/cagataycali/url-shortener) `⚠` - Shitty url shortener, emoji and AI powered. `MIT` `Nodejs`
- [YOURLS](http://yourls.org/) - YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp. ([Source Code](https://github.com/YOURLS/YOURLS)) `MIT` `PHP`


### VPN

**[`^        back to top        ^`](#)**

**Please visit [awesome-sysadmin/VPN](https://github.com/awesome-foss/awesome-sysadmin#vpn)**


### Web Servers

**[`^        back to top        ^`](#)**

**Please visit [awesome-sysadmin/Web](https://github.com/awesome-foss/awesome-sysadmin#web)**


### Wikis

**[`^        back to top        ^`](#)**

_Related: [Software Development - Documentation Generators](#software-development---documentation-generators)_

_See also: [Wikimatrix](http://www.wikimatrix.org/), [Wiki Engines - WikiIndex](http://wikiindex.org/Category:Wiki_Engine), [List of wiki software - Wikipedia](https://en.wikipedia.org/wiki/List_of_wiki_software), [Comparison of wiki software - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_wiki_software)._

- [BookStack](https://www.bookstackapp.com/) - BookStack is a simple, self-hosted, easy-to-use platform for organizing and storing information. It allows for documentation to be stored in a book like fashion. ([Demo](https://www.bookstackapp.com/#demo), [Source Code](https://github.com/BookStackApp/BookStack)) `MIT` `PHP`
- [Cowyo](https://github.com/schollz/cowyo) - Cowyo is a feature-rich wiki for minimalists. ([Demo](https://cowyo.com)) `MIT` `Go`
- [django-wiki](https://github.com/django-wiki/django-wiki) - Wiki system with complex functionality for simple integration and a superb interface. Store your knowledge with style: Use django models. ([Demo](https://demo.django-wiki.org/)) `GPL-3.0` `Python`
- [Documize](https://documize.com) - Modern Docs + Wiki software with built-in workflow, single binary executable, just bring MySQL/Percona. ([Source Code](https://github.com/documize/community)) `AGPL-3.0` `Go`
- [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - Easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain files, therefore no database is required. ([Source Code](https://github.com/splitbrain/dokuwiki)) `GPL-2.0` `PHP`
- [Gitit](https://github.com/jgm/gitit) - Wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface. `GPL-2.0` `Haskell`
- [Gollum](https://github.com/gollum/gollum) - Simple, Git-powered wiki with a sweet API and local frontend. `MIT` `Ruby`
- [jingo](https://github.com/claudioc/jingo) - Git based wiki engine written for node.js, with a decent design, a search capability and good typography. `MIT` `Nodejs`
- [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - MediaWiki is a free and open-source wiki software package written in PHP. It serves as the platform for Wikipedia and the other Wikimedia projects, used by hundreds of millions of people each month. ([Demo](https://en.wikipedia.org/wiki/Main_Page), [Source Code](https://phabricator.wikimedia.org/diffusion/MW/)) `GPL-2.0` `PHP`
- [MoinMoin](https://moinmo.in/) - Advanced, easy to use and extensible WikiEngine with a large community of users. ([Source Code](https://github.com/moinwiki/moin-1.9)) `GPL-2.0` `Python`
- [Outline](https://www.getoutline.com/) `⚠` - An open, extensible, wiki for your team. ([Source Code](https://github.com/outline/outline)) `BSD-3-Clause` `Nodejs`
- [Pepperminty Wiki](https://github.com/sbrl/Pepperminty-Wiki) - Complete markdown-powered wiki contained in a single PHP file. ([Demo](https://starbeamrainbowlabs.com/labs/peppermint/build/)) `MPL-2.0` `PHP`
- [PineDocs](https://github.com/xy2z/PineDocs) - Simple, fast, customizable and lightweight site for browsing files. `GPL-3.0` `PHP`
- [PmWiki](http://www.pmwiki.org) - Wiki-based system for collaborative creation and maintenance of websites. `GPL-3.0` `PHP`
- [Raneto](http://raneto.com/) - Raneto is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase. `MIT` `Nodejs`
- [TiddlyWiki](http://tiddlywiki.com/) - Reusable non-linear personal web notebook. ([Source Code](https://github.com/Jermolene/TiddlyWiki5)) `BSD-3-Clause` `Nodejs`
- [Tiki](https://tiki.org) - Wiki CMS Groupware with the most built-in features. ([Demo](https://tiki.org/Demo), [Source Code](https://sourceforge.net/p/tikiwiki/code/HEAD/tree/)) `LGPL-2.1` `PHP`
- [TWiki](http://twiki.org/) - TWiki is a Perl-based structured wiki application, typically used to run a collaboration platform, knowledge or document management system, a knowledge base, or team portal. ([Demo](http://twiki.org/cgi-bin/view/Sandbox/WebHome), [Source Code](http://svn.twiki.org/svn/twiki/)) `GPL-1.0` `Perl`
- [wiki](https://git.mills.io/prologic/wiki) - Simple Markdown based wiki engine. ([Demo](https://wiki.mills.io)) `MIT` `Go`
- [Wiki.js](https://wiki.js.org/) - Modern, lightweight and powerful wiki app using Git and Markdown. ([Demo](https://docs.requarks.io)) `AGPL-3.0` `Nodejs`
- [WiKiss](http://wikiss.tuxfamily.org/) - Wiki, simple to use and install. ([Source Code](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)) `GPL-2.0` `PHP`
- [XWiki](http://www.xwiki.org) - Second generation wiki that allows the user to extend its functionalities with a powerful extension-based architecture. ([Demo](http://playground.xwiki.org), [Source Code](https://github.com/xwiki/xwiki-platform)) `LGPL-2.1` `Java`
- [Zim](https://zim-wiki.org/) - Graphical text editor used to maintain a collection of wiki pages. Each page can contain links to other pages, simple formatting and images. ([Source Code](https://github.com/zim-desktop-wiki/zim-desktop-wiki)) `GPL-2.0` `Python`


### Self-hosting Solutions

**[`^        back to top        ^`](#)**

- [Ansible-NAS](https://github.com/DaveStephens/ansible-nas) - Build a full-featured home server with this playbook and an Ubuntu box. `MIT` `YAML/Docker`
- [Bitsii Bridge](https://gitlab.com/bitsii/Bitsii/-/wikis/home) `⚠` - Easy to install self-hosting platform for Windows, MacOS, and Linux. Depends on a dynamic DNS provider and Let's Encrypt. ([Source Code](https://gitlab.com/edgii/BBridge)) `MPL-2.0` `Java/Other`
- [DietPi](http://dietpi.com/) - Minimal Debian OS optimized for single-board computers, which allows you to easily install and manage several services for selfhosting at home. ([Source Code](https://github.com/MichaIng/DietPi)) `GPL-2.0` `Shell`
- [DockSTARTer](https://dockstarter.com/) - DockSTARTer helps you get started with home server apps running in Docker. ([Source Code](https://github.com/GhostWriters/DockSTARTer)) `MIT` `Shell`
- [DPlatform](https://dfabric.github.io/DPlatform-Shell/) - Deploy self-hosted apps easily: simple, bloat-free, independent installation. ([Source Code](https://github.com/DFabric/DPlatform-Shell)) `MIT` `Shell`
- [FLAP](https://www.flap.cloud) - Low maintenance framework to manage self-hosted services. ([Source Code](https://gitlab.com/flap-box/flap)) `AGPL-3.0` `Docker/Shell`
- [FreedomBone](https://freedombone.net/) - Home server configuration based on Debian. ([Source Code](https://code.freedombone.net/bashrc/freedombone)) `AGPL-3.0` `Shell`
- [FreedomBox](https://freedomboxfoundation.org/) - Community project to develop, design and promote personal servers running free software for private, personal, communications. ([Source Code](https://salsa.debian.org/freedombox-team/freedombox)) `AGPL-3.0` `Python/Other`
- [HomelabOS](https://homelabos.com) - Your very own offline-first privacy-centric open-source data-center. Deploy over 100 services with a few commands. ([Source Code](https://gitlab.com/NickBusey/HomelabOS)) `MIT` `Docker`
- [NextCloudPi](https://nextcloudpi.com/) - Nextcloud preinstalled and preconfigured, with a text and web management interface and all the tools needed to self host private data. With installation images for Raspberry Pi, Odroid, Rock64, Docker, and a curl installer for Armbian/Debian. ([Source Code](https://github.com/nextcloud/nextcloudpi)) `GPL-2.0-or-later` `Bash/PHP`
- [OpenMediaVault](http://www.openmediavault.org/) - OpenMediaVault is the next generation network attached storage (NAS) solution based on Debian Linux. It contains services like SSH, (S)FTP, SMB/CIFS, DAAP media server, RSync, BitTorrent client and many more. ([Source Code](https://github.com/openmediavault/openmediavault)) `GPL-3.0` `PHP`
- [Sandstorm](https://sandstorm.io/) - Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm)) `Apache-2.0` `C++/Other`
- [sovereign](https://github.com/sovereign/sovereign) - Set of Ansible playbooks to build and maintain your own private cloud: email, calendar, contacts, file sync, IRC bouncer, VPN, and more. `GPL-3.0` `YAML/Other`
- [Syncloud](https://syncloud.org/) - Your own online file storage, social network or email server. ([Source Code](https://github.com/syncloud/platform)) `GPL-3.0` `Python/Other`
- [UBOS](http://ubos.net/) - Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., and other features. `GPL-3.0` `Perl/Other`
- [WikiSuite](https://wikisuite.org) - The most comprehensive and integrated Free / Libre / Open Source enterprise software suite. ([Source Code](https://wikisuite.org/Source-Code)) `Multiple` `ClearOS`
- [xsrv](https://xsrv.readthedocs.io/) - Install and manage self-hosted services/applications, on your own server(s). ([Source Code](https://github.com/nodiscc/xsrv)) `GPL-3.0` `Shell/Ansible`
- [YunoHost](https://yunohost.org/) - Server operating system aiming to make self-hosting accessible to everyone. ([Demo](https://yunohost.org/#/try), [Source Code](https://github.com/YunoHost)) `AGPL-3.0` `Python/Other`
- [Cloudbox](https://cloudbox.works) - Ansible-based solution for rapidly deploying a Docker containerized cloud media server. ([Source Code](https://github.com/Cloudbox/Cloudbox)) `GPL-3.0` `Shell/Ansible`

<!-- END SOFTWARE LIST -->

--------------------

## List of Licenses

**[`^        back to top        ^`](#)**

- `⚠ ` - Depends on a proprietary service outside the user's control
- `0BSD` - [BSD Zero-Clause Licence](https://opensource.org/licenses/0BSD)
- `AAL` - [Attribution Assurance License](https://opensource.org/licenses/AAL)
- `AGPL-3.0` - [GNU Affero General Public License 3.0](https://www.gnu.org/licenses/agpl-3.0)
- `AGPL-3.0-only` - [GNU Affero General Public License 3.0 only](https://spdx.org/licenses/AGPL-3.0-only.html)
- `Apache-2.0` - [Apache, Version 2.0](http://www.apache.org/licenses/)
- `APSL-2.0` - [Apple Public Source License, Version 2.0](https://opensource.org/licenses/APSL-2.0)
- `Artistic-2.0` - [Artistic License Version 2.0](http://opensource.org/licenses/Artistic-2.0)
- `Beerware` - [Beerware License](https://spdx.org/licenses/Beerware.html)
- `BSD-2-Clause` - [BSD 2-clause "Simplified"](https://opensource.org/licenses/BSD-2-Clause)
- `BSD-2-Clause-FreeBSD` - [BSD 2-Clause FreeBSD License](https://www.freebsd.org/copyright/freebsd-license.html)
- `BSD-3-Clause` - [BSD 3-Clause "New" or "Revised"](https://opensource.org/licenses/BSD-3-Clause)
- `BSD-3-Clause-Attribution` - [BSD with attribution](https://fedoraproject.org/wiki/Licensing/BSD_with_Attribution)
- `CC-BY-NC-SA-3.0` - [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 International License](https://creativecommons.org/licenses/by-nc-sa/3.0/)
- `CC-BY-SA-3.0` - [Creative Commons Attribution-ShareAlike 3.0 International License](https://creativecommons.org/licenses/by-sa/3.0/)
- `CC-BY-SA-4.0` - [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/)
- `CC0-1.0` - [Public Domain](https://creativecommons.org/about/cc0/)
- `CDDL-1.0` - [Common Development and Distribution License](https://opensource.org/licenses/CDDL-1.0)
- `CECILL-B` - [CEA CNRS INRIA Logiciel Libre](https://spdx.org/licenses/CECILL-B.html)
- `CPAL-1.0` - [Common Public Attribution License Version 1.0](http://opensource.org/licenses/CPAL-1.0)
- `DPL` - [Devblocks Public License 1.0](https://cerb.ai/license/)
- `ECL-2.0` - [Educational Community License, Version 2.0 ](http://opensource.org/licenses/ECL-2.0)
- `EPL-1.0` - [Eclipse Public License, Version 1.0](https://www.eclipse.org/legal/epl-v10.html)
- `EPL-2.0` - [Eclipse Public License, Version 2.0](https://www.eclipse.org/legal/epl-v20.html)
- `EUPL-1.2` - [European Union Public License 1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12)
- `GFDL-1.1-only` - [GNU Free Documentation License v1.1](https://spdx.org/licenses/GFDL-1.1-only.html)
- `GFDL-1.1-or-later` - [GNU Free Documentation License v1.1](https://spdx.org/licenses/GFDL-1.1-or-later.html)
- `GFDL-1.2-only` - [GNU Free Documentation License v1.2](https://spdx.org/licenses/GFDL-1.2-only.html)
- `GFDL-1.2-or-later` - [GNU Free Documentation License v1.2](https://spdx.org/licenses/GFDL-1.2-or-later.html)
- `GFDL-1.3-only` - [GNU Free Documentation License v1.3](https://spdx.org/licenses/GFDL-1.3-only.html)
- `GFDL-1.3-or-later` - [GNU Free Documentation License v1.3](https://spdx.org/licenses/GFDL-1.3-or-later.html)
- `GPL-1.0` - [GNU General Public License](https://www.gnu.org/licenses/gpl-1.0)
- `GPL-2.0` - [GNU General Public License 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
- `GPL-2.0-or-later` - [GNU General Public License v2.0 or later](https://spdx.org/licenses/GPL-2.0-or-later.html)
- `GPL-3.0-only` - [GNU General Public License v3.0 only](https://spdx.org/licenses/GPL-3.0-only.html)
- `GPL-3.0-or-later` - [GNU General Public License v3.0 or later](https://spdx.org/licenses/GPL-3.0-or-later.html)
- `GPL-3.0` - [GNU General Public License 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)
- `IPL-1.0` - [IBM Public License](https://opensource.org/licenses/IPL-1.0)
- `ISC` - [Internet Systems Consortium License](https://www.isc.org/downloads/software-support-policy/isc-license/)
- `LGPL-2.1` - [Lesser General Public License 2.1](http://opensource.org/licenses/LGPL-2.1)
- `LGPL-3.0` - [Lesser General Public License 3.0](http://opensource.org/licenses/LGPL-3.0)
- `MIT` - [MIT License](http://opensource.org/licenses/MIT)
- `MPL-1.1` - [Mozilla Public License Version 1.1](https://www.mozilla.org/media/MPL/1.1/index.txt)
- `MPL-2.0` - [Mozilla Public License](https://www.mozilla.org/MPL/2.0/index.txt)
- `Multiple` - Various different licenses, for different components of the project's software.
- `OSL-3.0` - [Open Software License 3.0](https://opensource.org/licenses/osl-3.0.php)
- `Other` - Non-standard license, usually unique to the project itself.
- `Sendmail` - [Sendmail License](https://www.sendmail.com/pdfs/open_source/sendmail_license.pdf)
- `SSPL-1.0` - [Server Side Public License](https://spdx.org/licenses/SSPL-1.0.html)
- `Unlicense` - [The Unlicense](http://unlicense.org/)
- `WTFPL` - [Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/)
- `Zlib` - [Zlib/libpng License](https://opensource.org/licenses/Zlib)
- `ZPL-1.2` - [Zope Public License 1.2](http://zpl.pub/page/zplv12)
- `ZPL-2.0` - [Zope Public License 2.0](http://opensource.org/licenses/ZPL-2.0)

--------------------

## External Links

**[`^        back to top        ^`](#)**

- [Awesome Big Data](https://github.com/0xnr/awesome-bigdata) - Curated list of awesome big data frameworks, resources and other awesomeness.
- [Awesome Public Datasets](https://github.com/awesomedata/awesome-public-datasets) - List of high quality, topic-centric public data sources.
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin) - Curated list of amazingly awesome open source sysadmin resources.
- Lists of software aimed at privacy and decentralization in some form: [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](http://libreprojects.net/)
- [Easy Indie App](https://easyindie.app) - Apps that can be self-hosted in a few clicks.
- Dynamic Domain Name services: [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
- Communities/forums: [/r/selfhosted](https://www.reddit.com/r/selfhosted), [IndieWeb](https://indieweb.org/)
- Mirrors: [GitHub.com](https://github.com/awesome-selfhosted/awesome-selfhosted), [Gitlab.com](https://gitlab.com/awesome-selfhosted/awesome-selfhosted)
- [Track Awesome Selfhosted](https://www.trackawesomelist.com/awesome-selfhosted/awesome-selfhosted/) - Get the latest updates of awesome-selfhosted.

--------------------

## Contributing

Contributing guidelines can be found in [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md).

## Authors

The list of authors can be found in [AUTHORS.md](AUTHORS.md).

## License

This list is under the [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE) License.
