FROM ubuntu:bionic

RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install -y nodejs
    
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get install -y yarn


# Install browser deps, starting with webkit
RUN apt-get install -y libwoff1 \
                       libopus0 \
                       libwebp6 \
                       libwebpdemux2 \
                       libenchant1c2a \
                       libgudev-1.0-0 \
                       libsecret-1-0 \
                       libhyphen0 \
                       libgdk-pixbuf2.0-0 \
                       libegl1 \
                       libnotify4 \
                       libxslt1.1 \
                       libevent-2.1-6 \
                       libgles2 \
                       libgl1 \
                       libegl1 \
                       # for chromium
                       libnss3 \
                       libxss1 \
                       libasound2 \
                       # for firefox
                       libdbus-glib-1-2 \
                       libxt6

# Use uid 1001 who owns $HOME in GH Actions runtime
# See why: https://github.com/arjun27/playwright-github-actions/issues/1
USER 1001
