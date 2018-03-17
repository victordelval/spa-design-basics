## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)


## Short Description

SPA design basics. Architectural design exercise to build a SPA frontend with ES5. It is presented under the form (directory structure) of a Django project app.

Proof of concept made in 2017 as part of a proposal for redesign and refactoring an existing frontend application using vanillaJS, good practices and design patterns for SPA designs.

Includes MVC pattern, router, status management, modules, classes, Pub / Sub, JS template engine (handlebars), require.js, etc.


## Project Dependencies

Development and production dependencies:

```
    - require.js                (module loader)
    - require/text.js           (css loader)
    - director.js               (router)
    - jquery-1.12.4.js          (isolated for ajax and DOM api)
    - EventEmitter.js           (pub/sub pattern)
    - handlebars-v4.0.10.js     (templates engine)

    Development:
    - Stats.js
    - memory-stats.js
```

### Testing

...


## Project Structure

The library is located in the "src" folder. The project has the following contents:

```
frontend
    |- assets
        |- audio
            |- ...
        |- fonts
            |- ...
        |- img
            |- ...

    |- scripts

        |- app

            |- core                                         (framework core)
                |- debug
                    memory.js
                    stats.js
                |- interfaces
                    |- models
                        collections.js
                        models.js
                    |- views
                        dashboardView.js
                        pageView.js
                        viewController.js
                        widgetView.js
                api.js
                dom.js
                router.js
                storage.js

            |- managers                                     (controllers)
                connector.js
                errors.js
                events.js
                navigation.js

            |- models
                |- monitoring
                    host.js
                    hostCollection.js
                    logs.js
                    realm.js
                    realmCollection.js
                    service.js

            |- utils
                |- polyfills
                    array.js
                    ...

            |- views                                        (views: view-controllers + views)

                |- components                               (common components)
                    |- actions
                        ...
                    |- datepickers
                        ...
                    |- filters
                        ...
                    |- graphs
                        ...
                    |- maps
                        ...
                    |- selectors
                        |- selector-hostgroups
                            selector-hostgroups.css
                            selector-hostgroups.html
                            selectorHostgroups.js
                    |- tables
                        |- data-table
                            data-table.css
                            data-table.html
                            dataTable.js

                |- dashboard                                (common dashboard view)
                    |- components
                        |- autorefresh
                            autorefresh.js
                        |- dashboard-menu
                            dashboard-menu.css
                            dashboard-menu.html
                            dashboardMenu.js
                    dashboardAppView.js

                |- pages                                    (main pages)
                    |- error
                        errorPageView.js
                    |- global
                        globalPageView.js
                    |- host
                        hostPageView.js
                    |- realm
                        |- components
                            |- realm-tabs
                                realm-tabs.css
                                realm-tabs.html
                                realmTabs.js
                        realmPageView.js

                |- widgets                                  (composed components)
                    |- global
                        |- global-aggregator
                            |- components
                                |- aggregator-panel
                                    aggregator-panel.html
                                    aggregatorPanel.js
                                |- realm-filters
                                    realm-filters.html
                                    realmFilters.js
                                |- realm-list
                                    realm-list.html
                                    realmList.js
                            globalAggregatorWidgetView.js
                    |- host
                        ...
                    |- realm
                        ...

            setup.js

        |- lib
            require.js
            ...

        app.js

    |- tests
        | - ...
    |- themes
        | - ...

```
