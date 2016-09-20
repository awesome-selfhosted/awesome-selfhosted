# Awesome-Selfhosted

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![](https://camo.githubusercontent.com/3d659054abd6ce21c0e47cf3b83a51bda69ca282/68747470733a2f2f64656d6f2e726f636b65742e636861742f696d616765732f6a6f696e2d636861742e737667)](https://chat.awesome-selfhosted.com)

Selfhosting is the process of locally hosting and managing applications instead of renting from SaaS providers.

This is a list of [Free](https://en.wikipedia.org/wiki/Free_software) Software [network services](https://en.wikipedia.org/wiki/Network_service) and [web applications](https://en.wikipedia.org/wiki/Web_application) which can be hosted locally. Non-Free software is listed on the [Non-Free](non-free.md) page.

See [Contributing](#contributing).

=================

  - [Analytics](#analytics)
  - [Automation](#automation)
  - [Blogging Platforms](#blogging-platforms)
  - [Bookmarks & Link Sharing](#bookmarks--link-sharing)
  - [Calendar and Address Books](#calendar-and-address-books)
  - [Communication systems](#communication-systems)
    - [Custom](#custom)
    - [Email](#email)
      - [Complete solutions](#complete-solutions)
      - [Mail Transfer Agents](#mail-transfer-agents)
      - [Mail Delivery Agents](#mail-delivery-agents)
      - [Mailing lists and newsletters](#mailing-lists-and-newsletters)
      - [Webmail clients](#webmail-clients)
    - [IRC](#irc)
    - [SIP](#sip)
    - [IPBX](#ipbx)
    - [Social Networks and Forums](#social-networks-and-forums)
    - [XMPP](#xmpp)
      - [XMPP Servers](#xmpp-servers)
      - [XMPP Web Clients](#xmpp-web-clients)
  - [Content Management Systems (CMS)](#content-management-systems-cms)
    - [E-commerce](#e-commerce)
  - [DNS](#dns)
  - [Document Archiving](#document-archiving)
  - [Enterprise Resource Planning](#enterprise-resource-planning)
  - [Federated Identity/Authentication](#federated-identityauthentication)
  - [Feed Readers](#feed-readers)
  - [File Sharing and Synchronization](#file-sharing-and-synchronization)
      - [Distributed filesystems](#distributed-filesystems)
      - [File transfer/synchronization](#file-transfersynchronization)
      - [Peer-to-peer filesharing](#peer-to-peer-filesharing)
      - [Single-click/drag-n-drop upload](#single-clickdrag-n-drop-upload)
      - [Web based file managers](#web-based-file-managers)
  - [Games](#games)
  - [Gateways](#gateways)
  - [Groupware](#groupware)
  - [Learning and Courses](#learning-and-courses)
  - [Maps & GPS](#maps--gps)
  - [Media Streaming](#media-streaming)
      - [Audio Streaming](#audio-streaming)
      - [Video Streaming](#video-streaming)
  - [Misc/Other](#miscother)
  - [Money, Budgeting and Management](#money-budgeting-and-management)
  - [Monitoring](#monitoring)
  - [Note-taking & Editors](#note-taking--editors)
  - [Office Suites](#office-suites)
  - [Password Managers](#password-managers)
  - [Pastebins](#pastebins)
  - [Personal Dashboards](#personal-dashboards)
  - [Photo and Video Galleries](#photo-and-video-galleries)
  - [Polls and Events](#polls-and-events)
  - [Proxy](#proxy)
  - [Read it Later Lists](#read-it-later-lists)
  - [Search Engines](#search-engines)
  - [Software Development](#software-development)
    - [Project Management](#project-management)
    - [Bug Trackers](#bug-trackers)
    - [IDE/Tools](#idetools)
    - [Continuous Integration](#continuous-integration)
    - [Documentation Generators](#documentation-generators)
  - [Static site generators](#static-site-generators)
  - [Task management/To-do lists](#task-managementto-do-lists)
  - [Ticketing](#ticketing)
  - [URL Shorteners](#url-shorteners)
  - [VPN](#vpn)
  - [Web servers](#web-servers)
  - [Wikis](#wikis)
  - [Self-hosting Solutions](#self-hosting-solutions)
  - [List of Licenses](#list-of-licenses)
  - [External links](#external-links)
  - [Contributing](#contributing)
  - [License](#license)


-----------------------------------------------------------------------------

<!-- BEGIN SOFTWARE LIST -->

## Analytics

**[`^        back to top        ^`](#)**

_Web Analytics_

  * [AWStats](http://www.awstats.org/) - Generates web, streaming, ftp or mail server statistics graphically. ([Source Code](https://github.com/eldy/awstats)) `GPLv3` `Perl`
  * [Countly](https://count.ly) - Real time mobile & web analytics, crash reporting and push notifications platform. ([Source Code](https://github.com/countly)) `AGPLv3` `Javascript`
  * [Druid](http://druid.io/) - A distributed, column-oriented, real-time analytics data store. ([Source Code](https://github.com/druid-io/druid/)) `Apache` `Java`
  * [GoAccess](http://goaccess.io/) - Real-time web log analyzer and interactive viewer that runs in a terminal. ([Source Code](https://github.com/allinurl/goaccess)) `GPLv2` `C`
  * [Open Web Analytics](http://www.openwebanalytics.com/) - Google Analytics and Piwik alternative. ([Source Code](https://github.com/padams/Open-Web-Analytics/)) `GPLv2` `PHP`
  * [Piwik](https://piwik.org/) - Leading open-source analytics platform that gives you more than just powerful analytics. ([Source Code](https://github.com/piwik/)) `GPLv3` `PHP`
  * [Serposcope](https://serposcope.serphacker.com/) - Serposcope is a free and open-source rank tracker to monitor websites ranking in Google and improve your SEO performances. ([Source Code](https://github.com/serphacker/serposcope)) `MIT` `Java`
  * [Snowplow](http://snowplowanalytics.com/) - Have every single event, from your websites, mobile apps, desktop applications and server-side systems, stored in your own data warehouse and available to action in real-time. ([Source Code](https://github.com/snowplow/)) `Apache` `Scala`
  * [ThinkUp](https://www.thinkup.com/) - Insights into your social networking activity on Twitter, Facebook, Instagram, and beyond. ([Source Code](https://github.com/ThinkUpLLC/ThinkUp)) `GPLv3` `PHP`

_Business Intelligence_

  * [Metabase](http://www.metabase.com/) - Simple Dashboarding and GUI Query tool, Nightly Emails and Slack Integration w/ PostgreSQL, MySQL, Redshift and other DBs. ([Source Code](https://github.com/metabase/metabase)) `AGPLv3` `Clojure`
  * [Redash](http://redash.io) - connect to over 18 types of databases (SQL and "NoSQL"), query your data, visualize it and create dashboards. Everything has a URL that can be shared. Slack and HipChat integration. ([Demo](https://demo.redash.io), [Source Code](https://github.com/getredash/redash)) `BSD` `Python`


## Automation

**[`^        back to top        ^`](#)**

  * [Alltube](http://www.alltubedownload.net) - A web interface for [youtube-dl](https://github.com/rg3/youtube-dl), a program to download videos and audio from [more than 100 websites](https://rg3.github.io/youtube-dl/supportedsites.html). ([Demo](http://www.alltubedownload.net), [Source Code](https://github.com/Rudloff/alltube)) `GPL` `PHP`
  * [AmIUnique](https://amiunique.org/) - Learn how identifiable you are on the Internet (browser fingerprinting tool). ([Source Code](https://github.com/DIVERSIFY-project/amiunique)) `MIT` `Java`
  * [bip.io](https://bip.io/) - Web Automation For People And Robots - Drag, Drop, and Connect The Services You Love. ([Source Code](https://github.com/bipio-server/bipio)) `GPLv3` `Nodejs`
  * [CouchPotato](https://couchpota.to/) - CouchPotato is an automatic Video Library Manager for Movies. Automatic torrent/nzb searching, downloading, and processing at the qualities you want. ([Source Code](https://github.com/CouchPotato/CouchPotatoServer/)) `GPLv3` `Python`
  * [Headphones](https://github.com/rembo10/headphones) - An automated music downloader for NZB and Torrent, written in Python. It supports SABnzbd, NZBget, Transmission, µTorrent, Deluge and Blackhole. `GPLv3` `Python`
  * [Healthchecks](https://healthchecks.io/) - Django app which listens for pings and sends alerts when pings are late. ([Source Code](https://github.com/healthchecks/healthchecks)) `BSD` `Python`
  * [homebank-converter](https://github.com/Binnette/homebank-converter) - A web app to convert an export bank file to compatible Homebank csv. ([Demo](http://binnette.github.io/homebank-converter/)) `AGPLv3` `HTML5`
  * [Huginn](https://github.com/cantino/huginn) - Allows you to build agents that monitor and act on your behalf. `MIT` `Ruby`
  * [Http2pic](https://http2pic.haschek.at/) - Website screenshots/renderer. It uses the wkhtmltox to render websites with various options. ([Source Code](https://github.com/chrisiaut/http2pic)) `Apache 2.0` `PHP/Javascript`
  * [Medusa](https://github.com/pymedusa/SickRage) - Automatic Video Library Manager for TV Shows. It watches for new episodes of your favorite shows, and when they are posted it does its magic. `GPLv3` `Python`
  * [Node RED](http://nodered.org/) - A browser-based flow editor that helps you wiring hardware devices, APIs and online services to create IoT solutions. ([Source Code](https://github.com/node-red/node-red)) `Apache` `Nodejs`
  * [openHAB](http://www.openhab.org) - Vendor and technology agnostic open source software for home automation. ([Source Code](https://github.com/openhab/openhab)) `EPLv1` `Java`
  * [Poffer](http://poffer.gabinaureche.com) `⚠` - A tool that makes it easier to share the content you like thanks to Pocket+Buffer. ([Source Code](https://github.com/Zhouzi/Poffer)) `MIT` `Nodejs`
  * [RSS-Bridge](https://github.com/sebsauvage/rss-bridge) - rss-bridge is a PHP project capable of generating ATOM feeds for websites which don't have one. `Public domain` `PHP`
  * [SickRage](http://sickrage.github.io/) - SickRage is an automatic Video Library Manager for TV Shows. Automatic torrent/nzb searching, downloading, and processing at the qualities you want. ([Source Code](https://github.com/SickRage/SickRage/)) `GPLv3` `Python`
  * [Sonarr](https://sonarr.tv/) - An automatic TV Shows downloader and manager for Usenet and BitTorrent. It can grab, sort and rename new episodes and automatically upgrade the quality of files already downloaded when a better quality format becomes available. ([Source Code](https://github.com/Sonarr/Sonarr)) `GPLv3` `C#`
  * [TriggerHappy](http://trigger-happy.eu/) - An opensource clone of IFTTT, a bridge between your internet services. ([Source Code](https://github.com/foxmask/django-th)) `BSD` `Python`
  * [WTFDYUM](https://github.com/jchampemont/WTFDYUM) `⚠` - Why The Fuck Did You Unfollow Me - Find out who stops following you on Twitter. ([Demo](https://www.wtfdyu.me/), [Source Code](https://github.com/jchampemont/WTFDYUM)) `Apache` `Java`
  * [Zenbot 3](https://s8f.org/zenbot.html) - Zenbot is a lightweight, extendable, artificially intelligent trading bot for Bitcoin, Ether, Litecoin, and more. ([Demo](https://zenbot.s8f.org/), [Source Code](https://github.com/carlos8f/zenbot)) `MIT` `Node.js`


## Blogging Platforms

**[`^        back to top        ^`](#)**

See also [Static Site Generators](#static-site-generators), [Content Management Systems](#content-management-systems-cms) and [WeblogMatrix](http://www.weblogmatrix.org/)

  * [Anchor CMS](https://anchorcms.com/) - Anchor is a free, lightweight, faster-than-a-bullet, simple blogging system, made for art–directed posts. ([Source Code](https://github.com/anchorcms/anchor-cms)) `GPLv3` `PHP`
  * [Antville](https://antville.org) - Antville is a free, open source project aimed at the development of a high performance, feature rich weblog hosting software. ([Source Code](https://github.com/antville/antville)) `Apache` `Javascript`
  * [Blogotext](http://lehollandaisvolant.net/blogotext/en/) - A free blog-engine written in PHP and using SQLite. This offers you both an unmatched simplicity during installation and great performances. ([Source Code](https://github.com/timovn/blogotext)) `MIT` `PHP`
  * [Chyrp](https://github.com/chyrp/chyrp) - An extra-awesome, extra-lightweight blog engine. `MIT` `PHP`
  * [Dotclear](http://dotclear.org/) - Take control over your blog. ([Source Code](https://hg.dotclear.org/dotclear)) `GPLv2` `PHP`
  * [Ghost](https://ghost.org/) - Just a blogging platform. ([Source Code](https://github.com/TryGhost/Ghost)) `MIT` `Nodejs`
  * [htmly](https://www.htmly.com/) - Databaseless Blogging Platform (Flat-File Blog). ([Demo](https://www.htmly.com/demo/), [Source Code](https://github.com/danpros/htmly)) `GPLv2` `PHP`
  * [Known](https://withknown.com/) - A single website for all your content. ([Source Code](https://github.com/idno/idno)) `Apache` `PHP`
  * [Noddity](http://noddity.com/) - It's a blog, it's a wiki, it's a fast CMS. ([Source Code](https://github.com/TehShrike/noddity)) `WTFPL` `Nodejs`
  * [PluXml](http://www.pluxml.org/) - XML-based blog/CMS platform. ([Source Code](https://github.com/pluxml/PluXml)) `GPL` `PHP`
  * [Postleaf](https://www.postleaf.org/) - An open source blogging platform with inline editing, handlebar templates, and a beautiful user interface. ([Source Code](https://github.com/Postleaf/postleaf)) `GPLv3` `PHP`
  * [Wagtail](https://wagtail.io/) - A Django content management system focused on flexibility and user experience. ([Source Code](https://github.com/torchbox/wagtail)) `BSD` `Python`
  * [WordPress](https://wordpress.org/) - Create a beautiful website or blog. ([Source Code](https://github.com/WordPress/WordPress)) `GPLv2` `PHP`


## Bookmarks & Link Sharing

**[`^        back to top        ^`](#)**

  * [Bookie](https://github.com/bookieio/Bookie) - Python based delicious.com replacement. `AGPLv3` `Python`
  * [Firefox Auth Server](https://docs.services.mozilla.com/howtos/run-fxa.html) - This project implements the core server-side API for Firefox Accounts. ([Source Code](https://github.com/mozilla/fxa-auth-server/)) `MPLv2` `Nodejs`
   * [Firefox Content Server](https://docs.services.mozilla.com/howtos/run-fxa.html) - Static server that hosts Firefox Account sign up, sign in, email verification, etc. flows. ([Source Code](https://github.com/mozilla/fxa-content-server/)) `MPLv2` `Java`
   * [Firefox Sync Server](https://docs.services.mozilla.com/howtos/run-sync-1.5.html) - Sync Firefox bookmarks, passwords, history, tabs, preferences. ([Source Code](https://github.com/mozilla-services/syncserver)) `MPLv2` `Python`
  * [Lobsters](https://lobste.rs) - Run your own link aggregation site. ([Source Code](https://github.com/jcs/lobsters)) `BSD` `Ruby`
  * [No Fuss Bookmarks](http://nofussbm.herokuapp.com/signup.html) - Very simple software and service to store bookmarks especially designed for hackers (that don't need fancy interfaces, but nice API). ([Source Code](https://github.com/mapio/nofussbm)) `GPLv3` `Python`
  * [Pinry](http://getpinry.com/) - The tiling image board system for people who want to save, tag, and share images, videos, and webpages. ([Source Code](https://github.com/pinry/pinry)) `BSD` `Python`
  * [saveto.co](https://saveto.co/) - An open source, home for the best links on the web. ([Source Code](https://github.com/saveto-co/saveto)) `MIT` `Nodejs`
  * [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, no-database bookmarking and link sharing plaform. ([Demo](http://shaarlidemo.tuxfamily.org/#demo)) `Zlib` `PHP`
  * [unmark](https://unmark.it/) - An open source to do app for links. ([Source Code](https://github.com/plainmade/unmark)) `MIT` `PHP`

## Calendar and Address Books

**[`^        back to top        ^`](#)**

Some [Groupware](#groupware) solutions also feature calendar/address book editing and synchronization.

  * [AgenDAV](http://agendav.org/) - Multilanguage CalDAV web client with a rich AJAX interface and shared calendars support. ([Source Code](https://github.com/adobo/agendav)) `GPLv3` `PHP`
  * [Baïkal](http://baikal-server.com/) - Lightweight CalDAV+CardDAV server. ([Source Code](https://github.com/fruux/Baikal)) `GPLv3` `PHP`
  * [CalendarServer](http://trac.calendarserver.org/) - A standards-compliant server implementing the CalDAV and CardDAV protocols. `Apache` `Python`
  * [calypso](http://keithp.com/calypso/) - A python-based CalDAV/CardDAV server. ([Source Code](http://keithp.com/cgi-bin/gitweb.cgi?p=calypso.git;a=tree)) `GPLv3` `Python`
  * [DAViCal](http://www.davical.org/) - A server for calendar sharing (CalDAV). ([Source Code](https://gitlab.com/davical-project/davical)) `MIT` `PHP`
  * [ownCloud calendar](https://doc.owncloud.org/server/9.0/user_manual/pim/calendar.html) - The ownCloud Calendar app enables you to create and edit events, synchronize to other calendars you might use, and create new, personalized calendars. ([Source Code](https://github.com/owncloud/calendar-rework)) `AGPLv3` `PHP`
  * [Radicale](http://radicale.org/) - A Simple Calendar and Contact Server. ([Source Code](https://github.com/Kozea/Radicale)) `GPLv3` `Python`
  * [sabre/dav](http://sabre.io/) - A open source CardDAV, CalDAV and WebDAV server. ([Source Code](https://github.com/fruux/sabre-dav)) `MIT` `PHP`
  * [InfCloud](https://www.inf-it.com/open-source/clients/infcloud/) - An open source CalDAV/CardDAV web client implementation. ([Demo](https://www.inf-it.com/infcloud/), [Source Code](https://www.inf-it.com/InfCloud_0.13.1.zip)) `AGPLv3` `Javascript`


## Communication systems

**[`^        back to top        ^`](#)**

### Custom

  * [Actor](https://actor.im/) - Actor is a fast, open source messaging platform with rich mobile and web clients. ([Demo](https://app.actor.im), [Source Code](https://github.com/actorapp/actor-platform)) `AGPLv3` `Scala`
  * [Cherry](https://github.com/rafael-santiago/cherry) - A tiny webchat server. `GPLv2` `Go`
  * [Freenet](https://freenetproject.org/index.html) - Anonymously share files, browse and publish "freesites" (web sites accessible only through Freenet) and chat on forums. ([Source Code](https://github.com/freenet/fred)) `GPLv2` `Java`
  * [Friends](http://moose-team.github.io/friends/) - P2P chat powered by the web. ([Source Code](https://github.com/moose-team/friends)) `MIT` `Nodejs`
  * [GNUNet](https://gnunet.org/) - Free software framework for decentralized, peer-to-peer networking. ([Source Code](https://gnunet.org/svn/)) `GPLv3` `C`
  * [Hubl.in](https://hubl.in/) - WebRTC powered video conference, chat and collaborative editor. ([Source Code](https://github.com/linagora/hublin)) `AGPLv3` `Nodejs`
  * [Jitsi Meet](https://jitsi.org/Projects/JitsiMeet) - Jitsi Meet is an OpenSource (MIT) WebRTC Javascript application that uses Jitsi Videobridge to provide high quality, scalable video conferences. ([Source Code](https://github.com/jitsi/jitsi-meet)) `MIT` `Javascript`
  * [Jitsi Video Bridge](https://jitsi.org/Projects/JitsiVideobridge) - WebRTC compatible Selective Forwarding Unit (SFU) that allows for multiuser video communication. ([Source Code](https://github.com/jitsi/jitsi-videobridge)) `Apache` `Java`
  * [Kandan](http://getkandan.com/) - Kandan is an Open Source Alternative to HipChat. ([Source Code](https://github.com/kandanapp/kandan)) `AGPLv3` `Ruby`
  * [Lets-Chat](http://sdelements.github.io/lets-chat/) - A self hosted chat suite written in Node. ([Source Code](https://github.com/sdelements/lets-chat)) `MIT` `Nodejs`
  * [Live Helper Chat](http://livehelperchat.com/) - Live Support chat for your website. ([Source Code](https://github.com/LiveHelperChat/livehelperchat)) `Apache` `PHP`
  * [Mattermost](http://www.mattermost.org/) - Open-source, on-prem Slack-alternative. It can be integrated with [Gitlab](https://about.gitlab.com/). ([Source Code](https://github.com/mattermost/platform)) `AGPLv3/Apache` `Go`
  * [Mibew](https://mibew.org) - Mibew Messenger is an open-source live support application written in PHP and MySQL. It enables one-on-one chat assistance in real-time directly from your website. ([Demo](https://mibew.org/demo2), [Source Code](https://github.com/Mibew/mibew)) `Apache` `PHP`
  * [Mumble](http://wiki.mumble.info/wiki/Main_Page) - Low-latency, high quality voice/text chat software. ([Source Code](https://github.com/mumble-voip/mumble)) `BSD` `C++`
    * [Mumblecop](https://bitbucket.org/Flandoo/mumblecop) - Stream audio from youtube and soundcloud, simulate dice rolls, or write your own commands with a simple plugin format. `MIT` `Ruby`
  * [Node-Chat](https://github.com/IgorAntun/node-chat) - A not-so-basic open-source chat with admin features. `MIT` `Nodejs`
  * [RetroShare](http://retroshare.org) - Secured and decentralized communication system. Offers decentralized chat, forums, messaging, file transfer. ([Source Code](https://github.com/RetroShare/RetroShare)) `GPLv2` `С++`
  * [Rocket.Chat](https://rocket.chat/) - Teamchat solution similar to Gitter.im or Slack. ([Source Code](https://github.com/RocketChat/Rocket.Chat)) `MIT` `Nodejs`
  * [Spreed](https://www.spreed.me/) - WebRTC audio/video calls, conferencing server, and web client. ([Source Code](https://github.com/strukturag/spreed-webrtc)) `AGPLv3` `Go`
  * [Synapse](https://matrix.org/blog/project/synapse/) - A server for [Matrix](https://matrix.org/), an open standard for decentralized persistent communication. ([Source Code](https://github.com/matrix-org/synapse)) `Apache` `Python`
    * [Matrix Console Web](https://matrix.org/blog/project/matrix-console-web/) - A web client meant to be a showcase of Matrix capabilities, and reference implementation of the Matrix standard. ([Source Code](https://github.com/matrix-org/matrix-angular-sdk)) `Apache` `Javascript`
    * [Vector](https://matrix.org/blog/project/vector/) - A glossy Matrix web client with an emphasis on performance and usability. ([Source Code](https://github.com/vector-im/vector-web)) `Apache` `Javascript`
  * [Syndie](https://www.syndie.de) - Syndie is a libre system for operating distributed forums. `CC0` `Java`
  * [TextBelt](https://github.com/typpo/textbelt) `⚠` - An outgoing SMS API that uses carrier-specific gateways to deliver your text messages for free, and without ads. `MIT` `Javascript`
  * [Tox](https://tox.chat/) - A distributed, secure messenger with audio and video chat capabilities. ([Source Code](https://github.com/irungentoo/toxcore)) `GPLv3` `C`
  * [Tuber](https://blog.trailofbits.com/2015/12/15/self-hosted-video-chat-with-tuber/) - Peer-to-peer video chat that works. ([Source Code](https://github.com/trailofbits/tubertc)) `MIT` `Javascript`
  * [Zulip](https://zulip.org) - Zulip is a powerful, open source group chat application. ([Source Code](https://github.com/zulip/zulip)) `Apache/Other` `Python`

### Email

**[`^        back to top        ^`](#)**

#### Complete solutions

_simple deployment of a mail server, e.g. for inexperienced or impatient admins._

  * [Citadel](http://www.citadel.org/) - Feature packed, easy, versatile, and powerful mail server, thanks to exclusive "rooms" based architecture. ([Source Code](http://code.citadel.org/?p=citadel.git;a=summary)) `GPLv3` `C`
  * [iRedMail](http://www.iredmail.org/) - Full-featured mail server solution based on Postfix and Dovecot. ([Source Code](https://bitbucket.org/zhb/iredmail/commits/)) `GPLv3` `Shell`
  * [Mailcow](https://mailcow.email/) - Mail server suite based on Dovecot, Postfix and other open source software, that provides a modern Web UI for administration. ([Source Code](https://github.com/andryyy/mailcow)) `GPLv2` `PHP`
  * [Mail-in-a-Box](https://mailinabox.email/) - Turns any Ubuntu server into a fully functional mail server with one command. ([Source Code](https://github.com/mail-in-a-box/mailinabox)) `CC0` `Shell`
  * [Modoboa](http://modoboa.org/en/) - Modoboa is a mail hosting and management platform including a modern and simplified Web User Interface. ([Source Code](https://github.com/tonioo/modoboa)) `MIT` `Python`

#### Mail Transfer Agents

_MTAs / SMTP servers_

* [Courier MTA](http://www.courier-mta.org/) - Fast, scalable, enterprise mail/groupware server providing ESMTP, IMAP, POP3, webmail, mailing list, basic web-based calendaring and scheduling services. ([Source Code](http://www.courier-mta.org/repo.html)) `GPLv3` `C`
* [Exim](https://www.exim.org/) - Message transfer agent (MTA) developed at the University of Cambridge. ([Source Code](http://git.exim.org/exim.git)) `GPLv3` `C`
* [Haraka](http://haraka.github.io/) - A high-performance, pluginable SMTP server written in Javascript. ([Source Code](https://github.com/haraka/Haraka)) `MIT` `Javascript`
* [MailCatcher](http://mailcatcher.me/) - Ruby gem that deploys a simply SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. ([Source Code](https://github.com/sj26/mailcatcher)) `MIT` `Ruby`
* [Maildrop](https://github.com/m242/maildrop) - Disposable email SMTP server, also useful for development. `MIT` `Scala`
* [MailHog](https://github.com/mailhog/MailHog) - Small Golang executable which runs an SMTP MTA gateway that accepts all mail and displays in web interface. Useful for debugging or development. `MIT` `Go`
* [OpenSMTPD](https://opensmtpd.org/) - Secure SMTP server implementation from the OpenBSD project. ([Source Code](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.sbin/smtpd/)) `ISC` `C`
* [Postfix](http://www.postfix.org/) - Fast, easy to administer, and secure Sendmail replacement. `IPL` `C`
* [Qmail](http://www.qmail.org/top.html) - Secure Sendmail replacement. ([Source Code](https://sources.debian.net/src/netqmail/1.06-5/)) `CC0` `C`
* [Sendmail](http://www.sendmail.com/sm/open_source/) - Message transfer agent (MTA). `SENDMAIL` `C`
* [Slimta](http://slimta.org) - Mail Transfer Library built on Python. ([Source Code](https://github.com/slimta/python-slimta)) `MIT` `Python`

#### Mail Delivery Agents

_MDAs - IMAP/POP3 software_

* [Cyrus IMAP/POP3](http://cyrusimap.org/) - Intended to be run on sealed servers, where normal users are not permitted to log in. ([Source Code](https://github.com/cyrusimap/cyrus-imapd )) `BSD` `C`
* [Dovecot](http://www.dovecot.org/) - IMAP and POP3 server written primarily with security in mind. ([Source Code](https://github.com/dovecot/core)) `MIT/LGPLv2` `C`
* [Piler](http://www.mailpiler.org/wiki/start) - feature rich open source email archiving solution. ([Source Code](https://bitbucket.org/jsuto/piler)) `GPLv3` `C`

#### Mailing lists and Newsletters

_Mailing lists servers and mass mailing software - one message to many recipients._

  * [Dada Mail](http://dadamailproject.com/) - A web-based list management system that can be used for announcement lists and/or discussion lists. ([Source Code](https://github.com/justingit/dada-mail)) `GPLv2` `Perl`
  * [Mailman](https://www.gnu.org/software/mailman/) - The Gnu mailing list server. `GPL` `Python`
  * [Mailtrain](https://mailtrain.org/) - self hosted newsletter application built on Node.js (v5+) and MySQL (v5.5+ or MariaDB). ([Source Code](https://github.com/andris9/mailtrain)) `GPLv3` `Nodejs`
  * [Mautic](https://www.mautic.org/) - Mautic is marketing automation software (email, social & more). ([Source Code](https://github.com/mautic/mautic)) `GPLv3` `PHP`
  * [phpList](https://phplist.org) - Newsletter and email marketing with advanced management of subscribers, bounces, and plugins. ([Source Code](https://github.com/phpList/)) `AGPLv3` `PHP`
  * [Sympa](https://www.sympa.org/) - A mailing list manager. `GPLv2` `Perl`

#### Webmail clients

  * [Cypht](http://cypht.org/index.html) - A feed reader for your email accounts. ([Source Code](https://github.com/jasonmunro/hm3)) `GPLv2` `PHP`
  * [Mailpile](https://www.mailpile.is/) - Webmail client with search, filtering, encryption features and more. ([Source Code](https://github.com/mailpile/Mailpile)) `AGPLv3` `Python`
  * [RainLoop](http://www.rainloop.net/) - Simple, modern & fast webmail with IMAP/SMTP Support and multi accounting. ([Demo](http://demo.rainloop.net/), [Source Code](https://github.com/RainLoop/rainloop-webmail)). `AGPLv3` `PHP`
  * [Roundcube](https://roundcube.net) - Browser-based IMAP client with an application-like user interface. ([Source Code](https://github.com/roundcube/roundcubemail/)) `GPLv3` `PHP`
  * [SquirrelMail](http://squirrelmail.org) - Another browser-based IMAP client. ([Source Code](https://sourceforge.net/p/squirrelmail/code/HEAD/tree/)) `GPLv2` `PHP`
  * [WebMail Lite](http://www.afterlogic.org/webmail-lite) - Web-based IMAP Mail client. ([Source Code](https://github.com/afterlogic/webmail-lite)) `GPLv3` `PHP`

### IRC

**[`^        back to top        ^`](#)**

_[IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) communication software_

  * [Convos](http://convos.by/) - Always online web IRC client. ([Demo](http://demo.convos.by), [Source Code](http://github.com/nordaaker/convos)) `ARTv2` `Perl`
  * [IRCAnywhere](http://ircanywhere.com/) - Open-source self-hosted alternative to IRCCloud. ([Source Code](https://github.com/ircanywhere/ircanywhere)) `GPLv2` `Nodejs`
  * [Quassel IRC](http://quassel-irc.org/) - distributed IRC client, meaning that one (or multiple) client(s) can attach to and detach from a central core. ([Source Code](https://github.com/quassel/quassel)) `GPLv2` `C++`
  * [Robust IRC](https://robustirc.net/) - RobustIRC is IRC without netsplits. Distributed IRC server, based on RobustSession protocol. ([Source Code](https://github.com/robustirc/robustirc)) `BSD` `Go`
  * [The Lounge](https://thelounge.github.io/) - The self-hosted web IRC client. ([Demo](https://avatar.playat.ch:1000/), [Source Code](https://github.com/thelounge/lounge)) `MIT` `Nodejs`
  * [Weechat](https://weechat.org/) - A fast, light and extensible chat client. `GPLv3` `C`
  * [ZNC](http://wiki.znc.in/ZNC) - An advanced IRC bouncer. ([Source Code](https://github.com/znc/znc)) `Apache` `C++`

### SIP


_[SIP](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) telephony software_

  * [Asterisk](http://www.asterisk.org/) - An easy to use but advanced IP PBX system, VoIP gateway and conference server. `GPLv2` `C`
  * [FreeSWITCH](https://freeswitch.org/) - Scalable open source cross-platform telephony platform. ([Source Code](https://freeswitch.org/stash/projects/FS/repos/freeswitch/browse)) `MPLv2` `C`
  * [Kamailio](http://www.kamailio.org/w/) - Modular SIP server (registrar/proxy/router/etc). ([Source Code](https://github.com/kamailio/kamailio)) `GPLv2` `C`
  * [Ostel](https://dev.guardianproject.info/projects/ostel/wiki/Server_Documentation) - Secure SIP telephony setup with ZRTP encryption. `GPLv3` `Ruby`

### IPBX

**[`^        back to top        ^`](#)**

_[IPBX](https://en.wikipedia.org/wiki/IP_PBX) telephony software_

  * [Elastix](http://www.elastix.org) - Unified communications server software based on Asterisk. ([Source Code](https://svn.code.sf.net/p/elastix/code/trunk/)) `GPLv2` `PHP`
  * [Freepbx](http://www.freepbx.org) - Web-based open source GUI that controls and manages Asterisk. ([Source Code](http://git.freepbx.org/projects/FREEPBX)) `GPLv2` `PHP`
  * [Kazoo](http://2600hz.org/) - KAZOO is an open-source, highly scalable software platform designed to provide carrier-grade VoIP switch functions and features. ([Source Code](https://github.com/2600hz/KAZOO)) `MPLv1.1` `Erlang`
  * [XiVO](http://www.xivo.io) - Unified communications server software based on Asterisk. ([Source Code](https://github.com/xivo-pbx)) `GPLv3` `Python`

### Social Networks and Forums

**[`^        back to top        ^`](#)**

  * [Abilian SBE](https://github.com/abilian/abilian-sbe) - Open Source Collaboration and Social Networking framework & platform. `LGPLv2` `Python`
  * [Anahita](https://www.getanahita.com/) - Open Source Social Networking Framework & Platform. ([Source Code](https://github.com/anahitasocial)) `GPLv3` `PHP`
  * [Bootcamp](http://trybootcamp.vitorfs.com) - An enterprise social network. ([Source Code](https://github.com/vitorfs/bootcamp)) `MIT` `Python`
  * [Buddycloud](http://buddycloud.com/) - Tools, libraries, services and a community to build user-to-user, group and social messaging into your app. Saves time. Scales up. Supports you. ([Source Code](https://github.com/buddycloud)) `Apache` `Java`
  * [BuddyPress](https://buddypress.org/about/) - A powerful plugin that takes your WordPress.org powered site beyond the blog with social-network features like user profiles, activity streams, user groups, and more. ([Source Code](https://buddypress.svn.wordpress.org/trunk/)) `GPLv2` `PHP`
  * [diaspora*](https://diasporafoundation.org/) - Distributed social networking server. ([Demo](http://podupti.me/random.php), [Source Code](https://github.com/diaspora/diaspora)) `AGPLv3` `Ruby`
  * [Discourse](http://www.discourse.org/) - Advanced forum / community solution based on Ruby and JS. ([Source Code](https://github.com/discourse/discourse)) `GPLv2` `Ruby`
  * [Elgg](https://elgg.org/) - A powerful open source social networking engine. ([Source Code](https://github.com/Elgg/Elgg)) `GPLv2` `PHP`
  * [Flarum](http://flarum.org) - Delightfully simple forums. Flarum is the next-generation forum software that makes online discussion fun again. ([Source Code](https://github.com/flarum/flarum)) `MIT` `PHP`
  * [flaskbb](https://flaskbb.org/) - FlaskBB is forum software written in Python using the microframework Flask. You can easily create new topics, posts and send other users private messages. It also includes basic administration and moderation tools. ([Source Code](https://github.com/sh4nks/flaskbb)) `BSD` `Python`
  * [FluxBB](http://fluxbb.org/) - Fast, light, user-friendly forum software for your website. ([Source Code](https://github.com/fluxbb/fluxbb)) `GPLv2` `PHP`
  * [Friendica](http://friendica.com/) - Social Communication Server. ([Source Code](https://github.com/friendica/friendica)) `AGPLv3` `PHP`
  * [GNU social](https://gnu.io/social/) - Social communication software for both public and private communications. ([Source Code](https://git.gnu.io/gnu/gnu-social)) `AGPLv3` `PHP`
  * [Hubzilla](https://github.com/redmatrix/hubzilla) - Independent general-purpose websites that not only connect with their associated members and viewers, but also connect together. `MIT` `PHP`
  * [HumHub](https://www.humhub.org/) - A flexible kit for private social networks. ([Source Code](https://github.com/humhub/humhub)) `AGPLv3` `PHP`
  * [Isso](http://posativ.org/isso/) - A lightweight commenting server written in Python and Javascript. It aims to be a drop-in replacement for Disqus. ([Source Code](https://github.com/posativ/isso)) `MIT` `Python`
  * [Jappix](https://jappix.com/) - Jappix is an open social platform, that let's you easily get or keep in touch with everyone. ([Source Code](https://github.com/jappix/jappix)) `AGPLv3` `PHP`
  * [Loomio](https://www.loomio.org/) - Loomio is a collaborative decision-making tool that makes it easy for anyone to participate in decisions which affect them. ([Source Code](https://github.com/loomio/loomio)) `AGPLv3` `Ruby`
  * [Movim](https://movim.eu/) - A brand new social network, full of awesome features in a modern and smart interface. ([Source Code](https://github.com/movim/movim)) `AGPLv3` `PHP`
  * [MyBB](http://www.mybb.com/) - Free, extensible forum software package. ([Source Code](https://github.com/mybb/mybb)) `LGPLv3` `PHP`
  * [Newebe](http://newebe.org/) - A Distributed Social Network. ([Source Code](https://github.com/gelnior/newebe)) `AGPLv3` `Python`
  * [NodeBB](https://nodebb.org/) - Node.js based forum software built for the modern web. ([Source Code](https://github.com/NodeBB/NodeBB)) `GPLv3` `Nodejs`
  * [OSSN](https://www.opensource-socialnetwork.org/) - Open Source Social Network (OSSN) is a social networking software written in PHP. It allows you to make a social networking website and helps your members build social relationships, with people who share similar professional or personal interests. ([Source Code](https://github.com/opensource-socialnetwork/opensource-socialnetwork)) `GPLv2` `PHP`
  * [Oxwall](http://www.oxwall.org/) - Oxwall is used for a wide range of projects starting from family sites and custom social networks to collaboration tools and enterprise community solutions. ([Source Code](https://bitbucket.org/oxwall/public)) `CPALv1` `PHP`
  * [phpBB](https://www.phpbb.com/) - Flat-forum bulletin board software solution that can be used to stay in touch with a group of people or can power your entire website. ([Source Code](https://github.com/phpbb/phpbb)) `GPLv2` `PHP`
  * [PPnet](https://github.com/pixelpark/ppnet) - Create and host your own social network. `MIT` `Javascript`
  * [Pump.io](http://pump.io/) - Stream server that does most of what people really want from a social network. ([Source Code](https://github.com/e14n/pump.io)) `Apache` `Nodejs`
  * [Reddit](https://www.reddit.com/) - Social networking and news website where registered community members can submit content. ([Demo](https://www.reddit.com/), [Source Code](https://github.com/reddit/reddit)) `CPALv1` `Python`
  * [RedMatrix](https://github.com/redmatrix/redmatrix) - Complete decentralised publishing, sharing, and communications system. `MIT` `PHP`
  * [twister](http://twister.net.co/) - Fully decentralized P2P microblogging platform leveraging  the free software implementations of Bitcoin and BitTorrent protocols. ([Source Code](https://github.com/miguelfreitas/twister-core)) `BSD/MIT` `C++`
  * [Vanilla Forums](https://vanillaforums.org/) - Simple and flexible forum software. ([Source Code](https://github.com/vanilla/vanilla)) `GPLv2` `PHP`

### XMPP

**[`^        back to top        ^`](#)**

_[Extensible Messaging and Presence Protocol](https://en.wikipedia.org/wiki/XMPP) software_

#### XMPP Servers

  * [ejabberd](https://www.ejabberd.im/) - XMPP instant messaging server. ([Source Code](https://github.com/processone/ejabberd)) `GPL` `Erlang`
  * [Kontalk](http://kontalk.org/) - Kontalk is an Open Source Messenger, similar to WhatsApp (app for android only currently), including end-to-end encryption, server is based on Tigase XMPP Server. ([Source Code](https://github.com/kontalk)) `GPLv3` `Java`
  * [Metronome IM](https://lightwitch.org/metronome) - Fork of Prosody IM. ([Source Code](http://code.lightwitch.org/)) `MIT` `Lua`
  * [MongooseIM](https://www.erlang-solutions.com/products/mongooseim.html) - Fork of ejabberd. ([Source Code](https://github.com/esl/MongooseIM)) `MIT` `Erlang`
  * [Openfire](http://www.igniterealtime.org/projects/openfire/) - Real time collaboration (RTC) server. ([Source Code](https://github.com/igniterealtime/Openfire)) `Apache` `Java`
  * [Prosody IM](http://prosody.im/) - Feature-rich and easy to configure XMPP server. ([Source Code](http://hg.prosody.im/)) `MIT` `Lua`
  * [Tigase](http://www.tigase.net/content/tigase-xmpp-server) - XMPP server implementation in Java. `GPLv3` `Java`

#### XMPP Web Clients

  * [Candy](http://candy-chat.github.io/candy/) - Multi user XMPP client written in Javascript. ([Source Code](https://github.com/candy-chat/candy)) `MIT` `Javascript`
  * [Converse.js](https://conversejs.org/) - A free and open-source XMPP chat client in your browser. ([Source Code](https://github.com/jcbrand/converse.js)) `MPLv2` `Javascript`
  * [Kaiwa](http://getkaiwa.com/) - Web based chat client in the style of common paid alternatives. ([Source Code](https://github.com/digicoop/kaiwa)) `MIT` `NodeJS`
  * [Salut à Toi](http://www.salut-a-toi.org/) - Multipurpose, multi frontend, libre and decentralised communication tool. ([Source Code](http://repos.goffi.org/sat)) `AGPLv3` `Python`
    * [Libervia](http://wiki.goffi.org/wiki/Libervia/en) - Web frontend from Salut à Toi. ([Source Code](http://repos.goffi.org/libervia)) `AGPLv3` `Python`


## Content Management Systems (CMS)

**[`^        back to top        ^`](#)**

CMS are a practical way to setup a website with many features. CMS often come with third party plugins, themes and functionality that is easy to add and customize to your needs. See also [Blogging Platforms](#blogging-platforms) and [Static Site Generators](#static-site-generators)

  * [Apostrophe 2](http://apostrophenow.org/) - A node.js CMS with a focus on extensible in-context editing tools. ([Demo](http://demo.apostrophenow.com/), [Source Code](https://github.com/punkave/apostrophe)) `MIT` `Nodejs`
  * [Baun](http://bauncms.com/) - A modern, lightweight, extensible CMS for PHP. ([Source Code](https://github.com/BaunCMS/Baun)) `MIT` `PHP`
  * [BigTree CMS](https://www.bigtreecms.org/) - Straightforward, well documented, and capable written with PHP and MySQL. ([Source Code](https://github.com/bigtreecms/BigTree-CMS)) `LGPLv2` `PHP`
  * [CMS Made Simple](http://www.cmsmadesimple.org/) - Open source content management system, faster and easier management of website contents, scalable for small businesses to large corporations. ([Source Code](http://svn.cmsmadesimple.org/svn/cmsmadesimple/trunk/)) `GPL` `PHP`
  * [Concrete 5 CMS](http://www.concrete5.org/) - An open source content management system. ([Source Code](https://github.com/concrete5/concrete5)) `MIT` `PHP`
  * [CouchCMS](http://www.couchcms.com/) - Simple Open-Source CMS for designers. ([Source Code](https://github.com/CouchCMS/CouchCMS)) `CPALv1` `PHP`
  * [Directus](http://getdirectus.com/) - Directus is a powerful and intuitive headless CMS for managing SQL databases with custom architectures. Built around a robust and extensible API, this decoupled content management framework is perfect for websites, apps, or multi-client projects. ([Source Code](https://github.com/directus/directus)) `GPL` `PHP`
  * [Drupal](https://www.drupal.org/) - Advanced open source content management platform. ([Source Code](http://cgit.drupalcode.org/drupal)) `GPL` `PHP`
  * [eLabFTW](http://www.elabftw.net) - An online lab notebook for research labs. Store experiments, use a database to find reagents or protocols, use trusted timestamping to legally timestamp an experiment, export as pdf or zip archive, share with collaborators…. ([Demo](https://demo.elabftw.net), [Source Code](https://github.com/elabftw/elabftw)) `AGPLv3` `PHP`
  * [GetSimple CMS](http://get-simple.info/) - The Simplest Content Management System. Ever. ([Source Code](https://github.com/GetSimpleCMS/GetSimpleCMS)) `GPLv3` `PHP`
  * [ImpressPages CMS](https://www.impresspages.org/) - Easy code meets easy admin. ([Demo](https://www.impresspages.org/demo), [Source Code](https://github.com/impresspages/ImpressPages)) `GPLv3/MIT` `PHP`
  * [Joomla!](https://www.joomla.org/) - Advanced Content Management System (CMS). ([Source Code](http://joomlacode.org/gf/project/joomla/scmsvn/)) `GPL` `PHP`
  * [KeystoneJS](http://keystonejs.com/) - Node.js CMS & Web Application Platform. ([Demo](http://demo.keystonejs.com/), [Source Code](https://github.com/keystonejs/keystone)) `MIT` `Nodejs`
  * [MODX](http://modx.com/) - MODX is an advanced content management and publishing platform. The current version is called 'Revolution'. ([Source Code](https://github.com/modxcms/revolution)) `GPLv2` `PHP`
  * [Neos](https://www.neos.io) - Neos or TYPO3 Neos (for version 1) is a modern, open source CMS based on the Flow framework. ([Source Code](https://git.typo3.org/Packages/TYPO3.Neos.git)) `GPLv3` `PHP`
  * [Noosfero](http://noosfero.org/) - Noosfero is a web platform for social and solidarity economy networks with blog, e-Portfolios, CMS, RSS, thematic discussion, events agenda and collective inteligence for solidarity economy in the same system. ([Source Code](https://gitlab.com/noosfero/noosfero)) `AGPLv3` `Ruby`
  * [october](http://octobercms.com/) - Free, open-source, self-hosted CMS platform based on the Laravel PHP Framework. ([Source Code](https://github.com/octobercms/october)) `MIT` `PHP`
  * [Omeka](http://omeka.org) - Create complex narratives and share rich collections, adhering to Dublin Core standards with Omeka on your server, designed for scholars, museums, libraries, archives, and enthusiasts. ([Demo](http://omeka.org/showcase/), [Source Code](https://github.com/omeka/Omeka)) `GPLv3` `PHP`
  * [Pagekit](https://pagekit.com/) - A new modern CMS to create and share. ([Source Code](https://github.com/pagekit/pagekit)) `MIT` `PHP`
  * [Pico](http://picocms.org/) - A stupidly simple, blazing fast, flat file CMS. ([Source Code](https://github.com/picocms/Pico)) `MIT` `PHP`
  * [Pimcore](https://www.pimcore.org/) - Multi-Channel Experience and Engagement Management Platform. ([Source Code](https://github.com/pimcore/pimcore)) `BSD` `PHP`
  * [Plone](https://plone.org/) - Powerful open-source CMS system. ([Source Code](https://github.com/plone)) `Zope` `Python`
  * [ProcessWire](https://processwire.com/) - ProcessWire is an open source content management system (CMS) and web application framework aimed at the needs of designers, developers and their clients. ([Source Code](https://github.com/ryancramerdesign/ProcessWire)) `MPLv2` `PHP`
  * [Publify](http://publify.co/) - A simple but full featured web publishing software. ([Demo](http://demo.publify.co/), [Source Code](https://github.com/publify/publify)) `MIT` `Ruby`
  * [Redaxscript](http:/redaxscript.com) - Ultra lightweight CMS for MySQL, SQLite and PostgreSQL. ([Demo](http://demo.redaxscript.com/demo/login), [Source Code](https://github.com/redaxmedia/redaxscript)) `GPLv3` `PHP`
  * [Roadiz](https://www.roadiz.io/) -  Modern CMS based on a node system which can handle many types of services. ([Source Code](https://github.com/roadiz/roadiz/)) `MIT` `PHP`
  * [SilverStripe](https://www.silverstripe.org) - Easy to use CMS with powerful MVC framework underlying. ([Demo](http://demo.silverstripe.org/), [Source Code](https://github.com/silverstripe)) `BSD` `PHP`
  * [Sphido](http://www.sphido.org/) - A fast, lightweight, flat file CMS for PHP. ([Source Code](https://github.com/sphido/cms)) `MIT` `PHP`
  * [SPIP](http://www.spip.net/fr) - Publication system for the Internet aimed at collaborative work, multilingual environments, and simplicity of use for web authors. ([Source Code](https://core.spip.net/projects/spip/repository)) `GPLv2` `PHP`
  * [Subrion](http://www.subrion.org) - Subrion is a free open source content management system that allows you to build websites for any purpose. Yes, from blog to corporate mega portal. ([Demo](http://demos.subrion.com), [Source Code](https://github.com/intelliants/subrion)) `GPLv3` `PHP`
  * [Textpattern](http://textpattern.com/) - A flexible, elegant and easy-to-use CMS. ([Demo](http://textpattern.co/demo), [Source Code](https://github.com/textpattern/textpattern)) `GPLv2` `PHP`
  * [TYPO3](https://typo3.org/) - A powerful and advanced CMS with a large community. ([Source Code](https://github.com/TYPO3/TYPO3.CMS)) `GPLv2` `PHP`
  * [Umbraco](https://umbraco.com/) - The friendly CMS. Free and open source with an amazing community. ([Source Code](https://github.com/umbraco/Umbraco-CMS)) `MIT` `.NET`
  * [WordPress](https://wordpress.org/) - The worlds most-used blogging and CMS engine. ([Source Code](https://github.com/WordPress/WordPress)) `GPLv2` `PHP`

_Recipe management_

  * [OpenEats](http://www.openeats.org/) - A recipe management site that allows users to create, store, share and rate recipes, create grocery lists, and more. ([Source Code](https://github.com/qgriffith/OpenEats)) `BSD` `Python`

### E-commerce

* [Attendize](https://www.attendize.com/) - Ticket selling and event management platform. ([Demo](https://www.attendize.com/documentation.php#demo), [Source Code](https://github.com/attendize/attendize)) `AAL` `PHP`
* [CoreShop](https://www.coreshop.org) - CoreShop is a e-commerce plugin for Pimcore. ([Source Code](https://github.com/coreshop/CoreShop)) `GPLv3` `PHP`
* [Magento](https://magento.com/) - Leading provider of open omnichannel innovation. ([Demo](https://magento.com/schedule-a-demo), [Source Code](https://github.com/magento/magento2)) `OSLv3` `PHP`
* [Microweber](https://microweber.com/) - Drag and Drop CMS and online shop. ([Demo](http://demo.microweber.org/), [Source Code](https://github.com/microweber/microweber)) `Apache` `PHP`
* [OpenCart](https://www.opencart.com) - Free open source shopping cart solution. ([Source Code](https://github.com/opencart/opencart)) `GPLv3` `PHP`
* [Open Classifieds](http://open-classifieds.com/) - Free open-source, self-hosted CMS for classifieds sites. ([Source Code](https://github.com/open-classifieds/openclassifieds2)) `GPL` `PHP`
* [Open eShop](https://open-eshop.com/) - Sell your digital goods with licenses and provide support. ([Source Code](https://github.com/open-classifieds/open-eshop)) `GPL` `PHP`
* [OXID eShop](http://oxidforge.org) - OXID eShop is a flexible open source e-commerce software with a wide range of functionalities. ([Demo](http://demoshop.oxid-esales.com/community-edition/), [Source Code](https://github.com/OXID-eSales/oxideshop_ce)) `GPLv3` `PHP`
* [PrestaShop](https://www.prestashop.com/) - PrestaShop offers a free, open-source and fully scalable e-commerce solution. ([Demo](http://demo.prestashop.com/), [Source Code](https://github.com/PrestaShop/PrestaShop)) `OSLv3` `PHP`
* [Shoop](https://www.shoop.io/) - Django powered fully customizable open source e-commerce framework for small and large sites. ([B2C demo](https://demo1.shoop.io/), [B2B demo](https://demo2.shoop.io/), [Source Code](https://github.com/shoopio/shoop)) `AGPLv3` `Python`
* [Sylius](http://sylius.org/) - Symfony2 powered open source full-stack platform for eCommerce. ([Demo](http://sylius.org/demo), [Source Code](https://github.com/Sylius/Sylius)) `MIT` `PHP`
* [Thelia](http://thelia.net/) - Thelia is an open source and flexible e-commerce solution. ([Demo](http://demo.thelia.net/), [Source Code](https://github.com/thelia/thelia)) `LGPL` `PHP`
* [WooCommerce](https://www.woothemes.com/woocommerce/) - WordPress based e-commerce solution. ([Source Code](https://github.com/woothemes/woocommerce)) `GPL` `PHP`


## DNS

**[`^        back to top        ^`](#)**

See https://github.com/n1trux/awesome-sysadmin#dns


## Document Archiving

**[`^        back to top        ^`](#)**

  * [CUPS](https://www.cups.org/) - The Common Unix Print System uses Internet Printing Protocol (IPP) to support printing to local and network printers. ([Source Code](https://www.cups.org/software.php)) `GPLv2` `C`
  * [Paperless](https://github.com/danielquinn/paperless) - Scan, index, and archive all of your paper documents. `GPLv3` `Python`
  * [SANE Network Scanning](http://sane-project.org/) - allow remote clients to access image acquisition devices (scanners) available on the local host. ([Source Code](http://www.sane-project.org/cvs.html)) `GPLv2` `C`


## Enterprise Resource Planning

**[`^        back to top        ^`](#)**

* [ERPNext](https://erpnext.com) - Free open source ERP system. ([Demo](https://demo.erpnext.com), [Source Code](https://github.com/frappe/erpnext)) `GPLv3` `Python`
* [Odoo](http://odoo.com) - Free open source ERP system. ([Demo](https://demo.odoo.com/), [Source Code](https://github.com/odoo/odoo)) `LGPLv3` `Python`
* [Tryton](http://www.tryton.org/) - Free open source business solution. ([Demo](http://demo.tryton.org/), [Source Code](https://hg.tryton.org/)) `GPLv3` `Python`


## Federated Identity/Authentication

**[`^        back to top        ^`](#)**

See https://github.com/n1trux/awesome-sysadmin#identity-management


## Feed Readers

**[`^        back to top        ^`](#)**

  * [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader. ([Source Code](https://github.com/Athou/commafeed)) `Apache` `Java`
  * [Creaky Coot](http://bugs.derivoile.fr/Creaky-Coot/dashboard) - Minimalist and responsive RSS reader and links saver. ([Source Code](https://github.com/piero-la-lune/Creaky-Coot)) `MIT` `PHP`
  * [Feedbin](https://feedbin.com/) - A simple, fast and nice looking RSS reader. ([Source Code](https://github.com/feedbin/feedbin)) `MIT` `Ruby`
  * [FeedHQ](https://feedhq.org/) - FeedHQ is a web-based feed reader. ([Source Code](https://github.com/feedhq/feedhq)) `BSD` `Python`
  * [FreshRSS](http://freshrss.org/) - A self-hostable RSS feed aggregator. ([Demo](http://demo.freshrss.org/i/), [Source Code](https://github.com/FreshRSS/FreshRSS), [Mobile app](https://github.com/Alkarex/EasyRSS)) `AGPLv3` `PHP`
  * [JARR](http://1pxsolidblack.pl/jarr-en.html) - JARR (Just Another RSS Reader) is a web-based news aggregator and reader. ([Demo](https://jarr.info/login?next=%2F), [Source Code](https://github.com/jaesivsm/JARR)) `AGPLv3` `Python`
  * [Kriss Feed](http://tontof.net/kriss/feed/) - A simple and smart (or stupid) feed reader. ([Demo](http://tontof.net/feed/), [Source Code](https://github.com/tontof/kriss_feed/)) `CC0` `PHP`
  * [Leed](http://leed.idleman.fr) - Leed (for Light Feed) is a Free and minimalist RSS aggregator. ([Source Code](https://github.com/ldleman/Leed)) `CCBYNCSAv2` `PHP`
  * [Leselys](https://github.com/socketubs/leselys) - Your very elegant RSS reader. `AGPLv3` `Python`
  * [Lite-Reader](http://cubny.com/lite-reader/) - Read your feeds on your own machine with a simple and lite application. ([Source Code](https://github.com/cubny/lite-reader)) `BSD` `PHP`
  * [Moonmoon](http://moonmoon.org/) - simple feed agregator (planet like): it only aggregates feeds and spits them out in one single page. ([Source Code](https://github.com/mauricesvay/moonmoon)) `BSD` `PHP`
  * [Miniflux](https://miniflux.net/) - Miniflux is a minimalist and open source news reader. ([Source Code](https://github.com/miniflux/miniflux)) `AGPLv3` `PHP`
  * [NewsBlur](http://www.newsblur.com/) - NewsBlur is a personal news reader that brings people together to talk about the world. A new sound of an old instrument. ([Source Code](https://github.com/samuelclay/NewsBlur)) `MIT` `Python`
  * [Nunux Reader](http://reader.nunux.org/) - A simple, fast and reactive RSS reader. ([Source Code](https://github.com/ncarlier/nunux-reader)) `GPLv3` `Nodejs`
  * [Reader-Self](http://readerself.com/) - Self-hosted rss reader (php / mysql or sqlite) - Google Reader alternative. ([Source Code](https://github.com/readerself/readerself)) `GPLv3` `PHP`
  * [RSS2EMail](http://www.allthingsrss.com/rss2email/) - Fetches RSS/Atom-feeds and pushes new Content to any email-reciever, supports OPML. ([Source Code](https://github.com/wking/rss2email)) `GPLv2` `Python`
  * [RSS Monster](https://github.com/pietheinstrengholt/rssmonster) - RSS Monster is an easy to use web-based RSS aggregator and reader compatible with the Fever API, created as an alternative for Google Reader. `MIT` `PHP`
  * [Screaming Liquid Tiger](https://github.com/herrbischoff/screaming-liquid-tiger) - Simple script to automatically generate valid RSS and Atom feeds from a list of media files in the same folder. `MIT` `PHP`
  * [Selfoss](http://selfoss.aditu.de/) - The new multipurpose rss reader, live stream, mashup, aggregation web application. ([Source Code](https://github.com/SSilence/selfoss)) `AGPLv3` `PHP`
  * [Stringer](https://github.com/swanson/stringer) - A work-in-progress self-hosted, anti-social RSS reader. `MIT` `Ruby`
  * [Tiny Tiny RSS](https://tt-rss.org/gitlab/fox/tt-rss) - Open source web-based news feed (RSS/Atom) reader and aggregator. ([Demo](http://framanews.org/)) `GPLv3` `PHP`
    * [gritttt-rss](http://gritttt-rss.nicolashoening.de/) - More features for Tiny Tiny RSS. ([Source Code](https://github.com/nhoening/gritttt-rss)) `BSD` `Python`
    * [ttrss-mobile](https://github.com/mboinet/ttrss-mobile) - A mobile webapp for Tiny Tiny RSS. `AGPLv3` `Nodejs`
    * [ttrss-reader](https://github.com/kucrut/ttrss-reader) - Light and responsive client for TTRSS. `GPLv2` `Javascript`


## File Sharing and Synchronization

**[`^        back to top        ^`](#)**

Some [Groupware](#groupware) solutions also feature file sharing and synchronization.

#### Distributed filesystems

  * [Camlistore](https://camlistore.org/) - Camlistore is a set of open source formats, protocols, and software for modeling, storing, searching, sharing and synchronizing data in the post-PC era. Data may be files, objects, tweets, or 5TB videos. ([Source Code](https://github.com/camlistore/camlistore)) `Apache` `Go`
  * [GlusterFS](https://www.gluster.org) - GlusterFS is a scalable network filesystem. Using common off-the-shelf hardware, you can create large, distributed storage solutions for media streaming, data analysis, and other data- and bandwidth-intensive tasks. ([Source Code](https://github.com/gluster/glusterfs)) `LGPLv3/GPLv2` `C`
  * [Go IPFS](https://github.com/ipfs/go-ipfs) - Implementation of [IPFS](http://ipfs.io/), a global, versioned, peer-to-peer filesystem that seeks to connect all computing devices with the same system of files. `MIT` `Go`
  * [Ori Filesystem](http://ori.scs.stanford.edu/) - A Secure Distributed File System built for offline operation. ([Source Code](https://bitbucket.org/orifs/ori/wiki/Home)) `MIT` `C++`
  * [Swift](http://docs.openstack.org/developer/swift/) - A highly available, distributed, eventually consistent object/blob store. ([Source Code](https://github.com/openstack/swift)) `Apache` `Python`
  * [Tahoe-LAFS](https://www.tahoe-lafs.org/trac/tahoe-lafs) - Tahoe-LAFS is a Free and Open decentralized cloud storage system. It distributes your data across multiple servers. If some of the servers fail or are taken over, the entire file store continues to function correctly, preserving privacy and security. ([Source Code](https://github.com/tahoe-lafs/tahoe-lafs)) `GPLv2` `Python`

#### File transfer/synchronization

  * [Git Annex](http://git-annex.branchable.com) - File synchronization between computers, servers, external drives. ([Source Code](https://github.com/joeyh/git-annex)) `GPLv3` `Haskell`
  * [Kinto](https://kinto.readthedocs.org) - Kinto is a minimalist JSON storage service with synchronisation and sharing abilities. ([Source Code](https://github.com/Kinto)) `Apache` `Python`
  * [Nextcloud](https://nextcloud.com/) - Access & share your files, calendars, contacts, mail & more from any device, on your terms. ([Source Code](https://github.com/nextcloud/server)) `MIT` `PHP`
  * [OpenSSH/SFTP](http://www.openssh.com/) - Secure File Transfer Program. ([Source Code](http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/usr.bin/ssh)) `BSD` `C`
  * [ownCloud](https://owncloud.org/) - All-in-one solution for saving, synchronizing, viewing, editing and sharing files, calendars, address books and more. ([Source Code](https://github.com/owncloud/core)) `AGPLv3` `PHP`
  * [Pydio](https://pydio.com/) - Turn any web server into a powerful file management system and an alternative to mainstream cloud storage providers. ([Source Code](https://github.com/pydio/pydio-core)) `AGPLv3` `PHP`
  * [Samba](https://www.samba.org/) - Samba is the standard Windows interoperability suite of programs for Linux and Unix. It provides secure, stable and fast file and print services for all clients using the SMB/CIFS protocol. ([Source Code](https://git.samba.org/samba.git/)) `GPLv3` `C`
  * [Seafile](https://www.seafile.com/en/home/) - File hosting and sharing solution primary for teams and organizations. ([Demo](https://seacloud.cc/demo), [Source Code](https://github.com/haiwen/seafile)) `GPLv2` `C`
  * [SparkleShare](http://sparkleshare.org/) - Self hosted, instant, secure file sync. ([Source Code](https://github.com/hbons/SparkleShare)) `GPLv3` `C#`
  * [Syncany](https://www.syncany.org/) - Secure file sync software for arbitrary storage backends - An open-source cloud storage and filesharing application. Securely synchronize your files to any kind of storage. `GPLv3` `Java`
  * [Syncthing](https://syncthing.net/) - Syncthing is an open source peer-to-peer file synchronisation tool. ([Source Code](https://github.com/syncthing/syncthing)) `MPLv2` `Go`
  * [Unison](https://www.cis.upenn.edu/~bcpierce/unison/) - Unison is a file-synchronization tool for OSX, Unix, and Windows. `GPLv3` `OCaml`
  * [Z-Push](http://z-push.org/) - An implementation of Microsoft’s [ActiveSync](https://en.wikipedia.org/wiki/ActiveSync) protocol. ([Source Code](https://stash.z-hub.io/projects/ZP/repos/z-push)) `AGPLv3` `PHP`

#### Peer-to-peer filesharing

  * [FilePizza](http://file.pizza/) - Peer-to-peer file transfers in your browser. ([Source Code](https://github.com/kern/filepizza)) `BSD` `Nodejs`
  * [FileTea](https://filetea.me/) - Anonymous, volatile file sharing: does not store any file on server. Bridges a download to the recipient’s browser with an upload from the source’s browser. ([Source Code](https://github.com/elima/FileTea)) `AGPLv3` `C`
  * [instant.io](https://github.com/feross/instant.io) - Streaming file transfer over WebTorrent. ([Demo](https://instant.io)) `MIT` `Nodejs`
  * [Opentracker](http://erdgeist.org/arts/software/opentracker/) - Open and free bittorrent tracker. It aims for minimal resource usage and is intended to run at your wlan router. ([Source Code](http://erdgeist.org/gitweb/opentracker/)) `Beerware` `C`
  * [ShareFest](https://github.com/peer5/sharefest) - Web based p2p file sharing built on WebRTC Data Channels API. ([Demo](https://www.sharefest.me/)) `Apache` `Nodejs`

#### Single-click/drag-n-drop upload

  * [BoZoN](https://github.com/broncowdd/BoZoN) - Minimalist Drag & drop file sharing app. `AGPLv3` `PHP`
  * [Coquelicot](https://coquelicot.potager.org/) - Coquelicot is a “one-click” file sharing web application with a focus on protecting users’ privacy. ([Source Code](https://coquelicot.potager.org/gitweb/?p=coquelicot.git)) `AGPLv3` `Ruby`
  * [Dropcenter](http://projet.idleman.fr/dropcenter/) - Upload files by simple drag-n-drop. ([Source Code](https://github.com/ldleman/dropcenter)) `CCBYNCSAv3` `PHP`
  * [droppy](https://github.com/silverwind/droppy) - droppy is a self-hosted cloud server with an interface similar to desktop file managers and has capabilites to edit files on-the-fly as well as view and playback media directly in the browser. ([Demo](http://droppy.silverwind.io/)) `BSD` `Nodejs`
  * [FileShelter](https://github.com/epoupon/fileshelter) - FileShelter is a self-hosted software that allows you to easily share files over the Internet. ([Demo](http://fileshelter.suroot.com/)) `GPLv3` `C++`
  * [img.bi](https://github.com/imgbi/img.bi) - img.bi is a secure image hosting. Images are encrypted using AES-256 with random key in browser before upload. `GPLv3` `Nodejs`
  * [ipfs.pics](https://ipfs.pics/) - ipfs.pics is a o distributed image hosting website. ([Source Code](https://github.com/ipfspics/server)) `AGPLv3` `PHP`
  * [Jirafeau](https://gitlab.com/mojo42/Jirafeau) - Jirafeau is a web site permitting to upload a file in a simple way and give an unique link to it. ([Demo](http://jirafeau.net/)) `AGPLv3` `PHP`
  * [Jyraphe](http://home.gna.org/jyraphe/) - Jyraphe is a web application of file repository, easy to install and easy to use. ([Source Code](http://svn.gna.org/viewcvs/jyraphe/)) `AGPLv3` `PHP`
  * [linx](https://github.com/andreimarcu/linx-server) - File sharing application and pastebin with API, auto-expiry, deletion keys, and web seed support. ([Demo](https://linx.li/)) `GPLv3` `Go`
  * [lufi](https://git.framasoft.org/luc/lufi) - Let's Upload that FIle, client-side encrypted. ([Demo](https://demo.lufi.io), [Source Code](https://git.framasoft.org/luc/lufi/tree/master)) `AGPLv3` `Perl`
  * [lutim](https://github.com/ldidry/lutim) - Let's Upload That Image. `AGPLv3` `Perl`
  * [Mediacrush](https://github.com/MediaCrush/MediaCrush) - A website you can upload images, audio, and video to, and receive a link to share it with your friends. `MIT` `Python`
  * [Minio](https://minio.io/) - Store photos, videos, VMs, containers, log files, or any blob of data as objects. ([Source Code](https://github.com/minio/minio)) `Apache` `Go`
  * [Nimbus](https://github.com/ethanal/nimbus) - A drag-and-drop shortlink file sharer for OS X. `MIT` `Python`
  * [OnionShare](https://github.com/micahflee/onionshare) - Securely and anonymously share a file of any size. `GPLv2` `Python`
  * [PictShare](https://www.pictshare.net/) - PictShare is a multi lingual, open source image hosting service with a simple resizing and upload API. ([Demo](https://www.pictshare.net/), [Source Code](https://github.com/chrisiaut/pictshare)) `Apache` `PHP`
  * [Plik](https://github.com/root-gg/plik) - Plik is a scalable & friendly temporary file upload system ( wetransfer like ). ([Demo](https://plik.root.gg/)) `MIT` `Go`
  * [Pomf](https://github.com/Pomf/Pomf) - Simple file uploading and sharing, source for the now shut down site Pomf.se. `MIT` `PHP`
  * [ProjectSend](http://www.projectsend.org/) - Upload files and assign them to specific clients you create. Give access to those files to your clients. ([Source Code](https://github.com/ignacionelson/ProjectSend)) `GPLv2` `PHP`
  * [transfer.sh](https://transfer.sh) - Easy file sharing from the command line. ([Demo](https://transfer.sh), [Source Code](https://github.com/dutchcoders/transfer.sh)) `MIT` `Go`
  * [Uguu](https://uguu.se/) - Stores files and deletes after X amount of time. ([Source Code](https://github.com/nokonoko/uguu)) `MIT` `PHP`
  * [Up1](https://github.com/Upload/Up1) - A Client-side Encrypted Image Host. ([Demo](https://up1.ca/)) `MIT` `Nodejs`
  * [uPste](https://u.pste.pw) - A private file hosting application with an emphasis on serving technology communities. ([Source Code](https://github.com/TheReverend403/uPste)) `AGPLv3` `PHP`
  * [YouTransfer](http://www.youtransfer.io) - YouTransfer is a simple but elegant self-hosted file transfer & sharing solution. ([Demo](http://demo.youtransfer.io/), [Source Code](https://github.com/remie/YouTransfer)) `Apache` `Nodejs`

#### Web based file managers

  * [Apaxy](http://adamwhitcroft.com/apaxy/) - Theme built to enhance the experience of browsing web directories, using the mod_autoindex Apache module and some CSS to override the default style of a directory listing. ([Source Code](https://github.com/AdamWhitcroft/Apaxy)) `Unlicense` `HTML`
  * [DirectoryLister](http://www.directorylister.com/) - A simple PHP based directory lister that lists a directory and all it's sub-directories and allows you to navigate there within. ([Source Code](https://github.com/DirectoryLister/DirectoryLister)) `MIT` `PHP`
  * [Encode Explorer](http://encode-explorer.siineiolekala.net/) - Encode Explorer is a single page file browser, it is simple and functional. ([Demo](http://encode-explorer.siineiolekala.net/explorer/index.php), [Source Code](https://github.com/marekrei/encode-explorer)) `MIT` `PHP`
  * [explorer](https://github.com/soyuka/explorer) - Highly-configurable directory listing made with nodejs. ([Source Code](https://github.com/soyuka/explorer)) `MIT` `Nodejs`
  * [eXtplorer](https://extplorer.net/) - A PHP and Javascript based File Manager. ([Source Code](https://extplorer.net/projects/extplorer/repository)) `MPLv1.1/GPLv2` `PHP`
  * [goBrowser](https://github.com/xataz/gobrowser) - Simple http file browser. ([Source Code](https://github.com/xataz/gobrowser)) `GPLv3` `Go`
  * [h5ai](https://larsjung.de/h5ai/) - Modern file indexer for HTTP web servers with focus on your files. Directories are displayed in a appealing way and browsing them is enhanced by different views, a breadcrumb and a tree overview. ([Demo](https://larsjung.de/h5ai/demo/), [Source Code](https://github.com/lrsjng/h5ai)) `MIT` `PHP`
  * [Monsta FTP](http://www.monstaftp.com/) - Open source PHP/Ajax cloudware that puts FTP file management right in your browser, anywhere, any time. ([Demo](http://mftp.live/), [Source Code](https://github.com/MonstaApps/Monsta-FTP)) `GPLv3` `PHP`
  * [ResourceSpace](http://www.resourcespace.org) - ResourceSpace open source digital asset management software is the simple, fast, & free way to organise your digital assets. ([Demo](http://www.resourcespace.org/trial), [Source Code](http://www.resourcespace.org/svn)) `BSD/Other` `PHP`
  * [Sprut.io](https://sprut.io) - 2 panel file manager with drag and drop features, code editor, text search, hotkeys. ([Demo](https://demo.sprut.io:9443), [Source Code](https://github.com/LTD-Beget/sprutio)) `GPLv3` `Python`


## Games

**[`^        back to top        ^`](#)**

  * [0hh1](https://github.com/Q42/0hh1) - A lovely little logic game by Q42. ([Demo](http://0hh1.com/)) `MIT` `HTML5`
  * [A Dark Room](https://github.com/doublespeakgames/adarkroom) - A minimalist text adventure game for your browser. ([Demo](http://adarkroom.doublespeakgames.com/)) `MPLv2` `HTML5`
  * [Agar.IO Clone](https://github.com/huytd/agar.io-clone) - Agar.io clone written with Socket.IO and HTML5 canvas. `MIT` `Nodejs`
  * [Clumsy Bird](https://github.com/ellisonleao/clumsy-bird) - A MelonJS port of the famous Flappy Bird Game. ([Demo](http://www.ellison.rocks/clumsy-bird/)) `MIT` `Nodejs`
  * [Cubiks-2048](https://github.com/Kshitij-Banerjee/Cubiks-2048) - Clone of 2048 game in 3D. ([Demo](https://kshitij-banerjee.github.io/Cubiks-2048/)) `CCBYNCv4` `HTML5`
  * [Hextris](https://github.com/Hextris/hextris) - Fast paced HTML5 puzzle game inspired by Tetris. ([Demo](http://hextris.io/)) `GPLv3` `HTML5`
  * [Posio](https://github.com/abrenaut/posio/) - A geography multiplayer game. ([Demo](https://posio.abrenaut.com/)) `MIT` `Python`
  * [TournamentMango](http://tournamentmango.com/) - TournamentMango is an open source tournament bracket and user management system. You can build an archive of players and keep track of all their scores over time as well as their regular characters, games, and aliases. ([Source Code](https://github.com/seiyria/tournamentmango)) `MIT` `Javascript`


## Gateways

**[`^        back to top        ^`](#)**

  * [GateOne](http://liftoffsoftware.com/Products/GateOne) - Gate One is an HTML5 web-based terminal emulator and SSH client. ([Source Code](https://github.com/liftoff/GateOne/)) `AGPLv3` `Python`
  * [Guacamole](http://guac-dev.org/) - Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC and RDP. ([Source Code](https://github.com/glyptodon/)) `Apache` `Java/C`


## Groupware

**[`^        back to top        ^`](#)**

  * [Citadel](http://www.citadel.org/doku.php) - Groupware including email, calendar/scheduling, address books, forums, mailing lists, IM, wiki and blog engines, RSS aggregation and more. ([Source Code](http://www.citadel.org/doku.php/installation:source)) `GPLv3` `C`
  * [Cozy Cloud](https://cozy.io) - A personal cloud where you can read your emails or manage and sync your contact, files or calendars, with an app store full of community contributions. ([Source Code](https://github.com/cozy)) `GPLv3` `Nodejs`
  * [egroupware](http://www.egroupware.org/) - Software suite including calendars, address books, notepad, project management tools, client relationship management tools (CRM), knowledge management tools, a wiki and a CMS. ([Source Code](https://github.com/EGroupware/egroupware)) `GPLv2` `PHP`
  * [Horde](http://www.horde.org/) - The Horde Project is about creating high quality Open Source applications and libraries, based on PHP and the Horde Framework. ([Demo](http://demo.horde.org/login.php), [Source Code](https://github.com/horde/horde)) `GPLv2` `PHP`
  * [Kolab](https://kolab.org/) - Kolab community is a unified communication and collaboration system. ([Source Code](https://git.kolab.org/)) `Multiple` `C++/Python/PHP`
  * [Kopano](https://kopano.com/) - Groupware suite including e-mail, calendars, tasks, todos and notes. Featuring a modern WebApp, DeskApp and mobile access over Z-Push/ActiveSync. ([Demo](http://demo.kopano.com), [Source Code](https://stash.kopano.io)) `AGPLv3` `C/Python/PHP`
  * [Mayan EDMS](http://www.mayan-edms.com) - Free Open Source Electronic Document Management System. An electronic vault for your documents with preview generation, OCR, and automatic categorization among other features. ([Demo](http://demo.mayan-edms.com), [Source Code](https://gitlab.com/mayan-edms/mayan-edms)) `Apache` `Python`
  * [Openmeetings](https://openmeetings.apache.org/index.html) - Openmeetings provides video conferencing, instant messaging, white board, collaborative document editing and other groupware tools using API functions of the Red5 Streaming Server for Remoting and Streaming. ([Source Code](https://openmeetings.apache.org/source-repository.html)) `Apache` `Java`
  * [Sogo](http://www.sogo.nu/) - SOGo offers multiple ways to access the calendaring and messaging data. CalDAV, CardDAV, GroupDAV, as well as ActiveSync, including native Outlook compatibility and web interface. ([Demo](http://demo.sogo.nu/SOGo/), [Source Code](https://github.com/inverse-inc/sogo)) `GPLv1/LGPLv2` `Objective-C`
  * [Tine 2.0](https://www.tine20.org) - Contacts, Calendar, Tasks, WebDAV, ActiveSync, VOIP, Mail-Client, CRM, Sales, Projects, Timetracker. ([Demo](https://demo.tine20.net), [Source Code](https://packages.tine20.com/maintenance/source/)) `AGPLv3/Other` `PHP`
  * [Zimbra Collaboration](https://www.zimbra.com/downloads/) - Email, calendar, collaboration server with web interface and lots of integrations. ([Source Code](https://git.zimbra.com/repos/zimbra-foss/)) `GPLv2/CPALv1` `Java`


## Learning and Courses

**[`^        back to top        ^`](#)**

  * [Chamilo LMS](https://chamilo.org/chamilo-lms/) - Chamilo LMS allows you to create a virtual campus for the provision of online or semi-online training. ([Source Code](https://github.com/chamilo/chamilo-lms)) `GPLv3` `PHP`
  * [edX](https://www.edx.org/) - The Open edX platform is open-source code that powers [edX.org](https://www.edx.org/). ([Source Code](https://github.com/edx/)) `AGPLv3` `Python`
  * [lxHive](http://www.lxhive.com/) - Open Source ExperienceAPI compliant Learning Record Store (LRS) - previously code-named TinCanAPI. ([Source Code](https://github.com/Brightcookie/lxHive)) `GPLv3` `PHP`
  * [Mahara](https://mahara.org/) - Open Source fully featured web application to build students electronic portfolio. ([Source Code](https://github.com/MaharaProject/mahara)) `GPLv3` `PHP`
  * [Moodle](https://moodle.org/) - Moodle is a learning and courses platform with one of the largest open source communities worldwide. ([Demo](https://moodle.org/demo/), [Source Code](https://git.moodle.org/gw)) `GPL` `PHP`
  * [RELATE](https://documen.tician.de/relate/) - RELATE is a web-based courseware package, includes features such as: flexible rules, statistics, multi-course support, class calender. ([Source Code](https://github.com/inducer/relate/)) `MIT` `Python`
  * [Sakai](https://www.sakaiproject.org/) - The Sakai project provides a flexible and feature-rich environment for teaching, learning, research and other collaboration. ([Demo](https://www.sakaiproject.org/try-sakai), [Source Code](https://github.com/sakaiproject/sakai)) `ECLv2` `Java`
  * [SchoolTool](http://schooltool.org/) - SchoolTool is free administrative software for schools. It includes demographics, gradebook, attendance, calendaring, reporting and more for primary and secondary schools. ([Source Code](http://bazaar.launchpad.net/~schooltool-owners/schooltool/2.8/files)) `GPLv2` `Python`


## Maps & GPS

**[`^        back to top        ^`](#)**

  * [Graphhopper](https://graphhopper.com/) - Fast routing library and server using OpenStreetMap. ([Source Code](https://github.com/graphhopper/graphhopper)) `Apache` `Java`
  * [MapBBCodeShare](https://github.com/MapBBCode/share.mapbbcode.org) - Tool for sharing custom OSM maps. Support for annotated markers, polygons, lines, multi-format import/export, multiple layers, shortlinks. ([Demo](http://share.mapbbcode.org/)) `WTFPL/Other` `PHP`
  * [OpenGTS](http://www.opengts.org/) - Entry-level fleet tracking system. Supports variety of tracking devices and protocols. Comes with rich web-interface and reporting features. ([Demo](http://track.opengts.org/track/Track), [Source Code](https://sourceforge.net/projects/opengts/files/server-base/)) `Apache` `Java`
  * [Openstreetmap](http://www.openstreetmap.org/) - OpenStreetMap is a map of the world, created by people like you and free to use under an open license. ([Source Code](https://github.com/openstreetmap/openstreetmap-website)) `GPLv2` `Ruby`
  * [Traccar](https://www.traccar.org/) - Java application to track GPS positions. Supports loads of tracking devices and protocols, has an Android and iOS App. Has a web interface to view your trips. ([Demo](http://demo.traccar.org/), [Source Code](https://github.com/tananaev?tab=repositories)) `Apache` `Java`
  * [uMap](https://umap.openstreetmap.fr/en/) - Create maps with OpenStreetMap layers in a minute and embed them in your site. ([Source Code](https://github.com/umap-project/umap)) `WTFPL` `Python`


## Media Streaming

**[`^        back to top        ^`](#)**

See also <https://en.wikipedia.org/wiki/List_of_streaming_media_systems>, <https://en.wikipedia.org/wiki/Comparison_of_streaming_media_systems>

### Audio Streaming

  * [Airtime](https://www.sourcefabric.org/en/airtime/) - Simple, open source platform that lets you broadcast streaming radio on the web. ([Source Code](https://github.com/sourcefabric/Airtime)) `AGPLv3` `PHP`
  * [Ampache](http://ampache.org/) - A web based audio/video streaming application. ([Demo](http://play.dogmazic.net/), [Source Code](https://github.com/ampache/ampache)) `AGPLv3` `PHP`
  * [CherryMusic](http://www.fomori.org/cherrymusic/) - Minimalistic Web-Mediaplayer. ([Source Code](https://github.com/devsnd/cherrymusic)) `GPLv3` `Python`
  * [cloudtunes](https://github.com/jkbrzt/cloudtunes) `⚠` - Web-based music player for the cloud. `MIT` `Python`
  * [GNU FM](https://gnu.io/fm/) - Running music community websites, alternative to last.fm. ([Source Code](http://git.savannah.gnu.org/cgit/librefm.git/)) `AGPLv3` `PHP`
  * [Groove Basin](http://groovebasin.com/) - A music player server with a web-based user interface inspired by Amarok 1.4. ([Source Code](https://github.com/andrewrk/groovebasin)) `MIT` `Nodejs`
  * [Icecast 2](http://www.icecast.org/) - streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://git.xiph.org/?p=icecast-server.git;a=summary)) `GPLv2` `C`
  * [koel](http://koel.phanan.net/) - A personal music streaming server that works. ([Source Code](https://github.com/phanan/koel)) `MIT` `PHP`
  * [Libresonic](http://libresonic.org/) - Open-source web-based media streamer and jukebox. A fork of Subsonic's last open-source release, before it switched licenses. `GPLv3` `Java`
  * [Mopidy](http://mopidy.readthedocs.org/) - Extensible music server. Offers a superset of the mpd API, as well as integration with 3rd party services like Spotify, SoundCloud etc. ([Source Code](https://github.com/mopidy/mopidy)) `Apache` `Python`
   * [Moped](https://github.com/martijnboland/moped) - Responisve HTML5 + Javascript client for the Mopidy music server. `MIT` `HTML5`
   * [Mopidy MusicBox](https://github.com/pimusicbox/mopidy-musicbox-webclient) - Web Client for Mopidy Music Server. `Apache` `HTML5`
   * [Mopidy-Party](https://github.com/Lesterpig/mopidy-party) - Mopidy web extension designed for party! Let your guests manage the sound. `Apache` `Python`
  * [mpd](http://www.musicpd.org/) - Daemon to remotely play music, stream music, handle and organize playlists. Many clients available. `GPLv2` `C++`
   * [ympd](http://www.ympd.org/) - Standalone MPD Web GUI written in C, utilizing Websockets and Bootstrap/JS. ([Source Code](https://github.com/notandy/ympd)) `GPLv2` `C`
  * [Sonerezh](https://www.sonerezh.bzh/) - A self-hosted, web-based application for stream your music, everywhere. ([Demo](https://www.sonerezh.bzh/demo/), [Source Code](https://github.com/sonerezh/sonerezh)) `GPLv3` `PHP`

### Video Streaming

  * [CyTube](https://github.com/calzoneman/sync) - CyTube is a web application providing media synchronization, chat, and more for an arbitrary number of channels. ([Demo](http://cytu.be)) `MIT` `Nodejs`
  * [Emby](http://emby.media/) - A home media server built using other popular open source technologies. ([Source Code](https://github.com/MediaBrowser/Emby)) `GPLv2` `C#`
  * [Flumotion](http://flumotion.net/) - A streaming media server with intuitive graphical administration tools. ([Source Code](https://github.com/Flumotion/flumotion)) `LGPLv2` `Python`
  * [Hellowlol HTPC Manager fork](https://github.com/Hellowlol/HTPC-Manager) - A fully responsive interface to manage all your favorite media on your HTPC. ([Source Code](https://github.com/styxit/HTPC-Manager)) `MIT` `Python`
  * [Icecast 2](http://www.icecast.org/) - streaming audio/video server which can be used to create an Internet radio station or a privately running jukebox and many things in between. ([Source Code](https://git.xiph.org/?p=icecast-server.git;a=summary)) `GPLv2` `C`
  * [Odd Networks](http://oddnetworks.com) - Open source video management system (VMS) and API for collections and videos with supporting SDKs for Roku, Apple iOS/tvOS, Google Android, and Amazon FireTV. ([Source Code](https://github.com/oddnetworks/oddworks)) `MIT` `Nodejs`
  * [ReadyMedia](http://sourceforge.net/projects/minidlna/) - A simple media server software, with the aim of being fully compliant with DLNA/UPnP-AV clients. `GPLv2` `C`
  * [Restreamer](https://datarhei.github.io/restreamer/) - Restreamer allows you to do h.264 real-time video streaming on your website without a streaming provider. ([Source Code](https://github.com/datarhei/restreamer)) `Apache` `Nodejs`
  * [Rygel](https://wiki.gnome.org/action/show/Projects/Rygel) - Rygel is a UPnP AV MediaServer that allows you to easily share audio, video, and pictures. Media player software may use Rygel to become a MediaRenderer that may be controlled remotely by a UPnP or DLNA Controller. `GPLv3` `C`
  * [Streama](https://github.com/dularion/streama) - Self-hosted Netflix alternative. `MIT` `Java`
  * [Zoneminder](https://github.com/ZoneMinder/ZoneMinder) - Closed-circuit television (CCTV) software application which supports IP, USB and Analog cameras. `GPLv2` `PHP`


## Misc/Other

**[`^        back to top        ^`](#)**

  * [EasyBook Project](http://easybook-project.org/) - Book publishing as easy as it should be. ([Source Code](https://github.com/javiereguiluz/easybook)) `MIT` `PHP`
  * [Fusio](http://www.fusio-project.org/) - Fusio is an open source API management platform which helps to build and manage REST APIs. ([Demo](http://demo.fusio-project.org/backend.htm), [Source Code](https://github.com/apioo/fusio)) `AGPLv3` `PHP`
  * [GeneWeb](https://geneweb.tuxfamily.org/wiki/GeneWeb) - GeneWeb is an open source genealogy software written in OCaml. It comes with a Web interface and can be used off-line or as a Web service. ([Demo](https://demo.geneweb.tuxfamily.org/gw7/), [Source Code](https://github.com/geneweb/geneweb)) `GPLv2` `OCAML`
  * [King Phisher](https://github.com/securestate/king-phisher) - King Phisher is a tool for testing and promoting user awareness by simulating real world phishing attacks. `BSD` `Python`
  * [Mindmaps](https://github.com/drichard/mindmaps) - An open source, offline capable, mind mapping application. ([Demo](http://drichard.org/mindmaps/)) `AGPLv3` `HTML5`
  * [Para](http://www.paraio.org) - Para is a flexible and modular backend framework/server for object persistence, API development and authentication. ([Source Code](https://github.com/erudika/para)) `Apache` `Java`
  * [Skygear](https://skygear.io) - A complete backend server for web, mobile and iOT applcations. ([Demo](https://portal.skygear.io), [Source Code](https://github.com/SkygearIO/skygear-server)) `Apache` `Go`
  * [webtrees](https://www.webtrees.net) - webtrees is the web's leading on-line collaborative genealogy application. ([Demo](https://dev.webtrees.net/demo-stable/index.php?ctype=gedcom&ged=demo), [Source Code](https://github.com/fisharebest/webtrees)) `GPLv3` `PHP`

## Money, Budgeting and Management

**[`^        back to top        ^`](#)**

  * [Benedetto](https://github.com/arecker/bennedetto) - Bennedetto is a simple, turn-based budget management app. `GPLv3` `Python`
  * [Economizzer](http://www.economizzer.org/) - Economizzer is a simple and open source personal finance manager system, available in English, Brazilian, Portuguese and Russian. ([Source Code](https://github.com/gugoan/economizzer)) `MIT` `PHP`
  * [ExMoney](https://github.com/gaynetdinov/ex_money) - A [work-in-progress] self-hosted personal finance app. `ISC` `Elixir`
  * [Firefly III](https://jc5.github.io/firefly-iii/) - Firefly III is a financial manager. It helps you keeping track of your money and make budget forecasts. It supports credit cards, shared household accounts and savings accounts. Very modern, it's powered by Laravel and requires PHP7. `MIT` `PHP`
  * [Galette](http://galette.eu/dc/) - Galette is a membership management web application towards non profit organizations. ([Source Code](http://git.tuxfamily.org/galette/galette.git/)) `GPLv3` `PHP`
  * [GLPI](http://www.glpi-project.org/spip.php?lang=en) - GLPI is an IT assests/resources/inventory manager. ([Source Code](https://forge.glpi-project.org/projects/glpi)) `GPLv2` `PHP`
  * [GRR](http://grr.devome.com/?lang=en) - Assets management and booking for small/medium companies. ([Source Code](https://github.com/JeromeDevome/GRR)) `GPLv2` `PHP`
  * [Hospital Run](http://hospitalrun.io/) - Hospital Run is offline enabled hospital management software. ([Source Code](https://github.com/HospitalRun/hospitalrun-server), [Demo](http://hospitalrun.io/demo/)) `GPLv3` `Nodejs`
  * [Inventaire](https://inventaire.io/welcome) - Collaborative resources mapper project, while yet only focused on exploring books mapping with wikidata and ISBNs. ([Source Code](https://github.com/inventaire/inventaire)) `AGPLv3` `Nodejs`
  * [Invoice Ninja](https://www.invoiceninja.org/) - A powerful tool to invoice clients online. ([Demo](https://app.invoiceninja.com/invoices/create), [Source Code](https://github.com/invoiceninja/invoiceninja)) `AAL` `PHP`
  * [InvoicePlane](https://invoiceplane.com/) - Manage quotes, invoices, payments and customers for your small business. ([Demo](https://demo.invoiceplane.com), [Source Code](https://github.com/InvoicePlane/InvoicePlane)) `MIT` `PHP`
  * [IHateMoney](http://ihatemoney.org/) - Manage your shared expenses, easily. ([Source Code](https://github.com/spiral-project/ihatemoney)) `BSD` `Python`
  * [Koha](https://koha-community.org/) - Fully featured, scalable library management system (integrated library system - ILS). ([Source Code](https://github.com/Koha-Community/Koha)) `GPLv3` `Perl`
  * [PartKeepr](https://www.partkeepr.org) - PartKeepr is an electronic part inventory management software. It helps you to keep track of your available parts and assist you with re-ordering parts. ([Demo](https://demo.partkeepr.org/), [Source Code](https://github.com/partkeepr/PartKeepr)) `GPLv3` `PHP`
  * [StockazNG](https://dev.sigpipe.me/dashie/StockazNG) - Asset Management System. `MIT` `Python`
  * [Tryton](http://www.tryton.org/) - Core base of a complete business solution (ERP). ([Demo](http://demo.tryton.org) admin/admin, [Source Code](https://hg.tryton.org)) `GPLv3` `Python`


## Monitoring

**[`^        back to top        ^`](#)**

See https://github.com/n1trux/awesome-sysadmin#monitoring and https://github.com/n1trux/awesome-sysadmin#metric--metric-collection


## Note-taking & Editors

**[`^        back to top        ^`](#)**

  * [dillinger](http://dillinger.io/) - The last Markdown editor, ever. ([Source Code](https://github.com/joemccann/dillinger/)) `MIT` `Nodejs`
  * [Jotter](https://github.com/yosko/jotter) - Jotter is a lightweight, no database, powerful web notebook that lets you create and manage notes online safely, quickly & easily. ([Demo](http://tools.yosko.net/demos/jotter/)) `LGPLv3` `PHP`
  * [Laverna](https://laverna.cc/) - Laverna is a Javascript note taking application with Markdown editor and encryption support. Consider it like open source alternative to Evernote. ([Demo](https://laverna.cc/index.html#notes), [Source Code](https://github.com/Laverna/laverna)) `MPLv2` `Nodejs`
  * [Leanote](http://leanote.org/) - Leanote, Not Just A Notepad! Open source cloud notepad. ([Demo](https://leanote.com/note), [Source Code](https://github.com/leanote/leanote)) `GPLv2` `Go`
  * [Markdown Edit](http://georgeosddev.github.com/markdown-edit/) - Online markdown editor/viewer. ([Source Code](https://github.com/georgeOsdDev/markdown-edit)) `MIT` `HTML5`
  * [minimalist-web-notepad](https://github.com/pereorga/minimalist-web-notepad) - A minimalist http://notepad.cc clone. `Apache` `PHP`
  * [notes](https://github.com/SSilence/notes) - Simple script for personal notes with a single page with a WYSIWYG Editor. `GPLv3` `PHP`
  * [OpenNote](https://github.com/FoxUSA/OpenNote) - OpenNote was built to be an open web-based alternative to Microsoft OneNote (T) and EverNote. ([Demo](https://foxusa.github.io/OpenNote/OpenNote/#/folder)) `MIT` `HTML5`
  * [Paperwork](http://paperwork.rocks) - OpenSource note-taking & archiving alternative to Evernote, Microsoft OneNote & Google Keep. ([Source Code](https://github.com/twostairs/paperwork)) `MIT` `PHP`
  * [ShareLaTex](https://www.sharelatex.com/) - A web-based collaborative LaTeX editor. ([Source Code](https://github.com/sharelatex/sharelatex)) `AGPLv3` `Ruby`
  * [Turtl](https://turtl.it/) - A totally private personal database and note taking app. ([Source Code](https://github.com/turtl)) `GPLv3` `CommonLisp`


## Office Suites

**[`^        back to top        ^`](#)**

  * [EtherCalc](https://ethercalc.org/) - Web spreadsheet. ([Source Code](https://github.com/audreyt/ethercalc)) `CPALv1/Other` `Nodejs`
  * [Etherpad](http://etherpad.org/) - Etherpad is a highly customizable Open Source online editor providing collaborative editing in really real-time. ([Demo](https://demo.sandstorm.io/appdemo/h37dm17aa89yrd8zuqpdn36p6zntumtv08fjpu8a8zrte7q1cn60), [Source Code](https://github.com/ether/etherpad-lite)) `Apache` `Nodejs`
  * [Infinoted](https://github.com/gobby/gobby/wiki/Dedicated%20Server) - A server for [Gobby](https://github.com/gobby/gobby/wiki), a multi-platform collaborative text editor. ([Source Code](https://github.com/gobby/gobby)) `MIT` `C++`
  * [ONLYOFFICE](http://onlyoffice.org/) - An office suite that enables you to manage documents, projects, team and customer relations in one place. ([Source Code](https://github.com/ONLYOFFICE/DocumentServer)) `AGPLv3` `Nodejs`
  * [ownCloud documents](https://doc.owncloud.org/server/8.2/user_manual/documents.html) - Collaborative editing and sharing of rich-text documents. ([Source Code](https://github.com/owncloud/documents)) `AGPLv3` `PHP`
  * [PHPOffice](http://phpoffice.github.io/) - PHPOffice contains libraries which permits to write and read files from most office suites. `LGPLv3` `PHP`
  * [WebODF](http://webodf.org/) - Tools and libraries to view and edit Open Document Format (ODF) files. ([Source Code](https://github.com/kogmbh/WebODF)) `AGPLv3` `HTML5`


## Password Managers

**[`^        back to top        ^`](#)**

 * [keeweb](https://keeweb.info/) - This webapp is a browser and desktop password manager compatible with KeePass databases. ([Source Code](https://github.com/keeweb/keeweb)) `MIT` `HTML5`
 * [PHP Password Manager](http://www.ppma.pw) - A web based, encrypting password manager, based on the Yii framework. ([Source Code](https://github.com/pklink/ppma)) `BSD` `PHP`
 * [RatticDB](http://rattic.org/) - Password Management for Humans. ([Demo](https://demo.rattic.org/cred/list/), [Source Code](https://github.com/tildaslash/RatticWeb)) `GPLv2` `Python`
 * [sysPass](http://www.syspass.org/) - Multiuser password management system. ([Demo](http://demo.syspass.org/), [Source Code](https://github.com/nuxsmin/sysPass)) `GPLv3` `PHP`
 * [Teampass](http://teampass.net/) - Password manager dedicated for managing passwords in a collaborative way on any server Apache, MySQL and PHP. ([Source Code](https://github.com/nilsteampassnet/TeamPass/)) `GPLv3` `PHP`


## Pastebins

**[`^        back to top        ^`](#)**

  * [0bin](https://github.com/sametmax/0bin) - Client side encrypted pastebin. `WTFPL` `Python`
  * [cryptonote](https://cryptonote.me/) - A simple open source web application that lets users encrypt and share messages that can only be read once. ([Source Code](https://github.com/alainmeier/cryptonote)) `BSD` `Ruby`
  * [CryptPad](https://cryptpad.fr/) - CryptPad is the zero knowledge realtime collaborative editor. ([Source Code](https://github.com/xwiki-labs/cryptpad)) `AGPLv3` `Nodejs`
  * [gist](https://gitlab.deblan.org/deblan/gist) - GIST is an open-source application to share code. `GPLv3` `PHP`
  * [hastebin](http://hastebin.com/about.md) - Open source pastebin written in node.js. ([Demo](http://hastebin.com/), [Source Code](https://github.com/seejohnrun/haste-server)) `MIT` `Nodejs`
  * [localpaste](https://github.com/petermaloney/localpaste) - Simple python based pastebin you can run locally, with curl for input. Supports RAW text by default and binary data such as images (no extensions on returned url). `GPLv2` `Python`
  * [mojopaste](http://search.cpan.org/dist/App-mojopaste/) - Perl based pastebin. ([Demo](http://p.thorsen.pm/), [Source Code](https://github.com/jhthorsen/app-mojopaste)) `ARTv2` `Perl`
  * [NoteHub](https://notehub.org) - Free and Hassle-free Pastebin for Markdown Pages. Simple, clean, password provided, generated-short link. ([Demo](https://notehub.org), [Source Code](https://github.com/chmllr/NoteHub)) `MIT` `Nodejs`
  * [Paste](http://phpaste.sourceforge.net/) - Paste is forked from the original source pastebin.com used before it was bought. ([Demo](http://phpaste.sourceforge.net/demo), [Source Code](https://bitbucket.org/j-samuel/paste/)) `GPLv3` `PHP`
  * [Pastebin](https://p.pantsu.cat) - Modern self-hosted pastebin service with a restful API. ([Demo](https://p.pantsu.cat), [Source Code](https://github.com/ewhal/Pastebin)) `MIT` `Go`
  * [Pastedown](http://pastedown.ctrl-c.us/) - Self-hosted pastebin server. It is meant to handle Markdown well, but it also works with code snippets (and does syntax highlighting). ([Source Code](https://github.com/cespare/pastedown)) `MIT` `Go`
  * [pb](https://github.com/ptpb/pb) - Lightweight pastebin (and url shortener) built using flask. ([Demo](https://ptpb.pw/)) `GPLv3` `Python`
  * [pbnh](https://github.com/bhanderson/pbnh) - Pastebin inspired from project pb and hastebin, with an API and a SQL-based backend. `MIT` `Python`
  * [Phaste](https://pste.pw) - A Phalcon-based, MySQL pastebin application with privacy-respecting Piwik integration and syntax highlighting. ([Source Code](https://github.com/FoxDev/Phaste)) `AGPLv3` `PHP`
  * [PrivateBin](https://privatebin.info/) - PrivateBin is a minimalist, opensource online pastebin/discussion board where the server has zero knowledge of hosted data. ([Demo](https://privatebin.net/), [Source Code](https://github.com/PrivateBin/PrivateBin)) `Zlib` `PHP`
  * [snipt](https://snipt.net/) - Long-term memory for coders. Share and store code snippets. ([Source Code](https://github.com/nicksergeant/snipt/)) `BSD` `Python`
  * [Sticky Notes](http://sayakb.github.io/sticky-notes/) - A powerful open-source pastebin application for effortless code sharing. ([Source Code](https://github.com/sayakb/sticky-notes)) `BSD` `PHP`
  * [Stikked](https://github.com/claudehohl/Stikked) - An advanced and beautiful pastebin. `GPLv3` `PHP`
  * [tastebin](https://github.com/andreineculau/tastebin) - Updated version of hastebin plus additional features. `Apache` `Nodejs`


## Personal Dashboards

**[`^        back to top        ^`](#)**

  * [Dashing](http://shopify.github.io/dashing/) - Sinatra based, open sourced dashboard builder from Shopify. ([Demo](http://dashingdemo.herokuapp.com/sample), [Source Code](https://github.com/Shopify/dashing)) `MIT` `Ruby`
  * [Dj Diabetes](https://github.com/foxmask/dj-diabetes) - My Glucose Manager - follow your daily health. `BSD` `Python`
  * [Freeboard](https://freeboard.io) - An open source real-time dashboard builder for IOT and other web mashups. ([Source Code](https://github.com/freeboard/freeboard)) `MIT` `Nodejs`
  * [Grafana](http://grafana.org/) - An open source dashboard for data visualization. ([Source Code](https://github.com/grafana)) `Apache` `Go`
  * [Habitica](http://habitica.com/) - A habit tracker app which treats your goals like a Role Playing Game. Previously called HabitRPG. ([Source Code](https://github.com/HabitRPG/habitrpg)) `GPLv3/Other` `Nodejs`
  * [Phant](http://phant.io/) - Phant is a modular data logging tool for collecting data from the Internet of Things. ([Demo](https://data.sparkfun.com/), [Source Code](https://github.com/sparkfun/phant)) `GPLv3` `Nodejs`
  * [Reportr](https://github.com/Reportr/dashboard) - Your life's personal dashboard. ([Source Code](https://github.com/Reportr/dashboard)) `Apache` `Nodejs`
  * [Thingspeak](https://thingspeak.com/) - An open source “Internet of Things” application and API to store and retrieve data from things using HTTP. ([Demo](https://thingspeak.com/channels/public), [Source Code](https://github.com/iobridge/thingspeak)) `GPL` `Ruby`
  * [Tipboard](http://allegro.tech/tipboard/) - In-house, tasty, local dashboarding system. ([Source Code](https://github.com/allegro/tipboard)) `Apache` `Python`
  * [wger](https://github.com/rolandgeider/wger) - A web-based personal workout, fitness and weight logger/tracker. It can also be used as a simple gym management utility and offers a full REST API as well. ([Demo](https://wger.de)) `AGPLv3` `Python`


## Photo and Video Galleries

**[`^        back to top        ^`](#)**

  * [Chevereto 2.X](https://github.com/Chevereto/Chevereto-2.X) - Open source one-click image hosting script. ([Source Code](https://github.com/Chevereto/Chevereto-2.X)) `MIT` `PHP`
  * [CumulusClips](http://cumulusclips.org/) - Your own video sharing website with CumulusClips video sharing script. You can build a YouTube clone where users can upload, rate, comment on videos, and much more. ([Demo](https://tube.devosi.org/)) `GPLv2` `PHP`
  * [Lychee](http://lychee.electerious.com/) - An open source grid and album based photo-management-system. ([Source Code](https://github.com/electerious/Lychee)) `MIT` `PHP`
  * [MediaDrop](http://mediadrop.net/) - A video, audio and podcast publication platform. ([Source Code](https://github.com/mediadrop/mediadrop)) `GPLv3` `Python`
  * [Mediagoblin](http://mediagoblin.org) - A Free software media publishing platform that anyone can run. You can think of it as a decentralized alternative to Flickr, YouTube, SoundCloud, etc. `AGPLv3` `Python`
  * [MinigalNano](https://github.com/sebsauvage/MinigalNano) - MinigalNano is a very simple image gallery. It adheres to the KISS principle and is very easy to install. MinigalNano does not have a web admin interface: You just upload your images in the photo folder on your server (using FTP, SFTP). ([Demo](http://boards.tomcanac.com/)) `GPLv3/CCBYNCNDv4` `PHP`
  * [Photofloat](http://blog.zx2c4.com/567) - A Web 2.0 Photo Gallery Done Right via Static JSON & Dynamic Javascript. ([Demo](http://photos.jasondonenfeld.com/)) `GPLv2` `Python`
  * [PhotoLight](https://github.com/thibaud-rohmer/PhotoLight) - The easiest photo gallery there is. `GPLv3` `PHP`
  * [Photoshow](http://www.photoshow-gallery.com/) - Responsive Web Gallery. ([Source Code](https://github.com/thibaud-rohmer/PhotoShow)) `GPLv3` `PHP`
  * [Piwigo](http://piwigo.org/) - Photo gallery software for the web, built by an active community of users and developers. `GPLv2` `PHP`
  * [Plumi](http://blog.plumi.org/) - Create your own sophisticated video-sharing site. ([Source Code](https://github.com/plumi/plumi.app)) `GPLv2` `Python`
  * [Shot.io](http://shot.io/) - Mobile optimised photo publishing platform (self-hosted Flickr alternative). ([Source Code](https://github.com/AliasIO/Shot.io)) `GPLv3` `PHP`
  * [sigal](https://github.com/saimn/sigal) - Yet another simple static gallery generator. `MIT` `Python`
  * [UberGallery](http://www.ubergallery.net) - UberGallery is an easy to use, simple to manage, web photo gallery. UberGallery does not require a database and supports JPEG, GIF and PNG file types. Simply upload your images and UberGallery will automatically generate thumbnails and output HTML. ([Source Code](https://github.com/UberGallery/UberGallery)) `MIT` `PHP`
  * [Videobin](http://videobin.org/code) - A simple video upload and sharing service with transcoding. ([Demo](http://videobin.org/), [Source Code](https://r-w-x.org/videobin.git)) `GPLv3` `Python`
  * [Zenphoto](http://www.zenphoto.org/) - Open-source gallery and CMS project. ([Source Code](https://github.com/zenphoto/zenphoto)) `GPLv2` `PHP`


## Polls and Events

**[`^        back to top        ^`](#)**

  * [Calagator](http://calagator.org/) - An event aggregator. ([Demo](http://calagator.org/), [Source code](https://github.com/calagator/calagator)) `MIT` `Ruby`
  * [dudle](http://primelife.ercim.eu/results/opensource/63-dudle) - An online scheduling application. ([Demo](https://dudle.inf.tu-dresden.de/)) `AGPLv3` `Ruby`
  * [Framadate](https://framadate.org/) - An online service for planning an appointment or make a decision quickly and easily: Make a poll, Define dates or subjects to choose, Send the poll link to your friends or colleagues, Discuss and make a decision. ([Demo](https://framadate.org/aqg259dth55iuhwm), [Source Code](https://git.framasoft.org/framasoft/framadate)) `CeCILL-B` `PHP`
  * [Kyélà](http://kyela.net/) - Participation polls for group events. ([Demo](http://kyela.net/55232734237c8/), [Source Code](https://github.com/abienvenu/Kyela)) `AGPLv3` `PHP`
  * [LimeSurvey](https://www.limesurvey.org) - Feature-rich Open Source web based polling software. Supports extensive survey logic. ([Demo](https://demo.limesurvey.org)) `GPLv2` `PHP`
  * [MaterialPoll](https://github.com/nearbycoder/materialpoll) - An opensource strawpoll.me clone for creating random polls. ([Demo](http://materialpoll.tk), [Source Code](https://github.com/nearbycoder/materialpoll)) `MIT` `Nodejs`
  * [Nuages](https://nuages.domainepublic.net/) - Collaborative meeting poll system, similar to doodle or rdvz. ([Source Code](http://git.domainepublic.net/?p=nuages.git;a=tree)) `GPLv3` `Python`
  * [TellForm](https://tellform.com) - A beautiful online form and survey creator. ([Demo](https://stage.tellform.com/#!/forms/57196d592601ed12074eecc0), [Source Code](https://github.com/whitef0x0/tellform)) `MIT` `Nodejs`


## Proxy

**[`^        back to top        ^`](#)**

  * [microproxy](https://github.com/thekvs/microproxy) - lightweight non-caching HTTP/HTTPS proxy server. ([Source Code](https://github.com/thekvs/microproxy)) `MIT` `Go`
  * [miniProxy](https://github.com/joshdick/miniProxy/) - Simple web proxy written in PHP that can allow you to bypass Internet content filters, or to browse the internet anonymously. Only one php file. ([Source Code](https://github.com/joshdick/miniProxy/)) `GPLv3` `PHP`
  * [Oranjeproxy](http://lehollandaisvolant.net/tout/oranjeproxy/) - Anonymizing web proxy. ([Source Code](https://github.com/AmauryCarrade/OranjeProxy)) `GPLv2` `PHP`
  * [Pound](http://www.apsis.ch/pound/) - Light-weight reverse proxy and load balancer for HTTP/HTTPS. ([Source Code](http://www.apsis.ch/pound/)) `GPLv2` `C`
  * [Privoxy](http://www.privoxy.org) - A non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk. `GPLv2` `C`
  * [scotty](http://www.scotty-transporter.org/) - Scotty is a free opensource proxy software for bypassing filter and censorship systems. ([Source Code](https://github.com/SSilence/scotty)) `GPLv3` `Java`
  * [Squid](http://www.squid-cache.org/) - Caching proxy for the Web supporting HTTP, HTTPS, FTP, and more. It reduces bandwidth and improves response times by caching and reusing frequently-requested web pages. ([Source Code](http://bazaar.launchpad.net/~squid/squid/3-trunk/files)) `GPLv2` `C`
  * [Swiperproxy](https://swiperproxy.github.io/) - A lightning-fast, open source web proxy that is easy for you to run and customize. ([Demo](http://proxy.donttrustrobots.nl/), [Source Code](https://github.com/swiperproxy/swiperproxy)) `MIT` `Python`
  * [Tinyproxy](https://banu.com/tinyproxy/) - Light-weight HTTP/HTTPS proxy daemon. ([Source Code](https://github.com/tinyproxy/tinyproxy)) `GPLv2` `C`
  * [Traefik](https://traefik.io/) - Træfɪk is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It supports several backends (Docker, Swarm, Mesos/Marathon, …) to manage its configuration automatically and dynamically. ([Source Code](https://github.com/containous/traefik)) `MIT` `Go`


## Read it Later Lists

**[`^        back to top        ^`](#)**

  * [Nunux Keeper](http://keeper.nunux.org/) - Your personal content curation service. ([Source Code](https://github.com/ncarlier/nunux-keeper)) `GPLv3` `Nodejs`
  * [Readityourself](https://github.com/memiks/readityourself) - Read the web without ads, comments, or tweets. ([Demo](http://www.readityourself.net/)) `MIT` `PHP`
  * [Wallabag](https://www.wallabag.org) - Wallabag, formerly Poche, is a web application allowing you to save articles to read them later with improved readability. ([Demo](http://demo.wallabag.org/), [Source Code](https://github.com/wallabag/wallabag)) `MIT` `PHP`


## Search Engines

**[`^        back to top        ^`](#)**

  * [Gigablast](http://www.gigablast.com/) - open source search engine. ([Demo](http://www.gigablast.com/), [Source Code](https://github.com/gigablast/open-source-search-engine)) `Apache` `C++`
  * [Searx](https://github.com/asciimoo/searx) - A privacy-respecting, hackable metasearch engine. ([Demo](https://searx.me/)) `AGPLv3` `Python`
  * [Seeks](https://beniz.github.io/seeks/) - A websearch proxy and collaborative distributed tool for websearch. `AGPLv3` `C++`
  * [Yacy](http://yacy.net/en/index.html) - Peer based, decentralized search engine server. `GPL2` `Java`


## Software Development

**[`^        back to top        ^`](#)**

### Project Management

See also [Ticketing](#ticketing), [Task management/To-do lists](#task-managementto-do-lists)*

  * [Apache Bloodhound](https://bloodhound.apache.org/) - Manage software products, Keep track of features, tasks and bugs. `Apache` `Python`
  * [CaseBox](https://www.casebox.org) - Manage all your organisation's information in one system. ([Source Code](https://github.com/KETSE/casebox)) `AGPLv3` `PHP/Java`
  * [Fossil](https://www.fossil-scm.org/index.html/doc/trunk/www/index.wiki) - Distributed version control system featuring wiki and bug tracker. `BSD` `C`
  * [gitbucket](https://gitbucket.github.io/gitbucket-news/) - The easily installable GitHub clone powered by Scala. ([Source Code](https://github.com/gitbucket/gitbucket)) `Apache` `Scala/Java`
  * [GitLab](http://gitlab.org/) - Self Hosted Git repository management, code reviews, issue tracking, activity feeds and wikis. ([Demo](https://gitlab.com/), [Source Code](https://gitlab.com/gitlab-org/gitlab-ce)) `MIT` `Ruby`
  * [Gitlist](http://gitlist.org/) - A web-based git repository browser - GitList allows you to browse repositories using your favorite browser, viewing files under different revisions, commit history and diffs. ([Source Code](https://github.com/klaussilveira/gitlist)) `BSD` `PHP`
  * [Gitprep](http://gitprep.yukikimoto.com/) - Portable Github clone. ([Source Code](https://github.com/yuki-kimoto/gitprep), [Demo](http://perlcodesample.sakura.ne.jp/gitprep/gitprep.cgi)) `GPL` `Perl`
  * [Gogs](https://github.com/gogits/gogs) - A painless self-hosted Git Service written in Go. ([Demo](https://try.gogs.io/)) `MIT` `Go`
  * [Kallithea](https://kallithea-scm.org/) - Source code management system that supports two leading version control systems, Mercurial and Git, with a web interface. ([Source Code](https://kallithea-scm.org/repos/kallithea)) `GPLv3` `Python`
  * [Klaus](https://github.com/jonashaag/klaus/) - A simple, easy-to-set-up Git web viewer that Just Works. ([Demo](http://klausdemo.lophus.org/)) `ISC` `Python`
  * [Lavagna](http://lavagna.io) - Lavagna is an open-source issue/project management tool designed for small teams. Lightweight, pure Java, easy to install, easy to use. ([Source Code](https://github.com/digitalfondue/lavagna)) `GPLv3` `Java`
  * [OpenProject](https://www.openproject.org) - OpenProject is a web-based project management system. `GPLv3` `Ruby`
  * [Phabricator](http://phabricator.org/) - Collection of web applications that help build better software. ([Demo](https://secure.phabricator.com/), [Source Code](https://github.com/phacility/phabricator)) `Apache` `PHP`
  * [Redmine](http://www.redmine.org/) - Redmine is a flexible project management web application. ([Demo](http://demo.redmine.org/), [Source Code](https://svn.redmine.org/redmine/)) `GPLv2` `Ruby`
  * [Taiga](https://taiga.io/) - Agile Project Management Tool based on the Kanban and Scrum methods. ([Source Code](https://github.com/taigaio)) `AGPLv3` `Python`
  * [The Bug Genie](http://www.thebuggenie.com/) - The Bug Genie is a friendly project management and issue tracking tool. ([Source Code](https://github.com/thebuggenie/thebuggenie)) `MPLv2` `PHP`
  * [Trac](http://trac.edgewall.org/) - Trac is an enhanced wiki and issue tracking system for software development projects. `BSD` `Python`
  * [Phproject](http://www.phproject.org/) - A high performance full-featured project management system. ([Demo](http://demo.phproject.org/), [Source Code](https://github.com/Alanaktion/phproject)) `GPLv3` `PHP`


### Bug Trackers

See **[Ticketing](#ticketing)**


### IDE/Tools

  * [Codiad](http://codiad.com/) - A web-based IDE framework with a small footprint and minimal requirements. ([Source Code](https://github.com/Codiad/Codiad)) `MIT` `PHP`
  * [Eclipse Che](http://www.eclipse.org/che/) - Open source workspace server and cloud IDE. ([Source Code](https://github.com/eclipse/che)) `EPLv1` `Docker/Java`
  * [ICEcoder](https://icecoder.net/) - ICEcoder is a web IDE / browser based code editor, which allows you to develop websites directly within the web browser. ([Demo](http://demo.icecoder.net/ICEcoder/), [Source Code](https://github.com/mattpass/ICEcoder)) `MIT` `PHP`
  * [JS Bin](http://jsbin.com/) - Open source collaborative web development debugging tool. ([Source Code](https://github.com/jsbin/jsbin)) `MIT` `Nodejs`
  * [Koding](http://www.koding.com/) - The simplest way to manage your entire Dev Infrastructure. ([Source Code](https://github.com/koding/koding)) `Apache` `Nodejs`
  * [Microglark](http://micro.glark.io) - A hacky minimalistic remote pair programming editor. ([Demo](http://micro.glark.io), [Source Code](https://github.com/Bluefinch/microglark)) `AGPLv3` `Nodejs`
  * [Regexr](http://regexr.com/) - RegExr is a HTML/JS based tool for creating, testing, and learning about Regular Expressions. ([Source Code](https://github.com/gskinner/regexr/)) `MIT` `Nodejs`
  * [RStudio Server](https://www.rstudio.com/products/rstudio/#Server) - Web browser based IDE for R. ([Source Code](https://github.com/rstudio/rstudio/)) `AGPLv3` `Java/C++`
  * [Wide](https://github.com/b3log/wide) - A Web-based IDE for Teams using Go programming language/Golang. ([Demo](http://wide.b3log.org/signup)) `Apache` `Go`


### Continuous Integration

  * [Buddy GO](https://buddy.works/) - The Git and Continous Integration / Delivery Platform. `Fair` `Nodejs/Java`
  * [Concourse](https://concourse.ci/) - Concourse is a CI tool that treats pipelines as first class objects and containerizes every step along the way. ([Demo](https://ci.concourse.ci/), [Source Code](https://github.com/concourse/concourse)) `Apache` `Go`
  * [drone](https://drone.io/) - Drone is a Continuous Delivery platform built on Docker, written in Go. ([Source Code](https://github.com/drone/drone)) `Apache` `Go`
  * [Factor.io](https://factor.io/) - It's like IFTTT (if-this-then-that) for Dev and DevOps. ([Source Code](https://github.com/factor-io/factor)) `MIT` `Ruby`
  * [Jenkins](https://jenkins-ci.org/) - Continuous Integration Server. ([Source Code](https://github.com/jenkinsci/jenkins/)) `MIT` `Java`
  * [PHPCI](https://www.phptesting.org/) - Free and open source continuous integration specifically designed for PHP. ([Source Code](https://github.com/block8/phpci)) `BSD` `PHP`
  * [Strider](http://stridercd.com/) - Open Source Continuous Deployment / Continuous Integration platform. ([Source Code](https://github.com/Strider-CD/strider)) `BSD` `Nodejs`


### Documentation Generators

See also [Static site generators](#static-site-generators)

  * [Flatdoc](http://ricostacruz.com/flatdoc/) - A small Javascript file that fetches Markdown files and renders them as full pages. `MIT` `Javascript`
  * [markdown-tree](https://github.com/mil/markdown-tree) - Serve a hierarchy / tree directory of markdown files. Use intended for small sites built in markdown. `MIT` `Ruby`
  * [Read the Docs](https://docs.readthedocs.org/en/latest/install.html) - Host documentation, making it fully searchable and easy to find; import your docs using any major version control system, including Mercurial, Git, Subversion, and Bazaar. ([Demo](https://readthedocs.org/projects/), [Source Code](https://github.com/rtfd/readthedocs.org)) `MIT` `Python`


## Static site generators

**[`^        back to top        ^`](#)**

See https://staticsitegenerators.net and https://www.staticgen.com


## Task management/To-do lists

**[`^        back to top        ^`](#)**

*See also [Project Management](#project-management) and [Ticketing](#ticketing).*

  * [bulldog](https://github.com/infews/bulldog) - HTML5 task manager, built on todo.txt. `MIT` `HTML5`
  * [Crepido](https://github.com/arshad/crepido) - Create (kanban) boards to track users and projects from flat markdown files. `MIT` `Nodejs`
  * [Kanboard](http://kanboard.net/) - A simple and open source visual task board. ([Source Code](https://github.com/kanboard/kanboard)) `MIT` `PHP`
  * [myTinyTodo](http://www.mytinytodo.net/) - Simple way to manage your todo list in AJAX style. Uses PHP, jQuery, SQLite/MySQL. GTD compliant. `GPLv2` `PHP`
  * [omgnata](https://github.com/chr15m/omgnata) - Mobile friendly zero-feature TODO list web app. Unix philosophy. ([Demo](https://chr15m.github.io/omgnata/)) `GPLv3` `ClojureScript`
  * [Restyaboard](http://restya.com/board/) - Open source Trello-like kanban board. ([Demo](http://restya.com/board/demo.html), [Source Code](https://github.com/RestyaPlatform/board)) `OSLv3` `PHP`
  * [TaskBoard](http://taskboard.matthewross.me/) - A Kanban-inspired app for keeping track of things that need to get done. ([Source Code](https://github.com/kiswa/TaskBoard)) `MIT` `PHP`
  * [Taskfreak](http://www.taskfreak.com/original) - A simple but efficient web based task manager written in PHP. ([Demo](http://demo.taskfreak.com/)) `GPLv3` `PHP`
  * [Tasks](https://github.com/thewhitetulip/Tasks) - Kanban based to-do list manager written in Go. `MIT` `Go`
  * [tasks.php](https://github.com/RaymiiOrg/tasks.php) - A simple task/todo list manager. `MIT` `PHP`
  * [Taskwarrior](https://taskwarrior.org/) - Taskwarrior is Free and Open Source Software that manages your TODO list from your command line. It is flexible, fast, efficient, and unobtrusive. It does its job then gets out of your way. ([Source Code](https://taskwarrior.org/download/#git)) `MIT` `C++`
  * [Tinyissue](https://github.com/satrun77/tinyissue) - Simple Issue Tracking for Teams. `MIT` `PHP`
  * [Tracks](http://www.getontracks.org/) - A web-based application to help you implement David Allen’s [Getting Things Done™](https://en.wikipedia.org/wiki/Getting_Things_Done) methodology. ([Source Code](https://github.com/TracksApp/tracks)) `GPLv2` `Ruby`
  * [Wekan](https://wekan.io/) - An open-source Trello-like kanban. ([Demo](https://oasis.sandstorm.io/appdemo/m86q05rdvj14yvn78ghaxynqz7u2svw6rnttptxx49g1785cdv1h), [Source Code](https://github.com/wekan/wekan)) `MIT` `Nodejs`


## Ticketing

**[`^        back to top        ^`](#)**

*See also [Task management/To-do lists](#task-managementto-do-lists) and [Project Management](#project-management)*

  * [Bugzilla](https://www.bugzilla.org/) - General-purpose bugtracker and testing tool originally developed and used by the Mozilla project. `MPLv2` `Perl`
  * [Bumpy Booby](http://bumpy-booby.derivoile.fr/) - A simple, responsive and highly customizable PHP bug tracking system. ([Source Code](https://github.com/piero-la-lune/Bumpy-Booby)) `MIT` `PHP`
  * [Cerb](http://www.cerberusweb.com/) - Group-based e-mail management project. ([Source Code](https://github.com/wgm/cerb)) `DPL` `PHP`
  * [Deskulu](https://github.com/Taskulu/deskulu) - Opensource helpdesk and ticketing system based on Drupal 7. ([Demo](https://help.taskulu.com)) `GPLv2` `PHP`
  * [DiamanteDesk](http://diamantedesk.com/) - DiamanteDesk is FREE Open Source easy-to-use help-desk solution. ([Demo](http://diamantedesk.com/demo/), [Source Code](https://github.com/eltrino/diamantedesk-application)) `OSLv3` `PHP`
  * [Flyspray](http://www.flyspray.org/) - Uncomplicated, web-based bug tracking system. ([Source Code](https://github.com/Flyspray/flyspray)) `GPLv2` `PHP`
  * [Gaskit](https://github.com/bkeepers/gaskit) - A git-backed issue tracker. It uses a branch in your local git database to store the tickets. `GPL` `Ruby`
  * [HuBoard](https://github.com/huboard/huboard) `⚠` - Instant project management for your GitHub issues (Connects directly GitHub API). `MIT` `Ruby`
  * [MantisBT](https://www.mantisbt.org/) - Self hosted bug tracker, fits best for software development. ([Demo](https://www.mantisbt.org/bugs/my_view_page.php)), ([Source Code](https://github.com/mantisbt/mantisbt)) `GPLv2` `PHP`
  * [osTicket](http://osticket.com/) -  Manage, organize and archive all your support requests and responses in one place. ([Source Code](https://github.com/osTicket/osTicket)) `GPLv2` `PHP`
  * [OTRS](http://www.otrs.com/) - Trouble ticket system for assigning tickets to incoming queries and tracking further communications. ([Source Code](https://github.com/OTRS/otrs)) `AGPLv3` `Perl`
  * [Request Tracker](https://www.bestpractical.com/rt/) -  An enterprise-grade issue tracking system. ([Source Code](https://github.com/bestpractical/rt)) `GPLv2` `Perl`
  * [TheBugGenie](http://www.thebuggenie.org) - Ticket system with extensive user rights system. ([Source Code](https://github.com/thebuggenie/thebuggenie)) `MPLv2` `PHP`


## URL Shorteners

**[`^        back to top        ^`](#)**

  * [Lstu](https://github.com/ldidry/lstu) - _Let's SHorten That Url_ - Lightweight URL shortener. `WTFPL` `Perl`
  * [Nimbus](https://github.com/ethanal/nimbus) - A URL shortener and file sharer with a drag-and-drop OS X menu bar client and web interface. `MIT` `Python`
  * [Polr](https://project.polr.me/) - A modern, minimalist, modular, and lightweight URL shortener. ([Source Code](https://github.com/Cydrobolt/polr)) `GPLv2` `PHP`
  * [YOURLS](http://yourls.org/) - YOURLS is a set of PHP scripts that will allow you to run Your Own URL Shortener. Features include password protection, URL customization, bookmarklets, statistics, API, plugins, jsonp. ([Source Code](https://github.com/YOURLS/YOURLS/)) `MIT` `PHP`


## VPN

**[`^        back to top        ^`](#)**

See https://github.com/n1trux/awesome-sysadmin#vpn


## Web servers

**[`^        back to top        ^`](#)**

See https://github.com/n1trux/awesome-sysadmin#web


## Wikis

**[`^        back to top        ^`](#)**

See also [Documentation Generators](#documentation-generators), [Wikimatrix](http://www.wikimatrix.org/), [Wiki Engines on WikiIndex](http://wikiindex.org/Category:Wiki_Engine), [List of wiki software on wikipedia](https://en.wikipedia.org/wiki/List_of_wiki_software), [Comparison of wiki software on wikipedia](https://en.wikipedia.org/wiki/Comparison_of_wiki_software).

  * [Blazekiss](http://projet.idleman.fr/blazekiss/) - BlazeKiss is a KISS-based wiki (Keep It Simple, Stupid) - simplicity and functionality comes before all. ([Source Code](https://github.com/ldleman/blazekiss)) `GPLv3` `PHP`
  * [BookStack](https://www.bookstackapp.com/) - BookStack is a simple, self-hosted, easy-to-use platform for organizing and storing information. It allows for documentation to be stored in a book like fashion. ([Demo](https://www.bookstackapp.com/#demo), [Source Code](https://github.com/ssddanbrown/BookStack)) `MIT` `PHP`
  * [Dokuwiki](https://www.dokuwiki.org/DokuWiki) - An easy to use, lightweight, standards-compliant wiki engine with a simple syntax allowing reading the data outside the wiki. All data is stored in plain files, therefore no database is required. `GPL` `PHP`
  * [Gitit](https://github.com/jgm/gitit) - A wiki program that stores pages and uploaded files in a git repository, which can then be modified using the VCS command line tools or the wiki's web interface. ([Demo](http://gitit.johnmacfarlane.net/)) `GPLv2` `Haskell`
  * [Gollum](https://github.com/gollum/gollum) - A simple, Git-powered wiki with a sweet API and local frontend. `MIT` `Ruby`
  * [Gruik](http://gruik.io/) - An open-source markdown note-taking web app. ([Source Code](https://github.com/grena/gruik)) `GPLv3` `PHP`
  * [jingo](https://github.com/claudioc/jingo) - A git based wiki engine written for node.js, with a decent design, a search capability and a good typography. ([Demo](http://jingo.cica.li:6067/wiki/home), [Source Code](https://github.com/claudioc/jingo)) `MIT` `NodeJS`
  * [Mediawiki](https://www.mediawiki.org/wiki/MediaWiki) - MediaWiki is a free and open-source wiki software package written in PHP. It serves as the platform for Wikipedia and the other Wikimedia projects, used by hundreds of millions of people each month. ([Source Code](https://phabricator.wikimedia.org/diffusion/MW/)) `GPLv2` `PHP`
  * [MoinMoin](https://moinmo.in/) - An advanced, easy to use and extensible WikiEngine with a large community of users. ([Source Code](http://hg.moinmo.in/moin)) `GPLv2` `Python`
  * [Olelo](https://github.com/minad/olelo) - Olelo is a wiki that stores pages in a Git repository, supports many markup styles and has an extensible, hackable architecture. ([Demo](http://gitwiki.org/)) `MIT` `Ruby`
  * [Pepperminty Wiki](https://github.com/sbrl/Pepperminty-Wiki/) - A complete markdown-powered wiki contained in a single PHP file. ([Demo](https://starbeamrainbowlabs.com/labs/peppermint/build/)) `MPLv2` `PHP`
  * [PmWiki](http://www.pmwiki.org) - Wiki-based system for collaborative creation and maintenance of websites. `GPLv3` `PHP`
  * [Raneto](http://raneto.com/) - Raneto is an open source Knowledgebase platform that uses static Markdown files to power your Knowledgebase. `MIT` `NodeJS`
  * [Realms](http://realms.io/) - A git-backed wiki inspired by Gollum. ([Source Code](https://github.com/scragg0x/realms-wiki)) `GPLv2` `Python`
  * [Redaxscript](http://redaxscript.com/) - Ultra lightweight website engine. ([Source Code](https://github.com/redaxmedia/redaxscript)) `GPLv3` `PHP`
  * [TiddlyWiki](http://tiddlywiki.com/) - A reusable non-linear personal web notebook. ([Source Code](https://github.com/Jermolene/TiddlyWiki5)) `BSD` `Nodejs`
  * [Tiki](https://tiki.org) - Wiki CMS Groupware with the most built-in features. ([Demo](https://tiki.org/Demo), [Source Code](https://sourceforge.net/p/tikiwiki/code/HEAD/tree/)) `LGPLv2` `PHP`
  * [Wikifeat](https://www.wikifeat.org/app/wikis/wikifeat/pages/welcome) - Wikifeat is an open source collaboration platform built around the ever-popular Wiki concept. ([Source Code](https://github.com/rhinoman/wikifeat)) `BSD` `GO`
  * [WiKiss](http://wikiss.tuxfamily.org/) - A Wiki, simple to use and install. ([Source Code](https://svnweb.tuxfamily.org/listing.php?repname=wikiss/svn&path=%2F&sc=0)) `GPLv2` `PHP`
  * [Wikitten](http://wikitten.vizuina.com/) - Wikitten is a small, fast, PHP wiki, and the perfect place to store your notes, code snippets, ideas, and so on. ([Source Code](https://github.com/victorstanciu/Wikitten)) `MIT` `PHP`


## Self-hosting Solutions

**[`^        back to top        ^`](#)**

  * [arkOS](https://arkos.io/) - Install arkOS to a dedicated device and host your own websites, email, files and more. ([Source Code](https://git.coderouge.co/groups/arkOS) [[1]](https://github.com/cznweb)) `MIT/GPL` `Nodejs/Other`
  * [Cloudron](https://cloudron.io) - Effortlessly self-host web apps on your server. ([Source Code](https://git.cloudron.io/groups/cloudron)) `AGPLv3` `Nodejs/Docker`
  * [DPlatform](https://dfabric.github.io/DPlatform-ShellCore/) - Deploy self-hosted apps easily: simple, bloat-free, independent installation. ([Source Code](https://github.com/j8r/DPlatform)) `MIT` `Shell`
  * [FreedomBone](https://github.com/bashrc/freedombone) - Home server configuration based on Debian. `GPLv3` `Shell`
  * [FreedomBox](https://wiki.debian.org/FreedomBox) - A community project to develop, design and promote personal servers running free software for private, personal, communications. `GPLv3` `Python/Other`
  * [Piratebox](https://piratebox.cc/start) - A DIY anonymous offline file-sharing and communications system built with free software and inexpensive off-the-shelf hardware. ([Source Code](https://github.com/PirateBox-Dev)). `GPLv3` `Python/Other`
  * [Puffin](http://puffin.rocks/) - Lightweight webapp catalog based on containers, with user interface à la mobile app store. ([Demo](http://puffin.rocks/), [Source Code](https://github.com/puffinrocks/puffin)) `AGPLv3` `Python/Docker`
  * [Sandstorm](https://sandstorm.io/) - Personal server for running self-hosted apps easily and securely. ([Demo](https://demo.sandstorm.io/), [Source Code](https://github.com/sandstorm-io/sandstorm)) `Apache` `C++/Other`
  * [sovereign](https://github.com/sovereign/sovereign) - A set of Ansible playbooks to build and maintain your own private cloud: email, calendar, contacts, file sync, IRC bouncer, VPN, and more. `GPLv3` `YAML/Other`
  * [UBOS](http://ubos.net/) - Linux distro that runs on indie boxes (personal servers and IoT devices). Single-command installation and management of apps - Jenkins, Mediawiki, Owncloud, WordPress, etc., - and other [features](http://ubos.net/about/).`GPLv3` `Perl/Other`
  * [WikiSuite](http://WikiSuite.org) - The most comprehensive and integrated Free / Libre / Open Source software suite ever developed. ([Source Code](http://wikisuite.org/Source)) `Multiple` `ClearOS`
  * [yunohost](https://yunohost.org/) - A server operating system aiming to make self-hosting accessible to everyone. ([Source Code](https://github.com/YunoHost)) `AGPLv3` `Python/Other`


<!-- END SOFTWARE LIST -->

-------------------------------------------------------

## List of Licenses

**[`^        back to top        ^`](#)**

 * ` ⚠ ` - Depends on a third party network service
 * `AAL` - [Attribution Assurance License](https://opensource.org/licenses/AAL)
 * `AGPLv3` - [GNU Affero General Public License 3.0](https://www.gnu.org/licenses/agpl-3.0)
 * `Apache` - [Apache, Version 2.0](http://www.apache.org/licenses/)
 * `ARTv2` - [Artistic License Version 2.0](http://opensource.org/licenses/Artistic-2.0)
 * `Beerware` - [Beerware License](https://spdx.org/licenses/Beerware.html)
 * `BSD` - [FreeBSD License](https://www.freebsd.org/copyright/license.html)
 * `BSD` - [BSD 2-Clause](https://opensource.org/licenses/BSD-3-Clause) or [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause) license
 * `CCBYNCNDv4` - [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/)
 * `CCBYNCSAv2` - [Creative Commons Attribution-NonCommercial-ShareAlike 2.0](https://creativecommons.org/licenses/by-nc-sa/2.0/)
 * `CCBYNCSAv3` - [Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-nc-sa/3.0/)
 * `CCBYNCv4` - [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/)
 * `CC0` - [Public Domain](https://creativecommons.org/about/cc0/)
 * `CeCILL-B` - [CEA CNRS INRIA Logiciel Libre](http://www.cecill.info/licences/Licence_CeCILL-B_V1-en.txt)
 * `CPALv1` - [Common Public Attribution License Version 1.0](http://opensource.org/licenses/CPAL-1.0)
 * `DPL` - [Devblocks Public License 1.0](http://www.cerberusweb.com/license)
 * `ECLv2` - [Educational Community License, Version 2.0 ](http://opensource.org/licenses/ECL-2.0)
 * `EPLv1` - [Eclipse Public License, Version 1.0](https://www.eclipse.org/legal/epl-v10.html)
 * `Fair` - [Fair License](http://fairlicense.org/)
 * `GPL` - [GNU General Public License](https://www.gnu.org/licenses/gpl-1.0)
 * `GPLv2` - [GNU General Public License 2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
 * `GPLv3` - [GNU General Public License 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)
 * `IPL` - [IBM Public License](https://opensource.org/licenses/IPL-1.0)
 * `ISC` - [Internet Software Consortium License](https://www.isc.org/downloads/software-support-policy/isc-license/)
 * `LGPLv2` - [Lesser General Public License 2.1](http://opensource.org/licenses/LGPL-2.1)
 * `LGPLv3` - [Lesser General Public License 3.0](http://opensource.org/licenses/LGPL-3.0)
 * `MIT` - [MIT License](http://opensource.org/licenses/MIT)
 * `MPLv1.1` - [Mozilla Public License Version 1.1](https://www.mozilla.org/media/MPL/1.1/index.txt)
 * `MPLv2` - [Mozilla Public License](https://www.mozilla.org/MPL/2.0/index.txt)
 * `OSLv3` - [Open Software License 3.0](https://opensource.org/licenses/osl-3.0.php)
 * `SENDMAIL` - [Sendmail License](https://www.sendmail.com/pdfs/open_source/sendmail_license.pdf)
 * `Unlicense` - [The Unlicense](http://unlicense.org/)
 * `WTFPL` - [Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/)
 * `Zlib` - [Zlib/libpng License](https://opensource.org/licenses/Zlib)
 * `Zope` - [Zope Public License 2.0](http://opensource.org/licenses/ZPL-2.0)


-------------------------------------------------------

## External links

**[`^        back to top        ^`](#)**

 * [Awesome Selfhosted Chat](https://chat.awesome-selfhosted.com) - A rocket.chat instance setup for the awesome selfhosted community.
 * [Awesome Big Data](https://github.com/onurakpolat/awesome-bigdata) - A curated list of awesome big data frameworks, resources and other awesomeness.
 * [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin) - A curated list of amazingly awesome open source sysadmin resources.
 * [PRISM Break](https://prism-break.org/en/), [privacytools.io](https://www.privacytools.io/), [Alternative Internet](https://redecentralize.github.io/alternative-internet/), [Libre Projects](http://libreprojects.net/) - Lists of software aimed at privacy and decentralization (in some form).
 * Dynamic Domain Name services: [Afraid.org](https://freedns.afraid.org/domain/registry/), [Pagekite](https://pagekite.net/)
 * Communities/forums: [/r/selfhosted](https://www.reddit.com/r/selfhosted), [Auto-Hébergement (FR)](http://www.auto-hebergement.fr/)

-------------------------------------------------------

## Contributing

Contributing guidelines can be found [here](.github/CONTRIBUTING.md).

## Authors

The list of authors can be found [here](AUTHORS).

## License

This list is under the [Creative Commons Attribution-ShareAlike 3.0 Unported](LICENSE) License.
