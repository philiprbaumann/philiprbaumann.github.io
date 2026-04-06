#!/usr/bin/env ruby
# Fetches playlist cover art from Spotify's public oEmbed API and saves
# images locally to assets/images/playlists/<id>.jpg
# Run once from the repo root: ruby fetch_playlist_covers.rb

require 'net/http'
require 'json'
require 'uri'
require 'fileutils'

PLAYLISTS_DIR = '_playlists'
OUTPUT_DIR    = 'assets/images/playlists'

FileUtils.mkdir_p(OUTPUT_DIR)

Dir.glob("#{PLAYLISTS_DIR}/*.md").sort.each do |file|
  content = File.read(file)

  # Extract Spotify playlist ID from the embed field
  if content =~ /playlist\/([A-Za-z0-9]+)/
    id = $1
  else
    puts "  skip #{File.basename(file)} — no playlist ID found"
    next
  end

  out_path = "#{OUTPUT_DIR}/#{id}.jpg"
  if File.exist?(out_path)
    puts "  exists #{id}.jpg"
    next
  end

  oembed_url = URI("https://open.spotify.com/oembed?url=https://open.spotify.com/playlist/#{id}")

  begin
    response = Net::HTTP.get_response(oembed_url)
    unless response.is_a?(Net::HTTPSuccess)
      puts "  oEmbed failed for #{id}: #{response.code}"
      next
    end

    data          = JSON.parse(response.body)
    thumbnail_url = data['thumbnail_url']

    unless thumbnail_url
      puts "  no thumbnail for #{id}"
      next
    end

    # Follow redirects to download the image
    img_uri = URI(thumbnail_url)
    img_response = Net::HTTP.get_response(img_uri)
    if img_response.is_a?(Net::HTTPRedirection)
      img_uri      = URI(img_response['location'])
      img_response = Net::HTTP.get_response(img_uri)
    end

    File.binwrite(out_path, img_response.body)
    puts "  saved #{id}.jpg (#{img_response.body.size} bytes)"

  rescue => e
    puts "  error for #{id}: #{e.message}"
  end
end

puts "\nDone. Commit assets/images/playlists/ to include covers in the site."
